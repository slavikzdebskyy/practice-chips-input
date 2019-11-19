const data = [
  {'id':1,
    'brand':'Volkswagen',
    'model':'Jetta',
    'color':'#c2a3e1',
    'year':1986,
    'taxes':false,
    'documents':true,
    'price':32057},


  {'id':2,
    'brand':'Land Rover',
    'model':'Range Rover',
    'color':'#152c50',
    'year':2010,
    'taxes':false,
    'documents':true,
    'price':11784},


  {'id':3,
    'brand':'Eagle',
    'model':'Talon',
    'color':'#d04b8d',
    'year':1996,
    'taxes':true,
    'documents':false,
    'price':14913},


  {'id':4,
    'brand':'Audi',
    'model':'V8',
    'color':'#1bf210',
    'year':1990,
    'taxes':false,
    'documents':true,
    'price':27426},


  {'id':5,
    'brand':'Mercury',
    'model':'Grand Marquis',
    'color':'#274d2d',
    'year':1993,
    'taxes':true,
    'documents':true,
    'price':8369},


  {'id':6,
    'brand':'BMW',
    'model':'7 Series',
    'color':'#33a3e7',
    'year':2005,
    'taxes':true,
    'documents':true,
    'price':30849},


  {'id':7,
    'brand':'Ford',
    'model':'Econoline E150',
    'color':'#79f90a',
    'year':1992,
    'taxes':true,
    'documents':true,
    'price':29581},


  {'id':8,
    'brand':'Chevrolet',
    'model':'Aveo',
    'color':'#c5d8d2',
    'year':2009,
    'taxes':false,
    'documents':false,
    'price':19585},


  {'id':9,
    'brand':'Volkswagen',
    'model':'New Beetle',
    'color':'#7a9fec',
    'year':2007,
    'taxes':false,
    'documents':true,
    'price':29558},


  {'id':10,
    'brand':'Acura',
    'model':'RL',
    'color':'#8d03e0',
    'year':1997,
    'taxes':false,
    'documents':false,
    'price':33908},


  {'id':11,
    'brand':'Mercedes-Benz',
    'model':'Sprinter 3500',
    'color':'#5c00d9',
    'year':2011,
    'taxes':true,
    'documents':false,
    'price':23588},


  {'id':12,
    'brand':'Lincoln',
    'model':'Town Car',
    'color':'#6ddbe2',
    'year':2009,
    'taxes':true,
    'documents':false,
    'price':5462},


  {'id':13,
    'brand':'Kia',
    'model':'Sedona',
    'color':'#2146d0',
    'year':2011,
    'taxes':false,
    'documents':true,
    'price':29967},


  {'id':14,
    'brand':'Mazda',
    'model':'626',
    'color':'#45da09',
    'year':1996,
    'taxes':false,
    'documents':true,
    'price':26233},


  {'id':15,
    'brand':'Hyundai',
    'model':'Veracruz',
    'color':'#645e71',
    'year':2008,
    'taxes':true,
    'documents':false,
    'price':19864},


  {'id':16,
    'brand':'BMW',
    'model':'Z8',
    'color':'#58f1c9',
    'year':2002,
    'taxes':false,
    'documents':false,
    'price':11497},


  {'id':17,
    'brand':'Mercury',
    'model':'Cougar',
    'color':'#4feff8',
    'year':1988,
    'taxes':true,
    'documents':true,
    'price':20515},


  {'id':18,
    'brand':'Isuzu',
    'model':'Space',
    'color':'#f07956',
    'year':1994,
    'taxes':true,
    'documents':false,
    'price':5675},


  {'id':19,
    'brand':'Plymouth',
    'model':'Colt Vista',
    'color':'#5d9df9',
    'year':1993,
    'taxes':true,
    'documents':true,
    'price':29229},


  {'id':20,
    'brand':'Lexus',
    'model':'LS',
    'color':'#8f8a3e',
    'year':2001,
    'taxes':true,
    'documents':false,
    'price':34308},


  {'id':21,
    'brand':'Subaru',
    'model':'XT',
    'color':'#19a38e',
    'year':1990,
    'taxes':false,
    'documents':true,
    'price':29048},


  {'id':22,
    'brand':'Ford',
    'model':'F350',
    'color':'#6662fd',
    'year':2004,
    'taxes':true,
    'documents':true,
    'price':15954},


  {'id':23,
    'brand':'Lincoln',
    'model':'Navigator',
    'color':'#ffcca1',
    'year':2005,
    'taxes':true,
    'documents':true,
    'price':10680},


  {'id':24,
    'brand':'Volvo',
    'model':'240',
    'color':'#a91b13',
    'year':1992,
    'taxes':false,
    'documents':false,
    'price':3123},


  {'id':25,
    'brand':'Honda',
    'model':'Civic',
    'color':'#20175f',
    'year':2000,
    'taxes':true,
    'documents':true,
    'price':17794},


  {'id':26,
    'brand':'GMC',
    'model':'Sierra 3500',
    'color':'#37a1d5',
    'year':2008,
    'taxes':true,
    'documents':false,
    'price':14399},


  {'id':27,
    'brand':'Nissan',
    'model':'Frontier',
    'color':'#e49301',
    'year':1998,
    'taxes':false,
    'documents':false,
    'price':20732},


  {'id':28,
    'brand':'Audi',
    'model':'S5',
    'color':'#83022b',
    'year':2012,
    'taxes':true,
    'documents':true,
    'price':4381},


  {'id':29,
    'brand':'Mercury',
    'model':'Mountaineer',
    'color':'#e6128d',
    'year':2006,
    'taxes':false,
    'documents':false,
    'price':7159},


  {'id':30,
    'brand':'Honda',
    'model':'Prelude',
    'color':'#b01990',
    'year':1996,
    'taxes':true,
    'documents':true,
    'price':8639},


  {'id':31,
    'brand':'Mercury',
    'model':'Mystique',
    'color':'#eead1f',
    'year':2000,
    'taxes':false,
    'documents':true,
    'price':11305},


  {'id':32,
    'brand':'Dodge',
    'model':'Ram 3500',
    'color':'#973628',
    'year':2010,
    'taxes':false,
    'documents':true,
    'price':20595},


  {'id':33,
    'brand':'Plymouth',
    'model':'Prowler',
    'color':'#149ac3',
    'year':1997,
    'taxes':true,
    'documents':false,
    'price':33468},


  {'id':34,
    'brand':'Chevrolet',
    'model':'Metro',
    'color':'#3d3610',
    'year':2000,
    'taxes':true,
    'documents':false,
    'price':32197},


  {'id':35,
    'brand':'Cadillac',
    'model':'STS',
    'color':'#12c739',
    'year':2007,
    'taxes':false,
    'documents':true,
    'price':25380},


  {'id':36,
    'brand':'Infiniti',
    'model':'G35',
    'color':'#2b533d',
    'year':2006,
    'taxes':true,
    'documents':false,
    'price':12949},


  {'id':37,
    'brand':'Subaru',
    'model':'Outback',
    'color':'#a5c2b8',
    'year':2005,
    'taxes':false,
    'documents':false,
    'price':14338},


  {'id':38,
    'brand':'Lexus',
    'model':'ES',
    'color':'#863421',
    'year':2009,
    'taxes':true,
    'documents':false,
    'price':21997},


  {'id':39,
    'brand':'Ford',
    'model':'Galaxie',
    'color':'#ee0725',
    'year':1966,
    'taxes':true,
    'documents':false,
    'price':4232},


  {'id':40,
    'brand':'GMC',
    'model':'Sierra 2500',
    'color':'#38256e',
    'year':1999,
    'taxes':false,
    'documents':true,
    'price':10571},


  {'id':41,
    'brand':'Chrysler',
    'model':'Sebring',
    'color':'#456a31',
    'year':2005,
    'taxes':false,
    'documents':false,
    'price':27653},


  {'id':42,
    'brand':'Cadillac',
    'model':'DTS',
    'color':'#9c848c',
    'year':2009,
    'taxes':true,
    'documents':true,
    'price':26892},


  {'id':43,
    'brand':'Jeep',
    'model':'Liberty',
    'color':'#5e87ca',
    'year':2004,
    'taxes':true,
    'documents':true,
    'price':15865},


  {'id':44,
    'brand':'Volkswagen',
    'model':'Eos',
    'color':'#6573c4',
    'year':2012,
    'taxes':false,
    'documents':false,
    'price':28311},


  {'id':45,
    'brand':'Pontiac',
    'model':'Bonneville',
    'color':'#d37b1d',
    'year':1989,
    'taxes':true,
    'documents':false,
    'price':26000},


  {'id':46,
    'brand':'Chevrolet',
    'model':'Monte Carlo',
    'color':'#f11a55',
    'year':1998,
    'taxes':true,
    'documents':false,
    'price':5182},


  {'id':47,
    'brand':'Volkswagen',
    'model':'GTI',
    'color':'#c563f9',
    'year':2004,
    'taxes':true,
    'documents':true,
    'price':5271},


  {'id':48,
    'brand':'GMC',
    'model':'Jimmy',
    'color':'#772538',
    'year':1996,
    'taxes':false,
    'documents':true,
    'price':7582},


  {'id':49,
    'brand':'Chevrolet',
    'model':'Corvette',
    'color':'#43025d',
    'year':1969,
    'taxes':false,
    'documents':true,
    'price':18983},


  {'id':50,
    'brand':'Pontiac',
    'model':'Tempest',
    'color':'#e81ab3',
    'year':1967,
    'taxes':false,
    'documents':true,
    'price':8188},


  {'id':51,
    'brand':'Volvo',
    'model':'S60',
    'color':'#c3d45e',
    'year':2003,
    'taxes':false,
    'documents':false,
    'price':10847},


  {'id':52,
    'brand':'Honda',
    'model':'Accord',
    'color':'#1555ac',
    'year':2003,
    'taxes':true,
    'documents':true,
    'price':27865},


  {'id':53,
    'brand':'Kia',
    'model':'Rondo',
    'color':'#2a1af5',
    'year':2008,
    'taxes':true,
    'documents':true,
    'price':4771},


  {'id':54,
    'brand':'Porsche',
    'model':'911',
    'color':'#9cd676',
    'year':2008,
    'taxes':false,
    'documents':false,
    'price':33055},


  {'id':55,
    'brand':'Chevrolet',
    'model':'Suburban 1500',
    'color':'#225cd0',
    'year':2010,
    'taxes':false,
    'documents':true,
    'price':30061},


  {'id':56,
    'brand':'Dodge',
    'model':'Ram 1500 Club',
    'color':'#9e3ddc',
    'year':2001,
    'taxes':true,
    'documents':true,
    'price':20608},


  {'id':57,
    'brand':'Ford',
    'model':'F250',
    'color':'#3081e3',
    'year':1996,
    'taxes':true,
    'documents':true,
    'price':12849},


  {'id':58,
    'brand':'Toyota',
    'model':'Avalon',
    'color':'#039133',
    'year':2004,
    'taxes':true,
    'documents':true,
    'price':30313},


  {'id':59,
    'brand':'Mazda',
    'model':'Mazda3',
    'color':'#29ee64',
    'year':2008,
    'taxes':true,
    'documents':true,
    'price':16846},


  {'id':60,
    'brand':'Chevrolet',
    'model':'Aveo',
    'color':'#6c8af9',
    'year':2010,
    'taxes':true,
    'documents':true,
    'price':16606},


  {'id':61,
    'brand':'Honda',
    'model':'Civic Si',
    'color':'#4c76e5',
    'year':2006,
    'taxes':false,
    'documents':false,
    'price':18256},


  {'id':62,
    'brand':'Toyota',
    'model':'Previa',
    'color':'#0199f1',
    'year':1997,
    'taxes':true,
    'documents':false,
    'price':33495},


  {'id':63,
    'brand':'Lexus',
    'model':'RX Hybrid',
    'color':'#57360a',
    'year':2007,
    'taxes':false,
    'documents':false,
    'price':23618},


  {'id':64,
    'brand':'Lamborghini',
    'model':'Gallardo',
    'color':'#86a727',
    'year':2010,
    'taxes':true,
    'documents':true,
    'price':24292},


  {'id':65,
    'brand':'Lincoln',
    'model':'Continental Mark VII',
    'color':'#c60429',
    'year':1990,
    'taxes':false,
    'documents':true,
    'price':30333},


  {'id':66,
    'brand':'Buick',
    'model':'Century',
    'color':'#09a3f8',
    'year':2003,
    'taxes':false,
    'documents':false,
    'price':28378},


  {'id':67,
    'brand':'Kia',
    'model':'Sedona',
    'color':'#bf47e3',
    'year':2005,
    'taxes':false,
    'documents':true,
    'price':19811},


  {'id':68,
    'brand':'Ford',
    'model':'F450',
    'color':'#834a63',
    'year':2012,
    'taxes':true,
    'documents':false,
    'price':10735},


  {'id':69,
    'brand':'Ford',
    'model':'Expedition EL',
    'color':'#10aa15',
    'year':2007,
    'taxes':true,
    'documents':false,
    'price':14254},


  {'id':70,
    'brand':'Ford',
    'model':'F-Series',
    'color':'#0bf0b9',
    'year':2006,
    'taxes':true,
    'documents':true,
    'price':27274},


  {'id':71,
    'brand':'Mercedes-Benz',
    'model':'C-Class',
    'color':'#f96b96',
    'year':2000,
    'taxes':false,
    'documents':true,
    'price':3377},


  {'id':72,
    'brand':'Land Rover',
    'model':'Range Rover',
    'color':'#2c1564',
    'year':1987,
    'taxes':true,
    'documents':false,
    'price':22559},


  {'id':73,
    'brand':'Porsche',
    'model':'Cayman',
    'color':'#d4e9db',
    'year':2012,
    'taxes':false,
    'documents':true,
    'price':27844},


  {'id':74,
    'brand':'Mercedes-Benz',
    'model':'CL-Class',
    'color':'#93feea',
    'year':2011,
    'taxes':false,
    'documents':false,
    'price':22466},


  {'id':75,
    'brand':'Mercedes-Benz',
    'model':'C-Class',
    'color':'#90249c',
    'year':1994,
    'taxes':true,
    'documents':false,
    'price':27904},


  {'id':76,
    'brand':'Chevrolet',
    'model':'Malibu',
    'color':'#9ae03f',
    'year':2011,
    'taxes':false,
    'documents':true,
    'price':33529},


  {'id':77,
    'brand':'BMW',
    'model':'M3',
    'color':'#92c3fa',
    'year':2006,
    'taxes':true,
    'documents':false,
    'price':21391},


  {'id':78,
    'brand':'Land Rover',
    'model':'Freelander',
    'color':'#4b5b4f',
    'year':2004,
    'taxes':true,
    'documents':true,
    'price':9775},


  {'id':79,
    'brand':'Audi',
    'model':'R8',
    'color':'#29e561',
    'year':2009,
    'taxes':true,
    'documents':false,
    'price':3949},


  {'id':80,
    'brand':'GMC',
    'model':'Sierra 1500',
    'color':'#5f3442',
    'year':1999,
    'taxes':true,
    'documents':true,
    'price':31860},


  {'id':81,
    'brand':'Chrysler',
    'model':'Fifth Ave',
    'color':'#09b5e9',
    'year':1992,
    'taxes':true,
    'documents':false,
    'price':6376},


  {'id':82,
    'brand':'GMC',
    'model':'Yukon',
    'color':'#015ae3',
    'year':2009,
    'taxes':true,
    'documents':true,
    'price':10801},


  {'id':83,
    'brand':'Suzuki',
    'model':'SX4',
    'color':'#bb428a',
    'year':2011,
    'taxes':false,
    'documents':false,
    'price':11813},


  {'id':84,
    'brand':'Chevrolet',
    'model':'Express 3500',
    'color':'#750215',
    'year':2000,
    'taxes':true,
    'documents':false,
    'price':25921},


  {'id':85,
    'brand':'Mazda',
    'model':'MX-5',
    'color':'#2b679a',
    'year':1990,
    'taxes':true,
    'documents':false,
    'price':29979},


  {'id':86,
    'brand':'Geo',
    'model':'Metro',
    'color':'#3110b2',
    'year':1993,
    'taxes':true,
    'documents':true,
    'price':15575},


  {'id':87,
    'brand':'Acura',
    'model':'Integra',
    'color':'#602aaf',
    'year':1999,
    'taxes':true,
    'documents':false,
    'price':6373},


  {'id':88,
    'brand':'Mercury',
    'model':'Mountaineer',
    'color':'#729549',
    'year':2010,
    'taxes':false,
    'documents':true,
    'price':20730},


  {'id':89,
    'brand':'Chrysler',
    'model':'Pacifica',
    'color':'#7dde9b',
    'year':2004,
    'taxes':false,
    'documents':true,
    'price':17494},


  {'id':90,
    'brand':'Lincoln',
    'model':'Continental',
    'color':'#407eeb',
    'year':1986,
    'taxes':true,
    'documents':false,
    'price':15754},


  {'id':91,
    'brand':'Cadillac',
    'model':'DeVille',
    'color':'#8e3dd9',
    'year':2002,
    'taxes':false,
    'documents':true,
    'price':34665},


  {'id':92,
    'brand':'GMC',
    'model':'Savana 2500',
    'color':'#04acdd',
    'year':2012,
    'taxes':false,
    'documents':false,
    'price':11866},


  {'id':93,
    'brand':'Mitsubishi',
    'model':'Mirage',
    'color':'#48da1f',
    'year':1998,
    'taxes':true,
    'documents':true,
    'price':15975},


  {'id':94,
    'brand':'Mercury',
    'model':'Cougar',
    'color':'#d8943c',
    'year':1970,
    'taxes':true,
    'documents':true,
    'price':25884},


  {'id':95,
    'brand':'Chevrolet',
    'model':'Camaro',
    'color':'#5d473c',
    'year':2011,
    'taxes':true,
    'documents':false,
    'price':6291},


  {'id':96,
    'brand':'Mercury',
    'model':'Cougar',
    'color':'#09be0a',
    'year':1984,
    'taxes':true,
    'documents':true,
    'price':28897},


  {'id':97,
    'brand':'Mercedes-Benz',
    'model':'SLK-Class',
    'color':'#6d8208',
    'year':1997,
    'taxes':false,
    'documents':true,
    'price':9867},


  {'id':98,
    'brand':'Nissan',
    'model':'Sentra',
    'color':'#7ca415',
    'year':1998,
    'taxes':false,
    'documents':false,
    'price':4766},


  {'id':99,
    'brand':'Porsche',
    'model':'911',
    'color':'#12f86d',
    'year':2004,
    'taxes':true,
    'documents':false,
    'price':23469},


  {'id':100,
    'brand':'Chevrolet',
    'model':'Traverse',
    'color':'#753871',
    'year':2011,
    'taxes':false,
    'documents':true,
    'price':24092},


  {'id':101,
    'brand':'Lincoln',
    'model':'Continental Mark VII',
    'color':'#2177b3',
    'year':1991,
    'taxes':false,
    'documents':true,
    'price':23800},


  {'id':102,
    'brand':'Dodge',
    'model':'Charger',
    'color':'#da673f',
    'year':1970,
    'taxes':false,
    'documents':true,
    'price':33399},


  {'id':103,
    'brand':'Porsche',
    'model':'911',
    'color':'#a03ea0',
    'year':1996,
    'taxes':false,
    'documents':true,
    'price':34599},


  {'id':104,
    'brand':'Mercury',
    'model':'Mountaineer',
    'color':'#58e0f9',
    'year':1997,
    'taxes':true,
    'documents':true,
    'price':33730},


  {'id':105,
    'brand':'Pontiac',
    'model':'Grand Prix',
    'color':'#1ae745',
    'year':1977,
    'taxes':false,
    'documents':true,
    'price':32329},


  {'id':106,
    'brand':'Oldsmobile',
    'model':'Bravada',
    'color':'#8973df',
    'year':2000,
    'taxes':true,
    'documents':true,
    'price':27442},


  {'id':107,
    'brand':'Mazda',
    'model':'626',
    'color':'#18c145',
    'year':1997,
    'taxes':true,
    'documents':true,
    'price':27357},


  {'id':108,
    'brand':'Suzuki',
    'model':'Samurai',
    'color':'#1da85c',
    'year':1995,
    'taxes':false,
    'documents':false,
    'price':3601},


  {'id':109,
    'brand':'Chevrolet',
    'model':'Venture',
    'color':'#341d83',
    'year':1998,
    'taxes':false,
    'documents':false,
    'price':8277},


  {'id':110,
    'brand':'Pontiac',
    'model':'Daewoo Kalos',
    'color':'#d08c12',
    'year':2006,
    'taxes':true,
    'documents':false,
    'price':7196},


  {'id':111,
    'brand':'Oldsmobile',
    'model':'Cutlass Supreme',
    'color':'#453fff',
    'year':1995,
    'taxes':true,
    'documents':true,
    'price':25666},


  {'id':112,
    'brand':'Buick',
    'model':'Lucerne',
    'color':'#1c83f1',
    'year':2009,
    'taxes':true,
    'documents':true,
    'price':4946},


  {'id':113,
    'brand':'Mercury',
    'model':'Mystique',
    'color':'#e6c79b',
    'year':1997,
    'taxes':true,
    'documents':false,
    'price':28242},


  {'id':114,
    'brand':'Isuzu',
    'model':'VehiCROSS',
    'color':'#93815e',
    'year':2000,
    'taxes':false,
    'documents':false,
    'price':26450},


  {'id':115,
    'brand':'Ford',
    'model':'F-Series',
    'color':'#4ba6c8',
    'year':1996,
    'taxes':true,
    'documents':true,
    'price':4819},


  {'id':116,
    'brand':'Hyundai',
    'model':'Azera',
    'color':'#7842eb',
    'year':2010,
    'taxes':true,
    'documents':false,
    'price':11173},


  {'id':117,
    'brand':'Maserati',
    'model':'Quattroporte',
    'color':'#1bff93',
    'year':2010,
    'taxes':true,
    'documents':false,
    'price':31884},


  {'id':118,
    'brand':'Subaru',
    'model':'XT',
    'color':'#b353a9',
    'year':1985,
    'taxes':true,
    'documents':true,
    'price':16508},


  {'id':119,
    'brand':'Dodge',
    'model':'Ram 2500',
    'color':'#95fe0f',
    'year':1997,
    'taxes':true,
    'documents':true,
    'price':32603},


  {'id':120,
    'brand':'Ford',
    'model':'E350',
    'color':'#aae604',
    'year':2010,
    'taxes':false,
    'documents':true,
    'price':11041},


  {'id':121,
    'brand':'Buick',
    'model':'LaCrosse',
    'color':'#2def51',
    'year':2011,
    'taxes':false,
    'documents':true,
    'price':8090},


  {'id':122,
    'brand':'Mercedes-Benz',
    'model':'CLK-Class',
    'color':'#1ab3b7',
    'year':2001,
    'taxes':false,
    'documents':false,
    'price':10293},


  {'id':123,
    'brand':'Maserati',
    'model':'Quattroporte',
    'color':'#5e4acf',
    'year':1986,
    'taxes':false,
    'documents':true,
    'price':7152},


  {'id':124,
    'brand':'Suzuki',
    'model':'Grand Vitara',
    'color':'#aa5b0e',
    'year':2010,
    'taxes':true,
    'documents':false,
    'price':28017},


  {'id':125,
    'brand':'Buick',
    'model':'Century',
    'color':'#941cf8',
    'year':1988,
    'taxes':false,
    'documents':true,
    'price':11095},


  {'id':126,
    'brand':'BMW',
    'model':'M5',
    'color':'#56e9fa',
    'year':2010,
    'taxes':true,
    'documents':false,
    'price':8515},


  {'id':127,
    'brand':'Toyota',
    'model':'T100',
    'color':'#e737cd',
    'year':1997,
    'taxes':false,
    'documents':false,
    'price':23412},


  {'id':128,
    'brand':'Mazda',
    'model':'626',
    'color':'#bb89ba',
    'year':1983,
    'taxes':false,
    'documents':true,
    'price':6583},


  {'id':129,
    'brand':'Volkswagen',
    'model':'Passat',
    'color':'#768bf6',
    'year':1988,
    'taxes':true,
    'documents':false,
    'price':33011},


  {'id':130,
    'brand':'GMC',
    'model':'Yukon',
    'color':'#ace444',
    'year':2007,
    'taxes':false,
    'documents':true,
    'price':23823},


  {'id':131,
    'brand':'Dodge',
    'model':'Caravan',
    'color':'#788cc1',
    'year':1999,
    'taxes':true,
    'documents':true,
    'price':31629},


  {'id':132,
    'brand':'Ford',
    'model':'Mustang',
    'color':'#d816a8',
    'year':1994,
    'taxes':false,
    'documents':false,
    'price':14992},


  {'id':133,
    'brand':'GMC',
    'model':'Safari',
    'color':'#d5c585',
    'year':1995,
    'taxes':true,
    'documents':false,
    'price':28296},


  {'id':134,
    'brand':'Audi',
    'model':'A8',
    'color':'#b43fbf',
    'year':2005,
    'taxes':true,
    'documents':false,
    'price':12264},


  {'id':135,
    'brand':'Mitsubishi',
    'model':'Truck',
    'color':'#dcdb16',
    'year':1990,
    'taxes':true,
    'documents':true,
    'price':14107},


  {'id':136,
    'brand':'Mercedes-Benz',
    'model':'S-Class',
    'color':'#bc8607',
    'year':2011,
    'taxes':false,
    'documents':false,
    'price':26068},


  {'id':137,
    'brand':'Honda',
    'model':'Civic',
    'color':'#214d04',
    'year':1997,
    'taxes':true,
    'documents':false,
    'price':25680},


  {'id':138,
    'brand':'Bentley',
    'model':'Continental Flying Spur',
    'color':'#50a891',
    'year':2012,
    'taxes':false,
    'documents':true,
    'price':21342},


  {'id':139,
    'brand':'Ford',
    'model':'Expedition',
    'color':'#00de94',
    'year':2012,
    'taxes':true,
    'documents':true,
    'price':15301},


  {'id':140,
    'brand':'Volkswagen',
    'model':'Passat',
    'color':'#5db76f',
    'year':2003,
    'taxes':true,
    'documents':true,
    'price':27450},


  {'id':141,
    'brand':'Chevrolet',
    'model':'Sportvan G20',
    'color':'#632a84',
    'year':1994,
    'taxes':false,
    'documents':false,
    'price':27252},


  {'id':142,
    'brand':'Oldsmobile',
    'model':'Ciera',
    'color':'#229895',
    'year':1993,
    'taxes':true,
    'documents':false,
    'price':11006},


  {'id':143,
    'brand':'Suzuki',
    'model':'Daewoo Lacetti',
    'color':'#0266c8',
    'year':2006,
    'taxes':false,
    'documents':true,
    'price':13679},


  {'id':144,
    'brand':'GMC',
    'model':'Yukon XL 2500',
    'color':'#a50024',
    'year':2006,
    'taxes':true,
    'documents':false,
    'price':28970},


  {'id':145,
    'brand':'Buick',
    'model':'Roadmaster',
    'color':'#fa2b5b',
    'year':1994,
    'taxes':false,
    'documents':true,
    'price':28599},


  {'id':146,
    'brand':'Chevrolet',
    'model':'Suburban 1500',
    'color':'#ee6e5f',
    'year':2005,
    'taxes':false,
    'documents':false,
    'price':11119},


  {'id':147,
    'brand':'Chevrolet',
    'model':'Lumina',
    'color':'#f80a13',
    'year':1995,
    'taxes':true,
    'documents':false,
    'price':26374},


  {'id':148,
    'brand':'Maserati',
    'model':'Quattroporte',
    'color':'#0fa34d',
    'year':1986,
    'taxes':false,
    'documents':true,
    'price':6971},


  {'id':149,
    'brand':'Pontiac',
    'model':'GTO',
    'color':'#477e9f',
    'year':1968,
    'taxes':true,
    'documents':true,
    'price':11073},


  {'id':150,
    'brand':'BMW',
    'model':'X3',
    'color':'#8715cc',
    'year':2012,
    'taxes':true,
    'documents':false,
    'price':13109},


  {'id':151,
    'brand':'Ford',
    'model':'F250',
    'color':'#c9b1cd',
    'year':1998,
    'taxes':true,
    'documents':true,
    'price':5865},


  {'id':152,
    'brand':'GMC',
    'model':'Yukon XL 1500',
    'color':'#1aca98',
    'year':2007,
    'taxes':true,
    'documents':true,
    'price':3037},


  {'id':153,
    'brand':'Lotus',
    'model':'Evora',
    'color':'#d23d35',
    'year':2012,
    'taxes':true,
    'documents':true,
    'price':4130},


  {'id':154,
    'brand':'Honda',
    'model':'Ridgeline',
    'color':'#f877a3',
    'year':2012,
    'taxes':true,
    'documents':false,
    'price':12652},


  {'id':155,
    'brand':'Dodge',
    'model':'Intrepid',
    'color':'#0ee8a5',
    'year':2003,
    'taxes':false,
    'documents':false,
    'price':19612},


  {'id':156,
    'brand':'Hyundai',
    'model':'Sonata',
    'color':'#11995a',
    'year':2011,
    'taxes':false,
    'documents':false,
    'price':8625},


  {'id':157,
    'brand':'Lexus',
    'model':'IS',
    'color':'#27dced',
    'year':2007,
    'taxes':true,
    'documents':false,
    'price':17087},


  {'id':158,
    'brand':'Volkswagen',
    'model':'Phaeton',
    'color':'#2d3743',
    'year':2005,
    'taxes':true,
    'documents':true,
    'price':17916},


  {'id':159,
    'brand':'Mercury',
    'model':'Cougar',
    'color':'#35168c',
    'year':1985,
    'taxes':true,
    'documents':false,
    'price':24962},


  {'id':160,
    'brand':'Chrysler',
    'model':'Town & Country',
    'color':'#a33321',
    'year':1999,
    'taxes':true,
    'documents':true,
    'price':19897},


  {'id':161,
    'brand':'Maybach',
    'model':'57',
    'color':'#d31bd2',
    'year':2008,
    'taxes':true,
    'documents':true,
    'price':3976},


  {'id':162,
    'brand':'Audi',
    'model':'S8',
    'color':'#c2ef1e',
    'year':2007,
    'taxes':true,
    'documents':false,
    'price':25868},


  {'id':163,
    'brand':'Honda',
    'model':'CR-V',
    'color':'#cdff60',
    'year':2001,
    'taxes':false,
    'documents':false,
    'price':29701},


  {'id':164,
    'brand':'Subaru',
    'model':'Outback',
    'color':'#b7bd2f',
    'year':2011,
    'taxes':true,
    'documents':true,
    'price':11002},


  {'id':165,
    'brand':'Toyota',
    'model':'Prius',
    'color':'#d8b5ff',
    'year':2003,
    'taxes':false,
    'documents':false,
    'price':15535},


  {'id':166,
    'brand':'Dodge',
    'model':'Ram 2500',
    'color':'#238178',
    'year':2000,
    'taxes':true,
    'documents':true,
    'price':17483},


  {'id':167,
    'brand':'GMC',
    'model':'3500 Club Coupe',
    'color':'#46e150',
    'year':1995,
    'taxes':false,
    'documents':false,
    'price':15285},


  {'id':168,
    'brand':'Cadillac',
    'model':'Fleetwood',
    'color':'#762752',
    'year':1995,
    'taxes':false,
    'documents':true,
    'price':11786},


  {'id':169,
    'brand':'GMC',
    'model':'Sierra 3500',
    'color':'#a97123',
    'year':2003,
    'taxes':false,
    'documents':true,
    'price':4923},


  {'id':170,
    'brand':'Lexus',
    'model':'RX',
    'color':'#6b6950',
    'year':2012,
    'taxes':false,
    'documents':true,
    'price':29033},


  {'id':171,
    'brand':'Subaru',
    'model':'Loyale',
    'color':'#662bdc',
    'year':1991,
    'taxes':false,
    'documents':true,
    'price':10639},


  {'id':172,
    'brand':'Mercedes-Benz',
    'model':'S-Class',
    'color':'#9ab4f7',
    'year':2008,
    'taxes':false,
    'documents':false,
    'price':3842},


  {'id':173,
    'brand':'Bentley',
    'model':'Continental Flying Spur',
    'color':'#e43d04',
    'year':2010,
    'taxes':false,
    'documents':true,
    'price':14779},


  {'id':174,
    'brand':'Ford',
    'model':'Taurus',
    'color':'#f39a90',
    'year':1987,
    'taxes':true,
    'documents':true,
    'price':31993},


  {'id':175,
    'brand':'Mercury',
    'model':'Tracer',
    'color':'#e18302',
    'year':1994,
    'taxes':true,
    'documents':false,
    'price':25895},


  {'id':176,
    'brand':'Subaru',
    'model':'XT',
    'color':'#e77e91',
    'year':1985,
    'taxes':false,
    'documents':true,
    'price':30281},


  {'id':177,
    'brand':'Volkswagen',
    'model':'Golf',
    'color':'#d91f26',
    'year':1993,
    'taxes':false,
    'documents':false,
    'price':17648},


  {'id':178,
    'brand':'Jeep',
    'model':'Grand Cherokee',
    'color':'#359247',
    'year':1993,
    'taxes':true,
    'documents':true,
    'price':8586},


  {'id':179,
    'brand':'Mercury',
    'model':'Grand Marquis',
    'color':'#254f9e',
    'year':1990,
    'taxes':true,
    'documents':false,
    'price':26171},


  {'id':180,
    'brand':'Mercedes-Benz',
    'model':'SL-Class',
    'color':'#d51a14',
    'year':2012,
    'taxes':true,
    'documents':false,
    'price':10854},


  {'id':181,
    'brand':'Chevrolet',
    'model':'Avalanche 1500',
    'color':'#3c4692',
    'year':2006,
    'taxes':false,
    'documents':false,
    'price':29068},


  {'id':182,
    'brand':'Lexus',
    'model':'LS',
    'color':'#a06d2a',
    'year':2004,
    'taxes':false,
    'documents':false,
    'price':33848},


  {'id':183,
    'brand':'Pontiac',
    'model':'Firebird',
    'color':'#8ca5ca',
    'year':1998,
    'taxes':true,
    'documents':true,
    'price':18047},


  {'id':184,
    'brand':'Cadillac',
    'model':'XLR',
    'color':'#631187',
    'year':2008,
    'taxes':false,
    'documents':false,
    'price':3236},


  {'id':185,
    'brand':'Mazda',
    'model':'Mazdaspeed6',
    'color':'#b3ac8c',
    'year':2006,
    'taxes':false,
    'documents':false,
    'price':22714},


  {'id':186,
    'brand':'Hyundai',
    'model':'Sonata',
    'color':'#162ca5',
    'year':1998,
    'taxes':true,
    'documents':true,
    'price':4890},


  {'id':187,
    'brand':'Plymouth',
    'model':'Grand Voyager',
    'color':'#8b7c94',
    'year':1999,
    'taxes':false,
    'documents':true,
    'price':25030},


  {'id':188,
    'brand':'Acura',
    'model':'TSX',
    'color':'#2d5040',
    'year':2012,
    'taxes':true,
    'documents':false,
    'price':3791},


  {'id':189,
    'brand':'BMW',
    'model':'8 Series',
    'color':'#599331',
    'year':1993,
    'taxes':true,
    'documents':true,
    'price':33660},


  {'id':190,
    'brand':'Chevrolet',
    'model':'Camaro',
    'color':'#9e0adf',
    'year':1997,
    'taxes':false,
    'documents':true,
    'price':15703},


  {'id':191,
    'brand':'Pontiac',
    'model':'Bonneville',
    'color':'#133e4f',
    'year':1999,
    'taxes':true,
    'documents':true,
    'price':4232},


  {'id':192,
    'brand':'Toyota',
    'model':'Land Cruiser',
    'color':'#db3dc4',
    'year':2006,
    'taxes':true,
    'documents':true,
    'price':34912},


  {'id':193,
    'brand':'Lotus',
    'model':'Esprit Turbo',
    'color':'#3db706',
    'year':1984,
    'taxes':false,
    'documents':true,
    'price':6882},


  {'id':194,
    'brand':'Chevrolet',
    'model':'Malibu',
    'color':'#2b8076',
    'year':2013,
    'taxes':false,
    'documents':true,
    'price':33338},


  {'id':195,
    'brand':'Volkswagen',
    'model':'R32',
    'color':'#2ec3dd',
    'year':2009,
    'taxes':false,
    'documents':true,
    'price':7123},


  {'id':196,
    'brand':'Nissan',
    'model':'NV3500',
    'color':'#4721b8',
    'year':2012,
    'taxes':false,
    'documents':true,
    'price':30304},


  {'id':197,
    'brand':'Toyota',
    'model':'Celica',
    'color':'#63c726',
    'year':1998,
    'taxes':false,
    'documents':true,
    'price':30637},


  {'id':198,
    'brand':'Saturn',
    'model':'S-Series',
    'color':'#cbb285',
    'year':2000,
    'taxes':true,
    'documents':false,
    'price':4403},


  {'id':199,
    'brand':'Chevrolet',
    'model':'Cavalier',
    'color':'#b74ff0',
    'year':1992,
    'taxes':false,
    'documents':false,
    'price':3115},


  {'id':200,
    'brand':'Mitsubishi',
    'model':'Eclipse',
    'color':'#556830',
    'year':2004,
    'taxes':false,
    'documents':false,
    'price':19195},


  {'id':201,
    'brand':'Volkswagen',
    'model':'Jetta',
    'color':'#6e5237',
    'year':2008,
    'taxes':false,
    'documents':false,
    'price':22384},


  {'id':202,
    'brand':'GMC',
    'model':'Sierra',
    'color':'#b9d34d',
    'year':2008,
    'taxes':false,
    'documents':true,
    'price':12475},


  {'id':203,
    'brand':'Dodge',
    'model':'Shadow',
    'color':'#3c2b76',
    'year':1993,
    'taxes':false,
    'documents':false,
    'price':10759},


  {'id':204,
    'brand':'Mitsubishi',
    'model':'Galant',
    'color':'#7b55fe',
    'year':1999,
    'taxes':false,
    'documents':false,
    'price':30507},


  {'id':205,
    'brand':'Toyota',
    'model':'MR2',
    'color':'#60bd78',
    'year':1993,
    'taxes':false,
    'documents':true,
    'price':3229},


  {'id':206,
    'brand':'Suzuki',
    'model':'X-90',
    'color':'#374fa1',
    'year':1997,
    'taxes':false,
    'documents':true,
    'price':30667},


  {'id':207,
    'brand':'Mazda',
    'model':'626',
    'color':'#dbf70b',
    'year':1995,
    'taxes':false,
    'documents':true,
    'price':8182},


  {'id':208,
    'brand':'Ford',
    'model':'Ranger',
    'color':'#c988ee',
    'year':1986,
    'taxes':true,
    'documents':true,
    'price':7024},


  {'id':209,
    'brand':'Plymouth',
    'model':'Sundance',
    'color':'#2ffab6',
    'year':1994,
    'taxes':true,
    'documents':true,
    'price':20396},


  {'id':210,
    'brand':'Hyundai',
    'model':'Elantra',
    'color':'#b97c3f',
    'year':2013,
    'taxes':true,
    'documents':true,
    'price':34868},


  {'id':211,
    'brand':'Buick',
    'model':'Park Avenue',
    'color':'#213ad2',
    'year':2005,
    'taxes':true,
    'documents':false,
    'price':34487},


  {'id':212,
    'brand':'Cadillac',
    'model':'CTS',
    'color':'#7f5030',
    'year':2011,
    'taxes':true,
    'documents':true,
    'price':4410},


  {'id':213,
    'brand':'Ford',
    'model':'Tempo',
    'color':'#fc4020',
    'year':1989,
    'taxes':false,
    'documents':true,
    'price':32470},


  {'id':214,
    'brand':'Mazda',
    'model':'MPV',
    'color':'#e5659d',
    'year':2002,
    'taxes':true,
    'documents':false,
    'price':25653},


  {'id':215,
    'brand':'Ford',
    'model':'Explorer',
    'color':'#b68185',
    'year':1997,
    'taxes':true,
    'documents':false,
    'price':33859},


  {'id':216,
    'brand':'Chevrolet',
    'model':'Silverado 2500',
    'color':'#386901',
    'year':2007,
    'taxes':true,
    'documents':false,
    'price':7801},


  {'id':217,
    'brand':'Chevrolet',
    'model':'Avalanche 1500',
    'color':'#87840a',
    'year':2002,
    'taxes':true,
    'documents':false,
    'price':5743},


  {'id':218,
    'brand':'Ford',
    'model':'Explorer Sport Trac',
    'color':'#f71e4f',
    'year':2006,
    'taxes':false,
    'documents':true,
    'price':13881},


  {'id':219,
    'brand':'Saab',
    'model':'9-5',
    'color':'#f602e7',
    'year':2005,
    'taxes':false,
    'documents':true,
    'price':18455},


  {'id':220,
    'brand':'BMW',
    'model':'545',
    'color':'#abd64e',
    'year':2005,
    'taxes':true,
    'documents':false,
    'price':19644},


  {'id':221,
    'brand':'Land Rover',
    'model':'Discovery',
    'color':'#2973e1',
    'year':1995,
    'taxes':true,
    'documents':true,
    'price':12379},


  {'id':222,
    'brand':'Mazda',
    'model':'Millenia',
    'color':'#8c17ff',
    'year':2001,
    'taxes':true,
    'documents':false,
    'price':8827},


  {'id':223,
    'brand':'GMC',
    'model':'Envoy XL',
    'color':'#f89c72',
    'year':2005,
    'taxes':false,
    'documents':true,
    'price':13994},


  {'id':224,
    'brand':'Cadillac',
    'model':'STS-V',
    'color':'#2b4992',
    'year':2008,
    'taxes':true,
    'documents':true,
    'price':5525},


  {'id':225,
    'brand':'Ram',
    'model':'1500',
    'color':'#9733a2',
    'year':2011,
    'taxes':false,
    'documents':false,
    'price':19907},


  {'id':226,
    'brand':'Bentley',
    'model':'Continental Flying Spur',
    'color':'#30f56d',
    'year':2010,
    'taxes':true,
    'documents':false,
    'price':10950},


  {'id':227,
    'brand':'Lincoln',
    'model':'MKT',
    'color':'#5e3b8a',
    'year':2010,
    'taxes':true,
    'documents':false,
    'price':6314},


  {'id':228,
    'brand':'Suzuki',
    'model':'Vitara',
    'color':'#f45c53',
    'year':2001,
    'taxes':false,
    'documents':false,
    'price':14121},


  {'id':229,
    'brand':'Lexus',
    'model':'GS',
    'color':'#025a22',
    'year':1999,
    'taxes':true,
    'documents':true,
    'price':3801},


  {'id':230,
    'brand':'Bentley',
    'model':'Continental Super',
    'color':'#8a5ba2',
    'year':2012,
    'taxes':true,
    'documents':false,
    'price':20978},


  {'id':231,
    'brand':'GMC',
    'model':'Yukon',
    'color':'#877442',
    'year':2001,
    'taxes':true,
    'documents':false,
    'price':9187},


  {'id':232,
    'brand':'Honda',
    'model':'Civic',
    'color':'#ee65a2',
    'year':2008,
    'taxes':true,
    'documents':true,
    'price':26340},


  {'id':233,
    'brand':'Chevrolet',
    'model':'Corvette',
    'color':'#5f96d1',
    'year':2000,
    'taxes':false,
    'documents':true,
    'price':23346},


  {'id':234,
    'brand':'GMC',
    'model':'Suburban 2500',
    'color':'#76f78c',
    'year':1995,
    'taxes':true,
    'documents':true,
    'price':5366},


  {'id':235,
    'brand':'Saturn',
    'model':'S-Series',
    'color':'#53f129',
    'year':1996,
    'taxes':true,
    'documents':false,
    'price':4957},


  {'id':236,
    'brand':'Buick',
    'model':'Regal',
    'color':'#1ace7e',
    'year':1995,
    'taxes':false,
    'documents':false,
    'price':4920},


  {'id':237,
    'brand':'Ferrari',
    'model':'458 Italia',
    'color':'#148794',
    'year':2011,
    'taxes':true,
    'documents':false,
    'price':22669},


  {'id':238,
    'brand':'Suzuki',
    'model':'XL-7',
    'color':'#c74e30',
    'year':2003,
    'taxes':false,
    'documents':false,
    'price':11327},


  {'id':239,
    'brand':'Cadillac',
    'model':'DTS',
    'color':'#79335e',
    'year':2011,
    'taxes':false,
    'documents':true,
    'price':9143},


  {'id':240,
    'brand':'Toyota',
    'model':'Camry',
    'color':'#8053cb',
    'year':1997,
    'taxes':false,
    'documents':false,
    'price':28702},


  {'id':241,
    'brand':'Ferrari',
    'model':'458 Italia',
    'color':'#11d561',
    'year':2010,
    'taxes':true,
    'documents':false,
    'price':19071},


  {'id':242,
    'brand':'Mitsubishi',
    'model':'Pajero',
    'color':'#d1a401',
    'year':2003,
    'taxes':false,
    'documents':true,
    'price':30960},


  {'id':243,
    'brand':'Chevrolet',
    'model':'Silverado 3500',
    'color':'#ef47d3',
    'year':2009,
    'taxes':true,
    'documents':false,
    'price':19287},


  {'id':244,
    'brand':'Nissan',
    'model':'Sentra',
    'color':'#1c3899',
    'year':1999,
    'taxes':false,
    'documents':false,
    'price':18597},


  {'id':245,
    'brand':'GMC',
    'model':'Safari',
    'color':'#f5825f',
    'year':2000,
    'taxes':false,
    'documents':false,
    'price':34689},


  {'id':246,
    'brand':'Hyundai',
    'model':'Elantra',
    'color':'#839cb0',
    'year':2012,
    'taxes':true,
    'documents':false,
    'price':24492},


  {'id':247,
    'brand':'Ford',
    'model':'Expedition',
    'color':'#8ebe9d',
    'year':2012,
    'taxes':false,
    'documents':true,
    'price':22801},


  {'id':248,
    'brand':'Jeep',
    'model':'Wrangler',
    'color':'#0b568e',
    'year':1992,
    'taxes':false,
    'documents':true,
    'price':33484},


  {'id':249,
    'brand':'Isuzu',
    'model':'i-350',
    'color':'#9edadc',
    'year':2006,
    'taxes':false,
    'documents':true,
    'price':3485},


  {'id':250,
    'brand':'Honda',
    'model':'Pilot',
    'color':'#e653b4',
    'year':2002,
    'taxes':true,
    'documents':true,
    'price':3665},


  {'id':251,
    'brand':'Mazda',
    'model':'MPV',
    'color':'#bcc7e1',
    'year':2005,
    'taxes':false,
    'documents':true,
    'price':10415},


  {'id':252,
    'brand':'Cadillac',
    'model':'Catera',
    'color':'#915f1a',
    'year':2000,
    'taxes':false,
    'documents':true,
    'price':25172},


  {'id':253,
    'brand':'Chrysler',
    'model':'Aspen',
    'color':'#da062f',
    'year':2007,
    'taxes':true,
    'documents':true,
    'price':18012},


  {'id':254,
    'brand':'Ford',
    'model':'F150',
    'color':'#cadd43',
    'year':1998,
    'taxes':false,
    'documents':false,
    'price':16399},


  {'id':255,
    'brand':'Volkswagen',
    'model':'Jetta III',
    'color':'#a40309',
    'year':1993,
    'taxes':true,
    'documents':true,
    'price':5445},


  {'id':256,
    'brand':'Smart',
    'model':'Fortwo',
    'color':'#b92cd9',
    'year':2009,
    'taxes':true,
    'documents':false,
    'price':22095},


  {'id':257,
    'brand':'Audi',
    'model':'80',
    'color':'#4f20bf',
    'year':1991,
    'taxes':false,
    'documents':true,
    'price':14635},


  {'id':258,
    'brand':'Bentley',
    'model':'Continental',
    'color':'#9cb159',
    'year':2005,
    'taxes':true,
    'documents':true,
    'price':25054},


  {'id':259,
    'brand':'Volvo',
    'model':'XC90',
    'color':'#4e7109',
    'year':2009,
    'taxes':true,
    'documents':true,
    'price':8937},


  {'id':260,
    'brand':'Cadillac',
    'model':'Escalade ESV',
    'color':'#321301',
    'year':2003,
    'taxes':false,
    'documents':false,
    'price':21611},


  {'id':261,
    'brand':'Pontiac',
    'model':'Firebird',
    'color':'#185399',
    'year':1988,
    'taxes':false,
    'documents':false,
    'price':30516},


  {'id':262,
    'brand':'Ford',
    'model':'Th!nk',
    'color':'#4bcba6',
    'year':2000,
    'taxes':false,
    'documents':false,
    'price':8775},


  {'id':263,
    'brand':'BMW',
    'model':'M5',
    'color':'#1d1c13',
    'year':2001,
    'taxes':false,
    'documents':false,
    'price':23271},


  {'id':264,
    'brand':'BMW',
    'model':'7 Series',
    'color':'#cf7f70',
    'year':1998,
    'taxes':false,
    'documents':false,
    'price':10262},


  {'id':265,
    'brand':'Chevrolet',
    'model':'Suburban 2500',
    'color':'#a84c2e',
    'year':2000,
    'taxes':true,
    'documents':true,
    'price':34339},


  {'id':266,
    'brand':'Plymouth',
    'model':'Voyager',
    'color':'#f240a7',
    'year':1994,
    'taxes':true,
    'documents':true,
    'price':22320},


  {'id':267,
    'brand':'Dodge',
    'model':'Stratus',
    'color':'#ecf0b5',
    'year':1999,
    'taxes':false,
    'documents':true,
    'price':32441},


  {'id':268,
    'brand':'Mercedes-Benz',
    'model':'R-Class',
    'color':'#c83ee6',
    'year':2012,
    'taxes':false,
    'documents':true,
    'price':8047},


  {'id':269,
    'brand':'Dodge',
    'model':'Viper',
    'color':'#c0d6dc',
    'year':1997,
    'taxes':true,
    'documents':true,
    'price':24199},


  {'id':270,
    'brand':'Honda',
    'model':'Civic',
    'color':'#d42e22',
    'year':1999,
    'taxes':false,
    'documents':true,
    'price':23647},


  {'id':271,
    'brand':'Kia',
    'model':'Sportage',
    'color':'#7e8090',
    'year':2002,
    'taxes':false,
    'documents':false,
    'price':34023},


  {'id':272,
    'brand':'GMC',
    'model':'Savana 2500',
    'color':'#9305c9',
    'year':2000,
    'taxes':false,
    'documents':false,
    'price':29896},


  {'id':273,
    'brand':'GMC',
    'model':'Savana 1500',
    'color':'#617848',
    'year':2010,
    'taxes':true,
    'documents':false,
    'price':15340},


  {'id':274,
    'brand':'Subaru',
    'model':'Forester',
    'color':'#f1502b',
    'year':2004,
    'taxes':true,
    'documents':false,
    'price':10458},


  {'id':275,
    'brand':'Chevrolet',
    'model':'Blazer',
    'color':'#708640',
    'year':2005,
    'taxes':true,
    'documents':true,
    'price':22367},


  {'id':276,
    'brand':'Hyundai',
    'model':'Accent',
    'color':'#2321e1',
    'year':2001,
    'taxes':true,
    'documents':true,
    'price':16405},


  {'id':277,
    'brand':'Ford',
    'model':'F-350 Super Duty',
    'color':'#06b2d7',
    'year':2006,
    'taxes':false,
    'documents':true,
    'price':6213},


  {'id':278,
    'brand':'GMC',
    'model':'Safari',
    'color':'#42e23a',
    'year':1996,
    'taxes':false,
    'documents':false,
    'price':31633},


  {'id':279,
    'brand':'Volkswagen',
    'model':'Golf',
    'color':'#7ea644',
    'year':1985,
    'taxes':true,
    'documents':true,
    'price':16404},


  {'id':280,
    'brand':'Land Rover',
    'model':'Range Rover',
    'color':'#fb419f',
    'year':2004,
    'taxes':true,
    'documents':true,
    'price':23205},


  {'id':281,
    'brand':'Subaru',
    'model':'Tribeca',
    'color':'#74a3a7',
    'year':2011,
    'taxes':false,
    'documents':true,
    'price':4022},


  {'id':282,
    'brand':'Mitsubishi',
    'model':'Chariot',
    'color':'#067732',
    'year':1990,
    'taxes':true,
    'documents':false,
    'price':29036},


  {'id':283,
    'brand':'GMC',
    'model':'Safari',
    'color':'#9d5a66',
    'year':2005,
    'taxes':false,
    'documents':true,
    'price':12871},


  {'id':284,
    'brand':'Ford',
    'model':'Ranger',
    'color':'#f1f364',
    'year':2004,
    'taxes':true,
    'documents':true,
    'price':24662},


  {'id':285,
    'brand':'BMW',
    'model':'6 Series',
    'color':'#f79686',
    'year':2007,
    'taxes':false,
    'documents':false,
    'price':11282},


  {'id':286,
    'brand':'Ferrari',
    'model':'458 Italia',
    'color':'#24a5c6',
    'year':2010,
    'taxes':false,
    'documents':true,
    'price':16073},


  {'id':287,
    'brand':'Ford',
    'model':'Falcon',
    'color':'#351243',
    'year':1966,
    'taxes':false,
    'documents':true,
    'price':28919},


  {'id':288,
    'brand':'Pontiac',
    'model':'Montana',
    'color':'#79918a',
    'year':2001,
    'taxes':true,
    'documents':false,
    'price':5652},


  {'id':289,
    'brand':'Chevrolet',
    'model':'Lumina',
    'color':'#c8ce04',
    'year':1997,
    'taxes':true,
    'documents':false,
    'price':31950},


  {'id':290,
    'brand':'Honda',
    'model':'Odyssey',
    'color':'#56d40c',
    'year':2008,
    'taxes':true,
    'documents':true,
    'price':31555},


  {'id':291,
    'brand':'Buick',
    'model':'Regal',
    'color':'#e8d3f1',
    'year':2011,
    'taxes':false,
    'documents':true,
    'price':7970},


  {'id':292,
    'brand':'Toyota',
    'model':'T100',
    'color':'#f63dde',
    'year':1997,
    'taxes':true,
    'documents':true,
    'price':34373},


  {'id':293,
    'brand':'Buick',
    'model':'Century',
    'color':'#3a5d07',
    'year':1999,
    'taxes':false,
    'documents':false,
    'price':31314},


  {'id':294,
    'brand':'Jeep',
    'model':'Commander',
    'color':'#ca0fe7',
    'year':2007,
    'taxes':true,
    'documents':false,
    'price':16906},


  {'id':295,
    'brand':'Acura',
    'model':'RL',
    'color':'#bce588',
    'year':2007,
    'taxes':false,
    'documents':true,
    'price':25560},


  {'id':296,
    'brand':'Chevrolet',
    'model':'Express 1500',
    'color':'#ff0970',
    'year':2007,
    'taxes':false,
    'documents':true,
    'price':24153},


  {'id':297,
    'brand':'Pontiac',
    'model':'Aztek',
    'color':'#cbd8dc',
    'year':2002,
    'taxes':false,
    'documents':true,
    'price':3820},


  {'id':298,
    'brand':'Volkswagen',
    'model':'Passat',
    'color':'#1aceb4',
    'year':2008,
    'taxes':false,
    'documents':true,
    'price':14210},


  {'id':299,
    'brand':'GMC',
    'model':'3500',
    'color':'#173874',
    'year':1996,
    'taxes':false,
    'documents':true,
    'price':9767},


  {'id':300,
    'brand':'Mitsubishi',
    'model':'Eclipse',
    'color':'#c0547a',
    'year':1990,
    'taxes':false,
    'documents':true,
    'price':16088}];
