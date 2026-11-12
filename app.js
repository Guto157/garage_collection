const cars=[
{id:'city',name:'Volkswagen Golf GTI',class:'Hatch esportivo',rarity:'COMUM',tier:'common',price:0,income:3,description:'Seu primeiro esportivo. O começo da coleção.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Volkswagen_Golf_GTi_MK_7.jpg/1280px-Volkswagen_Golf_GTi_MK_7.jpg'},
{id:'porsche',name:'Porsche 911 Carrera',class:'Esportivo',rarity:'INCOMUM',tier:'uncommon',price:80000,income:50,description:'Um ícone das estradas, com design inconfundível.',image:'https://upload.wikimedia.org/wikipedia/commons/b/b5/Porsche_911_Carrera.jpg'},
{id:'mercedes',name:'Mercedes-AMG GT',class:'Grand tourer',rarity:'RARO',tier:'rare',price:600000,income:300,description:'Elegância alemã com desempenho de pista.',image:'https://upload.wikimedia.org/wikipedia/commons/b/bf/MERCEDES-AMG_GT.jpg'},
{id:'ferrari',name:'Ferrari 458 Italia',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:5000000,income:2200,description:'Um V8 italiano e linhas que marcaram época.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ferrari458Italia.jpg/1280px-Ferrari458Italia.jpg'},
{id:'lamborghini',name:'Lamborghini Aventador',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:40000000,income:16000,description:'Presença extrema e desempenho extraordinário.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Lamborghini_Aventador.jpg/1280px-Lamborghini_Aventador.jpg'},
{id:'porschegt',name:'Porsche 911 GT2 RS',class:'Track-focused',rarity:'LENDÁRIO',tier:'legendary',price:300000000,income:120000,description:'Uma máquina de alto desempenho feita para a pista.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Porsche_911_GT2_RS.jpg/1280px-Porsche_911_GT2_RS.jpg'},
{id:'mclaren',name:'McLaren 720S',class:'Hipercarro',rarity:'LENDÁRIO',tier:'legendary',price:2500000000,income:900000,description:'Tecnologia, leveza e aerodinâmica de outro nível.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/McLaren_720S.jpg/1280px-McLaren_720S.jpg'},
{id:'bugatti',name:'Bugatti Chiron',class:'Hipercarro',rarity:'MÍTICO',tier:'mythic',price:20000000000,income:7000000,description:'O topo absoluto da engenharia automotiva.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/A_Bugatti_Chiron.jpg/1280px-A_Bugatti_Chiron.jpg'},
{id:'special-300slr',name:'Mercedes-Benz 300 SLR Uhlenhaut Coupé',class:'Protótipo de competição · 1955',rarity:'SPECIAL',tier:'special',price:1000000000000000,income:300000000000,description:'Um dos apenas dois exemplares construídos. Recordista mundial de venda, arrematado por €135 milhões.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1955%20Mercedes-Benz%20300%20SLR%20Uhlenhaut%20Coupe%20%2C%20Mercedes%20Museum%20%2C%20Stuttgart%20%2C%20Germany%20Ank%20Kumar%20Infosys%20Limited%2003.jpg?width=1280'},
{id:'special-w196r',name:'Mercedes-Benz W 196 R Stromlinienwagen',class:'Fórmula 1 histórico · 1954',rarity:'SPECIAL',tier:'special',price:850000000000000,income:255000000000,description:'A lendária Flecha de Prata de competição, pilotada na era de Juan Manuel Fangio.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1955%20Mercedes-Benz%20W196%20R%20Stromlinie%20Goodwood%2C%202009%20%2801%29.jpg?width=1280'},
{id:'special-330lm',name:'Ferrari 330 LM / 250 GTO Scaglietti',class:'Competizione · 1962 · Chassi 3765 LM',rarity:'SPECIAL',tier:'special',price:800000000000000,income:240000000000,description:'Exemplar de competição com histórico em Le Mans, vendido por US$ 51,7 milhões em leilão.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1962%20Ferrari%20330%20LMB.jpg?width=1280'},
{id:'special-250gto',name:'Ferrari 250 GTO',class:'Berlinetta de competição · 1962 · Chassi 3413 GT',rarity:'SPECIAL',tier:'special',price:750000000000000,income:225000000000,description:'Um dos cerca de 36 Ferrari 250 GTO construídos. Ícone absoluto entre colecionadores.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1962%20Ferrari%20250%20GTO%203413GT%2C%20Series%20II%20update%2C%20right%20side%20front.jpg?width=1280'},
{id:'special-daytona',name:'Shelby Cobra Daytona Coupé',class:'GT de competição · 1964 · CSX2300',rarity:'SPECIAL',tier:'special',price:700000000000000,income:210000000000,description:'Coupé de corrida raríssimo, criado para enfrentar a Ferrari nas pistas.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1964%20Shelby%20Daytona%20Coupe.jpg?width=1280'},
{id:'special-la-voiture-noire',name:'Bugatti La Voiture Noire',class:'Hipercarro exclusivo · 2019 · exemplar único',rarity:'SPECIAL',tier:'special',price:650000000000000,income:195000000000,description:'Um exemplar único criado como homenagem ao Type 57 SC Atlantic, com carroceria exclusiva e acabamento artesanal.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti-La-Voiture-Noire.jpg?width=1280'},
{id:'special-boat-tail',name:'Rolls-Royce Boat Tail',class:'Coachbuilt de luxo · 2021 · série de 3 unidades',rarity:'SPECIAL',tier:'special',price:600000000000000,income:180000000000,description:'Obra de carroceria sob medida, produzida em apenas três unidades para clientes selecionados.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce_Boat_Tail_side.png?width=1280'},
{id:'special-zonda-hp',name:'Pagani Zonda HP Barchetta',class:'Hipercarro artesanal · 2018 · série de 3 unidades',rarity:'SPECIAL',tier:'special',price:550000000000000,income:165000000000,description:'Uma das versões mais exclusivas do Zonda, com produção limitada a três exemplares.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Pagani_Zonda_HP_Barchetta.jpg?width=1280'},
{id:'special-huayra-codalunga',name:'Pagani Huayra Codalunga',class:'Hipercarro artesanal · 2022 · série de 5 unidades',rarity:'SPECIAL',tier:'special',price:500000000000000,income:150000000000,description:'Edição de carroceria alongada e produção limitada a cinco exemplares, criada pelo programa Grandi Complicazioni.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Pagani_Huayra_Codalunga.jpg?width=1280'},
{id:'special-centodieci',name:'Bugatti Centodieci',class:'Hipercarro de edição limitada · 2022 · 10 unidades',rarity:'SPECIAL',tier:'special',price:450000000000000,income:135000000000,description:'Edição comemorativa inspirada no EB110, limitada a apenas dez exemplares em todo o mundo.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti_Centodieci.jpg?width=1280'},
{id:'fiat-uno',name:'Fiat Uno Turbo i.e.',class:'Hatch esportivo · 1994',rarity:'COMUM',tier:'common',price:12000,income:8,description:'Fiat Uno Turbo i.e. é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Fiat%20Uno%20Turbo%20i.e..jpg?width=1280'},
{id:'gol-gti',name:'Volkswagen Gol GTI 2.0',class:'Hatch esportivo · 1994',rarity:'COMUM',tier:'common',price:18000,income:10,description:'Volkswagen Gol GTI 2.0 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Gol%20GTI%202.0.jpg?width=1280'},
{id:'civic-eg',name:'Honda Civic Si EG6',class:'Cupê esportivo · 1993',rarity:'COMUM',tier:'common',price:25000,income:13,description:'Honda Civic Si EG6 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Civic%20Si%20EG6.jpg?width=1280'},
{id:'peugeot-205',name:'Peugeot 205 GTI',class:'Hatch esportivo · 1984',rarity:'COMUM',tier:'common',price:32000,income:16,description:'Peugeot 205 GTI é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Peugeot%20205%20GTI.jpg?width=1280'},
{id:'miata-na',name:'Mazda MX-5 NA',class:'Roadster · 1990',rarity:'COMUM',tier:'common',price:40000,income:19,description:'Mazda MX-5 NA é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mazda%20MX-5%20NA.jpg?width=1280'},
{id:'clio-v6',name:'Renault Clio V6',class:'Hatch esportivo · 2001',rarity:'COMUM',tier:'common',price:48000,income:22,description:'Renault Clio V6 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Clio%20V6.jpg?width=1280'},
{id:'celica-gt',name:'Toyota Celica GT-Four',class:'Cupê esportivo · 1994',rarity:'COMUM',tier:'common',price:56000,income:25,description:'Toyota Celica GT-Four é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Celica%20GT-Four.jpg?width=1280'},
{id:'escort-cosworth',name:'Ford Escort RS Cosworth',class:'Hatch esportivo · 1992',rarity:'COMUM',tier:'common',price:64000,income:28,description:'Ford Escort RS Cosworth é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20Escort%20RS%20Cosworth.jpg?width=1280'},
{id:'kadett-gsi',name:'Chevrolet Kadett GSi',class:'Hatch esportivo · 1992',rarity:'COMUM',tier:'common',price:72000,income:31,description:'Chevrolet Kadett GSi é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Kadett%20GSi.jpg?width=1280'},
{id:'bmw-m3-e36',name:'BMW M3 E36',class:'Cupê esportivo · 1995',rarity:'INCOMUM',tier:'uncommon',price:90000,income:55,description:'BMW M3 E36 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M3%20E36.jpg?width=1280'},
{id:'nissan-300zx',name:'Nissan 300ZX Twin Turbo',class:'GT · 1991',rarity:'INCOMUM',tier:'uncommon',price:105000,income:62,description:'Nissan 300ZX Twin Turbo é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Nissan%20300ZX%20Twin%20Turbo.jpg?width=1280'},
{id:'supra-mk3',name:'Toyota Supra Turbo Mk III',class:'GT · 1990',rarity:'INCOMUM',tier:'uncommon',price:120000,income:69,description:'Toyota Supra Turbo Mk III é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Supra%20Turbo%20Mk%20III.jpg?width=1280'},
{id:'rx7-fd',name:'Mazda RX-7 FD',class:'Cupê esportivo · 1993',rarity:'INCOMUM',tier:'uncommon',price:135000,income:76,description:'Mazda RX-7 FD é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mazda%20RX-7%20FD.jpg?width=1280'},
{id:'s2000',name:'Honda S2000',class:'Roadster · 2000',rarity:'INCOMUM',tier:'uncommon',price:150000,income:83,description:'Honda S2000 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20S2000.jpg?width=1280'},
{id:'audi-tt-rs',name:'Audi TT RS',class:'Cupê esportivo · 2012',rarity:'INCOMUM',tier:'uncommon',price:165000,income:90,description:'Audi TT RS é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20TT%20RS.jpg?width=1280'},
{id:'mustang-boss',name:'Ford Mustang Boss 302',class:'Muscle car · 2012',rarity:'INCOMUM',tier:'uncommon',price:180000,income:97,description:'Ford Mustang Boss 302 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20Mustang%20Boss%20302.jpg?width=1280'},
{id:'camaro-ss',name:'Chevrolet Camaro SS',class:'Muscle car · 2010',rarity:'INCOMUM',tier:'uncommon',price:195000,income:104,description:'Chevrolet Camaro SS é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Camaro%20SS.jpg?width=1280'},
{id:'subaru-22b',name:'Subaru Impreza 22B STI',class:'Rally homologation · 1998',rarity:'INCOMUM',tier:'uncommon',price:210000,income:111,description:'Subaru Impreza 22B STI é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Subaru%20Impreza%2022B%20STI.jpg?width=1280'},
{id:'bmw-m5-e39',name:'BMW M5 E39',class:'Sedã esportivo · 2001',rarity:'RARO',tier:'rare',price:750000,income:340,description:'BMW M5 E39 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M5%20E39.jpg?width=1280'},
{id:'corvette-c6',name:'Chevrolet Corvette Z06 C6',class:'Esportivo · 2006',rarity:'RARO',tier:'rare',price:900000,income:380,description:'Chevrolet Corvette Z06 C6 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Corvette%20Z06%20C6.jpg?width=1280'},
{id:'aston-v8-vantage',name:'Aston Martin V8 Vantage',class:'GT · 2008',rarity:'RARO',tier:'rare',price:1050000,income:420,description:'Aston Martin V8 Vantage é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Aston%20Martin%20V8%20Vantage.jpg?width=1280'},
{id:'lotus-exige',name:'Lotus Exige S',class:'Esportivo leve · 2010',rarity:'RARO',tier:'rare',price:1200000,income:460,description:'Lotus Exige S é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Lotus%20Exige%20S.jpg?width=1280'},
{id:'nissan-gt-r',name:'Nissan GT-R R35',class:'Superesportivo · 2012',rarity:'RARO',tier:'rare',price:1350000,income:500,description:'Nissan GT-R R35 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Nissan%20GT-R%20R35.jpg?width=1280'},
{id:'audi-r8-v10',name:'Audi R8 V10',class:'Superesportivo · 2010',rarity:'RARO',tier:'rare',price:1500000,income:540,description:'Audi R8 V10 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20R8%20V10.jpg?width=1280'},
{id:'jaguar-f-type',name:'Jaguar F-Type R',class:'GT · 2015',rarity:'RARO',tier:'rare',price:1650000,income:580,description:'Jaguar F-Type R é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jaguar%20F-Type%20R.jpg?width=1280'},
{id:'maserati-granturismo',name:'Maserati GranTurismo MC',class:'GT · 2013',rarity:'RARO',tier:'rare',price:1800000,income:620,description:'Maserati GranTurismo MC é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati%20GranTurismo%20MC.jpg?width=1280'},
{id:'lexus-lfa',name:'Lexus LFA',class:'Superesportivo · 2012',rarity:'RARO',tier:'rare',price:1950000,income:660,description:'Lexus LFA é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Lexus%20LFA.jpg?width=1280'},
{id:'ferrari-f430',name:'Ferrari F430 Scuderia',class:'Superesportivo · 2008',rarity:'ÉPICO',tier:'epic',price:8000000,income:2600,description:'Ferrari F430 Scuderia é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20F430%20Scuderia.jpg?width=1280'},
{id:'lambo-gallardo',name:'Lamborghini Gallardo Superleggera',class:'Superesportivo · 2007',rarity:'ÉPICO',tier:'epic',price:12000000,income:3100,description:'Lamborghini Gallardo Superleggera é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Gallardo%20Superleggera.jpg?width=1280'},
{id:'aston-db9',name:'Aston Martin DB9 GT',class:'GT · 2015',rarity:'ÉPICO',tier:'epic',price:16000000,income:3600,description:'Aston Martin DB9 GT é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Aston%20Martin%20DB9%20GT.jpg?width=1280'},
{id:'ford-gt-2005',name:'Ford GT',class:'Supercarro · 2005',rarity:'ÉPICO',tier:'epic',price:20000000,income:4100,description:'Ford GT é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20GT.jpg?width=1280'},
{id:'mercedes-sls',name:'Mercedes-Benz SLS AMG Black Series',class:'Superesportivo · 2013',rarity:'ÉPICO',tier:'epic',price:24000000,income:4600,description:'Mercedes-Benz SLS AMG Black Series é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20SLS%20AMG%20Black%20Series.jpg?width=1280'},
{id:'maserati-mc12',name:'Maserati MC12',class:'Supercarro · 2005',rarity:'ÉPICO',tier:'epic',price:28000000,income:5100,description:'Maserati MC12 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati%20MC12.jpg?width=1280'},
{id:'jaguar-xj220',name:'Jaguar XJ220',class:'Supercarro · 1993',rarity:'ÉPICO',tier:'epic',price:32000000,income:5600,description:'Jaguar XJ220 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jaguar%20XJ220.jpg?width=1280'},
{id:'porsche-carrera-gt',name:'Porsche Carrera GT',class:'Supercarro · 2005',rarity:'ÉPICO',tier:'epic',price:36000000,income:6100,description:'Porsche Carrera GT é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Carrera%20GT.jpg?width=1280'},
{id:'ferrari-enzo',name:'Ferrari Enzo',class:'Supercarro · 2004',rarity:'LENDÁRIO',tier:'legendary',price:400000000,income:150000,description:'Ferrari Enzo é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20Enzo.jpg?width=1280'},
{id:'porsche-918',name:'Porsche 918 Spyder',class:'Híbrido · 2015',rarity:'LENDÁRIO',tier:'legendary',price:500000000,income:180000,description:'Porsche 918 Spyder é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20918%20Spyder.jpg?width=1280'},
{id:'mclaren-p1',name:'McLaren P1',class:'Híbrido · 2014',rarity:'LENDÁRIO',tier:'legendary',price:600000000,income:210000,description:'McLaren P1 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20P1.jpg?width=1280'},
{id:'laferrari',name:'Ferrari LaFerrari',class:'Híbrido · 2014',rarity:'LENDÁRIO',tier:'legendary',price:700000000,income:240000,description:'Ferrari LaFerrari é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20LaFerrari.jpg?width=1280'},
{id:'pagani-huayra',name:'Pagani Huayra',class:'Hipercarro · 2013',rarity:'LENDÁRIO',tier:'legendary',price:800000000,income:270000,description:'Pagani Huayra é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Huayra.jpg?width=1280'},
{id:'koenigsegg-agera',name:'Koenigsegg Agera R',class:'Hipercarro · 2012',rarity:'LENDÁRIO',tier:'legendary',price:900000000,income:300000,description:'Koenigsegg Agera R é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Agera%20R.jpg?width=1280'},
{id:'bugatti-veyron',name:'Bugatti Veyron Super Sport',class:'Hipercarro · 2010',rarity:'LENDÁRIO',tier:'legendary',price:1000000000,income:330000,description:'Bugatti Veyron Super Sport é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Veyron%20Super%20Sport.jpg?width=1280'},
{id:'mercedes-clk-gtr',name:'Mercedes-Benz CLK GTR',class:'Homologação GT1 · 1998',rarity:'LENDÁRIO',tier:'legendary',price:1500000000,income:400000,description:'Mercedes-Benz CLK GTR é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20CLK%20GTR.jpg?width=1280'},
{id:'mclaren-f1',name:'McLaren F1',class:'Hipercarro · 1994',rarity:'MÍTICO',tier:'mythic',price:25000000000,income:8000000,description:'McLaren F1 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20F1.jpg?width=1280'},
{id:'bugatti-divo',name:'Bugatti Divo',class:'Hipercarro · 2020',rarity:'MÍTICO',tier:'mythic',price:30000000000,income:9000000,description:'Bugatti Divo é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Divo.jpg?width=1280'},
{id:'koenigsegg-one1',name:'Koenigsegg One:1',class:'Hipercarro · 2014',rarity:'MÍTICO',tier:'mythic',price:35000000000,income:10000000,description:'Koenigsegg One:1 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20One1.jpg?width=1280'},
{id:'pagani-zonda-r',name:'Pagani Zonda R',class:'Track-only · 2009',rarity:'MÍTICO',tier:'mythic',price:40000000000,income:11000000,description:'Pagani Zonda R é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Zonda%20R.jpg?width=1280'},
{id:'aston-one77',name:'Aston Martin One-77',class:'Hipercarro · 2011',rarity:'MÍTICO',tier:'mythic',price:50000000000,income:12000000,description:'Aston Martin One-77 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Aston%20Martin%20One-77.jpg?width=1280'},
{id:'lamborghini-veneno',name:'Lamborghini Veneno',class:'Hipercarro · 2014',rarity:'MÍTICO',tier:'mythic',price:60000000000,income:13000000,description:'Lamborghini Veneno é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Veneno.jpg?width=1280'},
{id:'ferrari-fxxk',name:'Ferrari FXX K',class:'Track-only · 2015',rarity:'MÍTICO',tier:'mythic',price:70000000000,income:14000000,description:'Ferrari FXX K é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20FXX%20K.jpg?width=1280'},
{id:'mercedes-amg-one',name:'Mercedes-AMG One',class:'Hipercarro híbrido · 2023',rarity:'MÍTICO',tier:'mythic',price:80000000000,income:15000000,description:'Mercedes-AMG One é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG%20One.jpg?width=1280'},
{id:'koenigsegg-jesko',name:'Koenigsegg Jesko Absolut',class:'Hipercarro · 2024',rarity:'MÍTICO',tier:'mythic',price:90000000000,income:16000000,description:'Koenigsegg Jesko Absolut é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Jesko%20Absolut.jpg?width=1280'}

];
const upgrades=[
{id:'click',name:'Treinamento do colecionador',desc:'Aumenta o dinheiro recebido por toque.',base:500,kind:'click'},
{id:'garage',name:'Garagem automatizada',desc:'Multiplica a renda gerada pelos seus veículos.',base:5000,kind:'income'},
{id:'network',name:'Rede de investidores',desc:'Amplia ainda mais o rendimento da coleção.',base:25000,kind:'network'}
];
const key='garageCollectionSave_v3';

