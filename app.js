import * as THREE from 'three';

const cars = [
 {id:'city',name:'Urban GT',class:'Urbano',rarity:'COMUM',tier:'common',price:0,income:2,color:0x9aa7b5,description:'Seu primeiro companheiro de garagem.',shape:0},
 {id:'coupe',name:'Vortex Coupe',class:'Esportivo',rarity:'INCOMUM',tier:'uncommon',price:1800,income:12,color:0xd94c3e,description:'Linhas agressivas e personalidade esportiva.',shape:1},
 {id:'roadster',name:'Azure Roadster',class:'Conversível',rarity:'RARO',tier:'rare',price:8500,income:45,color:0x287fc2,description:'Liberdade em sua forma mais elegante.',shape:2},
 {id:'muscle',name:'Iron V8',class:'Muscle car',rarity:'RARO',tier:'rare',price:26000,income:110,color:0xb6a34a,description:'Potência clássica com presença marcante.',shape:1},
 {id:'gt',name:'Phantom GT',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:95000,income:380,color:0x6d4ac5,description:'Engenharia de alto desempenho.',shape:3},
 {id:'neo',name:'Neo R',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:320000,income:1250,color:0x35a98c,description:'Aerodinâmica avançada e visual futurista.',shape:3},
 {id:'hyper',name:'Apex One',class:'Hipercarro',rarity:'LENDÁRIO',tier:'legendary',price:1500000,income:5800,color:0xe2a13c,description:'Uma máquina criada para entrar para a história.',shape:4},
 {id:'myth',name:'Eclipse X',class:'Hipercarro',rarity:'MÍTICO',tier:'mythic',price:9000000,income:25000,color:0xc13d77,description:'O ápice de uma coleção extraordinária.',shape:4}
];
const fmt = n => 'R$ '+Math.floor(n).toLocaleString('pt-BR');
const saveKey='garageCollectionSave_v1';
let state={money:0,owned:['city'],selected:'city',multiplier:1};
try{const saved=JSON.parse(localStorage.getItem(saveKey)||'null');if(saved&&Array.isArray(saved.owned)){state={...state,...saved};}}catch(e){}
if(!state.owned.includes('city'))state.owned.unshift('city');
let toastTimer;
function save(){localStorage.setItem(saveKey,JSON.stringify(state));}
function notify(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),1900)}
function selectedCar(){return cars.find(c=>c.id===state.selected)||cars[0]}
function totalIncome(){return cars.filter(c=>state.owned.includes(c.id)).reduce((s,c)=>s+c.income,0)}
function render(){
 document.querySelector('#money').textContent=fmt(state.money);
 document.querySelector('#owned-count').textContent=state.owned.length;
 document.querySelector('#income').textContent=fmt(totalIncome());
 document.querySelector('#click-value').textContent='+ '+fmt(25*state.multiplier);
 const car=selectedCar();
 document.querySelector('#car-name').textContent=car.name;
 document.querySelector('#car-description').textContent=car.description;
 document.querySelector('#car-class').textContent=car.class;
 document.querySelector('#car-income').textContent=fmt(car.income)+'/min';
 document.querySelector('#car-value').textContent=fmt(car.price);
 document.querySelector('#car-rarity').textContent=car.rarity;
 document.querySelector('#car-rarity').className='rarity '+car.tier;
 document.querySelector('#car-index').textContent=String(state.owned.indexOf(car.id)+1).padStart(2,'0')+' / '+String(state.owned.length).padStart(2,'0');
 document.querySelector('#garage-total').textContent=state.owned.length+' veículos';
 document.querySelector('#garage-list').innerHTML=state.owned.map(id=>{const c=cars.find(x=>x.id===id);return '<button class="garage-car '+(id===state.selected?'selected':'')+'" data-select="'+id+'"><div class="mini-car">🚘</div><strong>'+c.name+'</strong><small>'+c.rarity+'</small></button>'}).join('');
 document.querySelector('#dealership-list').innerHTML=cars.filter(c=>c.id!=='city').map(c=>vehicleCard(c)).join('');
 document.querySelector('#collection-list').innerHTML=cars.map(c=>vehicleCard(c,!state.owned.includes(c.id))).join('');
 document.querySelector('#collection-progress').textContent=state.owned.length+' / '+cars.length;
 document.querySelector('#progress-fill').style.width=(state.owned.length/cars.length*100)+'%';
 document.querySelectorAll('[data-select]').forEach(b=>b.addEventListener('click',()=>{state.selected=b.dataset.select;save();render();showCar(selectedCar())}));
 document.querySelectorAll('[data-buy]').forEach(b=>b.addEventListener('click',()=>buy(b.dataset.buy)));
}
function vehicleCard(c,locked=false){
 const owned=state.owned.includes(c.id);
 return '<article class="vehicle-card '+(locked?'locked':'')+'"><div class="vehicle-art" style="--car-color:#'+c.color.toString(16).padStart(6,'0')+'">🚘</div><div class="vehicle-body"><span class="rarity '+c.tier+'">'+(locked?'BLOQUEADO':c.rarity)+'</span><h3>'+c.name+'</h3><p>'+c.class+' · '+fmt(c.income)+'/min</p><div class="vehicle-meta"><span>VALOR</span><strong>'+fmt(c.price)+'</strong></div>'+(owned?'<span class="owned-tag">✓ NA SUA COLEÇÃO</span>':'<button class="buy-button" data-buy="'+c.id+'" '+(state.money<c.price?'disabled':'')+'>ADQUIRIR VEÍCULO</button>')+'</div></article>';
}
function buy(id){const c=cars.find(x=>x.id===id);if(!c||state.owned.includes(id))return;if(state.money<c.price){notify('Saldo insuficiente. Continue trabalhando!');return;}state.money-=c.price;state.owned.push(id);state.selected=id;save();render();showCar(c);notify(c.name+' entrou para sua coleção!');}
document.querySelector('#work-button').addEventListener('click',()=>{const gain=25*state.multiplier;state.money+=gain;save();render();notify('+'+fmt(gain)+' adicionados ao saldo')});
document.querySelectorAll('.tab').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===b));document.querySelectorAll('.view').forEach(x=>x.classList.toggle('active',x.id===b.dataset.tab+'-view'));if(b.dataset.tab==='garage')showCar(selectedCar())}));
setInterval(()=>{const income=totalIncome()/60;state.money+=income;save();document.querySelector('#money').textContent=fmt(state.money);document.querySelectorAll('[data-buy]').forEach(b=>b.disabled=state.money<cars.find(c=>c.id===b.dataset.buy).price);},1000);

