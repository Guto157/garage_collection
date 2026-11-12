const cars=[
{id:'city',name:'Volkswagen Golf GTI',class:'Hatch esportivo',rarity:'COMUM',tier:'common',price:0,income:3,description:'Seu primeiro esportivo. O começo da coleção.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Volkswagen_Golf_GTi_MK_7.jpg/1280px-Volkswagen_Golf_GTi_MK_7.jpg'},
{id:'porsche',name:'Porsche 911 Carrera',class:'Esportivo',rarity:'INCOMUM',tier:'uncommon',price:1800,income:18,description:'Um ícone das estradas, com design inconfundível.',image:'https://upload.wikimedia.org/wikipedia/commons/b/b5/Porsche_911_Carrera.jpg'},
{id:'mercedes',name:'Mercedes-AMG GT',class:'Grand tourer',rarity:'RARO',tier:'rare',price:9000,income:65,description:'Elegância alemã com desempenho de pista.',image:'https://upload.wikimedia.org/wikipedia/commons/b/bf/MERCEDES-AMG_GT.jpg'},
{id:'ferrari',name:'Ferrari 458 Italia',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:32000,income:210,description:'Um V8 italiano e linhas que marcaram época.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ferrari458Italia.jpg/1280px-Ferrari458Italia.jpg'},
{id:'lamborghini',name:'Lamborghini Aventador',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:115000,income:720,description:'Presença extrema e desempenho extraordinário.',image:'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Lamborghini_Aventador.jpg/1280px-Lamborghini_Aventador.jpg'},
{id:'porschegt',name:'Porsche 911 GT2 RS',class:'Track-focused',rarity:'LENDÁRIO',tier:'legendary',price:480000,income:2800,description:'Uma máquina de alto desempenho feita para a pista.',image:'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Porsche_911_GT2_RS.jpg/1280px-Porsche_911_GT2_RS.jpg'},
{id:'mclaren',name:'McLaren 720S',class:'Hipercarro',rarity:'LENDÁRIO',tier:'legendary',price:1900000,income:10500,description:'Tecnologia, leveza e aerodinâmica de outro nível.',image:'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/McLaren_720S.jpg/1280px-McLaren_720S.jpg'},
{id:'bugatti',name:'Bugatti Chiron',class:'Hipercarro',rarity:'MÍTICO',tier:'mythic',price:12000000,income:52000,description:'O topo absoluto da engenharia automotiva.',image:'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/A_Bugatti_Chiron.jpg/1280px-A_Bugatti_Chiron.jpg'}
];
const upgrades=[
{id:'click',name:'Treinamento do colecionador',desc:'Aumenta o dinheiro recebido por toque.',base:250,kind:'click'},
{id:'garage',name:'Garagem automatizada',desc:'Multiplica a renda gerada pelos seus veículos.',base:1200,kind:'income'},
{id:'network',name:'Rede de investidores',desc:'Amplia ainda mais o rendimento da coleção.',base:6500,kind:'income2'}
];
const key='garageCollectionSave_v2',oldKey='garageCollectionSave_v1';

/* Proteção visual: se o servidor de fotos falhar, nunca deixa o espaço em branco. */
const carFallback='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 650"><defs><linearGradient id="g" x2="0" y2="1"><stop stop-color="#26384b"/><stop offset="1" stop-color="#090e16"/></linearGradient></defs><rect width="1200" height="650" fill="url(#g)"/><path d="M120 455h960l-35-105q-12-36-55-48l-150-45-110-105q-20-20-55-20H430q-45 0-70 35L250 350l-90 35q-40 15-40 70z" fill="#b78b4b" stroke="#f0c778" stroke-width="9"/><path d="M430 165h245l100 110H350z" fill="#182534" stroke="#d8b77c" stroke-width="8"/><circle cx="340" cy="465" r="75" fill="#080b12" stroke="#9ba8b7" stroke-width="18"/><circle cx="865" cy="465" r="75" fill="#080b12" stroke="#9ba8b7" stroke-width="18"/><text x="600" y="585" text-anchor="middle" fill="#dce4ed" font-family="Arial" font-size="25" letter-spacing="7">GARAGE COLLECTION</text></svg>');
document.addEventListener('error',e=>{const img=e.target;if(img&&img.tagName==='IMG'&&!img.dataset.fallback){img.dataset.fallback='1';img.src=carFallback;img.style.objectFit='contain';img.style.padding='12px';}},true);

