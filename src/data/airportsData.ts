export interface AirportOption {
  code: string;
  city: string;
  country: string;
  name: string;
  region: 'Americas' | 'Saudi Arabia' | 'Middle East' | 'Europe' | 'South Asia' | 'Asia-Pacific' | 'Africa';
  isPopular?: boolean;
  aliases?: string[];
}

export const TOP_POPULAR_CODES: { code: string; city: string; country: string }[] = [
  { code: 'IAH', city: 'Houston', country: 'USA' },
  { code: 'MED', city: 'Madinah', country: 'Saudi Arabia' },
  { code: 'JED', city: 'Jeddah', country: 'Saudi Arabia' },
  { code: 'JFK', city: 'New York', country: 'USA' },
  { code: 'ORD', city: 'Chicago', country: 'USA' },
  { code: 'LHR', city: 'London', country: 'UK' },
  { code: 'DXB', city: 'Dubai', country: 'UAE' },
  { code: 'DAC', city: 'Dhaka', country: 'Bangladesh' },
  { code: 'DOH', city: 'Doha', country: 'Qatar' },
  { code: 'IST', city: 'Istanbul', country: 'Turkey' },
  { code: 'LAX', city: 'Los Angeles', country: 'USA' },
  { code: 'DFW', city: 'Dallas', country: 'USA' },
  { code: 'KUL', city: 'Kuala Lumpur', country: 'Malaysia' },
  { code: 'SIN', city: 'Singapore', country: 'Singapore' },
  { code: 'CAI', city: 'Cairo', country: 'Egypt' },
  { code: 'YYZ', city: 'Toronto', country: 'Canada' },
  { code: 'DEL', city: 'New Delhi', country: 'India' },
  { code: 'KHI', city: 'Karachi', country: 'Pakistan' }
];

