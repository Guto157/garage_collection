const cars=[
{id:'city',name:'Volkswagen Golf GTI',class:'Hatch esportivo',rarity:'COMUM',tier:'common',price:0,income:3,description:'Seu primeiro esportivo. O começo da coleção.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Volkswagen_Golf_GTi_MK_7.jpg/1280px-Volkswagen_Golf_GTi_MK_7.jpg'},
{id:'porsche',name:'Porsche 911 Carrera',class:'Esportivo',rarity:'INCOMUM',tier:'uncommon',price:80000,income:50,description:'Um ícone das estradas, com design inconfundível.',image:'https://upload.wikimedia.org/wikipedia/commons/b/b5/Porsche_911_Carrera.jpg'},
{id:'mercedes',name:'Mercedes-AMG GT',class:'Grand tourer',rarity:'RARO',tier:'rare',price:600000,income:300,description:'Elegância alemã com desempenho de pista.',image:'https://upload.wikimedia.org/wikipedia/commons/b/bf/MERCEDES-AMG_GT.jpg'},
{id:'ferrari',name:'Ferrari 458 Italia',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:5000000,income:2200,description:'Um V8 italiano e linhas que marcaram época.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ferrari458Italia.jpg/1280px-Ferrari458Italia.jpg'},
{id:'lamborghini',name:'Lamborghini Aventador',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:40000000,income:16000,description:'Presença extrema e desempenho extraordinário.',image:'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/19/Lamborghini_Aventador.jpg/1280px-Lamborghini_Aventador.jpg'},
{id:'porschegt',name:'Porsche 911 GT2 RS',class:'Track-focused',rarity:'LENDÁRIO',tier:'legendary',price:300000000,income:120000,description:'Uma máquina de alto desempenho feita para a pista.',image:'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/04/Porsche_911_GT2_RS.jpg/1280px-Porsche_911_GT2_RS.jpg'},
{id:'mclaren',name:'McLaren 720S',class:'Hipercarro',rarity:'LENDÁRIO',tier:'legendary',price:2500000000,income:900000,description:'Tecnologia, leveza e aerodinâmica de outro nível.',image:'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b8/McLaren_720S.jpg/1280px-McLaren_720S.jpg'},
{id:'bugatti',name:'Bugatti Chiron',class:'Hipercarro',rarity:'MÍTICO',tier:'mythic',price:20000000000,income:7000000,description:'O topo absoluto da engenharia automotiva.',image:'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/A_Bugatti_Chiron.jpg/1280px-A_Bugatti_Chiron.jpg'},
{id:'special-300slr',name:'Mercedes-Benz 300 SLR Uhlenhaut Coupé',class:'Protótipo de competição · 1955',rarity:'SPECIAL',tier:'special',price:1000000000000000,income:300000000000,description:'Um dos apenas dois exemplares construídos. Recordista mundial de venda, arrematado por €135 milhões.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1955%20Mercedes-Benz%20300%20SLR%20Uhlenhaut%20Coupe%20%2C%20Mercedes%20Museum%20%2C%20Stuttgart%20%2C%20Germany%20Ank%20Kumar%20Infosys%20Limited%2003.jpg?width=1280'},
{id:'special-w196r',name:'Mercedes-Benz W 196 R Stromlinienwagen',class:'Fórmula 1 histórico · 1954',rarity:'SPECIAL',tier:'special',price:850000000000000,income:255000000000,description:'A lendária Flecha de Prata de competição, pilotada na era de Juan Manuel Fangio.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1955%20Mercedes-Benz%20W196%20R%20Stromlinie%20Goodwood%2C%202009%20%2801%29.jpg?width=1280'},
{id:'special-330lm',name:'Ferrari 330 LM / 250 GTO Scaglietti',class:'Competizione · 1962 · Chassi 3765 LM',rarity:'SPECIAL',tier:'special',price:800000000000000,income:240000000000,description:'Exemplar de competição com histórico em Le Mans, vendido por US$ 51,7 milhões em leilão.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1962%20Ferrari%20330%20LMB.jpg?width=1280'},
{id:'special-250gto',name:'Ferrari 250 GTO',class:'Berlinetta de competição · 1962 · Chassi 3413 GT',rarity:'SPECIAL',tier:'special',price:750000000000000,income:225000000000,description:'Um dos cerca de 36 Ferrari 250 GTO construídos. Ícone absoluto entre colecionadores.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1962%20Ferrari%20250%20GTO%203413GT%2C%20Series%20II%20update%2C%20right%20side%20front.jpg?width=1280'},
{id:'special-daytona',name:'Shelby Cobra Daytona Coupé',class:'GT de competição · 1964 · CSX2300',rarity:'SPECIAL',tier:'special',price:700000000000000,income:210000000000,description:'Coupé de corrida raríssimo, criado para enfrentar a Ferrari nas pistas.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1964%20Shelby%20Daytona%20Coupe.jpg?width=1280'},
{id:'special-250lm',name:'Ferrari 250 LM',class:'Protótipo GT · 1964',rarity:'SPECIAL',tier:'special',price:650000000000000,income:195000000000,description:'Vencedor de Le Mans em 1965 e um dos Ferraris de competição mais cobiçados.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1964%20Ferrari%20250%20LM.jpg?width=1280'},
{id:'special-335s',name:'Ferrari 335 Sport Spider Scaglietti',class:'Sport-protótipo · 1957 · Chassi 0674',rarity:'SPECIAL',tier:'special',price:600000000000000,income:180000000000,description:'Um dos quatro Ferrari 335 S produzidos. O chassi 0674 alcançou mais de €32 milhões em leilão.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20335%20Sport%20Scaglietti%20%2830134235476%29.jpg?width=1280'},
{id:'special-412p',name:'Ferrari 412 P Berlinetta',class:'Protótipo de endurance · 1967 · Chassi 0854',rarity:'SPECIAL',tier:'special',price:550000000000000,income:165000000000,description:'Raríssimo protótipo V12 de endurance, com apenas quatro exemplares da família 412 P.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1967%20Ferrari%20412P.jpg?width=1280'},
{id:'special-nart',name:'Ferrari 275 GTB/4 NART Spider',class:'Spider de coleção · 1967 · Chassi 10709 GT',rarity:'SPECIAL',tier:'special',price:500000000000000,income:150000000000,description:'Conversível de produção extremamente limitada, encomendado por Luigi Chinetti.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20275%20GTB%204%20NART%20Spider%20%2854961892898%29.jpg?width=1280'},
{id:'special-275gtbc',name:'Ferrari 275 GTB/C Competizione',class:'Berlinetta de competição · 1965',rarity:'SPECIAL',tier:'special',price:450000000000000,income:135000000000,description:'Versão de competição construída em quantidade muito limitada, com carroceria e componentes específicos para pista.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20275%20GTB-C%20red%20vl%20TCE.jpg?width=1280'}

];
const upgrades=[
{id:'click',name:'Treinamento do colecionador',desc:'Aumenta o dinheiro recebido por toque.',base:500,kind:'click'},
{id:'garage',name:'Garagem automatizada',desc:'Multiplica a renda gerada pelos seus veículos.',base:5000,kind:'income'},
{id:'network',name:'Rede de investidores',desc:'Amplia ainda mais o rendimento da coleção.',base:25000,kind:'network'}
];
const key='garageCollectionSave_v3';