/* Proteção visual: se o servidor de fotos falhar, nunca deixa o espaço em branco. */
const carFallback='data:image/svg+xml;charset=UTF-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 650"><defs><linearGradient id="g" x2="0" y2="1"><stop stop-color="#26384b"/><stop offset="1" stop-color="#090e16"/></linearGradient></defs><rect width="1200" height="650" fill="url(#g)"/><path d="M120 455h960l-35-105q-12-36-55-48l-150-45-110-105q-20-20-55-20H430q-45 0-70 35L250 350l-90 35q-40 15-40 70z" fill="#b78b4b" stroke="#f0c778" stroke-width="9"/><path d="M430 165h245l100 110H350z" fill="#182534" stroke="#d8b77c" stroke-width="8"/><circle cx="340" cy="465" r="75" fill="#080b12" stroke="#9ba8b7" stroke-width="18"/><circle cx="865" cy="465" r="75" fill="#080b12" stroke="#9ba8b7" stroke-width="18"/><text x="600" y="585" text-anchor="middle" fill="#dce4ed" font-family="Arial" font-size="25" letter-spacing="7">GARAGE COLLECTION</text></svg>');

const commonsImageRequests=new Map();
async function findCommonsCarImage(car){
 if(commonsImageRequests.has(car.id))return commonsImageRequests.get(car.id);
 const task=(async()=>{
  const tokens=car.name.toLowerCase().split(/[^a-z0-9]+/).filter(word=>word.length>2);
  const searches=[car.name,tokens.slice(0,3).join(' '),tokens.slice(-2).join(' '),tokens.slice(0,2).join(' ')]
   .filter(term=>term&&term.trim().length>2);
  const candidates=new Map();
  for(const term of [...new Set(searches)]){
   try{
    const query=encodeURIComponent(term);
    const endpoint='https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch='+query+'&gsrnamespace=6&gsrlimit=50&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json&origin=*';
    const response=await fetch(endpoint);
    if(!response.ok)continue;
    const data=await response.json();
    const pages=Object.values(data.query?.pages||{});
    pages.forEach(page=>{
     const title=(page.title||'').toLowerCase();
     if(!/\.(jpg|jpeg|png|webp)$/i.test(title)||!page.imageinfo?.[0])return;
     const score=tokens.reduce((sum,token)=>sum+(title.includes(token)?1:0),0);
     if(score<1)return;
     const key=page.title;
     const previous=candidates.get(key);
     if(!previous||score>previous.score)candidates.set(key,{page,score});
    });
   }catch(error){console.warn('Busca de imagem falhou:',car.name,error);}
  }
  const ranked=[...candidates.values()].sort((a,b)=>b.score-a.score);
  const best=ranked.find(item=>item.score>=Math.min(2,tokens.length))||ranked[0];
  if(best){
   const info=best.page.imageinfo[0];
   return info.thumburl||info.url||null;
  }
  return null;
 })();
 commonsImageRequests.set(car.id,task);
 return task;
}
function applyRecoveredCarImage(car,url){
 if(!url)return false;
 car.image=url;
 document.querySelectorAll('img[data-car-id="'+car.id+'"]').forEach(image=>{image.dataset.fallback='1';image.src=url;});
 if(state.selected===car.id){
  document.querySelector('#hero-car').style.backgroundImage='url("'+url+'")';
 }
 return true;
}
document.addEventListener('error',event=>{
 const img=event.target;
 if(!img||img.tagName!=='IMG'||img.dataset.fallback)return;
 img.dataset.fallback='1';
 const car=cars.find(item=>item.id===img.dataset.carId);
 if(car){
  findCommonsCarImage(car).then(url=>{
   if(!applyRecoveredCarImage(car,url)){img.src=carFallback;img.style.objectFit='contain';img.style.padding='12px';}
  }).catch(()=>{img.src=carFallback;img.style.objectFit='contain';img.style.padding='12px';});
 }else{img.src=carFallback;img.style.objectFit='contain';img.style.padding='12px';}
},true);
function checkHeroCarImage(car){
 if(car._heroChecked)return;
 car._heroChecked=true;
 const probe=new Image();
 probe.onerror=()=>{
  findCommonsCarImage(car).then(url=>{
   if(!applyRecoveredCarImage(car,url))document.querySelector('#hero-car').style.backgroundImage='url("'+carFallback+'")';
  }).catch(()=>{document.querySelector('#hero-car').style.backgroundImage='url("'+carFallback+'")';});
 };
 probe.src=car.image;
}


