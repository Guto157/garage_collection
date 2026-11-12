const cars=[
{id:'city',name:'Volkswagen Golf GTI',class:'Hatch esportivo',rarity:'COMUM',tier:'common',price:0,income:3,description:'Seu primeiro esportivo. O começo da coleção.',image:'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=85'},
{id:'porsche',name:'Porsche 911 Carrera',class:'Esportivo',rarity:'INCOMUM',tier:'uncommon',price:1800,income:18,description:'Um ícone das estradas, com design inconfundível.',image:'https://images.unsplash.com/photo-1722753660234-59c8b1fe5386?auto=format&fit=crop&w=1400&q=85'},
{id:'mercedes',name:'Mercedes-AMG GT',class:'Grand tourer',rarity:'RARO',tier:'rare',price:9000,income:65,description:'Elegância alemã com desempenho de pista.',image:'https://images.unsplash.com/photo-1616788414889-a2942b90de0e?auto=format&fit=crop&w=1400&q=85'},
{id:'ferrari',name:'Ferrari 458 Italia',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:32000,income:210,description:'Um V8 italiano e linhas que marcaram época.',image:'https://images.unsplash.com/photo-1614200179396-2bdb77ebf81b?auto=format&fit=crop&w=1400&q=85'},
{id:'lamborghini',name:'Lamborghini Aventador',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:115000,income:720,description:'Presença extrema e desempenho extraordinário.',image:'https://images.unsplash.com/photo-1627650144271-5458642bf9bf?auto=format&fit=crop&w=1400&q=85'},
{id:'porschegt',name:'Porsche 911 GT2 RS',class:'Track-focused',rarity:'LENDÁRIO',tier:'legendary',price:480000,income:2800,description:'Uma máquina de alto desempenho feita para a pista.',image:'https://images.unsplash.com/photo-1583427053896-00378e61e661?auto=format&fit=crop&w=1400&q=85'},
{id:'mclaren',name:'McLaren 720S',class:'Hipercarro',rarity:'LENDÁRIO',tier:'legendary',price:1900000,income:10500,description:'Tecnologia, leveza e aerodinâmica de outro nível.',image:'https://images.unsplash.com/photo-1760689044672-2344a2bdc558?auto=format&fit=crop&w=1400&q=85'},
{id:'bugatti',name:'Bugatti Chiron',class:'Hipercarro',rarity:'MÍTICO',tier:'mythic',price:12000000,income:52000,description:'O topo absoluto da engenharia automotiva.',image:'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1400&q=85'}
];
const upgrades=[
{id:'click',name:'Treinamento do colecionador',desc:'Aumenta o dinheiro recebido por toque.',base:250,kind:'click'},
{id:'garage',name:'Garagem automatizada',desc:'Multiplica a renda gerada pelos seus veículos.',base:1200,kind:'income'},
{id:'network',name:'Rede de investidores',desc:'Amplia ainda mais o rendimento da coleção.',base:6500,kind:'income2'}
];
const key='garageCollectionSave_v2',oldKey='garageCollectionSave_v1';
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
document.querySelector('#click-value').textContent='+ '+fmt(clickPower());
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
document.querySelector('#work-button').onclick=()=>{const gain=clickPower();state.money+=gain;save();render();notify('+'+fmt(gain)+' no caixa!')};
document.querySelector('#daily-button').onclick=()=>{const today=new Date().toLocaleDateString('en-CA');if(state.lastDaily===today)return;state.lastDaily=today;state.money+=500;save();render();notify('Bônus diário de R$ 500 resgatado!')};
document.querySelector('#mission-button').onclick=()=>{if(state.owned.length<2||state.missionClaimed)return;state.money+=1000;state.missionClaimed=true;save();render();notify('Missão concluída: +R$ 1.000!')};
document.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.view').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab+'-view'))});
const elapsed=Math.max(0,Math.min(8*60*60,(Date.now()-(state.lastSave||Date.now()))/1000));
const offline=Math.floor(income()*elapsed/60);
if(offline>0){state.money+=offline;setTimeout(()=>notify('Enquanto esteve fora, sua garagem rendeu '+fmt(offline)+'.'),700)}
save();render();
setInterval(()=>{const gain=income()/60;state.money+=gain;document.querySelector('#money').textContent=fmt(state.money);document.querySelectorAll('[data-buy]').forEach(b=>{const c=getCar(b.dataset.buy);b.disabled=state.money<c.price});document.querySelectorAll('[data-upgrade]').forEach(b=>{const u=upgrades.find(x=>x.kind===b.dataset.upgrade);const lv=x=>x==='click'?state.clickLevel:x==='income'?state.incomeLevel:state.networkLevel; b.disabled=state.money<Math.floor(u.base*Math.pow(1.85,lv(u.kind)))});},1000);
setInterval(save,10000);