/* Proteção visual: se o servidor de fotos falhar, nunca deixa o espaço em branco. */
const carFallback='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 650"><defs><linearGradient id="g" x2="0" y2="1"><stop stop-color="#26384b"/><stop offset="1" stop-color="#090e16"/></linearGradient></defs><rect width="1200" height="650" fill="url(#g)"/><path d="M120 455h960l-35-105q-12-36-55-48l-150-45-110-105q-20-20-55-20H430q-45 0-70 35L250 350l-90 35q-40 15-40 70z" fill="#b78b4b" stroke="#f0c778" stroke-width="9"/><path d="M430 165h245l100 110H350z" fill="#182534" stroke="#d8b77c" stroke-width="8"/><circle cx="340" cy="465" r="75" fill="#080b12" stroke="#9ba8b7" stroke-width="18"/><circle cx="865" cy="465" r="75" fill="#080b12" stroke="#9ba8b7" stroke-width="18"/><text x="600" y="585" text-anchor="middle" fill="#dce4ed" font-family="Arial" font-size="25" letter-spacing="7">GARAGE COLLECTION</text></svg>');
document.addEventListener('error',e=>{const img=e.target;if(img&&img.tagName==='IMG'&&!img.dataset.fallback){img.dataset.fallback='1';img.src=carFallback;img.style.objectFit='contain';img.style.padding='12px';}},true);