export const GLOBAL_AIRPORTS: AirportOption[] = [
  // North America & USA Hubs
  {
    code: 'IAH',
    city: 'Houston',
    country: 'United States',
    name: 'George Bush Intercontinental Airport',
    region: 'Americas',
    isPopular: true,
    aliases: ['houston', 'iah', 'texas', 'tx', 'bush', 'george bush', 'intercontinental']
  },
  {
    code: 'HOU',
    city: 'Houston',
    country: 'United States',
    name: 'William P. Hobby Airport',
    region: 'Americas',
    isPopular: false,
    aliases: ['houston', 'hobby', 'hou', 'texas']
  },
  {
    code: 'JFK',
    city: 'New York',
    country: 'United States',
    name: 'John F. Kennedy International',
    region: 'Americas',
    isPopular: true,
    aliases: ['new york', 'jfk', 'nyc', 'kennedy']
  },
  {
    code: 'EWR',
    city: 'New York / Newark',
    country: 'United States',
    name: 'Newark Liberty International',
    region: 'Americas',
    isPopular: true,
    aliases: ['newark', 'ewr', 'new jersey', 'nyc']
  },
  {
    code: 'LGA',
    city: 'New York',
    country: 'United States',
    name: 'LaGuardia Airport',
    region: 'Americas',
    isPopular: false,
    aliases: ['laguardia', 'lga', 'new york', 'nyc']
  },
  {
    code: 'ORD',
    city: 'Chicago',
    country: 'United States',
    name: "O'Hare International Airport",
    region: 'Americas',
    isPopular: true,
    aliases: ['chicago', 'ord', 'ohare', 'illinois']
  },
  {
    code: 'MDW',
    city: 'Chicago',
    country: 'United States',
    name: 'Midway International Airport',
    region: 'Americas',
    aliases: ['chicago', 'midway', 'mdw']
  },
  {
    code: 'LAX',
    city: 'Los Angeles',
    country: 'United States',
    name: 'Los Angeles International',
    region: 'Americas',
    isPopular: true,
    aliases: ['los angeles', 'lax', 'california', 'la']
  },
  {
    code: 'SFO',
    city: 'San Francisco',
    country: 'United States',
    name: 'San Francisco International',
    region: 'Americas',
    isPopular: true,
    aliases: ['san francisco', 'sfo', 'bay area', 'california']
  },
  {
    code: 'DFW',
    city: 'Dallas / Fort Worth',
    country: 'United States',
    name: 'Dallas/Fort Worth International',
    region: 'Americas',
    isPopular: true,
    aliases: ['dallas', 'dfw', 'fort worth', 'texas']
  },
  {
    code: 'DAL',
    city: 'Dallas',
    country: 'United States',
    name: 'Dallas Love Field',
    region: 'Americas',
    aliases: ['dallas', 'dal', 'love field', 'texas']
  },
  {
    code: 'MIA',
    city: 'Miami',
    country: 'United States',
    name: 'Miami International Airport',
    region: 'Americas',
    isPopular: true,
    aliases: ['miami', 'mia', 'florida']
  },
  {
    code: 'FLL',
    city: 'Fort Lauderdale',
    country: 'United States',
    name: 'Fort Lauderdale–Hollywood International',
    region: 'Americas',
    aliases: ['fort lauderdale', 'fll', 'florida']
  },
  {
    code: 'MCO',
    city: 'Orlando',
    country: 'United States',
    name: 'Orlando International Airport',
    region: 'Americas',
    isPopular: true,
    aliases: ['orlando', 'mco', 'florida', 'disney']
  },
  {
    code: 'ATL',
    city: 'Atlanta',
    country: 'United States',
    name: 'Hartsfield-Jackson Atlanta Intl',
    region: 'Americas',
    isPopular: true,
    aliases: ['atlanta', 'atl', 'georgia']
  },
  {
    code: 'BOS',
    city: 'Boston',
    country: 'United States',
    name: 'Boston Logan International',
    region: 'Americas',
    isPopular: true,
    aliases: ['boston', 'bos', 'logan', 'massachusetts']
  },
  {
    code: 'IAD',
    city: 'Washington D.C.',
    country: 'United States',
    name: 'Washington Dulles International',
    region: 'Americas',
    isPopular: true,
    aliases: ['washington', 'iad', 'dulles', 'dc', 'virginia']
  },
  {
    code: 'DCA',
    city: 'Washington D.C.',
    country: 'United States',
    name: 'Ronald Reagan Washington National',
    region: 'Americas',
    aliases: ['washington', 'dca', 'reagan', 'dc']
  },
  {
    code: 'SEA',
    city: 'Seattle',
    country: 'United States',
    name: 'Seattle-Tacoma International Airport',
    region: 'Americas',
    isPopular: true,
    aliases: ['seattle', 'sea', 'seatac', 'washington']
  },
  {
    code: 'DEN',
    city: 'Denver',
    country: 'United States',
    name: 'Denver International Airport',
    region: 'Americas',
    isPopular: true,
    aliases: ['denver', 'den', 'colorado']
  },
  {
    code: 'PHX',
    city: 'Phoenix',
    country: 'United States',
    name: 'Phoenix Sky Harbor International',
    region: 'Americas',
    aliases: ['phoenix', 'phx', 'arizona']
  },
  {
    code: 'PHL',
    city: 'Philadelphia',
    country: 'United States',
    name: 'Philadelphia International Airport',
    region: 'Americas',
    aliases: ['philadelphia', 'phl', 'pennsylvania', 'philly']
  },
  {
    code: 'CLT',
    city: 'Charlotte',
    country: 'United States',
    name: 'Charlotte Douglas International',
    region: 'Americas',
    aliases: ['charlotte', 'clt', 'north carolina']
  },
  {
    code: 'DTW',
    city: 'Detroit',
    country: 'United States',
    name: 'Detroit Metropolitan Wayne County',
    region: 'Americas',
    isPopular: true,
    aliases: ['detroit', 'dtw', 'michigan']
  },
  {
    code: 'MSP',
    city: 'Minneapolis / St. Paul',
    country: 'United States',
    name: 'Minneapolis–Saint Paul International',
    region: 'Americas',
    aliases: ['minneapolis', 'msp', 'minnesota', 'saint paul']
  },
  {
    code: 'AUS',
    city: 'Austin',
    country: 'United States',
    name: 'Austin-Bergstrom International',
    region: 'Americas',
    aliases: ['austin', 'aus', 'texas']
  },
  {
    code: 'YYZ',
    city: 'Toronto',
    country: 'Canada',
    name: 'Toronto Pearson International',
    region: 'Americas',
    isPopular: true,
    aliases: ['toronto', 'yyz', 'ontario', 'canada', 'pearson']
  },
  {
    code: 'YVR',
    city: 'Vancouver',
    country: 'Canada',
    name: 'Vancouver International Airport',
    region: 'Americas',
    aliases: ['vancouver', 'yvr', 'british columbia', 'canada']
  },
  {
    code: 'YUL',
    city: 'Montreal',
    country: 'Canada',
    name: 'Montréal-Trudeau International',
    region: 'Americas',
    aliases: ['montreal', 'yul', 'quebec', 'canada']
  },
  {
    code: 'YYC',
    city: 'Calgary',
    country: 'Canada',
    name: 'Calgary International Airport',
    region: 'Americas',
    aliases: ['calgary', 'yyc', 'alberta', 'canada']
  },

  // Saudi Arabia Hubs & Umrah Gateways
  {
    code: 'JED',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    name: 'King Abdulaziz International (Umrah Terminal & Hajj)',
    region: 'Saudi Arabia',
    isPopular: true,
    aliases: ['jeddah', 'jed', 'makkah', 'mecca', 'kaaba', 'umrah', 'saudi']
  },
  {
    code: 'MED',
    city: 'Madinah',
    country: 'Saudi Arabia',
    name: 'Prince Mohammad bin Abdulaziz (Prophet’s Mosque)',
    region: 'Saudi Arabia',
    isPopular: true,
    aliases: ['madinah', 'medina', 'med', 'prophet', 'umrah', 'saudi', 'masjid nabawi']
  },
  {
    code: 'RUH',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    name: 'King Khalid International Airport',
    region: 'Saudi Arabia',
    isPopular: true,
    aliases: ['riyadh', 'ruh', 'capital', 'saudi']
  },
  {
    code: 'DMM',
    city: 'Dammam / Khobar',
    country: 'Saudi Arabia',
    name: 'King Fahd International Airport',
    region: 'Saudi Arabia',
    isPopular: true,
    aliases: ['dammam', 'dmm', 'khobar', 'eastern province', 'saudi']
  },
  {
    code: 'TIF',
    city: 'Taif',
    country: 'Saudi Arabia',
    name: 'Taif Regional Airport (Miqat Qarn al-Manazil)',
    region: 'Saudi Arabia',
    aliases: ['taif', 'tif', 'miqat', 'saudi']
  },
  {
    code: 'YNB',
    city: 'Yanbu',
    country: 'Saudi Arabia',
    name: 'Prince Abdul Mohsin bin Abdulaziz',
    region: 'Saudi Arabia',
    aliases: ['yanbu', 'ynb', 'red sea', 'saudi']
  },
  {
    code: 'AHB',
    city: 'Abha',
    country: 'Saudi Arabia',
    name: 'Abha International Airport',
    region: 'Saudi Arabia',
    aliases: ['abha', 'ahb', 'aseer', 'saudi']
  },
  {
    code: 'ULH',
    city: 'AlUla',
    country: 'Saudi Arabia',
    name: 'Prince Abdul Majeed bin Abdulaziz Airport',
    region: 'Saudi Arabia',
    aliases: ['alula', 'ulh', 'hegra', 'saudi']
  },

  // Middle East & Gulf Hubs
  {
    code: 'DXB',
    city: 'Dubai',
    country: 'United Arab Emirates',
    name: 'Dubai International Airport',
    region: 'Middle East',
    isPopular: true,
    aliases: ['dubai', 'dxb', 'uae', 'emirates']
  },
  {
    code: 'DWC',
    city: 'Dubai',
    country: 'United Arab Emirates',
    name: 'Al Maktoum International Airport',
    region: 'Middle East',
    aliases: ['dubai', 'dwc', 'al maktoum', 'uae']
  },
  {
    code: 'AUH',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    name: 'Zayed International Airport',
    region: 'Middle East',
    isPopular: true,
    aliases: ['abu dhabi', 'auh', 'zayed', 'uae', 'etihad']
  },
  {
    code: 'SHJ',
    city: 'Sharjah',
    country: 'United Arab Emirates',
    name: 'Sharjah International Airport',
    region: 'Middle East',
    aliases: ['sharjah', 'shj', 'air arabia', 'uae']
  },
  {
    code: 'DOH',
    city: 'Doha',
    country: 'Qatar',
    name: 'Hamad International Airport',
    region: 'Middle East',
    isPopular: true,
    aliases: ['doha', 'doh', 'qatar', 'hamad', 'qatar airways']
  },
  {
    code: 'IST',
    city: 'Istanbul',
    country: 'Turkey',
    name: 'Istanbul Airport',
    region: 'Middle East',
    isPopular: true,
    aliases: ['istanbul', 'ist', 'turkey', 'turkish', 'constantinople']
  },
  {
    code: 'SAW',
    city: 'Istanbul',
    country: 'Turkey',
    name: 'Sabiha Gökçen International',
    region: 'Middle East',
    aliases: ['sabiha', 'saw', 'istanbul', 'pegasus', 'turkey']
  },
  {
    code: 'CAI',
    city: 'Cairo',
    country: 'Egypt',
    name: 'Cairo International Airport',
    region: 'Middle East',
    isPopular: true,
    aliases: ['cairo', 'cai', 'egypt', 'egyptair']
  },
  {
    code: 'HBE',
    city: 'Alexandria',
    country: 'Egypt',
    name: 'Borg El Arab International',
    region: 'Middle East',
    aliases: ['alexandria', 'hbe', 'borg el arab', 'egypt']
  },
  {
    code: 'AMM',
    city: 'Amman',
    country: 'Jordan',
    name: 'Queen Alia International',
    region: 'Middle East',
    isPopular: true,
    aliases: ['amman', 'amm', 'jordan', 'royal jordanian']
  },
  {
    code: 'KWI',
    city: 'Kuwait City',
    country: 'Kuwait',
    name: 'Kuwait International Airport',
    region: 'Middle East',
    isPopular: true,
    aliases: ['kuwait', 'kwi', 'kuwait airways']
  },
  {
    code: 'BAH',
    city: 'Manama',
    country: 'Bahrain',
    name: 'Bahrain International Airport',
    region: 'Middle East',
    isPopular: true,
    aliases: ['bahrain', 'bah', 'manama', 'gulf air']
  },
  {
    code: 'MCT',
    city: 'Muscat',
    country: 'Oman',
    name: 'Muscat International Airport',
    region: 'Middle East',
    isPopular: true,
    aliases: ['muscat', 'mct', 'oman', 'oman air']
  },
  {
    code: 'BEY',
    city: 'Beirut',
    country: 'Lebanon',
    name: 'Beirut-Rafic Hariri International',
    region: 'Middle East',
    aliases: ['beirut', 'bey', 'lebanon', 'mea']
  },
  {
    code: 'BGW',
    city: 'Baghdad',
    country: 'Iraq',
    name: 'Baghdad International Airport',
    region: 'Middle East',
    aliases: ['baghdad', 'bgw', 'iraq']
  },
  {
    code: 'EBL',
    city: 'Erbil',
    country: 'Iraq',
    name: 'Erbil International Airport',
    region: 'Middle East',
    aliases: ['erbil', 'ebl', 'kurdistan', 'iraq']
  },
  {
    code: 'CMN',
    city: 'Casablanca',
    country: 'Morocco',
    name: 'Mohammed V International',
    region: 'Middle East',
    isPopular: true,
    aliases: ['casablanca', 'cmn', 'morocco', 'royal air maroc']
  },

  // Europe & UK
  {
    code: 'LHR',
    city: 'London',
    country: 'United Kingdom',
    name: 'London Heathrow Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['london', 'lhr', 'heathrow', 'uk', 'england', 'british airways']
  },
  {
    code: 'LGW',
    city: 'London',
    country: 'United Kingdom',
    name: 'London Gatwick Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['gatwick', 'lgw', 'london', 'uk']
  },
  {
    code: 'STN',
    city: 'London',
    country: 'United Kingdom',
    name: 'London Stansted Airport',
    region: 'Europe',
    aliases: ['stansted', 'stn', 'london', 'ryanair']
  },
  {
    code: 'MAN',
    city: 'Manchester',
    country: 'United Kingdom',
    name: 'Manchester Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['manchester', 'man', 'uk', 'north england']
  },
  {
    code: 'BHX',
    city: 'Birmingham',
    country: 'United Kingdom',
    name: 'Birmingham Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['birmingham', 'bhx', 'uk', 'midlands']
  },
  {
    code: 'EDI',
    city: 'Edinburgh',
    country: 'United Kingdom',
    name: 'Edinburgh Airport',
    region: 'Europe',
    aliases: ['edinburgh', 'edi', 'scotland', 'uk']
  },
  {
    code: 'CDG',
    city: 'Paris',
    country: 'France',
    name: 'Paris Charles de Gaulle',
    region: 'Europe',
    isPopular: true,
    aliases: ['paris', 'cdg', 'charles de gaulle', 'france', 'air france']
  },
  {
    code: 'ORY',
    city: 'Paris',
    country: 'France',
    name: 'Paris Orly Airport',
    region: 'Europe',
    aliases: ['paris', 'ory', 'orly', 'france']
  },
  {
    code: 'FRA',
    city: 'Frankfurt',
    country: 'Germany',
    name: 'Frankfurt Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['frankfurt', 'fra', 'germany', 'lufthansa']
  },
  {
    code: 'MUC',
    city: 'Munich',
    country: 'Germany',
    name: 'Munich Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['munich', 'muc', 'germany', 'bavaria']
  },
  {
    code: 'AMS',
    city: 'Amsterdam',
    country: 'Netherlands',
    name: 'Amsterdam Airport Schiphol',
    region: 'Europe',
    isPopular: true,
    aliases: ['amsterdam', 'ams', 'schiphol', 'netherlands', 'holland', 'klm']
  },
  {
    code: 'FCO',
    city: 'Rome',
    country: 'Italy',
    name: 'Leonardo da Vinci–Fiumicino',
    region: 'Europe',
    isPopular: true,
    aliases: ['rome', 'fco', 'fiumicino', 'italy']
  },
  {
    code: 'MXP',
    city: 'Milan',
    country: 'Italy',
    name: 'Milan Malpensa Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['milan', 'mxp', 'malpensa', 'italy']
  },
  {
    code: 'MAD',
    city: 'Madrid',
    country: 'Spain',
    name: 'Adolfo Suárez Madrid–Barajas',
    region: 'Europe',
    isPopular: true,
    aliases: ['madrid', 'mad', 'barajas', 'spain', 'iberia']
  },
  {
    code: 'BCN',
    city: 'Barcelona',
    country: 'Spain',
    name: 'Josep Tarradellas Barcelona-El Prat',
    region: 'Europe',
    isPopular: true,
    aliases: ['barcelona', 'bcn', 'el prat', 'spain', 'catalonia']
  },
  {
    code: 'ZRH',
    city: 'Zurich',
    country: 'Switzerland',
    name: 'Zurich Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['zurich', 'zrh', 'switzerland', 'swiss']
  },
  {
    code: 'VIE',
    city: 'Vienna',
    country: 'Austria',
    name: 'Vienna International Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['vienna', 'vie', 'austria', 'austrian']
  },
  {
    code: 'BRU',
    city: 'Brussels',
    country: 'Belgium',
    name: 'Brussels Airport',
    region: 'Europe',
    aliases: ['brussels', 'bru', 'belgium']
  },
  {
    code: 'DUB',
    city: 'Dublin',
    country: 'Ireland',
    name: 'Dublin Airport',
    region: 'Europe',
    isPopular: true,
    aliases: ['dublin', 'dub', 'ireland', 'aer lingus']
  },

  // South Asia & Bangladesh Hubs
  {
    code: 'DAC',
    city: 'Dhaka',
    country: 'Bangladesh',
    name: 'Hazrat Shahjalal International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['dhaka', 'dac', 'bangladesh', 'biman', 'shahjalal']
  },
  {
    code: 'CGP',
    city: 'Chittagong',
    country: 'Bangladesh',
    name: 'Shah Amanat International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['chittagong', 'cgp', 'chattogram', 'bangladesh']
  },
  {
    code: 'ZYL',
    city: 'Sylhet',
    country: 'Bangladesh',
    name: 'Osmani International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['sylhet', 'zyl', 'osmani', 'bangladesh']
  },
  {
    code: 'CXB',
    city: "Cox's Bazar",
    country: 'Bangladesh',
    name: "Cox's Bazar Airport",
    region: 'South Asia',
    aliases: ['coxs bazar', 'cxb', 'beach', 'bangladesh']
  },
  {
    code: 'DEL',
    city: 'New Delhi',
    country: 'India',
    name: 'Indira Gandhi International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['delhi', 'del', 'new delhi', 'india', 'air india']
  },
  {
    code: 'BOM',
    city: 'Mumbai',
    country: 'India',
    name: 'Chhatrapati Shivaji Maharaj Intl',
    region: 'South Asia',
    isPopular: true,
    aliases: ['mumbai', 'bom', 'bombay', 'india']
  },
  {
    code: 'HYD',
    city: 'Hyderabad',
    country: 'India',
    name: 'Rajiv Gandhi International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['hyderabad', 'hyd', 'telangana', 'india']
  },
  {
    code: 'BLR',
    city: 'Bengaluru',
    country: 'India',
    name: 'Kempegowda International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['bengaluru', 'blr', 'bangalore', 'india']
  },
  {
    code: 'MAA',
    city: 'Chennai',
    country: 'India',
    name: 'Chennai International Airport',
    region: 'South Asia',
    aliases: ['chennai', 'maa', 'madras', 'india']
  },
  {
    code: 'CCU',
    city: 'Kolkata',
    country: 'India',
    name: 'Netaji Subhash Chandra Bose Intl',
    region: 'South Asia',
    isPopular: true,
    aliases: ['kolkata', 'ccu', 'calcutta', 'india', 'bengal']
  },
  {
    code: 'KHI',
    city: 'Karachi',
    country: 'Pakistan',
    name: 'Jinnah International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['karachi', 'khi', 'pakistan', 'pia', 'jinnah']
  },
  {
    code: 'LHE',
    city: 'Lahore',
    country: 'Pakistan',
    name: 'Allama Iqbal International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['lahore', 'lhe', 'pakistan', 'punjab']
  },
  {
    code: 'ISB',
    city: 'Islamabad',
    country: 'Pakistan',
    name: 'Islamabad International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['islamabad', 'isb', 'rawalpindi', 'pakistan']
  },
  {
    code: 'PEW',
    city: 'Peshawar',
    country: 'Pakistan',
    name: 'Bacha Khan International Airport',
    region: 'South Asia',
    aliases: ['peshawar', 'pew', 'kpk', 'pakistan']
  },
  {
    code: 'CMB',
    city: 'Colombo',
    country: 'Sri Lanka',
    name: 'Bandaranaike International Airport',
    region: 'South Asia',
    isPopular: true,
    aliases: ['colombo', 'cmb', 'sri lanka', 'srilankan']
  },
  {
    code: 'KTM',
    city: 'Kathmandu',
    country: 'Nepal',
    name: 'Tribhuvan International Airport',
    region: 'South Asia',
    aliases: ['kathmandu', 'ktm', 'nepal']
  },

  // Southeast Asia & Asia-Pacific Hubs
  {
    code: 'KUL',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    name: 'Kuala Lumpur International Airport',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['kuala lumpur', 'kul', 'kl', 'malaysia', 'airasia']
  },
  {
    code: 'SIN',
    city: 'Singapore',
    country: 'Singapore',
    name: 'Singapore Changi Airport',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['singapore', 'sin', 'changi', 'singapore airlines']
  },
  {
    code: 'BKK',
    city: 'Bangkok',
    country: 'Thailand',
    name: 'Suvarnabhumi Airport',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['bangkok', 'bkk', 'suvarnabhumi', 'thailand', 'thai airways']
  },
  {
    code: 'DMK',
    city: 'Bangkok',
    country: 'Thailand',
    name: 'Don Mueang International',
    region: 'Asia-Pacific',
    aliases: ['don mueang', 'dmk', 'bangkok', 'thailand']
  },
  {
    code: 'HKT',
    city: 'Phuket',
    country: 'Thailand',
    name: 'Phuket International Airport',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['phuket', 'hkt', 'thailand', 'island']
  },
  {
    code: 'DPS',
    city: 'Bali',
    country: 'Indonesia',
    name: 'Ngurah Rai International Airport',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['bali', 'dps', 'denpasar', 'indonesia']
  },
  {
    code: 'CGK',
    city: 'Jakarta',
    country: 'Indonesia',
    name: 'Soekarno-Hatta International',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['jakarta', 'cgk', 'indonesia', 'garuda']
  },
  {
    code: 'SUB',
    city: 'Surabaya',
    country: 'Indonesia',
    name: 'Juanda International Airport',
    region: 'Asia-Pacific',
    aliases: ['surabaya', 'sub', 'east java', 'indonesia']
  },
  {
    code: 'MNL',
    city: 'Manila',
    country: 'Philippines',
    name: 'Ninoy Aquino International',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['manila', 'mnl', 'philippines', 'naia']
  },
  {
    code: 'SYD',
    city: 'Sydney',
    country: 'Australia',
    name: 'Sydney Kingsford Smith Airport',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['sydney', 'syd', 'australia', 'qantas']
  },
  {
    code: 'MEL',
    city: 'Melbourne',
    country: 'Australia',
    name: 'Melbourne Airport',
    region: 'Asia-Pacific',
    aliases: ['melbourne', 'mel', 'tullamarine', 'australia']
  },
  {
    code: 'HND',
    city: 'Tokyo',
    country: 'Japan',
    name: 'Tokyo Haneda Airport',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['tokyo', 'hnd', 'haneda', 'japan', 'ana', 'jal']
  },
  {
    code: 'NRT',
    city: 'Tokyo',
    country: 'Japan',
    name: 'Narita International Airport',
    region: 'Asia-Pacific',
    aliases: ['tokyo', 'nrt', 'narita', 'japan']
  },
  {
    code: 'ICN',
    city: 'Seoul',
    country: 'South Korea',
    name: 'Incheon International Airport',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['seoul', 'icn', 'incheon', 'korea', 'korean air']
  },
  {
    code: 'MLE',
    city: 'Malé',
    country: 'Maldives',
    name: 'Velana International Airport',
    region: 'Asia-Pacific',
    isPopular: true,
    aliases: ['male', 'mle', 'maldives', 'velana', 'resort']
  }
];