const fmt=n=>'R$ '+Math.floor(n).toLocaleString('pt-BR');
const defaultState={money:250,owned:['city'],selected:'city',clickLevel:0,incomeLevel:0,networkLevel:0,lastSave:Date.now(),lastDaily:'',missionClaimed:false,cardCopies:{}};
let state={...defaultState};
try{const raw=localStorage.getItem(key);if(raw){const parsed=JSON.parse(raw);state={...defaultState,...parsed};}}catch(e){console.warn('Save inválido, iniciando novo jogo',e)}
// Protege os níveis contra valores inválidos gravados em versões anteriores.
for(const field of ['clickLevel','incomeLevel','networkLevel']){const value=Number(state[field]);state[field]=Number.isFinite(value)&&value>=0?Math.floor(value):0;}
state.cardCopies=state.cardCopies&&typeof state.cardCopies==='object'?state.cardCopies:{};
state.owned=[...new Set(['city',...(Array.isArray(state.owned)?state.owned:[])])].filter(id=>cars.some(c=>c.id===id));
if(!cars.some(c=>c.id===state.selected&&state.owned.includes(c.id)))state.selected=state.owned[0];
const incomeBase=()=>cars.filter(c=>state.owned.includes(c.id)).reduce((sum,c)=>sum+c.income,0);
const income=()=>incomeBase()*(1+state.incomeLevel*.65+state.networkLevel*1.4);
const clickPower=()=>15*Math.pow(1.5,state.clickLevel);
let toastTimer;
function save(){state.lastSave=Date.now();try{localStorage.setItem(key,JSON.stringify(state))}catch(e){console.warn('Não foi possível salvar',e)}}
function notify(msg){const el=document.querySelector('#toast');el.textContent=msg;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),2100)}
function getCar(id){return cars.find(c=>c.id===id)||cars[0]}
function card(c){
 const owned=state.owned.includes(c.id);
 const copies=1+Math.max(0,Number(state.cardCopies[c.id])||0);
 const special=c.tier==='special';
 if(special&&!owned){
  return '<article class="vehicle-card locked special-card special-undiscovered"><div class="vehicle-art"><img data-car-id="'+c.id+'" loading="lazy" src="'+c.image+'" alt="Veículo SPECIAL bloqueado" style="filter:blur(13px) brightness(.18) grayscale(1);transform:scale(1.16)"></div><div class="vehicle-body special-chrome"><span class="rarity special">SPECIAL</span><h3>???</h3><p>Veículo histórico misterioso</p><div class="vehicle-meta"><span>STATUS</span><strong>DESCONHECIDO</strong></div><span class="owned-tag special-locked-tag">🔒 DESBLOQUEIE PARA REVELAR</span></div></article>';
 }
 const details='<span class="rarity '+c.tier+'">'+c.rarity+'</span><h3>'+c.name+'</h3><p>'+c.class+' · '+fmt(c.income)+'/min</p><div class="vehicle-meta"><span>PREÇO</span><strong>'+fmt(c.price)+'</strong></div>'+(owned?'<span class="owned-tag">✓ NA SUA COLEÇÃO · '+copies+'x</span>':'<button class="buy-button" data-buy="'+c.id+'" '+(state.money<c.price?'disabled':'')+'>COMPRAR VEÍCULO</button>');
 return '<article class="vehicle-card '+(!owned?'locked':'')+(special?' special-card':'')+'"><div class="vehicle-art"><img data-car-id="'+c.id+'" loading="lazy" src="'+c.image+'" alt="'+c.name+'"></div><div class="vehicle-body '+(special?'special-chrome':'')+'">'+details+'</div></article>';
}
let openDealershipRarity=null;
try{openDealershipRarity=localStorage.getItem(key+'_openRarity')||null;}catch(e){}
const rarityGroups=[
 {tier:'common',label:'COMUM',note:'Primeiros clássicos da garagem'},
 {tier:'uncommon',label:'INCOMUM',note:'Esportivos especiais'},
 {tier:'rare',label:'RARO',note:'Máquinas de alto desempenho'},
 {tier:'epic',label:'ÉPICO',note:'Superesportivos lendários'},
 {tier:'legendary',label:'LENDÁRIO',note:'Ícones de coleção'},
 {tier:'mythic',label:'MÍTICO',note:'Hipercarros extraordinários'},
 {tier:'special',label:'SPECIAL',note:'Peças históricas e exemplares únicos'}
];
function renderDealership(){
 const container=document.querySelector('#dealership-list');
 container.innerHTML=rarityGroups.map(group=>{
  const list=cars.filter(c=>c.id!=='city'&&c.tier===group.tier);
  if(!list.length)return '';
  const opened=openDealershipRarity===group.tier;
  return '<section class="rarity-group"><button type="button" class="rarity-toggle" data-rarity="'+group.tier+'" aria-expanded="'+opened+'"><span class="rarity '+group.tier+'">'+group.label+'</span><span class="rarity-group-copy"><strong>'+group.note+'</strong><small>'+list.length+' veículos disponíveis</small></span><span class="rarity-chevron">'+(opened?'−':'+')+'</span></button><div class="rarity-cars" '+(opened?'':'hidden')+'>'+list.map(card).join('')+'</div></section>';
 }).join('');
 container.querySelectorAll('[data-rarity]').forEach(button=>button.onclick=()=>{
  openDealershipRarity=openDealershipRarity===button.dataset.rarity?null:button.dataset.rarity;
  try{if(openDealershipRarity)localStorage.setItem(key+'_openRarity',openDealershipRarity);else localStorage.removeItem(key+'_openRarity');localStorage.removeItem(key+'_albumRarity');}catch(e){}
  renderDealership();
 });
 container.querySelectorAll('[data-buy]').forEach(button=>button.onclick=()=>buy(button.dataset.buy));
}