let scene,camera,renderer,carGroup,raf,dragging=false,lastX=0,rotY=-.55;
function makeMat(color,metalness=.45,roughness=.28){return new THREE.MeshStandardMaterial({color,metalness,roughness})}
function roundedBox(w,h,d,r,mat){const mesh=new THREE.Mesh(new THREE.BoxGeometry(w,h,d),mat);return mesh}
function buildCar(car){
 if(!scene)return;
 if(carGroup){scene.remove(carGroup);carGroup.traverse(o=>{if(o.geometry)o.geometry.dispose()})}
 carGroup=new THREE.Group();
 const paint=makeMat(car.color,.72,.22), dark=makeMat(0x111923,.35,.3), glass=new THREE.MeshPhysicalMaterial({color:0x172a3a,metalness:.55,roughness:.12,transparent:true,opacity:.88}), rubber=makeMat(0x090b0e,.05,.82), rim=makeMat(0x9ca9b5,.85,.22), light= new THREE.MeshStandardMaterial({color:0xeaf5ff,emissive:0x9bcfff,emissiveIntensity:1.5});
 const base=roundedBox(3.75,.58,1.68,0,paint);base.position.y=.78;carGroup.add(base);
 const hood=roundedBox(1.12,.22,1.62,0,paint);hood.position.set(1.23,1.08,0);carGroup.add(hood);
 const rear=roundedBox(.9,.27,1.6,0,paint);rear.position.set(-1.34,1.06,0);carGroup.add(rear);
 const roof=roundedBox(1.78,.68,1.34,0,paint);roof.position.set(-.05,1.48,0);carGroup.add(roof);
 const windshield=roundedBox(.08,.48,1.29,0,glass);windshield.rotation.z=-.33;windshield.position.set(.88,1.48,0);carGroup.add(windshield);
 const rearGlass=roundedBox(.08,.43,1.26,0,glass);rearGlass.rotation.z=.45;rearGlass.position.set(-.94,1.47,0);carGroup.add(rearGlass);
 const sideWindow=roundedBox(1.24,.38,.025,0,glass);sideWindow.position.set(-.04,1.48,.68);carGroup.add(sideWindow);
 const sideWindow2=sideWindow.clone();sideWindow2.position.z=-.68;carGroup.add(sideWindow2);
 for(const x of [-1.25,1.25])for(const z of [-.87,.87]){
  const tire=new THREE.Mesh(new THREE.CylinderGeometry(.47,.47,.28,32),rubber);tire.rotation.x=Math.PI/2;tire.position.set(x,.53,z);carGroup.add(tire);
  const hub=new THREE.Mesh(new THREE.CylinderGeometry(.25,.25,.295,24),rim);hub.rotation.x=Math.PI/2;hub.position.set(x,.53,z*1.01);carGroup.add(hub);
  const center=new THREE.Mesh(new THREE.CylinderGeometry(.09,.09,.31,20),dark);center.rotation.x=Math.PI/2;center.position.set(x,.53,z*1.02);carGroup.add(center);
 }
 for(const z of [-.55,.55]){const lamp=roundedBox(.28,.12,.08,0,light);lamp.position.set(1.88,.91,z);carGroup.add(lamp)}
 const grille=roundedBox(.12,.23,.72,0,dark);grille.position.set(1.91,.72,0);carGroup.add(grille);
 const spoiler=roundedBox(.12,.08,1.45,0,dark);spoiler.position.set(-1.78,1.34,0);carGroup.add(spoiler);
 carGroup.rotation.y=rotY;scene.add(carGroup);
}
function showCar(car){if(scene)buildCar(car)}
function init3D(){
 const host=document.querySelector('#car-scene');if(!host)return;
 try{
  scene=new THREE.Scene();scene.fog=new THREE.Fog(0x101925,9,22);
  camera=new THREE.PerspectiveCamera(34,host.clientWidth/host.clientHeight,.1,100);camera.position.set(5,3.1,7.4);camera.lookAt(0,.9,0);
  renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.setSize(host.clientWidth,host.clientHeight);renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;host.appendChild(renderer.domElement);
  scene.add(new THREE.HemisphereLight(0xb9d8ff,0x151923,2));
  const key=new THREE.DirectionalLight(0xffe2b4,3.2);key.position.set(3,7,5);key.castShadow=true;scene.add(key);
  const rimLight=new THREE.PointLight(0x4b9dce,24,12);rimLight.position.set(-4,3,-3);scene.add(rimLight);
  const floor=new THREE.Mesh(new THREE.PlaneGeometry(200,200),makeMat(0x18212c,.35,.52));floor.rotation.x=-Math.PI/2;floor.position.y=.03;floor.receiveShadow=true;scene.add(floor);
  const grid=new THREE.GridHelper(30,30,0x354455,0x202d3b);grid.position.y=.035;scene.add(grid);
  buildCar(selectedCar());
  host.addEventListener('pointerdown',e=>{dragging=true;lastX=e.clientX;host.setPointerCapture(e.pointerId)});
  host.addEventListener('pointermove',e=>{if(!dragging)return;rotY+=(e.clientX-lastX)*.009;lastX=e.clientX;if(carGroup)carGroup.rotation.y=rotY});
  host.addEventListener('pointerup',()=>dragging=false);host.addEventListener('pointercancel',()=>dragging=false);
  const resize=new ResizeObserver(()=>{if(!renderer)return;camera.aspect=host.clientWidth/host.clientHeight;camera.updateProjectionMatrix();renderer.setSize(host.clientWidth,host.clientHeight)});resize.observe(host);
  document.querySelector('.scene-loading').style.display='none';
  const animate=()=>{raf=requestAnimationFrame(animate);if(carGroup&&!dragging)carGroup.rotation.y+=.0018;renderer.render(scene,camera)};animate();
 }catch(err){host.innerHTML='<div class="scene-loading">VISUALIZAÇÃO 3D INDISPONÍVEL NESTE NAVEGADOR</div>';console.error(err)}
}
render();init3D();