export const AIRPORT_REGIONS = [
  { id: 'all', label: 'All Airports' },
  { id: 'Americas', label: 'USA & Americas (IAH, JFK, ORD)' },
  { id: 'Saudi Arabia', label: 'Saudi & Umrah (JED, MED, RUH)' },
  { id: 'Middle East', label: 'Middle East (DXB, DOH, IST)' },
  { id: 'Europe', label: 'UK & Europe (LHR, CDG, FRA)' },
  { id: 'South Asia', label: 'South Asia (DAC, DEL, KHI)' },
  { id: 'Asia-Pacific', label: 'Asia & Far East (KUL, SIN, BKK)' }
];

/**
 * Filter airports based on user typed text and optional region filter.
 * Guaranteed to match 3-letter IATA code, city, country, airport name, or aliases.
 */
export function searchAirports(
  query: string,
  regionFilter: string = 'all',
  currentExactValue?: string
): AirportOption[] {
  const clean = query.trim().toLowerCase();

  // If query is identical to current selected text (e.g. user just opened dropdown),
  // do not restrict to just that single airport. Return all popular/relevant airports!
  const isDefaultSelected =
    currentExactValue &&
    clean.length > 0 &&
    (clean === currentExactValue.trim().toLowerCase() ||
      currentExactValue.toLowerCase().includes(clean));

  // Determine base list by region filter
  let baseList = GLOBAL_AIRPORTS;
  if (regionFilter && regionFilter !== 'all') {
    baseList = baseList.filter((a) => a.region === regionFilter);
  }

  // If query is empty or just opened with default selection, return the popular airports
  if (!clean || isDefaultSelected) {
    if (regionFilter && regionFilter !== 'all') {
      return baseList;
    }
    // Return all popular airports, prioritizing Umrah, US hubs, and major gateways
    return baseList.filter((a) => a.isPopular);
  }

  const exactCodeMatches: AirportOption[] = [];
  const prefixCodeMatches: AirportOption[] = [];
  const cityOrAliasMatches: AirportOption[] = [];
  const otherMatches: AirportOption[] = [];

  for (const airport of baseList) {
    const code = airport.code.toLowerCase();
    const city = airport.city.toLowerCase();
    const country = airport.country.toLowerCase();
    const name = airport.name.toLowerCase();
    const aliases = airport.aliases || [];

    if (code === clean) {
      exactCodeMatches.push(airport);
    } else if (code.startsWith(clean)) {
      prefixCodeMatches.push(airport);
    } else if (
      city.startsWith(clean) ||
      aliases.some((alias) => alias.startsWith(clean) || alias === clean)
    ) {
      cityOrAliasMatches.push(airport);
    } else if (
      city.includes(clean) ||
      country.includes(clean) ||
      name.includes(clean) ||
      aliases.some((alias) => alias.includes(clean))
    ) {
      otherMatches.push(airport);
    }
  }

  return [
    ...exactCodeMatches,
    ...prefixCodeMatches,
    ...cityOrAliasMatches,
    ...otherMatches
  ];
}

/**
 * Formats an airport for display in input, e.g. "Houston (IAH)" or "Madinah (MED)"
 */
export function formatAirportSelection(airport: AirportOption): string {
  return `${airport.city} (${airport.code})`;
}

/**
 * Given freeform input, extracts uppercase IATA code if present (e.g. "IAH" or "Houston (IAH)" -> "IAH")
 */
export function extractIataCode(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  // 1. Direct 3 letter code
  if (/^[A-Za-z]{3}$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  // 2. Code inside parentheses, e.g. "Houston (IAH)"
  const match = trimmed.match(/\(([A-Za-z]{3})\)/);
  if (match) {
    return match[1].toUpperCase();
  }
  return null;
}