let albumRarity='common';
try{albumRarity=localStorage.getItem(key+'_albumRarity')||'common';}catch(e){}
let albumNewVehicleId=null;
function openAlbumCard(car){
 const copies=state.owned.includes(car.id)?1+Math.max(0,Number(state.cardCopies[car.id])||0):0;
 let overlay=document.querySelector('#album-card-viewer');
 if(!overlay){
  overlay=document.createElement('div');
  overlay.id='album-card-viewer';
  overlay.className='album-card-viewer';
  overlay.hidden=true;
  overlay.innerHTML='<div class="album-card-viewer-panel" role="dialog" aria-modal="true" aria-label="Detalhes da figurinha"><button type="button" class="album-card-viewer-close" aria-label="Fechar">×</button><div class="album-card-viewer-content"></div></div>';
  document.body.appendChild(overlay);
  overlay.querySelector('.album-card-viewer-close').onclick=()=>{overlay.hidden=true;document.removeEventListener('keydown',overlay.albumKeyHandler);};
  overlay.onclick=e=>{if(e.target===overlay){overlay.hidden=true;document.removeEventListener('keydown',overlay.albumKeyHandler);}};
 }
 const content=overlay.querySelector('.album-card-viewer-content');
 content.innerHTML='<div class="album-card-viewer-photo '+(car.tier==='special'?'special':'')+'"><img src="'+car.image+'" alt="'+car.name+'"></div><div class="album-card-viewer-info"><span class="rarity '+car.tier+'">'+car.rarity+'</span><h3>'+car.name+'</h3><p>'+car.class+'</p><div class="album-card-copy-count"><small>QUANTIDADE NA COLEÇÃO</small><strong>'+copies+' '+(copies===1?'CARTA':'CARTAS')+'</strong></div><span class="album-card-owned">✓ VEÍCULO CONQUISTADO</span></div>';
 overlay.hidden=false;
 overlay.albumKeyHandler=e=>{if(e.key==='Escape'){overlay.hidden=true;document.removeEventListener('keydown',overlay.albumKeyHandler);}};
 document.removeEventListener('keydown',overlay.albumKeyHandler);
 document.addEventListener('keydown',overlay.albumKeyHandler);
}
function renderAlbum(){
 const totalOwned=state.owned.length;
 document.querySelector('#collection-progress').textContent=totalOwned+' / '+cars.length+' veículos';
 document.querySelector('#progress-fill').style.width=(totalOwned/cars.length*100)+'%';
 if(!rarityGroups.some(group=>group.tier===albumRarity))albumRarity='common';
 const tabs=document.querySelector('#album-rarity-tabs');
 tabs.innerHTML=rarityGroups.map(group=>{
  const all=cars.filter(car=>car.tier===group.tier);
  const owned=all.filter(car=>state.owned.includes(car.id)).length;
  return '<button type="button" class="album-rarity-tab '+(albumRarity===group.tier?'active':'')+'" data-album-rarity="'+group.tier+'"><span>'+group.label+'</span><small>'+owned+'/'+all.length+'</small></button>';
 }).join('');
 tabs.querySelectorAll('[data-album-rarity]').forEach(button=>button.onclick=()=>{
  albumRarity=button.dataset.albumRarity;
  try{localStorage.setItem(key+'_albumRarity',albumRarity);}catch(e){}
  renderAlbum();
 });
 const group=rarityGroups.find(item=>item.tier===albumRarity);
 const pageCars=cars.filter(car=>car.tier===albumRarity);
 const pageOwned=pageCars.filter(car=>state.owned.includes(car.id)).length;
 const tierIndex=rarityGroups.findIndex(item=>item.tier===albumRarity)+1;
 const stickers=pageCars.map((car,index)=>{
  if(!state.owned.includes(car.id)){
   return '<div class="album-empty-slot '+(car.tier==='special'?'special-slot':'')+'"><span class="album-slot-number">Nº '+String(index+1).padStart(2,'0')+'</span><div class="album-empty-mark">＋</div><strong>ESPAÇO VAGO</strong><small>FIGURINHA A DESCOBRIR</small></div>';
  }
  const isNew=albumNewVehicleId===car.id;
  const copies=1+Math.max(0,Number(state.cardCopies[car.id])||0);
  return '<article class="album-sticker album-sticker-interactive '+(car.tier==='special'?'album-special-sticker ':'')+(isNew?'just-added':'')+'" data-album-card="'+car.id+'" role="button" tabindex="0" aria-label="Ampliar carta '+car.name+'"><span class="album-sticker-number">Nº '+String(index+1).padStart(2,'0')+'</span><div class="album-sticker-photo"><img data-car-id="'+car.id+'" loading="lazy" src="'+car.image+'" alt="'+car.name+'"></div><div class="album-sticker-caption"><strong>'+car.name+'</strong><small>'+car.class+'</small><span>✓ CONQUISTADO</span></div><span class="album-sticker-copies">'+copies+'x</span></article>';
 }).join('');
 document.querySelector('#album-page').innerHTML='<div class="album-page-heading"><div><span>GARAGE COLLECTION · SÉRIE 01</span><h3>'+group.label+'</h3><p>'+group.note+'</p></div><strong>'+String(tierIndex).padStart(2,'0')+' / 07</strong></div><div class="album-page-stats"><span>'+pageOwned+' DE '+pageCars.length+' FIGURINHAS COLADAS</span><span>'+Math.round(pageOwned/Math.max(1,pageCars.length)*100)+'% COMPLETO</span></div><div class="album-sticker-grid">'+stickers+'</div><div class="album-page-footer"><span>GARAGE COLLECTION</span><span>EDIÇÃO DE COLECIONADOR</span></div>';
 document.querySelectorAll('[data-album-card]').forEach(sticker=>{
  const open=()=>openAlbumCard(getCar(sticker.dataset.albumCard));
  sticker.onclick=open;
  sticker.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open();}};
 });
 if(albumNewVehicleId){
  const fresh=document.querySelector('.album-sticker.just-added');
  if(fresh){setTimeout(()=>fresh.classList.remove('just-added'),1300);}
  albumNewVehicleId=null;
 }
}
function render(){
const car=getCar(state.selected);
document.querySelector('#money').textContent=fmt(state.money);
document.querySelector('#owned-count').textContent=state.owned.length;
document.querySelector('#income').textContent=fmt(income());
document.querySelector('#click-power').textContent=fmt(clickPower());
document.querySelector('#hero-car').style.backgroundImage='url("'+car.image+'")';
const heroFrame=document.querySelector('.scene-wrap');
heroFrame.classList.remove('rarity-common','rarity-uncommon','rarity-rare','rarity-epic','rarity-legendary','rarity-mythic','rarity-special');
heroFrame.classList.add('rarity-'+car.tier);
checkHeroCarImage(car);
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
document.querySelector('#garage-list').innerHTML=state.owned.map(id=>{const c=getCar(id);return '<button class="garage-car '+(id===state.selected?'selected':'')+'" data-select="'+id+'"><img data-car-id="'+c.id+'" src="'+c.image+'" alt="'+c.name+'"><strong>'+c.name+'</strong><small>'+c.rarity+'</small></button>'}).join('');
renderDealership();
renderAlbum();
renderUpgrades();renderMission();renderDaily();
document.querySelectorAll('[data-select]').forEach(b=>b.onclick=()=>{state.selected=b.dataset.select;save();render()});

document.querySelectorAll('[data-buy]').forEach(b=>b.onclick=()=>buy(b.dataset.buy));
renderPackButtons();
}