const fmt=n=>'R$ '+Math.floor(n).toLocaleString('pt-BR');
const defaultState={money:250,owned:['city'],selected:'city',clickLevel:0,incomeLevel:0,networkLevel:0,lastSave:Date.now(),lastDaily:'',missionClaimed:false};
let state={...defaultState};
try{const raw=localStorage.getItem(key)||localStorage.getItem(oldKey);if(raw){const parsed=JSON.parse(raw);state={...defaultState,...parsed};}}catch(e){console.warn('Save inválido, iniciando novo jogo',e)}
state.owned=[...new Set(['city',...(Array.isArray(state.owned)?state.owned:[])])].filter(id=>cars.some(c=>c.id===id));
if(!cars.some(c=>c.id===state.selected&&state.owned.includes(c.id)))state.selected=state.owned[0];
const incomeBase=()=>cars.filter(c=>state.owned.includes(c.id)).reduce((sum,c)=>sum+c.income,0);
const income=()=>incomeBase()*(1+state.incomeLevel*.65+state.networkLevel*1.4);
const clickPower=()=>25*Math.pow(1.8,state.clickLevel);
let toastTimer;
function save(){state.lastSave=Date.now();try{localStorage.setItem(key,JSON.stringify(state))}catch(e){console.warn('Não foi possível salvar',e)}}
function notify(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2100)}
function getCar(id){return cars.find(c=>c.id===id)||cars[0]}
function card(c){const owned=state.owned.includes(c.id);return '<article class="vehicle-card '+(!owned?'locked':'')+'"><div class="vehicle-art"><img loading="lazy" src="'+c.image+'" alt="'+c.name+'"></div><div class="vehicle-body"><span class="rarity '+c.tier+'">'+c.rarity+'</span><h3>'+c.name+'</h3><p>'+c.class+' · '+fmt(c.income)+'/min</p><div class="vehicle-meta"><span>PREÇO</span><strong>'+fmt(c.price)+'</strong></div>'+(owned?'<span class="owned-tag">✓ NA SUA COLEÇÃO</span>':'<button class="buy-button" data-buy="'+c.id+'" '+(state.money<c.price?'disabled':'')+'>COMPRAR VEÍCULO</button>')+'</div></article>'}
function render(){
const car=getCar(state.selected);
document.querySelector('#money').textContent=fmt(state.money);
document.querySelector('#owned-count').textContent=state.owned.length;
document.querySelector('#income').textContent=fmt(income());
document.querySelector('#click-power').textContent=fmt(clickPower());
document.querySelector('#hero-car').src=car.image;
document.querySelector('#hero-car').alt=car.name;
document.querySelector('#car-name').textContent=car.name;
document.querySelector('#car-description').textContent=car.description;
document.querySelector('#car-class').textContent=car.class;
document.querySelector('#car-income').textContent=fmt(car.income)+'/min';
document.querySelector('#car-value').textContent=fmt(car.price);
document.querySelector('#car-rarity').textContent=car.rarity;
document.querySelector('#car-rarity').className='rarity '+car.tier;
document.querySelector('#car-index').textContent=String(state.owned.indexOf(car.id)+1).padStart(2,'0')+' / '+String(state.owned.length).padStart(2,'0');
document.querySelector('#garage-total').textContent=state.owned.length+' veículos';
document.querySelector('#garage-list').innerHTML=state.owned.map(id=>{const c=getCar(id);return '<button class="garage-car '+(id===state.selected?'selected':'')+'" data-select="'+id+'"><img src="'+c.image+'" alt=""><strong>'+c.name+'</strong><small>'+c.rarity+'</small></button>'}).join('');
document.querySelector('#dealership-list').innerHTML=cars.filter(c=>c.id!=='city').map(card).join('');
document.querySelector('#collection-list').innerHTML=cars.map(card).join('');
document.querySelector('#collection-progress').textContent=state.owned.length+' / '+cars.length+' carros';
document.querySelector('#progress-fill').style.width=(state.owned.length/cars.length*100)+'%';
renderUpgrades();renderMission();renderDaily();
document.querySelectorAll('[data-select]').forEach(b=>b.onclick=()=>{state.selected=b.dataset.select;save();render()});
document.querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>buy(b.dataset.buy));
}
function renderUpgrades(){
const levels={click:state.clickLevel,income:state.incomeLevel,network:state.networkLevel};
document.querySelector('#upgrade-list').innerHTML=upgrades.map(u=>{const lv=levels[u.kind],cost=Math.floor(u.base*Math.pow(1.85,lv));return '<article class="upgrade-card"><h3>'+u.name+'</h3><p>'+u.desc+'</p><div class="level">NÍVEL '+lv+'</div><button class="buy-button" data-upgrade="'+u.kind+'" '+(state.money<cost?'disabled':'')+'>MELHORAR · '+fmt(cost)+'</button></article>'}).join('');
document.querySelectorAll('[data-upgrade]').forEach(b=>b.onclick=()=>upgrade(b.dataset.upgrade));
}
function renderDaily(){const today=new Date().toLocaleDateString('en-CA');const btn=document.querySelector('#daily-button');const done=state.lastDaily===today;btn.disabled=done;btn.textContent=done?'RECOMPENSA RESGATADA':'RESGATAR R$ 500';}
function renderMission(){const done=state.owned.length>=2;const text=document.querySelector('#mission-text'),btn=document.querySelector('#mission-button');if(state.missionClaimed){text.textContent='Missão concluída. Novos desafios em breve.';btn.textContent='CONCLUÍDA';btn.disabled=true}else if(done){text.textContent='Você já tem mais de um carro. Resgate sua recompensa!';btn.textContent='RESGATAR R$ 1.000';btn.disabled=false}else{text.textContent='Compre seu segundo veículo para liberar R$ 1.000 de recompensa.';btn.textContent='CARRO NECESSÁRIO';btn.disabled=true}}
function buy(id){const c=getCar(id);if(state.owned.includes(id))return;if(state.money<c.price){notify('Dinheiro insuficiente. Trabalhe ou aguarde a renda da garagem.');return}state.money-=c.price;state.owned.push(id);state.selected=id;save();render();notify(c.name+' entrou para sua coleção!')}
function upgrade(kind){const u=upgrades.find(x=>x.kind===kind);const level=kind==='click'?state.clickLevel:kind==='income'?state.incomeLevel:state.networkLevel;const cost=Math.floor(u.base*Math.pow(1.85,level));if(state.money<cost){notify('Saldo insuficiente para essa melhoria.');return}state.money-=cost;if(kind==='click')state.clickLevel++;else if(kind==='income')state.incomeLevel++;else state.networkLevel++;save();render();notify('Melhoria adquirida! Seus ganhos aumentaram.')}
let saveClickTimer=null;
function refreshCashOnly(){
 const moneyEl=document.querySelector('#money');
 if(moneyEl)moneyEl.textContent=fmt(state.money);
 document.querySelectorAll('[data-buy]').forEach(b=>{const c=getCar(b.dataset.buy);b.disabled=state.money<c.price});
 document.querySelectorAll('[data-upgrade]').forEach(b=>{const u=upgrades.find(x=>x.kind===b.dataset.upgrade);const lv=b.dataset.upgrade==='click'?state.clickLevel:b.dataset.upgrade==='income'?state.incomeLevel:state.networkLevel;b.disabled=state.money<Math.floor(u.base*Math.pow(1.85,lv))});
}
function earnFromCar(event){
 const gain=clickPower();
 state.money+=gain;
 refreshCashOnly();
 const scene=document.querySelector('.scene-wrap');
 const pop=document.createElement('span');
 pop.className='money-float';
 pop.textContent='+ '+fmt(gain);
 const rect=scene.getBoundingClientRect();
 const x=event&&typeof event.clientX==='number'?event.clientX-rect.left:rect.width/2;
 const y=event&&typeof event.clientY==='number'?event.clientY-rect.top:rect.height*.55;
 pop.style.left=Math.max(24,Math.min(rect.width-24,x))+'px';
 pop.style.top=Math.max(28,Math.min(rect.height-20,y))+'px';
 scene.appendChild(pop);
 pop.addEventListener('animationend',()=>pop.remove(),{once:true});
 if(saveClickTimer)clearTimeout(saveClickTimer);
 saveClickTimer=setTimeout(()=>{saveClickTimer=null;save()},250);
}
const featuredCar=document.querySelector('.scene-wrap');
if(featuredCar){
 // Um ganho por contato: pointerdown responde imediatamente e aceita dois dedos.
 featuredCar.addEventListener('pointerdown',event=>{
  if(event.pointerType==='mouse'&&event.button!==0)return;
  event.preventDefault();
  earnFromCar(event);
 },{passive:false});
 // Impede menu de pressão prolongada e arrastar/salvar a foto.
 featuredCar.addEventListener('contextmenu',event=>event.preventDefault());
 featuredCar.addEventListener('dragstart',event=>event.preventDefault());
}
document.querySelector('#daily-button').onclick=()=>{const today=new Date().toLocaleDateString('en-CA');if(state.lastDaily===today)return;state.lastDaily=today;state.money+=500;save();render();notify('Bônus diário de R$ 500 resgatado!')};
document.querySelector('#mission-button').onclick=()=>{if(state.owned.length<2||state.missionClaimed)return;state.money+=1000;state.missionClaimed=true;save();render();notify('Missão concluída: +R$ 1.000!')};
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.view').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab+'-view'))});
const elapsed=Math.max(0,Math.min(8*60*60,(Date.now()-(state.lastSave||Date.now()))/1000));
const offline=Math.floor(income()*elapsed/60);
if(offline>0){state.money+=offline;setTimeout(()=>notify('Enquanto esteve fora, sua garagem rendeu '+fmt(offline)+'.'),700)}
save();render();
setInterval(()=>{const gain=income()/60;state.money+=gain;document.querySelector('#money').textContent=fmt(state.money);document.querySelectorAll('[data-buy]').forEach(b=>{const c=getCar(b.dataset.buy);b.disabled=state.money<c.price});document.querySelectorAll('[data-upgrade]').forEach(b=>{const u=upgrades.find(x=>x.kind===b.dataset.upgrade);const lv=x=>x==='click'?state.clickLevel:x==='income'?state.incomeLevel:state.networkLevel; b.disabled=state.money<Math.floor(u.base*Math.pow(1.85,lv(u.kind)))});},1000);
setInterval(save,10000);
