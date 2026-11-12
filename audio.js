(() => {
'use strict';
const toggle=document.getElementById('audio-toggle');
if(!toggle)return;
const KEYS={master:'garageCollectionAudioEnabled',music:'garageCollectionMusicEnabled',sfx:'garageCollectionSfxEnabled',musicVolume:'garageCollectionMusicVolume',sfxVolume:'garageCollectionSfxVolume'};
function readBool(key,fallback){try{const v=localStorage.getItem(key);return v===null?fallback:v==='true';}catch(e){return fallback;}}
function readVolume(key,fallback){try{const v=Number(localStorage.getItem(key));return Number.isFinite(v)&&v>=0&&v<=100?v:fallback;}catch(e){return fallback;}}
let masterEnabled=readBool(KEYS.master,true);
let musicEnabled=readBool(KEYS.music,true);
let sfxEnabled=readBool(KEYS.sfx,true);
let musicVolume=readVolume(KEYS.musicVolume,25);
let sfxVolume=readVolume(KEYS.sfxVolume,55);
let ctx=null,master=null,musicBus=null,sfxBus=null,scheduler=null,nextStepTime=0,step=0,noiseBuffer=null;
const BPM=112,STEP=60/BPM/2,LOOP_STEPS=32;
function persist(){try{localStorage.setItem(KEYS.master,String(masterEnabled));localStorage.setItem(KEYS.music,String(musicEnabled));localStorage.setItem(KEYS.sfx,String(sfxEnabled));localStorage.setItem(KEYS.musicVolume,String(musicVolume));localStorage.setItem(KEYS.sfxVolume,String(sfxVolume));}catch(e){}}
function updateUI(){
 toggle.textContent=masterEnabled?'♫':'♪';
 toggle.setAttribute('aria-pressed',String(masterEnabled));
 toggle.title=masterEnabled?'Som ligado':'Som desligado';
 toggle.setAttribute('aria-label',masterEnabled?'Desativar todos os sons':'Ativar todos os sons');
 const m=document.getElementById('music-enabled'),s=document.getElementById('sfx-enabled');
 if(m){m.textContent=musicEnabled?'LIGADA':'DESLIGADA';m.setAttribute('aria-pressed',String(musicEnabled));}
 if(s){s.textContent=sfxEnabled?'LIGADOS':'DESLIGADOS';s.setAttribute('aria-pressed',String(sfxEnabled));}
 const mv=document.getElementById('music-volume-value'),sv=document.getElementById('sfx-volume-value');
 if(mv)mv.textContent=musicVolume+'%';if(sv)sv.textContent=sfxVolume+'%';
}
function initAudio(){
 if(ctx)return;
 const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;
 ctx=new AC();
 master=ctx.createGain();master.gain.value=1;master.connect(ctx.destination);
 musicBus=ctx.createGain();musicBus.gain.value=musicEnabled?musicVolume/100:0;musicBus.connect(master);
 sfxBus=ctx.createGain();sfxBus.gain.value=sfxEnabled?sfxVolume/100:0;sfxBus.connect(master);
 const length=Math.floor(ctx.sampleRate*.5);noiseBuffer=ctx.createBuffer(1,length,ctx.sampleRate);
 const data=noiseBuffer.getChannelData(0);for(let i=0;i<length;i++)data[i]=Math.random()*2-1;
}
function applyGains(){
 if(!ctx)return;const now=ctx.currentTime;
 musicBus.gain.setTargetAtTime(masterEnabled&&musicEnabled?musicVolume/100:0,now,.025);
 sfxBus.gain.setTargetAtTime(masterEnabled&&sfxEnabled?sfxVolume/100:0,now,.015);
}
function tone(freq,start,duration,type,gain,output,slide){
 if(!ctx)return;const osc=ctx.createOscillator(),amp=ctx.createGain();
 osc.type=type||'sine';osc.frequency.setValueAtTime(freq,start);
 if(slide)osc.frequency.exponentialRampToValueAtTime(Math.max(20,slide),start+duration);
 amp.gain.setValueAtTime(.0001,start);amp.gain.exponentialRampToValueAtTime(Math.max(.0002,gain),start+.008);amp.gain.exponentialRampToValueAtTime(.0001,start+duration);
 osc.connect(amp);amp.connect(output||sfxBus);osc.start(start);osc.stop(start+duration+.025);
}
function noise(start,duration,gain,filterFreq,output){
 if(!ctx||!noiseBuffer)return;const src=ctx.createBufferSource(),filter=ctx.createBiquadFilter(),amp=ctx.createGain();
 src.buffer=noiseBuffer;filter.type='highpass';filter.frequency.value=filterFreq||2500;
 amp.gain.setValueAtTime(gain,start);amp.gain.exponentialRampToValueAtTime(.0001,start+duration);
 src.connect(filter);filter.connect(amp);amp.connect(output||musicBus);src.start(start);src.stop(start+duration);
}
function kick(t){
 const osc=ctx.createOscillator(),amp=ctx.createGain();osc.type='sine';osc.frequency.setValueAtTime(125,t);osc.frequency.exponentialRampToValueAtTime(38,t+.17);
 amp.gain.setValueAtTime(.0001,t);amp.gain.linearRampToValueAtTime(.8,t+.006);amp.gain.exponentialRampToValueAtTime(.0001,t+.2);
 osc.connect(amp);amp.connect(musicBus);osc.start(t);osc.stop(t+.22);
}
function snare(t){noise(t,.16,.24,900,musicBus);tone(185,t,.09,'triangle',.13,musicBus,105);}
function hat(t,accent){noise(t,.045,accent?.095:.045,6500,musicBus);}
const bassNotes=[55,55,82.41,73.42,55,55,98,82.41,65.41,65.41,98,87.31,65.41,73.42,110,98,49,49,73.42,65.41,49,49,87.31,73.42,58.27,58.27,87.31,77.78,58.27,65.41,98,87.31];
const chordRoots=[110,130.81,98,116.54];
function scheduleStep(t,index){
 const pos=index%16,bar=Math.floor(index/8)%4;
 if(pos===0||pos===4)kick(t);if(pos===2||pos===6)snare(t);hat(t,pos%2===0);
 const note=bassNotes[index%LOOP_STEPS];if(index%2===0)tone(note,t,.19,'sawtooth',.085,musicBus,note*.96);
 if(index%8===0){const root=chordRoots[bar];[1,1.5,1.875].forEach(ratio=>tone(root*ratio,t,.85,'triangle',.018,musicBus,root*ratio*.995));}
}
function startMusic(){
 if(!masterEnabled||!musicEnabled||document.hidden)return;
 initAudio();if(!ctx)return;
 ctx.resume().then(()=>{if(!masterEnabled||!musicEnabled||document.hidden)return;applyGains();if(scheduler)return;step=0;nextStepTime=ctx.currentTime+.08;
 scheduler=setInterval(()=>{if(!ctx||!masterEnabled||!musicEnabled||document.hidden)return;while(nextStepTime<ctx.currentTime+.12){scheduleStep(nextStepTime,step);nextStepTime+=STEP;step=(step+1)%LOOP_STEPS;}},25);
 }).catch(()=>{});
}
function pauseForLeaving(){
 if(scheduler){clearInterval(scheduler);scheduler=null;}
 if(ctx&&ctx.state==='running')ctx.suspend().catch(()=>{});
}
function resumeAfterReturn(){if(!document.hidden&&masterEnabled&&musicEnabled)startMusic();}
function clickSound(kind){
 if(!masterEnabled||!sfxEnabled||document.hidden)return;
 initAudio();if(!ctx)return;ctx.resume().then(()=>{if(!masterEnabled||!sfxEnabled||document.hidden)return;applyGains();
 const now=ctx.currentTime;
 if(kind==='buy'||kind==='reward'){tone(660,now,.09,'triangle',.18,sfxBus,880);tone(990,now+.075,.13,'sine',.13,sfxBus,1320);}
 else if(kind==='tab')tone(420,now,.055,'sine',.075,sfxBus,520);
 else tone(560,now,.045,'triangle',.10,sfxBus,720);
 }).catch(()=>{});
}
function saveAndRefresh(){persist();updateUI();applyGains();if(masterEnabled&&musicEnabled)startMusic();else pauseForMusicOnly();}
function pauseForMusicOnly(){if(scheduler){clearInterval(scheduler);scheduler=null;}}
toggle.addEventListener('click',event=>{event.preventDefault();event.stopPropagation();masterEnabled=!masterEnabled;saveAndRefresh();if(masterEnabled)clickSound('tab');});
document.getElementById('music-enabled')?.addEventListener('click',()=>{musicEnabled=!musicEnabled;saveAndRefresh();});
document.getElementById('sfx-enabled')?.addEventListener('click',()=>{sfxEnabled=!sfxEnabled;saveAndRefresh();});
document.querySelectorAll('[data-volume]').forEach(button=>button.addEventListener('click',()=>{
 const key=button.dataset.volume,delta=Number(button.dataset.step);
 if(key==='music')musicVolume=Math.max(0,Math.min(100,musicVolume+delta));
 else sfxVolume=Math.max(0,Math.min(100,sfxVolume+delta));
 saveAndRefresh();
}));
document.addEventListener('pointerdown',event=>{
 if(!masterEnabled||!(event.target instanceof Element)||event.target.closest('#audio-toggle,.audio-settings'))return;
 if(!document.hidden)startMusic();
},{capture:true,passive:true});
document.addEventListener('click',event=>{
 if(!masterEnabled||!sfxEnabled||document.hidden||!(event.target instanceof Element))return;
 const button=event.target.closest('button,[role="button"]');
 if(!button||button===toggle||button.disabled||button.closest('.audio-settings'))return;
 const text=(button.textContent||'').toLowerCase();
 const kind=button.matches('[data-buy],[data-pack],[data-upgrade]')||/comprar|abrir pacote|resgatar|coletar|melhoria/.test(text)?'buy':button.matches('.tab,[data-page]')?'tab':'click';
 clickSound(kind);
},true);
document.addEventListener('visibilitychange',()=>{if(document.hidden)pauseForLeaving();else resumeAfterReturn();});
window.addEventListener('pagehide',pauseForLeaving);
window.addEventListener('pageshow',resumeAfterReturn);
updateUI();
})();