const packOptions={
 basic:{price:500,weights:{common:65,uncommon:23,rare:8,epic:3,legendary:0.8,mythic:0.19999},special:0.00001},
 premium:{price:5000,weights:{common:35,uncommon:30,rare:20,epic:10,legendary:4,mythic:0.99998},special:0.00002},
 elite:{price:50000,weights:{common:10,uncommon:15,rare:25,epic:25,legendary:18,mythic:6.9999},special:0.0001}
};
function renderPackButtons(){document.querySelectorAll('[data-pack]').forEach(button=>{const pack=packOptions[button.dataset.pack];button.disabled=!pack||state.money<pack.price;});}
function showSpecialReveal(car,duplicate){
 let style=document.querySelector('#special-reveal-style');
 if(!style){
  style=document.createElement('style');style.id='special-reveal-style';
  style.textContent=`
  .special-reveal{position:fixed;inset:0;z-index:100000;display:grid;place-items:center;padding:20px;overflow:hidden;background:radial-gradient(circle at 50% 45%,#27334cdd 0%,#090d18f5 65%);animation:specialRevealIn .35s ease-out both}
  .special-reveal[hidden]{display:none}
  .special-reveal::before,.special-reveal::after{content:"";position:absolute;inset:-55%;pointer-events:none}
  .special-reveal::before{background:repeating-conic-gradient(from 0deg at 50% 50%,#ff315b55 0deg 8deg,#ffcf3355 8deg 16deg,#42edac55 16deg 24deg,#35c9ff55 24deg 32deg,#9c62ff55 32deg 40deg,transparent 40deg 48deg);animation:specialRainbowSpin 12s linear infinite;filter:blur(5px)}
  .special-reveal::after{background:radial-gradient(circle at 12% 18%,#fff 0 2px,transparent 4px),radial-gradient(circle at 82% 22%,#fff 0 2px,transparent 4px),radial-gradient(circle at 24% 76%,#fff 0 2px,transparent 4px),radial-gradient(circle at 76% 82%,#fff 0 2px,transparent 4px),radial-gradient(circle at 50% 8%,#fff 0 2px,transparent 4px);background-size:100% 100%;animation:specialSparkle 1.4s ease-in-out infinite alternate}
  .special-reveal-panel{position:relative;z-index:2;width:min(100%,430px);padding:24px 20px 20px;text-align:center;border:2px solid #fff;border-radius:18px;background:linear-gradient(145deg,#fff,#c9d6ed 22%,#fce2f2 42%,#c8f5ed 62%,#d8d0ff 82%,#fff);color:#101827;box-shadow:0 0 25px #fff,0 0 65px #9b64ffcc,0 0 110px #27dfff88;animation:specialCardPop .65s cubic-bezier(.2,1.4,.4,1) both}
  .special-reveal-kicker{font:900 14px 'Barlow Condensed',sans-serif;letter-spacing:4px;color:#5524a5;text-shadow:0 1px #fff}
  .special-reveal-panel img{display:block;width:100%;height:210px;margin:14px 0 12px;object-fit:cover;border-radius:11px;border:2px solid #fff;box-shadow:0 4px 22px #28354d55}
  .special-reveal-panel h2{margin:8px 0 4px;font:900 30px 'Barlow Condensed',sans-serif;color:#111827}
  .special-reveal-panel p{margin:5px 0 17px;color:#29364b;font-size:12px}
  .special-reveal-panel .rarity{display:inline-block}
  .special-reveal-close{width:100%;padding:13px;border:0;border-radius:8px;background:linear-gradient(90deg,#7439d5,#277eea,#12a88a);color:#fff;font-weight:900;letter-spacing:1px}
  @keyframes specialRevealIn{from{opacity:0}to{opacity:1}}
  @keyframes specialRainbowSpin{to{transform:rotate(360deg)}}
  @keyframes specialSparkle{from{opacity:.25;transform:scale(.96)}to{opacity:1;transform:scale(1.04)}}
  @keyframes specialCardPop{from{opacity:0;transform:scale(.55) rotate(-7deg)}to{opacity:1;transform:scale(1) rotate(0)}}
  @media(prefers-reduced-motion:reduce){.special-reveal::before,.special-reveal::after,.special-reveal-panel{animation:none}}
  `;
  document.head.appendChild(style);
 }
 let overlay=document.querySelector('#special-reveal');
 if(!overlay){overlay=document.createElement('div');overlay.id='special-reveal';overlay.className='special-reveal';overlay.hidden=true;document.body.appendChild(overlay);}
 overlay.innerHTML='<div class="special-reveal-panel" role="dialog" aria-modal="true" aria-label="Carta SPECIAL conquistada"><div class="special-reveal-kicker">★ CARTA SPECIAL ★</div><img src="'+car.image+'" alt="'+car.name+'"><span class="rarity special">'+car.rarity+'</span><h2>'+car.name+'</h2><p>'+(duplicate?'Você encontrou outra cópia SPECIAL! Total: '+(1+state.cardCopies[car.id])+' cartas.':'Uma peça extraordinária entrou para sua coleção!')+'</p><button type="button" class="special-reveal-close">CONTINUAR</button></div>';
 overlay.hidden=false;
 const close=()=>{overlay.hidden=true;document.removeEventListener('keydown',onKey);};
 const onKey=e=>{if(e.key==='Escape')close();};
 overlay.querySelector('.special-reveal-close').onclick=close;
 overlay.onclick=e=>{if(e.target===overlay)close();};
 document.addEventListener('keydown',onKey);
}
function openPack(type){
 const pack=packOptions[type];if(!pack)return;
 if(state.money<pack.price){notify('Saldo insuficiente para este pacote.');return;}
 state.money-=pack.price;
 const roll=Math.random()*100;let car;
 if(roll<pack.special){const specials=cars.filter(c=>c.tier==='special');car=specials[Math.floor(Math.random()*specials.length)];}
 else{
  // Pacotes comuns só sorteiam veículos já conquistados/desbloqueados.
  // Os pesos dos níveis sem cartas disponíveis são redistribuídos
  // proporcionalmente entre os níveis que o jogador já possui.
  const available=Object.entries(pack.weights).map(([tier,weight])=>({
   tier,weight,pool:cars.filter(c=>c.tier===tier&&state.owned.includes(c.id))
  })).filter(entry=>entry.pool.length>0);
  const total=available.reduce((sum,entry)=>sum+entry.weight,0);
  let pick=Math.random()*total;
  let selected=available[available.length-1];
  for(const entry of available){pick-=entry.weight;if(pick<=0){selected=entry;break;}}
  const pool=selected.pool;
  car=pool[Math.floor(Math.random()*pool.length)];
 }
 const duplicate=state.owned.includes(car.id);
 if(duplicate)state.cardCopies[car.id]=(Number(state.cardCopies[car.id])||0)+1;else{state.owned.push(car.id);albumNewVehicleId=car.id;}
 state.selected=car.id;save();render();
 const result=document.querySelector('#pack-result');result.hidden=false;
 result.innerHTML='<div class="pack-result-heading">PACOTE ABERTO</div><div class="pack-result-card"><img src="'+car.image+'" alt=""><div><span class="rarity '+car.tier+'">'+car.rarity+'</span><h3>'+car.name+'</h3><p>'+(duplicate?'Carta repetida! Agora você tem '+(1+state.cardCopies[car.id])+' cópias.':'Nova carta adicionada à sua coleção!')+'</p></div></div>';
 if(car.tier==='special')showSpecialReveal(car,duplicate);
 else result.scrollIntoView({behavior:'smooth',block:'nearest'});
}
document.querySelectorAll('[data-pack]').forEach(button=>button.addEventListener('click',()=>openPack(button.dataset.pack)));

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
function buy(id){const c=getCar(id);if(state.owned.includes(id))return;if(state.money<c.price){notify('Dinheiro insuficiente. Trabalhe ou aguarde a renda da garagem.');return}state.money-=c.price;state.owned.push(id);state.selected=id;albumNewVehicleId=id;save();render();notify(c.name+' entrou para sua coleção!')}
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

