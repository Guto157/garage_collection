const cars=[
{id:'city',name:'Volkswagen Golf GTI',class:'Hatch esportivo',rarity:'COMUM',tier:'common',price:0,income:3,description:'Seu primeiro esportivo. O começo da coleção.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Volkswagen_Golf_GTi_MK_7.jpg/1280px-Volkswagen_Golf_GTi_MK_7.jpg'},
{id:'porsche',name:'Porsche 911 Carrera',class:'Esportivo',rarity:'INCOMUM',tier:'uncommon',price:80000,income:40,description:'Um ícone das estradas, com design inconfundível.',image:'https://upload.wikimedia.org/wikipedia/commons/b/b5/Porsche_911_Carrera.jpg'},
{id:'mercedes',name:'Mercedes-AMG GT',class:'Grand tourer',rarity:'RARO',tier:'rare',price:600000,income:140,description:'Elegância alemã com desempenho de pista.',image:'https://upload.wikimedia.org/wikipedia/commons/b/bf/MERCEDES-AMG_GT.jpg'},
{id:'ferrari',name:'Ferrari 458 Italia',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:5000000,income:500,description:'Um V8 italiano e linhas que marcaram época.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Ferrari458Italia.jpg/1280px-Ferrari458Italia.jpg'},
{id:'lamborghini',name:'Lamborghini Aventador',class:'Superesportivo',rarity:'ÉPICO',tier:'epic',price:40000000,income:600,description:'Presença extrema e desempenho extraordinário.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Lamborghini_Aventador.jpg/1280px-Lamborghini_Aventador.jpg'},
{id:'porschegt',name:'Porsche 911 GT2 RS',class:'Track-focused',rarity:'LENDÁRIO',tier:'legendary',price:300000000,income:2000,description:'Uma máquina de alto desempenho feita para a pista.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Porsche_911_GT2_RS.jpg/1280px-Porsche_911_GT2_RS.jpg'},
{id:'mclaren',name:'McLaren 720S',class:'Hipercarro',rarity:'LENDÁRIO',tier:'legendary',price:2500000000,income:2500,description:'Tecnologia, leveza e aerodinâmica de outro nível.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/McLaren_720S.jpg/1280px-McLaren_720S.jpg'},
{id:'bugatti',name:'Bugatti Chiron',class:'Hipercarro',rarity:'MÍTICO',tier:'mythic',price:20000000000,income:9000,description:'O topo absoluto da engenharia automotiva.',image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/A_Bugatti_Chiron.jpg/1280px-A_Bugatti_Chiron.jpg'},
{id:'special-300slr',name:'Mercedes-Benz 300 SLR Uhlenhaut Coupé',class:'Protótipo de competição · 1955',rarity:'SPECIAL',tier:'special',price:1000000000000000,income:35000,description:'Um dos apenas dois exemplares construídos. Recordista mundial de venda, arrematado por €135 milhões.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1955%20Mercedes-Benz%20300%20SLR%20Uhlenhaut%20Coupe%20%2C%20Mercedes%20Museum%20%2C%20Stuttgart%20%2C%20Germany%20Ank%20Kumar%20Infosys%20Limited%2003.jpg?width=1280'},
{id:'special-w196r',name:'Mercedes-Benz W 196 R Stromlinienwagen',class:'Fórmula 1 histórico · 1954',rarity:'SPECIAL',tier:'special',price:850000000000000,income:40000,description:'A lendária Flecha de Prata de competição, pilotada na era de Juan Manuel Fangio.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1955%20Mercedes-Benz%20W196%20R%20Stromlinie%20Goodwood%2C%202009%20%2801%29.jpg?width=1280'},
{id:'special-330lm',name:'Ferrari 330 LM / 250 GTO Scaglietti',class:'Competizione · 1962 · Chassi 3765 LM',rarity:'SPECIAL',tier:'special',price:800000000000000,income:45000,description:'Exemplar de competição com histórico em Le Mans, vendido por US$ 51,7 milhões em leilão.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1962%20Ferrari%20330%20LMB.jpg?width=1280'},
{id:'special-250gto',name:'Ferrari 250 GTO',class:'Berlinetta de competição · 1962 · Chassi 3413 GT',rarity:'SPECIAL',tier:'special',price:750000000000000,income:50000,description:'Um dos cerca de 36 Ferrari 250 GTO construídos. Ícone absoluto entre colecionadores.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1962%20Ferrari%20250%20GTO%203413GT%2C%20Series%20II%20update%2C%20right%20side%20front.jpg?width=1280'},
{id:'special-daytona',name:'Shelby Cobra Daytona Coupé',class:'GT de competição · 1964 · CSX2300',rarity:'SPECIAL',tier:'special',price:700000000000000,income:55000,description:'Coupé de corrida raríssimo, criado para enfrentar a Ferrari nas pistas.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/1964%20Shelby%20Daytona%20Coupe.jpg?width=1280'},
{id:'special-la-voiture-noire',name:'Bugatti La Voiture Noire',class:'Hipercarro exclusivo · 2019 · exemplar único',rarity:'SPECIAL',tier:'special',price:650000000000000,income:60000,description:'Um exemplar único criado como homenagem ao Type 57 SC Atlantic, com carroceria exclusiva e acabamento artesanal.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti-La-Voiture-Noire.jpg?width=1280'},
{id:'special-boat-tail',name:'Rolls-Royce Boat Tail',class:'Coachbuilt de luxo · 2021 · série de 3 unidades',rarity:'SPECIAL',tier:'special',price:600000000000000,income:65000,description:'Obra de carroceria sob medida, produzida em apenas três unidades para clientes selecionados.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Rolls-Royce_Boat_Tail_side.png?width=1280'},
{id:'special-zonda-hp',name:'Pagani Zonda HP Barchetta',class:'Hipercarro artesanal · 2018 · série de 3 unidades',rarity:'SPECIAL',tier:'special',price:550000000000000,income:70000,description:'Uma das versões mais exclusivas do Zonda, com produção limitada a três exemplares.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Pagani_Zonda_HP_Barchetta.jpg?width=1280'},
{id:'special-huayra-codalunga',name:'Pagani Huayra Codalunga',class:'Hipercarro artesanal · 2022 · série de 5 unidades',rarity:'SPECIAL',tier:'special',price:500000000000000,income:75000,description:'Edição de carroceria alongada e produção limitada a cinco exemplares, criada pelo programa Grandi Complicazioni.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Pagani_Huayra_Codalunga.jpg?width=1280'},
{id:'special-centodieci',name:'Bugatti Centodieci',class:'Hipercarro de edição limitada · 2022 · 10 unidades',rarity:'SPECIAL',tier:'special',price:450000000000000,income:80000,description:'Edição comemorativa inspirada no EB110, limitada a apenas dez exemplares em todo o mundo.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti_Centodieci.jpg?width=1280'},
{id:'fiat-uno',name:'Fiat Uno Turbo i.e.',class:'Hatch esportivo · 1994',rarity:'COMUM',tier:'common',price:12000,income:7,description:'Fiat Uno Turbo i.e. é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Fiat%20Uno%20Turbo%20i.e..jpg?width=1280'},
{id:'gol-gti',name:'Volkswagen Gol GTI 2.0',class:'Hatch esportivo · 1994',rarity:'COMUM',tier:'common',price:18000,income:10,description:'Volkswagen Gol GTI 2.0 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Volkswagen%20Gol%20GTI%202.0.jpg?width=1280'},
{id:'civic-eg',name:'Honda Civic Si EG6',class:'Cupê esportivo · 1993',rarity:'COMUM',tier:'common',price:25000,income:13,description:'Honda Civic Si EG6 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20Civic%20Si%20EG6.jpg?width=1280'},
{id:'peugeot-205',name:'Peugeot 205 GTI',class:'Hatch esportivo · 1984',rarity:'COMUM',tier:'common',price:32000,income:16,description:'Peugeot 205 GTI é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Peugeot%20205%20GTI.jpg?width=1280'},
{id:'miata-na',name:'Mazda MX-5 NA',class:'Roadster · 1990',rarity:'COMUM',tier:'common',price:40000,income:19,description:'Mazda MX-5 NA é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mazda%20MX-5%20NA.jpg?width=1280'},
{id:'clio-v6',name:'Renault Clio V6',class:'Hatch esportivo · 2001',rarity:'COMUM',tier:'common',price:48000,income:22,description:'Renault Clio V6 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Renault%20Clio%20V6.jpg?width=1280'},
{id:'celica-gt',name:'Toyota Celica GT-Four',class:'Cupê esportivo · 1994',rarity:'COMUM',tier:'common',price:56000,income:25,description:'Toyota Celica GT-Four é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Celica%20GT-Four.jpg?width=1280'},
{id:'escort-cosworth',name:'Ford Escort RS Cosworth',class:'Hatch esportivo · 1992',rarity:'COMUM',tier:'common',price:64000,income:28,description:'Ford Escort RS Cosworth é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20Escort%20RS%20Cosworth.jpg?width=1280'},
{id:'kadett-gsi',name:'Chevrolet Kadett GSi',class:'Hatch esportivo · 1992',rarity:'COMUM',tier:'common',price:72000,income:31,description:'Chevrolet Kadett GSi é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Kadett%20GSi.jpg?width=1280'},
{id:'bmw-m3-e36',name:'BMW M3 E36',class:'Cupê esportivo · 1995',rarity:'INCOMUM',tier:'uncommon',price:90000,income:48,description:'BMW M3 E36 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M3%20E36.jpg?width=1280'},
{id:'nissan-300zx',name:'Nissan 300ZX Twin Turbo',class:'GT · 1991',rarity:'INCOMUM',tier:'uncommon',price:105000,income:56,description:'Nissan 300ZX Twin Turbo é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Nissan%20300ZX%20Twin%20Turbo.jpg?width=1280'},
{id:'supra-mk3',name:'Toyota Supra Turbo Mk III',class:'GT · 1990',rarity:'INCOMUM',tier:'uncommon',price:120000,income:64,description:'Toyota Supra Turbo Mk III é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Supra%20Turbo%20Mk%20III.jpg?width=1280'},
{id:'rx7-fd',name:'Mazda RX-7 FD',class:'Cupê esportivo · 1993',rarity:'INCOMUM',tier:'uncommon',price:135000,income:72,description:'Mazda RX-7 FD é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mazda%20RX-7%20FD.jpg?width=1280'},
{id:'s2000',name:'Honda S2000',class:'Roadster · 2000',rarity:'INCOMUM',tier:'uncommon',price:150000,income:80,description:'Honda S2000 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Honda%20S2000.jpg?width=1280'},
{id:'audi-tt-rs',name:'Audi TT RS',class:'Cupê esportivo · 2012',rarity:'INCOMUM',tier:'uncommon',price:165000,income:88,description:'Audi TT RS é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20TT%20RS.jpg?width=1280'},
{id:'mustang-boss',name:'Ford Mustang Boss 302',class:'Muscle car · 2012',rarity:'INCOMUM',tier:'uncommon',price:180000,income:96,description:'Ford Mustang Boss 302 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20Mustang%20Boss%20302.jpg?width=1280'},
{id:'camaro-ss',name:'Chevrolet Camaro SS',class:'Muscle car · 2010',rarity:'INCOMUM',tier:'uncommon',price:195000,income:104,description:'Chevrolet Camaro SS é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Camaro%20SS.jpg?width=1280'},
{id:'subaru-22b',name:'Subaru Impreza 22B STI',class:'Rally homologation · 1998',rarity:'INCOMUM',tier:'uncommon',price:210000,income:112,description:'Subaru Impreza 22B STI é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Subaru%20Impreza%2022B%20STI.jpg?width=1280'},
{id:'bmw-m5-e39',name:'BMW M5 E39',class:'Sedã esportivo · 2001',rarity:'RARO',tier:'rare',price:750000,income:160,description:'BMW M5 E39 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/BMW%20M5%20E39.jpg?width=1280'},
{id:'corvette-c6',name:'Chevrolet Corvette Z06 C6',class:'Esportivo · 2006',rarity:'RARO',tier:'rare',price:900000,income:180,description:'Chevrolet Corvette Z06 C6 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Corvette%20Z06%20C6.jpg?width=1280'},
{id:'aston-v8-vantage',name:'Aston Martin V8 Vantage',class:'GT · 2008',rarity:'RARO',tier:'rare',price:1050000,income:200,description:'Aston Martin V8 Vantage é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Aston%20Martin%20V8%20Vantage.jpg?width=1280'},
{id:'lotus-exige',name:'Lotus Exige S',class:'Esportivo leve · 2010',rarity:'RARO',tier:'rare',price:1200000,income:220,description:'Lotus Exige S é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Lotus%20Exige%20S.jpg?width=1280'},
{id:'nissan-gt-r',name:'Nissan GT-R R35',class:'Superesportivo · 2012',rarity:'RARO',tier:'rare',price:1350000,income:240,description:'Nissan GT-R R35 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Nissan%20GT-R%20R35.jpg?width=1280'},
{id:'audi-r8-v10',name:'Audi R8 V10',class:'Superesportivo · 2010',rarity:'RARO',tier:'rare',price:1500000,income:260,description:'Audi R8 V10 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Audi%20R8%20V10.jpg?width=1280'},
{id:'jaguar-f-type',name:'Jaguar F-Type R',class:'GT · 2015',rarity:'RARO',tier:'rare',price:1650000,income:280,description:'Jaguar F-Type R é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jaguar%20F-Type%20R.jpg?width=1280'},
{id:'maserati-granturismo',name:'Maserati GranTurismo MC',class:'GT · 2013',rarity:'RARO',tier:'rare',price:1800000,income:300,description:'Maserati GranTurismo MC é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati%20GranTurismo%20MC.jpg?width=1280'},
{id:'lexus-lfa',name:'Lexus LFA',class:'Superesportivo · 2012',rarity:'RARO',tier:'rare',price:1950000,income:320,description:'Lexus LFA é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Lexus%20LFA.jpg?width=1280'},
{id:'ferrari-f430',name:'Ferrari F430 Scuderia',class:'Superesportivo · 2008',rarity:'ÉPICO',tier:'epic',price:8000000,income:700,description:'Ferrari F430 Scuderia é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20F430%20Scuderia.jpg?width=1280'},
{id:'lambo-gallardo',name:'Lamborghini Gallardo Superleggera',class:'Superesportivo · 2007',rarity:'ÉPICO',tier:'epic',price:12000000,income:800,description:'Lamborghini Gallardo Superleggera é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Gallardo%20Superleggera.jpg?width=1280'},
{id:'aston-db9',name:'Aston Martin DB9 GT',class:'GT · 2015',rarity:'ÉPICO',tier:'epic',price:16000000,income:900,description:'Aston Martin DB9 GT é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Aston%20Martin%20DB9%20GT.jpg?width=1280'},
{id:'ford-gt-2005',name:'Ford GT',class:'Supercarro · 2005',rarity:'ÉPICO',tier:'epic',price:20000000,income:1000,description:'Ford GT é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ford%20GT.jpg?width=1280'},
{id:'mercedes-sls',name:'Mercedes-Benz SLS AMG Black Series',class:'Superesportivo · 2013',rarity:'ÉPICO',tier:'epic',price:24000000,income:1100,description:'Mercedes-Benz SLS AMG Black Series é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20SLS%20AMG%20Black%20Series.jpg?width=1280'},
{id:'maserati-mc12',name:'Maserati MC12',class:'Supercarro · 2005',rarity:'ÉPICO',tier:'epic',price:28000000,income:1200,description:'Maserati MC12 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Maserati%20MC12.jpg?width=1280'},
{id:'jaguar-xj220',name:'Jaguar XJ220',class:'Supercarro · 1993',rarity:'ÉPICO',tier:'epic',price:32000000,income:1300,description:'Jaguar XJ220 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Jaguar%20XJ220.jpg?width=1280'},
{id:'porsche-carrera-gt',name:'Porsche Carrera GT',class:'Supercarro · 2005',rarity:'ÉPICO',tier:'epic',price:36000000,income:1400,description:'Porsche Carrera GT é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20Carrera%20GT.jpg?width=1280'},
{id:'ferrari-enzo',name:'Ferrari Enzo',class:'Supercarro · 2004',rarity:'LENDÁRIO',tier:'legendary',price:400000000,income:3000,description:'Ferrari Enzo é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20Enzo.jpg?width=1280'},
{id:'porsche-918',name:'Porsche 918 Spyder',class:'Híbrido · 2015',rarity:'LENDÁRIO',tier:'legendary',price:500000000,income:3500,description:'Porsche 918 Spyder é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Porsche%20918%20Spyder.jpg?width=1280'},
{id:'mclaren-p1',name:'McLaren P1',class:'Híbrido · 2014',rarity:'LENDÁRIO',tier:'legendary',price:600000000,income:4000,description:'McLaren P1 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20P1.jpg?width=1280'},
{id:'laferrari',name:'Ferrari LaFerrari',class:'Híbrido · 2014',rarity:'LENDÁRIO',tier:'legendary',price:700000000,income:4500,description:'Ferrari LaFerrari é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20LaFerrari.jpg?width=1280'},
{id:'pagani-huayra',name:'Pagani Huayra',class:'Hipercarro · 2013',rarity:'LENDÁRIO',tier:'legendary',price:800000000,income:5000,description:'Pagani Huayra é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Huayra.jpg?width=1280'},
{id:'koenigsegg-agera',name:'Koenigsegg Agera R',class:'Hipercarro · 2012',rarity:'LENDÁRIO',tier:'legendary',price:900000000,income:5500,description:'Koenigsegg Agera R é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Agera%20R.jpg?width=1280'},
{id:'bugatti-veyron',name:'Bugatti Veyron Super Sport',class:'Hipercarro · 2010',rarity:'LENDÁRIO',tier:'legendary',price:1000000000,income:6000,description:'Bugatti Veyron Super Sport é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Veyron%20Super%20Sport.jpg?width=1280'},
{id:'mercedes-clk-gtr',name:'Mercedes-Benz CLK GTR',class:'Homologação GT1 · 1998',rarity:'LENDÁRIO',tier:'legendary',price:1500000000,income:6500,description:'Mercedes-Benz CLK GTR é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz%20CLK%20GTR.jpg?width=1280'},
{id:'mclaren-f1',name:'McLaren F1',class:'Hipercarro · 1994',rarity:'MÍTICO',tier:'mythic',price:25000000000,income:11000,description:'McLaren F1 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/McLaren%20F1.jpg?width=1280'},
{id:'bugatti-divo',name:'Bugatti Divo',class:'Hipercarro · 2020',rarity:'MÍTICO',tier:'mythic',price:30000000000,income:13000,description:'Bugatti Divo é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Bugatti%20Divo.jpg?width=1280'},
{id:'koenigsegg-one1',name:'Koenigsegg One:1',class:'Hipercarro · 2014',rarity:'MÍTICO',tier:'mythic',price:35000000000,income:15000,description:'Koenigsegg One:1 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20One1.jpg?width=1280'},
{id:'pagani-zonda-r',name:'Pagani Zonda R',class:'Track-only · 2009',rarity:'MÍTICO',tier:'mythic',price:40000000000,income:17000,description:'Pagani Zonda R é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Pagani%20Zonda%20R.jpg?width=1280'},
{id:'aston-one77',name:'Aston Martin One-77',class:'Hipercarro · 2011',rarity:'MÍTICO',tier:'mythic',price:50000000000,income:19000,description:'Aston Martin One-77 é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Aston%20Martin%20One-77.jpg?width=1280'},
{id:'lamborghini-veneno',name:'Lamborghini Veneno',class:'Hipercarro · 2014',rarity:'MÍTICO',tier:'mythic',price:60000000000,income:21000,description:'Lamborghini Veneno é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Lamborghini%20Veneno.jpg?width=1280'},
{id:'ferrari-fxxk',name:'Ferrari FXX K',class:'Track-only · 2015',rarity:'MÍTICO',tier:'mythic',price:70000000000,income:23000,description:'Ferrari FXX K é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Ferrari%20FXX%20K.jpg?width=1280'},
{id:'mercedes-amg-one',name:'Mercedes-AMG One',class:'Hipercarro híbrido · 2023',rarity:'MÍTICO',tier:'mythic',price:80000000000,income:25000,description:'Mercedes-AMG One é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-AMG%20One.jpg?width=1280'},
{id:'koenigsegg-jesko',name:'Koenigsegg Jesko Absolut',class:'Hipercarro · 2024',rarity:'MÍTICO',tier:'mythic',price:90000000000,income:27000,description:'Koenigsegg Jesko Absolut é um modelo marcante da história dos esportivos, escolhido para ampliar sua coleção.',image:'https://commons.wikimedia.org/wiki/Special:FilePath/Koenigsegg%20Jesko%20Absolut.jpg?width=1280'}

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
const defaultState={money:250,owned:['city'],selected:'city',clickLevel:0,incomeLevel:0,networkLevel:0,lastSave:Date.now(),lastDaily:'',missionClaimed:false,cardCopies:{},totalEarned:0,totalClicks:0,packsOpened:0,achievementClaims:{},albumPageClaims:{},freePacks:{basic:0,premium:0,elite:0}};
let state={...defaultState};
try{const raw=localStorage.getItem(key);if(raw){const parsed=JSON.parse(raw);state={...defaultState,...parsed};}}catch(e){console.warn('Save inválido, iniciando novo jogo',e)}
// Protege os níveis contra valores inválidos gravados em versões anteriores.
for(const field of ['clickLevel','incomeLevel','networkLevel']){const value=Number(state[field]);state[field]=Number.isFinite(value)&&value>=0?Math.floor(value):0;}
state.cardCopies=state.cardCopies&&typeof state.cardCopies==='object'?state.cardCopies:{};
for(const field of ['totalEarned','totalClicks','packsOpened']){const value=Number(state[field]);state[field]=Number.isFinite(value)&&value>=0?value:0;}
state.achievementClaims=state.achievementClaims&&typeof state.achievementClaims==='object'?state.achievementClaims:{};
state.albumPageClaims=state.albumPageClaims&&typeof state.albumPageClaims==='object'?state.albumPageClaims:{};
state.freePacks={...defaultState.freePacks,...(state.freePacks&&typeof state.freePacks==='object'?state.freePacks:{})};
for(const type of ['basic','premium','elite']){const value=Number(state.freePacks[type]);state.freePacks[type]=Number.isFinite(value)&&value>0?Math.floor(value):0;}
state.owned=[...new Set(['city',...(Array.isArray(state.owned)?state.owned:[])])].filter(id=>cars.some(c=>c.id===id));
if(!cars.some(c=>c.id===state.selected&&state.owned.includes(c.id)))state.selected=state.owned[0];
const incomeBase=()=>cars.filter(c=>state.owned.includes(c.id)).reduce((sum,c)=>sum+c.income,0);
const income=()=>incomeBase()*(1+state.incomeLevel*.65+state.networkLevel*1.4);
const clickPower=()=>15*Math.pow(1.5,state.clickLevel);
let toastTimer;
function save(){state.lastSave=Date.now();try{localStorage.setItem(key,JSON.stringify(state))}catch(e){console.warn('Não foi possível salvar',e)}}
function addMoney(amount){const value=Number(amount)||0;if(value<=0)return;state.money+=value;state.totalEarned=(Number(state.totalEarned)||0)+value;if(document.querySelector('#achievements-view')?.classList.contains('active'))renderAchievements();}
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
 const readyPages=rarityGroups.filter(group=>{const p=albumPageProgress(group.tier);return p.complete&&!p.claimed;}).length;
 const badge=document.querySelector('#collection-tab-count');
 if(badge){badge.classList.toggle('has-ready',readyPages>0);badge.setAttribute('aria-label',readyPages>0?readyPages+' páginas completas com recompensa para coletar':'Nenhuma recompensa de página disponível');}
 if(!rarityGroups.some(group=>group.tier===albumRarity))albumRarity='common';
 const tabs=document.querySelector('#album-rarity-tabs');
 tabs.innerHTML=rarityGroups.map(group=>{
  const all=cars.filter(car=>car.tier===group.tier);
  const owned=all.filter(car=>state.owned.includes(car.id)).length;
  const page=albumPageProgress(group.tier);
  return '<button type="button" class="album-rarity-tab '+(albumRarity===group.tier?'active':'')+'" data-album-rarity="'+group.tier+'"><span>'+group.label+'</span><small>'+owned+'/'+all.length+(page.complete&&!page.claimed?' · ★':'')+'</small></button>';
 }).join('');
 tabs.querySelectorAll('[data-album-rarity]').forEach(button=>button.onclick=()=>{
  albumRarity=button.dataset.albumRarity;
  try{localStorage.setItem(key+'_albumRarity',albumRarity);}catch(e){}
  renderAlbum();
 });
 const group=rarityGroups.find(item=>item.tier===albumRarity);
 const pageCars=cars.filter(car=>car.tier===albumRarity);
 const pageOwned=pageCars.filter(car=>state.owned.includes(car.id)).length;
 const pageProgress=albumPageProgress(albumRarity);
 const pageReward=albumPageRewards[albumRarity];
 const names={basic:'Garagem',premium:'Premium',elite:'Elite'};
 const tierIndex=rarityGroups.findIndex(item=>item.tier===albumRarity)+1;
 const stickers=pageCars.map((car,index)=>{
  if(!state.owned.includes(car.id)){
   return '<div class="album-empty-slot '+(car.tier==='special'?'special-slot':'')+'"><span class="album-slot-number">Nº '+String(index+1).padStart(2,'0')+'</span><div class="album-empty-mark">＋</div><strong>ESPAÇO VAGO</strong><small>FIGURINHA A DESCOBRIR</small></div>';
  }
  const isNew=albumNewVehicleId===car.id;
  const copies=1+Math.max(0,Number(state.cardCopies[car.id])||0);
  return '<article class="album-sticker album-sticker-interactive '+(car.tier==='special'?'album-special-sticker ':'')+(isNew?'just-added':'')+'" data-album-card="'+car.id+'" role="button" tabindex="0" aria-label="Ampliar carta '+car.name+'"><span class="album-sticker-number">Nº '+String(index+1).padStart(2,'0')+'</span><div class="album-sticker-photo"><img data-car-id="'+car.id+'" loading="lazy" src="'+car.image+'" alt="'+car.name+'"></div><div class="album-sticker-caption"><strong>'+car.name+'</strong><small>'+car.class+'</small><span>✓ CONQUISTADO</span></div><span class="album-sticker-copies">'+copies+'x</span></article>';
 }).join('');
 const rewardPanel=pageProgress.complete
  ?'<div class="album-page-reward '+(pageProgress.claimed?'claimed':'ready')+'"><div><strong>'+ (pageProgress.claimed?'✓ RECOMPENSA COLETADA':'★ PÁGINA COMPLETA!') +'</strong><small>'+(pageProgress.claimed?'Esta recompensa já foi resgatada.':'Você desbloqueou '+pageReward.count+' pacote '+names[pageReward.type]+(pageReward.count>1?'s':'')+'.')+'</small></div><button type="button" data-claim-album-page="'+albumRarity+'" '+(pageProgress.claimed?'disabled':'')+'>'+(pageProgress.claimed?'COLETADA':'COLETAR RECOMPENSA')+'</button></div>'
  :'';
 document.querySelector('#album-page').innerHTML='<div class="album-page-heading"><div><span>GARAGE COLLECTION · SÉRIE 01</span><h3>'+group.label+'</h3><p>'+group.note+'</p></div><strong>'+String(tierIndex).padStart(2,'0')+' / 07</strong></div><div class="album-page-stats"><span>'+pageOwned+' DE '+pageCars.length+' FIGURINHAS COLADAS</span><span>'+Math.round(pageOwned/Math.max(1,pageCars.length)*100)+'% COMPLETO</span></div>'+rewardPanel+'<div class="album-sticker-grid">'+stickers+'</div><div class="album-page-footer"><span>GARAGE COLLECTION</span><span>EDIÇÃO DE COLECIONADOR</span></div>';
 const claimButton=document.querySelector('[data-claim-album-page]');
 if(claimButton)claimButton.onclick=()=>claimAlbumPage(claimButton.dataset.claimAlbumPage);
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
renderAchievements();
}

const packOptions={
 // Pesos em porcentagem. A chance SPECIAL fica separada e preserva
 // exatamente as probabilidades definidas anteriormente.
 basic:{price:500,weights:{common:70,uncommon:22,rare:7.99999},special:0.00001},
 premium:{price:5000,weights:{common:10,uncommon:25,rare:40,epic:20,legendary:4.99998},special:0.00002},
 elite:{price:50000,weights:{common:5,uncommon:10,rare:20,epic:40,legendary:20,mythic:4.9999},special:0.0001}
};
const achievementDefinitions=[];
const addAchievement=(id,group,title,description,metric,target,rewardType,rewardCount)=>achievementDefinitions.push({id,group,title,description,metric,target,rewardType,rewardCount});
const cashGoals=[
 [500,'Primeiros ganhos','Acumule R$ 500.','basic',1],[1000,'Ritmo de garagem','Acumule R$ 1 mil.','basic',1],[5000,'Caixa crescendo','Acumule R$ 5 mil.','basic',1],[10000,'Pequena fortuna','Acumule R$ 10 mil.','basic',2],[25000,'Colecionador dedicado','Acumule R$ 25 mil.','basic',2],[50000,'Primeiro grande marco','Acumule R$ 50 mil.','basic',3],[100000,'Seis dígitos','Acumule R$ 100 mil.','premium',1],[250000,'Garagem valorizada','Acumule R$ 250 mil.','premium',1],[500000,'Meio milhão','Acumule R$ 500 mil.','premium',2],[1000000,'Milionário','Acumule R$ 1 milhão.','premium',2],[2500000,'Alto patrimônio','Acumule R$ 2,5 milhões.','premium',3],[5000000,'Grande investidor','Acumule R$ 5 milhões.','elite',1],[10000000,'Dez milhões','Acumule R$ 10 milhões.','elite',1],[25000000,'Magnata automotivo','Acumule R$ 25 milhões.','elite',2],[50000000,'Fortuna lendária','Acumule R$ 50 milhões.','elite',3]
];
cashGoals.forEach((g,i)=>addAchievement('cash-'+(i+1),'Dinheiro',g[1],g[2],'cash',g[0],g[3],g[4]));
const clickGoals=[
 [100,'Primeiros toques','Toque no carro 100 vezes.','basic',1],[500,'Mão firme','Toque no carro 500 vezes.','basic',1],[1000,'Mil toques','Toque no carro 1.000 vezes.','basic',2],[2500,'Dedo veloz','Toque no carro 2.500 vezes.','basic',2],[5000,'Colecionador ativo','Toque no carro 5.000 vezes.','premium',1],[10000,'Dez mil toques','Toque no carro 10 mil vezes.','premium',1],[25000,'Ritmo acelerado','Toque no carro 25 mil vezes.','premium',2],[50000,'Toque de mestre','Toque no carro 50 mil vezes.','premium',2],[100000,'Cem mil toques','Toque no carro 100 mil vezes.','elite',1],[250000,'Lenda dos cliques','Toque no carro 250 mil vezes.','elite',2]
];
clickGoals.forEach((g,i)=>addAchievement('click-'+(i+1),'Dedicação',g[1],g[2],'clicks',g[0],g[3],g[4]));
const carGoals=[
 [2,'Coleção começando','Conquiste 2 veículos.','basic',1],[5,'Pequena garagem','Conquiste 5 veículos.','basic',1],[10,'Dez máquinas','Conquiste 10 veículos.','basic',2],[15,'Garagem em expansão','Conquiste 15 veículos.','premium',1],[20,'Vinte conquistas','Conquiste 20 veículos.','premium',1],[30,'Coleção respeitável','Conquiste 30 veículos.','premium',2],[40,'Grande coleção','Conquiste 40 veículos.','premium',2],[50,'Colecionador experiente','Conquiste 50 veículos.','elite',1],[60,'Quase completa','Conquiste 60 veículos.','elite',2],[cars.length,'Álbum completo','Desbloqueie todos os '+cars.length+' veículos do álbum.','elite',3]
];
carGoals.forEach((g,i)=>addAchievement('cars-'+(i+1),'Coleção',g[1],g[2],'cars',g[0],g[3],g[4]));
const rarityNames={common:'COMUM',uncommon:'INCOMUM',rare:'RARO',epic:'ÉPICO',legendary:'LENDÁRIO',mythic:'MÍTICO',special:'SPECIAL'};
const rarityRewards=[['basic',2],['premium',1],['premium',2],['premium',3],['elite',1],['elite',2],['elite',3]];
Object.keys(rarityNames).forEach((tier,i)=>{const total=cars.filter(c=>c.tier===tier).length;addAchievement('rarity-'+tier,'Raridades','Raridade '+rarityNames[tier],'Conquiste todos os '+total+' veículos da raridade '+rarityNames[tier]+'.','rarity:'+tier,total,rarityRewards[i][0],rarityRewards[i][1]);});
[[1,'Primeiro investimento','Compre sua primeira melhoria.','basic',1],[5,'Oficina equipada','Alcance 5 níveis somados de melhorias.','basic',2],[10,'Preparação avançada','Alcance 10 níveis somados de melhorias.','premium',1],[20,'Engenharia de ponta','Alcance 20 níveis somados de melhorias.','premium',2],[35,'Mestre da performance','Alcance 35 níveis somados de melhorias.','elite',1]].forEach((g,i)=>addAchievement('upgrade-'+(i+1),'Melhorias',g[1],g[2],'upgrades',g[0],g[3],g[4]));
[[1,'Primeiro pacote','Abra seu primeiro pacote.','basic',1],[10,'Abrindo a coleção','Abra 10 pacotes.','premium',1],[25,'Viciado em coleção','Abra 25 pacotes.','elite',1]].forEach((g,i)=>addAchievement('packs-'+(i+1),'Pacotes',g[1],g[2],'packs',g[0],g[3],g[4]));
if(achievementDefinitions.length!==50)throw new Error('Quantidade de conquistas inválida: '+achievementDefinitions.length);
function achievementProgress(item){
 let current=0;
 if(item.metric==='cash')current=state.totalEarned;
 else if(item.metric==='clicks')current=state.totalClicks;
 else if(item.metric==='cars')current=state.owned.length;
 else if(item.metric==='upgrades')current=state.clickLevel+state.incomeLevel+state.networkLevel;
 else if(item.metric==='packs')current=state.packsOpened;
 else if(item.metric.startsWith('rarity:'))current=state.owned.filter(id=>getCar(id).tier===item.metric.split(':')[1]).length;
 return {current:Math.min(item.target,current),done:current>=item.target,percent:Math.min(100,current/item.target*100)};
}
function rewardLabel(item){const names={basic:'Garagem',premium:'Premium',elite:'Elite'};return item.rewardCount+' pacote '+names[item.rewardType]+(item.rewardCount>1?'s':'');}
const albumPageRewards={common:{type:'basic',count:1},uncommon:{type:'basic',count:2},rare:{type:'premium',count:1},epic:{type:'premium',count:2},legendary:{type:'elite',count:1},mythic:{type:'elite',count:2},special:{type:'elite',count:3}};
function albumPageProgress(tier){
 const page=cars.filter(car=>car.tier===tier);
 const owned=page.filter(car=>state.owned.includes(car.id)).length;
 return {total:page.length,owned,complete:page.length>0&&owned===page.length,claimed:!!state.albumPageClaims[tier]};
}
function claimAlbumPage(tier){
 const progress=albumPageProgress(tier),reward=albumPageRewards[tier];
 if(!progress.complete||progress.claimed||!reward)return;
 state.albumPageClaims[tier]=true;
 state.freePacks[reward.type]=(state.freePacks[reward.type]||0)+reward.count;
 save();renderAlbum();renderFreePacks();
 const names={basic:'Garagem',premium:'Premium',elite:'Elite'};
 notify('Página completa! Você recebeu '+reward.count+' pacote '+names[reward.type]+(reward.count>1?'s':'')+'.');
}

function claimAchievement(id){
 const item=achievementDefinitions.find(a=>a.id===id);if(!item||state.achievementClaims[id]||!achievementProgress(item).done)return;
 state.achievementClaims[id]=true;state.freePacks[item.rewardType]=(state.freePacks[item.rewardType]||0)+item.rewardCount;
 save();renderAchievements();notify('Conquista resgatada: '+rewardLabel(item)+' grátis!');
}
function renderAchievements(){
 const root=document.querySelector('#achievements-view');if(!root)return;
 const claimed=achievementDefinitions.filter(a=>state.achievementClaims[a.id]).length;
 const completed=achievementDefinitions.filter(a=>achievementProgress(a).done).length;
 const readyItems=achievementDefinitions.filter(a=>achievementProgress(a).done&&!state.achievementClaims[a.id]);
 const ready=readyItems.length;
 const badge=document.querySelector('#achievement-tab-count');
 if(badge){badge.classList.toggle('has-ready',ready>0);badge.setAttribute('aria-label',ready>0?ready+' conquistas prontas para resgatar':'Nenhuma conquista pronta');}
 const renderCard=item=>{
  const p=achievementProgress(item),isClaimed=!!state.achievementClaims[item.id];
  const current=item.metric==='cash'?fmt(p.current):Math.floor(p.current).toLocaleString('pt-BR');
  const target=item.metric==='cash'?fmt(item.target):item.target.toLocaleString('pt-BR');
  return '<article class="achievement-card '+(isClaimed?'claimed':p.done?'ready':'')+'"><div class="achievement-card-top"><span class="achievement-medal">'+(isClaimed?'✓':p.done?'★':'◇')+'</span><span class="achievement-reward">'+rewardLabel(item)+'</span></div><h4>'+item.title+'</h4><p>'+item.description+'</p><div class="achievement-progress"><span style="width:'+p.percent+'%"></span></div><div class="achievement-card-bottom"><small>'+current+' / '+target+'</small><button type="button" data-claim-achievement="'+item.id+'" '+(!p.done||isClaimed?'disabled':'')+'>'+(isClaimed?'RESGATADA':p.done?'RESGATAR':'EM ANDAMENTO')+'</button></div></article>';
 };
 const readySection=readyItems.length?'<section class="achievement-group achievement-ready-group"><div class="achievement-group-heading"><h3>Prontas para resgatar</h3><span>'+readyItems.length+' disponíveis</span></div><div class="achievement-grid">'+readyItems.map(renderCard).join('')+'</div></section>':'';
 const groups=['Dinheiro','Dedicação','Coleção','Raridades','Melhorias','Pacotes'];
 const cards=groups.map(group=>{
  const items=achievementDefinitions.filter(a=>a.group===group&&!(!state.achievementClaims[a.id]&&achievementProgress(a).done));
  if(!items.length)return '';
  return '<section class="achievement-group"><div class="achievement-group-heading"><h3>'+group+'</h3><span>'+items.filter(a=>achievementProgress(a).done).length+' / '+items.length+'</span></div><div class="achievement-grid">'+items.map(renderCard).join('')+'</div></section>';
 }).join('');
 root.innerHTML='<div class="achievement-intro"><div><span class="eyebrow">DESAFIOS DO COLECIONADOR</span><h2>Conquistas</h2><p>Complete objetivos e resgate suas recompensas.</p></div><div class="achievement-summary"><strong>'+completed+' / 50</strong><small>CONQUISTAS LIBERADAS</small><span>'+claimed+' RESGATADAS</span></div></div>'+readySection+cards;
 root.querySelectorAll('[data-claim-achievement]').forEach(button=>button.addEventListener('click',()=>claimAchievement(button.dataset.claimAchievement)));
 renderFreePacks();
}
function renderFreePacks(){
 const root=document.querySelector('#free-pack-inventory');if(!root)return;
 const names={basic:'Garagem',premium:'Premium',elite:'Elite'};
 const packs=['basic','premium','elite'].map(type=>'<article class="achievement-pack '+type+'"><span class="achievement-pack-icon">'+(type==='basic'?'▧':type==='premium'?'✦':'♛')+'</span><div><strong>Pacote '+names[type]+'</strong><small>Disponíveis: '+(state.freePacks[type]||0)+'</small></div><button type="button" data-free-pack="'+type+'" '+(!(state.freePacks[type]>0)?'disabled':'')+'>ABRIR GRÁTIS</button></article>').join('');
 root.innerHTML='<div class="achievement-inventory shop-free-packs"><div class="achievement-inventory-heading"><div><span class="eyebrow">RECOMPENSAS CONQUISTADAS</span><h3>Seus pacotes grátis</h3></div><small>Pacotes recebidos ao completar desafios</small></div><div class="achievement-pack-list">'+packs+'</div><div id="free-pack-result" class="pack-result" hidden></div></div>';
 root.querySelectorAll('[data-free-pack]').forEach(button=>button.addEventListener('click',()=>openPack(button.dataset.freePack,true,'#free-pack-result')));
}
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
function openPack(type,free=false,resultTarget='#pack-result'){
 const pack=packOptions[type];if(!pack)return;
 if(free){if(!(state.freePacks[type]>0)){notify('Você não tem esse pacote grátis disponível.');return;}state.freePacks[type]--;}
 else{if(state.money<pack.price){notify('Saldo insuficiente para este pacote.');return;}state.money-=pack.price;}
 state.packsOpened=(Number(state.packsOpened)||0)+1;
 const roll=Math.random()*100;let car;
 if(roll<pack.special){
  const specials=cars.filter(c=>c.tier==='special');
  car=specials[Math.floor(Math.random()*specials.length)];
 }else{
  // Os pacotes podem desbloquear qualquer veículo da raridade sorteada,
  // mesmo que ele ainda esteja bloqueado na concessionária ou no álbum.
  const available=Object.entries(pack.weights);
  let pick=Math.random()*available.reduce((sum,entry)=>sum+entry[1],0);
  let selected=available[available.length-1][0];
  for(const [tier,weight] of available){pick-=weight;if(pick<=0){selected=tier;break;}}
  const pool=cars.filter(c=>c.tier===selected);
  car=pool[Math.floor(Math.random()*pool.length)];
 }
 const duplicate=state.owned.includes(car.id);
 if(duplicate)state.cardCopies[car.id]=(Number(state.cardCopies[car.id])||0)+1;else{state.owned.push(car.id);albumNewVehicleId=car.id;}
 state.selected=car.id;save();render();
 const result=document.querySelector(resultTarget);if(result){result.hidden=false;
 result.innerHTML='<div class="pack-result-heading">'+(free?'RECOMPENSA ABERTA':'PACOTE ABERTO')+'</div><div class="pack-result-card"><img src="'+car.image+'" alt=""><div><span class="rarity '+car.tier+'">'+car.rarity+'</span><h3>'+car.name+'</h3><p>'+(duplicate?'Carta adicionada ao álbum.':'Nova carta desbloqueada e adicionada ao álbum!')+'</p></div></div>';}
 if(car.tier==='special')showSpecialReveal(car,duplicate);
 else if(result)result.scrollIntoView({behavior:'smooth',block:'nearest'});
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
 state.totalClicks=(Number(state.totalClicks)||0)+1;
 addMoney(clickPower());
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
document.querySelector('#daily-button').onclick=()=>{const today=new Date().toLocaleDateString('en-CA');if(state.lastDaily===today)return;state.lastDaily=today;addMoney(500);save();render();notify('Bônus diário de R$ 500 resgatado!')};
document.querySelector('#mission-button').onclick=()=>{if(state.owned.length<2||state.missionClaimed)return;addMoney(1000);state.missionClaimed=true;save();render();notify('Missão concluída: +R$ 1.000!')};

const menuToggle=document.querySelector('#menu-toggle'),sideMenu=document.querySelector('#side-menu'),menuBackdrop=document.querySelector('#menu-backdrop');
function closeSideMenu(){sideMenu.classList.remove('open');menuBackdrop.classList.remove('show');menuToggle.setAttribute('aria-expanded','false');sideMenu.setAttribute('aria-hidden','true');}
const resetProgressButton=document.createElement('button');
resetProgressButton.type='button';
resetProgressButton.innerHTML='<span>↻</span><span><strong>Reiniciar progresso</strong><small>Apagar toda a sua evolução</small></span>';
sideMenu.insertBefore(resetProgressButton,sideMenu.querySelector('.side-menu-note'));
const resetConfirmStyle=document.createElement('style');
resetConfirmStyle.textContent='.reset-confirm-overlay{position:fixed;inset:0;z-index:10050;display:flex;align-items:center;justify-content:center;padding:22px;background:rgba(3,7,13,.88);backdrop-filter:blur(7px)}.reset-confirm-overlay[hidden]{display:none}.reset-confirm-panel{width:min(100%,390px);padding:25px 22px;border:1px solid #39485d;border-radius:16px;background:linear-gradient(155deg,#182333,#0b111b);box-shadow:0 22px 70px #000b;text-align:center;color:#edf3fb}.reset-confirm-icon{font-size:34px;color:#f2b84b;margin-bottom:8px}.reset-confirm-panel h2{margin:0 0 10px;font-size:22px}.reset-confirm-panel p{margin:0 0 13px;color:#b7c3d2;font-size:14px;line-height:1.55}.reset-confirm-panel .preserve-note{padding:10px 12px;margin:0 0 18px;border:1px solid #3d674f;border-radius:9px;background:#12251b;color:#a8e6bc;font-size:12px}.reset-confirm-actions{display:grid;grid-template-columns:1fr 1fr;gap:10px}.reset-confirm-actions button{min-height:44px;border-radius:8px;font-weight:800;cursor:pointer}.reset-cancel{border:1px solid #45546a;background:#202d3d;color:#e5edf7}.reset-continue{border:1px solid #a84b4b;background:#7e2929;color:#fff}';
document.head.appendChild(resetConfirmStyle);
const resetConfirm=document.createElement('div');
resetConfirm.className='reset-confirm-overlay';
resetConfirm.hidden=true;
resetConfirm.innerHTML='<div class="reset-confirm-panel" role="dialog" aria-modal="true" aria-labelledby="reset-confirm-title"><div class="reset-confirm-icon">⚠</div><h2 id="reset-confirm-title">Reiniciar progresso?</h2><p>Todo o dinheiro, veículos comuns e raros, melhorias, bônus e missões serão reiniciados.</p><div class="preserve-note">★ Suas cartas SPECIAL conquistadas e suas cópias serão mantidas.</div><div class="reset-confirm-actions"><button type="button" class="reset-cancel">CANCELAR</button><button type="button" class="reset-continue">CONTINUAR</button></div></div>';
document.body.appendChild(resetConfirm);
function closeResetConfirm(){resetConfirm.hidden=true;}
resetConfirm.querySelector('.reset-cancel').addEventListener('click',closeResetConfirm);
resetConfirm.addEventListener('click',event=>{if(event.target===resetConfirm)closeResetConfirm();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!resetConfirm.hidden)closeResetConfirm();});
resetProgressButton.addEventListener('click',()=>{
 resetConfirm.hidden=false;
 resetConfirm.querySelector('.reset-cancel').focus();
});
resetConfirm.querySelector('.reset-continue').addEventListener('click',()=>{
 closeResetConfirm();
 if(!window.confirm('Confirmação final: deseja reiniciar o progresso? Suas cartas SPECIAL conquistadas e respectivas cópias serão preservadas.'))return;
 if(saveClickTimer){clearTimeout(saveClickTimer);saveClickTimer=null;}
 const specialIds=cars.filter(car=>car.tier==='special'&&state.owned.includes(car.id)).map(car=>car.id);
 const specialCopies={};
 for(const id of specialIds){
  const copies=Math.max(0,Math.floor(Number(state.cardCopies[id])||0));
  if(copies>0)specialCopies[id]=copies;
 }
 try{localStorage.removeItem(key);localStorage.removeItem(activeTabKey);localStorage.removeItem(key+'_openRarity');}catch(e){}
 state={...defaultState,money:defaultState.money,owned:['city',...specialIds],selected:'city',clickLevel:0,incomeLevel:0,networkLevel:0,lastSave:Date.now(),lastDaily:'',missionClaimed:false,cardCopies:specialCopies};
 openDealershipRarity=null;albumRarity='common';albumNewVehicleId=null;
 const packResult=document.querySelector('#pack-result');if(packResult)packResult.hidden=true;
 save();
 render();
 renderUpgrades();
 renderDaily();
 renderMission();
 activateTab('garage',false);
 closeSideMenu();
 notify(specialIds.length?'Progresso reiniciado. Suas cartas SPECIAL foram preservadas!':'Progresso reiniciado. Sua nova garagem está pronta!');
});
menuToggle.addEventListener('click',()=>{const open=!sideMenu.classList.contains('open');sideMenu.classList.toggle('open',open);menuBackdrop.classList.toggle('show',open);menuToggle.setAttribute('aria-expanded',String(open));sideMenu.setAttribute('aria-hidden',String(!open));});
menuBackdrop.addEventListener('click',closeSideMenu);
sideMenu.querySelectorAll('[data-page]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.view').forEach(view=>view.classList.toggle('active',view.id===button.dataset.page));document.querySelectorAll('.tab').forEach(tab=>tab.classList.remove('active'));closeSideMenu();window.scrollTo({top:0,behavior:'smooth'});}));