const fmt=n=>'R$ '+Math.floor(n).toLocaleString('pt-BR');
const defaultState={money:250,owned:['city'],selected:'city',clickLevel:0,incomeLevel:0,networkLevel:0,lastSave:Date.now(),lastDaily:'',missionClaimed:false};
let state={...defaultState};
try{const raw=localStorage.getItem(key);if(raw){const parsed=JSON.parse(raw);state={...defaultState,...parsed};}}catch(e){console.warn('Save inválido, iniciando novo jogo',e)}
// Protege os níveis contra valores inválidos gravados em versões anteriores.
for(const field of ['clickLevel','incomeLevel','networkLevel']){const value=Number(state[field]);state[field]=Number.isFinite(value)&&value>=0?Math.floor(value):0;}
state.owned=[...new Set(['city',...(Array.isArray(state.owned)?state.owned:[])])].filter(id=>cars.some(c=>c.id===id));
if(!cars.some(c=>c.id===state.selected&&state.owned.includes(c.id)))state.selected=state.owned[0];
const incomeBase=()=>cars.filter(c=>state.owned.includes(c.id)).reduce((sum,c)=>sum+c.income,0);
const income=()=>incomeBase()*(1+state.incomeLevel*.65+state.networkLevel*1.4);
const clickPower=()=>15*Math.pow(1.5,state.clickLevel);
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
document.querySelector('#hero-car').style.backgroundImage='url("'+car.image+'")';
document.querySelector('#hero-car').setAttribute('aria-label',car.name);
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
document.querySelector('#upgrade-list').innerHTML=upgrades.map(u=>{
 const lv=levels[u.kind],cost=Math.floor(u.base*Math.pow(1.85,lv));
 const current=u.kind==='click'?clickPower():income();
 const next=u.kind==='click'?15*Math.pow(1.5,state.clickLevel+1):incomeBase()*(1+(state.incomeLevel+(u.kind==='income'?1:0))*.65+(state.networkLevel+(u.kind==='network'?1:0))*1.4);
 const unit=u.kind==='click'?'por toque':'por minuto';
 return '<article class="upgrade-card"><h3>'+u.name+'</h3><p>'+u.desc+'</p><div class="level">NÍVEL '+lv+' → '+(lv+1)+'</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:0 0 13px"><div style="padding:9px;background:#0b111a;border:1px solid #263142;border-radius:6px"><small style="display:block;color:#8d9aab;font-size:8px;letter-spacing:1px;margin-bottom:5px">VALOR ATUAL</small><strong style="font-size:12px;color:#dce4ed">'+fmt(current)+'</strong><small style="display:block;color:#8d9aab;font-size:8px;margin-top:3px">'+unit+'</small></div><div style="padding:9px;background:#132019;border:1px solid #31543e;border-radius:6px"><small style="display:block;color:#83d6a1;font-size:8px;letter-spacing:1px;margin-bottom:5px">APÓS MELHORIA</small><strong style="font-size:12px;color:#83d6a1">'+fmt(next)+'</strong><small style="display:block;color:#83d6a1;font-size:8px;margin-top:3px">'+unit+'</small></div></div><button class="buy-button" data-upgrade="'+u.kind+'" '+(state.money<cost?'disabled':'')+'>MELHORAR · '+fmt(cost)+'</button></article>';
}).join('');
document.querySelectorAll('[data-upgrade]').forEach(b=>b.onclick=()=>upgrade(b.dataset.upgrade));
}
function renderDaily(){const today=new Date().toLocaleDateString('en-CA');const btn=document.querySelector('#daily-button');const done=state.lastDaily===today;btn.disabled=done;btn.textContent=done?'RECOMPENSA RESGATADA':'RESGATAR R$ 500';}
function renderMission(){const done=state.owned.length>=2;const text=document.querySelector('#mission-text'),btn=document.querySelector('#mission-button');if(state.missionClaimed){text.textContent='Missão concluída. Novos desafios em breve.';btn.textContent='CONCLUÍDA';btn.disabled=true}else if(done){text.textContent='Você já tem mais de um carro. Resgate sua recompensa!';btn.textContent='RESGATAR R$ 1.000';btn.disabled=false}else{text.textContent='Compre seu segundo veículo para liberar R$ 1.000 de recompensa.';btn.textContent='CARRO NECESSÁRIO';btn.disabled=true}}
function buy(id){const c=getCar(id);if(state.owned.includes(id))return;if(state.money<c.price){notify('Dinheiro insuficiente. Trabalhe ou aguarde a renda da garagem.');return}state.money-=c.price;state.owned.push(id);state.selected=id;save();render();notify(c.name+' entrou para sua coleção!')}
function upgrade(kind){const u=upgrades.find(x=>x.kind===kind);const level=kind==='click'?state.clickLevel:kind==='income'?state.incomeLevel:state.networkLevel;const cost=Math.floor(u.base*Math.pow(1.85,level));if(state.money<cost){notify('Saldo insuficiente para essa melhoria.');return}state.money-=cost;if(kind==='click')state.clickLevel++;else if(kind==='income')state.incomeLevel++;else state.networkLevel++;save();render();notify('Melhoria adquirida! Seus ganhos aumentaram.')}
let saveClickTimer=null;
let cashRefreshQueued=false;
function refreshCashOnly(){
 const moneyEl=document.querySelector('#money');
 if(moneyEl)moneyEl.textContent=fmt(state.money);
 document.querySelectorAll('[data-buy]').forEach(b=>{const c=getCar(b.dataset.buy);b.disabled=state.money<c.price});
 document.querySelectorAll('[data-upgrade]').forEach(b=>{const u=upgrades.find(x=>x.kind===b.dataset.upgrade);const lv=b.dataset.upgrade==='click'?state.clickLevel:b.dataset.upgrade==='income'?state.incomeLevel:state.networkLevel;b.disabled=state.money<Math.floor(u.base*Math.pow(1.85,lv))});
}
function earnFromCar(){
 state.money+=clickPower();
 if(!cashRefreshQueued){
  cashRefreshQueued=true;
  requestAnimationFrame(()=>{cashRefreshQueued=false;refreshCashOnly()});
 }
 // Salva em lote, sem criar um timer novo a cada toque.
 if(!saveClickTimer)saveClickTimer=setTimeout(()=>{saveClickTimer=null;save()},500);
}
const featuredCar=document.querySelector('.scene-wrap');
if(featuredCar){
 featuredCar.addEventListener('pointerdown',event=>{
  if(event.pointerType==='mouse'&&event.button!==0)return;
  event.preventDefault();
  earnFromCar();
 },{passive:false});
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


// Impede menus de contexto e seleção em qualquer área visual do jogo.
document.addEventListener('contextmenu',event=>{
 const target=event.target;
 if(target instanceof Element && target.closest('.app-shell')){
  event.preventDefault();
  event.stopImmediatePropagation();
 }
},true);
document.addEventListener('selectstart',event=>{
 const target=event.target;
 if(target instanceof Element && target.closest('.app-shell')) event.preventDefault();
},true);