const menuToggle=document.querySelector('#menu-toggle'),sideMenu=document.querySelector('#side-menu'),menuBackdrop=document.querySelector('#menu-backdrop');
function closeSideMenu(){sideMenu.classList.remove('open');menuBackdrop.classList.remove('show');menuToggle.setAttribute('aria-expanded','false');sideMenu.setAttribute('aria-hidden','true');}
const resetProgressButton=document.createElement('button');
resetProgressButton.type='button';
resetProgressButton.innerHTML='<span>↻</span><span><strong>Reiniciar progresso</strong><small>Apagar toda a sua evolução</small></span>';
sideMenu.insertBefore(resetProgressButton,sideMenu.querySelector('.side-menu-note'));
resetProgressButton.addEventListener('click',()=>{
 if(!window.confirm('Tem certeza que deseja apagar TODO o seu progresso? Dinheiro, carros, cartas, cópias e melhorias serão perdidos permanentemente.'))return;
 if(saveClickTimer){clearTimeout(saveClickTimer);saveClickTimer=null;}
 try{localStorage.removeItem(key);localStorage.removeItem(activeTabKey);localStorage.removeItem(key+'_openRarity');}catch(e){}
 state={...defaultState,money:defaultState.money,owned:['city'],selected:'city',clickLevel:0,incomeLevel:0,networkLevel:0,lastSave:Date.now(),lastDaily:'',missionClaimed:false,cardCopies:{}};
 openDealershipRarity=null;albumRarity='common';albumNewVehicleId=null;
 const packResult=document.querySelector('#pack-result');if(packResult)packResult.hidden=true;
 save();
 render();
 renderUpgrades();
 renderDaily();
 renderMission();
 activateTab('garage',false);
 closeSideMenu();
 notify('Progresso reiniciado. Sua nova garagem está pronta!');
});
menuToggle.addEventListener('click',()=>{const open=!sideMenu.classList.contains('open');sideMenu.classList.toggle('open',open);menuBackdrop.classList.toggle('show',open);menuToggle.setAttribute('aria-expanded',String(open));sideMenu.setAttribute('aria-hidden',String(!open));});
menuBackdrop.addEventListener('click',closeSideMenu);
sideMenu.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.view').forEach(view=>view.classList.toggle('active',view.id===button.dataset.page));document.querySelectorAll('.tab').forEach(tab=>tab.classList.remove('active'));closeSideMenu();window.scrollTo({top:0,behavior:'smooth'});}));