const activeTabKey=key+'_activeTab';
function activateTab(tabId,remember=true){
 const valid=['garage','dealership','collection','upgrades','achievements'];
 const selected=valid.includes(tabId)?tabId:'garage';
 document.querySelectorAll('.tab').forEach(button=>button.classList.toggle('active',button.dataset.tab===selected));
 document.querySelectorAll('.view').forEach(view=>view.classList.toggle('active',view.id===selected+'-view'));
 if(remember){try{localStorage.setItem(activeTabKey,selected);}catch(e){}}
 if(selected==='achievements')renderAchievements();
}
document.querySelectorAll('.tab').forEach(button=>button.onclick=()=>activateTab(button.dataset.tab));
renderAchievements();
let savedTab='garage';
try{savedTab=localStorage.getItem(activeTabKey)||'garage';}catch(e){}
const elapsed=Math.max(0,Math.min(8*60*60,(Date.now()-(state.lastSave||Date.now()))/1000));
const offline=Math.floor(income()*elapsed/60);
if(offline>0){addMoney(offline);setTimeout(()=>notify('Enquanto esteve fora, sua garagem rendeu '+fmt(offline)+'.'),700)}
save();render();
// A interface só é restaurada depois da renderização inicial.
try{savedTab=localStorage.getItem(activeTabKey)||savedTab;}catch(e){}
activateTab(savedTab,false);
setInterval(()=>{const gain=income()/60;addMoney(gain);document.querySelector('#money').textContent=fmt(state.money);renderPackButtons();document.querySelectorAll('[data-buy]').forEach(b=>{const c=getCar(b.dataset.buy);b.disabled=state.money<c.price});document.querySelectorAll('[data-upgrade]').forEach(b=>{const u=upgrades.find(x=>x.kind===b.dataset.upgrade);const lv=x=>x==='click'?state.clickLevel:x==='income'?state.incomeLevel:state.networkLevel; b.disabled=state.money<Math.floor(u.base*Math.pow(1.85,lv(u.kind)))});},1000);
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