const activeTabKey=key+'_activeTab';
function activateTab(tabId,remember=true){
 const valid=['garage','dealership','collection','upgrades'];
 const selected=valid.includes(tabId)?tabId:'garage';
 document.querySelectorAll('.tab').forEach(button=>button.classList.toggle('active',button.dataset.tab===selected));
 document.querySelectorAll('.view').forEach(view=>view.classList.toggle('active',view.id===selected+'-view'));
 if(remember){try{localStorage.setItem(activeTabKey,selected);}catch(e){}}
}
document.querySelectorAll('.tab').forEach(button=>button.onclick=()=>activateTab(button.dataset.tab));
let savedTab='garage';
try{savedTab=localStorage.getItem(activeTabKey)||'garage';}catch(e){}
const elapsed=Math.max(0,Math.min(8*60*60,(Date.now()-(state.lastSave||Date.now()))/1000));
const offline=Math.floor(income()*elapsed/60);
if(offline>0){state.money+=offline;setTimeout(()=>notify('Enquanto esteve fora, sua garagem rendeu '+fmt(offline)+'.'),700)}
save();render();
// A interface só é restaurada depois da renderização inicial.
try{savedTab=localStorage.getItem(activeTabKey)||savedTab;}catch(e){}
activateTab(savedTab,false);
setInterval(()=>{const gain=income()/60;state.money+=gain;document.querySelector('#money').textContent=fmt(state.money);renderPackButtons();document.querySelectorAll('[data-buy]').forEach(b=>{const c=getCar(b.dataset.buy);b.disabled=state.money<c.price});document.querySelectorAll('[data-upgrade]').forEach(b=>{const u=upgrades.find(x=>x.kind===b.dataset.upgrade);const lv=x=>x==='click'?state.clickLevel:x==='income'?state.incomeLevel:state.networkLevel; b.disabled=state.money<Math.floor(u.base*Math.pow(1.85,lv(u.kind)))});},1000);
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
