export interface AirportOption {
  code: string;
  city: string;
  country: string;
  name: string;
  region: 'Americas' | 'Saudi Arabia' | 'Middle East' | 'Europe' | 'South Asia' | 'Asia-Pacific' | 'Africa';
  countryCode?: string;
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
  { code: 'SDF', city: 'Louisville', country: 'USA' },
  { code: 'KUL', city: 'Kuala Lumpur', country: 'Malaysia' },
  { code: 'SIN', city: 'Singapore', country: 'Singapore' },
  { code: 'CAI', city: 'Cairo', country: 'Egypt' },
  { code: 'YYZ', city: 'Toronto', country: 'Canada' },
  { code: 'DEL', city: 'New Delhi', country: 'India' },
  { code: 'KHI', city: 'Karachi', country: 'Pakistan' }
];

export const AIRPORT_REGIONS = [
  { id: 'all', label: 'All Regions' },
  { id: 'Saudi Arabia', label: '🇸🇦 Saudi Arabia' },
  { id: 'Middle East', label: '🕌 Middle East' },
  { id: 'Americas', label: '🌎 Americas' },
  { id: 'Europe', label: '🏰 Europe' },
  { id: 'South Asia', label: '🌏 South Asia' },
  { id: 'Asia-Pacific', label: '🏮 Asia-Pacific' },
  { id: 'Africa', label: '🌍 Africa' }
];

/**
 * Curated Worldwide Commercial Passenger Airports
 * Comprehensive coverage including major international gateways, regional hubs,
 * South Asian destinations, Middle East transit points, European capitals, and American metropolitan areas.
 */
export const GLOBAL_AIRPORTS: AirportOption[] = [
  // ==========================================
  // NORTH AMERICA & CARIBBEAN (Americas)
  // ==========================================
  // Kentucky & Ohio Valley (Explicitly requested)
  {
    code: 'SDF',
    city: 'Louisville',
    country: 'United States',
    name: 'Louisville Muhammad Ali International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['louisville', 'sdf', 'kentucky', 'ky', 'muhammad ali', 'standiford field', 'derby']
  },
  {
    code: 'CVG',
    city: 'Cincinnati',
    country: 'United States',
    name: 'Cincinnati/Northern Kentucky International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['cincinnati', 'cvg', 'ohio', 'kentucky', 'oh', 'ky', 'northern kentucky', 'hebron']
  },
  {
    code: 'IND',
    city: 'Indianapolis',
    country: 'United States',
    name: 'Indianapolis International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['indianapolis', 'ind', 'indiana', 'in', 'hoosier', 'indy']
  },
  {
    code: 'CMH',
    city: 'Columbus',
    country: 'United States',
    name: 'John Glenn Columbus International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['columbus', 'cmh', 'ohio', 'oh', 'john glenn', 'buckeyes']
  },
  {
    code: 'LEX',
    city: 'Lexington',
    country: 'United States',
    name: 'Blue Grass Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['lexington', 'lex', 'kentucky', 'ky', 'blue grass']
  },
  // Texas
  {
    code: 'IAH',
    city: 'Houston',
    country: 'United States',
    name: 'George Bush Intercontinental Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['houston', 'iah', 'texas', 'tx', 'bush', 'george bush', 'intercontinental']
  },
  {
    code: 'HOU',
    city: 'Houston',
    country: 'United States',
    name: 'William P. Hobby Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['houston', 'hobby', 'hou', 'texas', 'tx']
  },
  {
    code: 'DFW',
    city: 'Dallas',
    country: 'United States',
    name: 'Dallas/Fort Worth International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['dallas', 'dfw', 'fort worth', 'texas', 'tx']
  },
  {
    code: 'DAL',
    city: 'Dallas',
    country: 'United States',
    name: 'Dallas Love Field',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['dallas', 'love field', 'dal', 'texas', 'tx']
  },
  {
    code: 'AUS',
    city: 'Austin',
    country: 'United States',
    name: 'Austin-Bergstrom International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['austin', 'aus', 'bergstrom', 'texas', 'tx']
  },
  {
    code: 'SAT',
    city: 'San Antonio',
    country: 'United States',
    name: 'San Antonio International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['san antonio', 'sat', 'texas', 'tx', 'alamo']
  },
  // New York Tri-State Area
  {
    code: 'JFK',
    city: 'New York',
    country: 'United States',
    name: 'John F. Kennedy International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['new york', 'jfk', 'nyc', 'kennedy', 'queens', 'ny']
  },
  {
    code: 'EWR',
    city: 'New York / Newark',
    country: 'United States',
    name: 'Newark Liberty International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['newark', 'ewr', 'new jersey', 'nj', 'new york', 'nyc', 'liberty']
  },
  {
    code: 'LGA',
    city: 'New York',
    country: 'United States',
    name: 'LaGuardia Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['laguardia', 'lga', 'new york', 'nyc', 'queens', 'ny']
  },
  // Chicago & Midwest
  {
    code: 'ORD',
    city: 'Chicago',
    country: 'United States',
    name: "O'Hare International Airport",
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['chicago', 'ord', 'ohare', 'o hare', 'illinois', 'il']
  },
  {
    code: 'MDW',
    city: 'Chicago',
    country: 'United States',
    name: 'Chicago Midway International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['chicago', 'midway', 'mdw', 'illinois', 'il']
  },
  {
    code: 'DTW',
    city: 'Detroit',
    country: 'United States',
    name: 'Detroit Metropolitan Wayne County Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['detroit', 'dtw', 'michigan', 'mi', 'wayne county', 'metro']
  },
  {
    code: 'MSP',
    city: 'Minneapolis / St. Paul',
    country: 'United States',
    name: 'Minneapolis-Saint Paul International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['minneapolis', 'st paul', 'saint paul', 'msp', 'minnesota', 'mn', 'twin cities']
  },
  {
    code: 'MKE',
    city: 'Milwaukee',
    country: 'United States',
    name: 'Milwaukee Mitchell International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['milwaukee', 'mke', 'wisconsin', 'wi', 'mitchell']
  },
  {
    code: 'STL',
    city: 'St. Louis',
    country: 'United States',
    name: 'St. Louis Lambert International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['st louis', 'saint louis', 'stl', 'missouri', 'mo', 'lambert']
  },
  {
    code: 'MCI',
    city: 'Kansas City',
    country: 'United States',
    name: 'Kansas City International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['kansas city', 'mci', 'missouri', 'mo', 'kci']
  },
  {
    code: 'CLE',
    city: 'Cleveland',
    country: 'United States',
    name: 'Cleveland Hopkins International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['cleveland', 'cle', 'ohio', 'oh', 'hopkins']
  },
  {
    code: 'PIT',
    city: 'Pittsburgh',
    country: 'United States',
    name: 'Pittsburgh International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['pittsburgh', 'pit', 'pennsylvania', 'pa']
  },
  // California & West Coast
  {
    code: 'LAX',
    city: 'Los Angeles',
    country: 'United States',
    name: 'Los Angeles International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['los angeles', 'lax', 'california', 'ca', 'hollywood', 'socal']
  },
  {
    code: 'SFO',
    city: 'San Francisco',
    country: 'United States',
    name: 'San Francisco International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['san francisco', 'sfo', 'california', 'ca', 'bay area', 'silicon valley']
  },
  {
    code: 'OAK',
    city: 'Oakland / San Francisco Bay',
    country: 'United States',
    name: 'San Francisco Bay Oakland International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['oakland', 'oak', 'san francisco bay', 'california', 'ca', 'east bay']
  },
  {
    code: 'SJC',
    city: 'San Jose',
    country: 'United States',
    name: 'Norman Y. Mineta San Jose International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['san jose', 'sjc', 'silicon valley', 'california', 'ca', 'mineta']
  },
  {
    code: 'SAN',
    city: 'San Diego',
    country: 'United States',
    name: 'San Diego International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['san diego', 'san', 'california', 'ca', 'lindbergh field']
  },
  {
    code: 'SMF',
    city: 'Sacramento',
    country: 'United States',
    name: 'Sacramento International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['sacramento', 'smf', 'california', 'ca']
  },
  {
    code: 'SEA',
    city: 'Seattle',
    country: 'United States',
    name: 'Seattle-Tacoma International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['seattle', 'sea', 'seatac', 'tacoma', 'washington', 'wa', 'pacific northwest']
  },
  {
    code: 'PDX',
    city: 'Portland',
    country: 'United States',
    name: 'Portland International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['portland', 'pdx', 'oregon', 'or']
  },
  // Southeast, Florida & Mid-Atlantic
  {
    code: 'ATL',
    city: 'Atlanta',
    country: 'United States',
    name: 'Hartsfield-Jackson Atlanta International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['atlanta', 'atl', 'georgia', 'ga', 'hartsfield']
  },
  {
    code: 'MIA',
    city: 'Miami',
    country: 'United States',
    name: 'Miami International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['miami', 'mia', 'florida', 'fl', 'south florida', 'dade']
  },
  {
    code: 'FLL',
    city: 'Fort Lauderdale',
    country: 'United States',
    name: 'Fort Lauderdale-Hollywood International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['fort lauderdale', 'fll', 'florida', 'fl', 'hollywood', 'broward']
  },
  {
    code: 'MCO',
    city: 'Orlando',
    country: 'United States',
    name: 'Orlando International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['orlando', 'mco', 'florida', 'fl', 'disney', 'universal']
  },
  {
    code: 'TPA',
    city: 'Tampa',
    country: 'United States',
    name: 'Tampa International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['tampa', 'tpa', 'florida', 'fl', 'tampa bay', 'st petersburg']
  },
  {
    code: 'CLT',
    city: 'Charlotte',
    country: 'United States',
    name: 'Charlotte Douglas International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['charlotte', 'clt', 'north carolina', 'nc', 'douglas']
  },
  {
    code: 'RDU',
    city: 'Raleigh / Durham',
    country: 'United States',
    name: 'Raleigh-Durham International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['raleigh', 'durham', 'rdu', 'north carolina', 'nc', 'research triangle']
  },
  {
    code: 'BNA',
    city: 'Nashville',
    country: 'United States',
    name: 'Nashville International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['nashville', 'bna', 'tennessee', 'tn', 'music city']
  },
  {
    code: 'MEM',
    city: 'Memphis',
    country: 'United States',
    name: 'Memphis International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['memphis', 'mem', 'tennessee', 'tn']
  },
  {
    code: 'MSY',
    city: 'New Orleans',
    country: 'United States',
    name: 'Louis Armstrong New Orleans International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['new orleans', 'msy', 'louisiana', 'la', 'louis armstrong', 'nola']
  },
  {
    code: 'BOS',
    city: 'Boston',
    country: 'United States',
    name: 'Logan International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['boston', 'bos', 'logan', 'massachusetts', 'ma', 'new england']
  },
  {
    code: 'PHL',
    city: 'Philadelphia',
    country: 'United States',
    name: 'Philadelphia International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['philadelphia', 'phl', 'philly', 'pennsylvania', 'pa']
  },
  {
    code: 'IAD',
    city: 'Washington, D.C.',
    country: 'United States',
    name: 'Washington Dulles International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['washington', 'dc', 'dulles', 'iad', 'virginia', 'va']
  },
  {
    code: 'DCA',
    city: 'Washington, D.C.',
    country: 'United States',
    name: 'Ronald Reagan Washington National Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['washington', 'dc', 'reagan', 'national', 'dca', 'virginia', 'va']
  },
  {
    code: 'BWI',
    city: 'Baltimore / Washington',
    country: 'United States',
    name: 'Baltimore/Washington International Thurgood Marshall Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['baltimore', 'bwi', 'washington', 'maryland', 'md', 'thurgood marshall']
  },
  // Mountain & Southwest
  {
    code: 'DEN',
    city: 'Denver',
    country: 'United States',
    name: 'Denver International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['denver', 'den', 'colorado', 'co', 'dia', 'rocky mountains']
  },
  {
    code: 'PHX',
    city: 'Phoenix',
    country: 'United States',
    name: 'Phoenix Sky Harbor International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['phoenix', 'phx', 'sky harbor', 'arizona', 'az']
  },
  {
    code: 'LAS',
    city: 'Las Vegas',
    country: 'United States',
    name: 'Harry Reid International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['las vegas', 'vegas', 'las', 'mccarran', 'harry reid', 'nevada', 'nv']
  },
  {
    code: 'SLC',
    city: 'Salt Lake City',
    country: 'United States',
    name: 'Salt Lake City International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['salt lake city', 'slc', 'utah', 'ut', 'wasatch']
  },
  {
    code: 'HNL',
    city: 'Honolulu',
    country: 'United States',
    name: 'Daniel K. Inouye International Airport',
    region: 'Americas',
    countryCode: 'US',
    isPopular: true,
    aliases: ['honolulu', 'hnl', 'oahu', 'hawaii', 'hi', 'waikiki']
  },
  {
    code: 'ANC',
    city: 'Anchorage',
    country: 'United States',
    name: 'Ted Stevens Anchorage International Airport',
    region: 'Americas',
    countryCode: 'US',
    aliases: ['anchorage', 'anc', 'alaska', 'ak', 'ted stevens']
  },
  {
    code: 'SJU',
    city: 'San Juan',
    country: 'Puerto Rico',
    name: 'Luis Muñoz Marín International Airport',
    region: 'Americas',
    countryCode: 'PR',
    aliases: ['san juan', 'sju', 'puerto rico', 'caribbean']
  },
  // Canada
  {
    code: 'YYZ',
    city: 'Toronto',
    country: 'Canada',
    name: 'Toronto Pearson International Airport',
    region: 'Americas',
    countryCode: 'CA',
    isPopular: true,
    aliases: ['toronto', 'yyz', 'ontario', 'pearson', 'canada']
  },
  {
    code: 'YVR',
    city: 'Vancouver',
    country: 'Canada',
    name: 'Vancouver International Airport',
    region: 'Americas',
    countryCode: 'CA',
    isPopular: true,
    aliases: ['vancouver', 'yvr', 'british columbia', 'bc', 'richmond', 'canada']
  },
  {
    code: 'YUL',
    city: 'Montreal',
    country: 'Canada',
    name: 'Montréal-Trudeau International Airport',
    region: 'Americas',
    countryCode: 'CA',
    isPopular: true,
    aliases: ['montreal', 'yul', 'quebec', 'trudeau', 'dorval', 'canada']
  },
  {
    code: 'YYC',
    city: 'Calgary',
    country: 'Canada',
    name: 'Calgary International Airport',
    region: 'Americas',
    countryCode: 'CA',
    aliases: ['calgary', 'yyc', 'alberta', 'banff', 'canada']
  },
  {
    code: 'YOW',
    city: 'Ottawa',
    country: 'Canada',
    name: 'Ottawa Macdonald-Cartier International Airport',
    region: 'Americas',
    countryCode: 'CA',
    aliases: ['ottawa', 'yow', 'ontario', 'capital', 'canada']
  },
  // Mexico & Latin America
  {
    code: 'MEX',
    city: 'Mexico City',
    country: 'Mexico',
    name: 'Mexico City International Airport (Benito Juárez)',
    region: 'Americas',
    countryCode: 'MX',
    isPopular: true,
    aliases: ['mexico city', 'mex', 'cdmx', 'benito juarez', 'mexico']
  },
  {
    code: 'CUN',
    city: 'Cancun',
    country: 'Mexico',
    name: 'Cancún International Airport',
    region: 'Americas',
    countryCode: 'MX',
    isPopular: true,
    aliases: ['cancun', 'cun', 'riviera maya', 'quintana roo', 'mexico']
  },
  {
    code: 'GDL',
    city: 'Guadalajara',
    country: 'Mexico',
    name: 'Guadalajara International Airport',
    region: 'Americas',
    countryCode: 'MX',
    aliases: ['guadalajara', 'gdl', 'jalisco', 'mexico']
  },
  {
    code: 'PTY',
    city: 'Panama City',
    country: 'Panama',
    name: 'Tocumen International Airport',
    region: 'Americas',
    countryCode: 'PA',
    aliases: ['panama city', 'pty', 'tocumen', 'panama']
  },
  {
    code: 'BOG',
    city: 'Bogota',
    country: 'Colombia',
    name: 'El Dorado International Airport',
    region: 'Americas',
    countryCode: 'CO',
    aliases: ['bogota', 'bog', 'el dorado', 'colombia']
  },
  {
    code: 'LIM',
    city: 'Lima',
    country: 'Peru',
    name: 'Jorge Chávez International Airport',
    region: 'Americas',
    countryCode: 'PE',
    aliases: ['lima', 'lim', 'jorge chavez', 'peru', 'machu picchu']
  },
  {
    code: 'GRU',
    city: 'Sao Paulo',
    country: 'Brazil',
    name: 'São Paulo/Guarulhos International Airport',
    region: 'Americas',
    countryCode: 'BR',
    isPopular: true,
    aliases: ['sao paulo', 'gru', 'guarulhos', 'brazil', 'brasil']
  },
  {
    code: 'GIG',
    city: 'Rio de Janeiro',
    country: 'Brazil',
    name: 'Rio de Janeiro/Galeão International Airport',
    region: 'Americas',
    countryCode: 'BR',
    aliases: ['rio de janeiro', 'gig', 'galeao', 'brazil', 'brasil']
  },
  {
    code: 'EZE',
    city: 'Buenos Aires',
    country: 'Argentina',
    name: 'Ministro Pistarini International Airport (Ezeiza)',
    region: 'Americas',
    countryCode: 'AR',
    aliases: ['buenos aires', 'eze', 'ezeiza', 'argentina']
  },
  {
    code: 'SCL',
    city: 'Santiago',
    country: 'Chile',
    name: 'Arturo Merino Benítez International Airport',
    region: 'Americas',
    countryCode: 'CL',
    aliases: ['santiago', 'scl', 'chile']
  },

  // ==========================================
  // SAUDI ARABIA & UMRAH PILGRIMAGE GATEWAYS
  // ==========================================
  {
    code: 'JED',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    name: 'King Abdulaziz International Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    isPopular: true,
    aliases: ['jeddah', 'jed', 'makkah', 'mecca', 'kaaba', 'umrah', 'hajj', 'haramain', 'terminal 1', 'saudi arabia']
  },
  {
    code: 'MED',
    city: 'Madinah',
    country: 'Saudi Arabia',
    name: 'Prince Mohammad bin Abdulaziz International Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    isPopular: true,
    aliases: ['madinah', 'medina', 'med', 'prophet mosque', 'rawdah', 'umrah', 'ziyarat', 'saudi arabia']
  },
  {
    code: 'RUH',
    city: 'Riyadh',
    country: 'Saudi Arabia',
    name: 'King Khalid International Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    isPopular: true,
    aliases: ['riyadh', 'ruh', 'capital', 'saudi arabia', 'king khalid']
  },
  {
    code: 'DMM',
    city: 'Dammam / Khobar',
    country: 'Saudi Arabia',
    name: 'King Fahd International Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['dammam', 'dmm', 'khobar', 'eastern province', 'saudi arabia', 'king fahd']
  },
  {
    code: 'ULH',
    city: 'AlUla',
    country: 'Saudi Arabia',
    name: 'AlUla International Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    isPopular: true,
    aliases: ['alula', 'al ula', 'ulh', 'hegra', 'madain saleh', 'saudi arabia']
  },
  {
    code: 'TIF',
    city: 'Taif',
    country: 'Saudi Arabia',
    name: 'Taif Regional Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['taif', 'tif', 'miqat', 'qarn al manazil', 'saudi arabia']
  },
  {
    code: 'YNB',
    city: 'Yanbu',
    country: 'Saudi Arabia',
    name: 'Prince Abdul Mohsin bin Abdulaziz Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['yanbu', 'ynb', 'red sea', 'saudi arabia']
  },
  {
    code: 'AHB',
    city: 'Abha',
    country: 'Saudi Arabia',
    name: 'Abha International Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['abha', 'ahb', 'aseer', 'saudi arabia']
  },
  {
    code: 'TUU',
    city: 'Tabuk',
    country: 'Saudi Arabia',
    name: 'Tabuk Regional Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['tabuk', 'tuu', 'neom', 'saudi arabia']
  },
  {
    code: 'ELQ',
    city: 'Gassim / Buraidah',
    country: 'Saudi Arabia',
    name: 'Prince Naif bin Abdulaziz International Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['gassim', 'qassim', 'buraidah', 'elq', 'saudi arabia']
  },
  {
    code: 'HAS',
    city: 'Hail',
    country: 'Saudi Arabia',
    name: 'Hail Regional Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['hail', 'has', 'saudi arabia']
  },
  {
    code: 'GIZ',
    city: 'Jazan',
    country: 'Saudi Arabia',
    name: 'King Abdullah bin Abdulaziz Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['jazan', 'jizan', 'giz', 'saudi arabia']
  },
  {
    code: 'EAM',
    city: 'Najran',
    country: 'Saudi Arabia',
    name: 'Najran Regional Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['najran', 'eam', 'saudi arabia']
  },
  {
    code: 'AJF',
    city: 'Al Jouf',
    country: 'Saudi Arabia',
    name: 'Al Jouf Airport',
    region: 'Saudi Arabia',
    countryCode: 'SA',
    aliases: ['al jouf', 'sakaka', 'ajf', 'saudi arabia']
  },

  // ==========================================
  // MIDDLE EAST & GULF HUBS
  // ==========================================
  {
    code: 'DXB',
    city: 'Dubai',
    country: 'United Arab Emirates',
    name: 'Dubai International Airport',
    region: 'Middle East',
    countryCode: 'AE',
    isPopular: true,
    aliases: ['dubai', 'dxb', 'emirates', 'uae', 'united arab emirates', 'burj khalifa']
  },
  {
    code: 'DWC',
    city: 'Dubai',
    country: 'United Arab Emirates',
    name: 'Al Maktoum International Airport (Dubai World Central)',
    region: 'Middle East',
    countryCode: 'AE',
    aliases: ['dubai', 'dwc', 'al maktoum', 'dubai world central', 'uae']
  },
  {
    code: 'AUH',
    city: 'Abu Dhabi',
    country: 'United Arab Emirates',
    name: 'Zayed International Airport',
    region: 'Middle East',
    countryCode: 'AE',
    isPopular: true,
    aliases: ['abu dhabi', 'abudhabi', 'auh', 'etihad', 'zayed', 'uae']
  },
  {
    code: 'SHJ',
    city: 'Sharjah',
    country: 'United Arab Emirates',
    name: 'Sharjah International Airport',
    region: 'Middle East',
    countryCode: 'AE',
    aliases: ['sharjah', 'shj', 'air arabia', 'uae']
  },
  {
    code: 'DOH',
    city: 'Doha',
    country: 'Qatar',
    name: 'Hamad International Airport',
    region: 'Middle East',
    countryCode: 'QA',
    isPopular: true,
    aliases: ['doha', 'doh', 'qatar', 'hamad', 'qsuite']
  },
  {
    code: 'KWI',
    city: 'Kuwait City',
    country: 'Kuwait',
    name: 'Kuwait International Airport',
    region: 'Middle East',
    countryCode: 'KW',
    isPopular: true,
    aliases: ['kuwait', 'kuwait city', 'kwi', 'kuwait airways']
  },
  {
    code: 'BAH',
    city: 'Manama',
    country: 'Bahrain',
    name: 'Bahrain International Airport',
    region: 'Middle East',
    countryCode: 'BH',
    isPopular: true,
    aliases: ['bahrain', 'manama', 'bah', 'gulf air']
  },
  {
    code: 'MCT',
    city: 'Muscat',
    country: 'Oman',
    name: 'Muscat International Airport',
    region: 'Middle East',
    countryCode: 'OM',
    isPopular: true,
    aliases: ['muscat', 'mct', 'oman', 'seeb']
  },
  {
    code: 'SLL',
    city: 'Salalah',
    country: 'Oman',
    name: 'Salalah International Airport',
    region: 'Middle East',
    countryCode: 'OM',
    aliases: ['salalah', 'sll', 'oman', 'khareef']
  },
  {
    code: 'AMM',
    city: 'Amman',
    country: 'Jordan',
    name: 'Queen Alia International Airport',
    region: 'Middle East',
    countryCode: 'JO',
    isPopular: true,
    aliases: ['amman', 'amm', 'jordan', 'queen alia', 'petra']
  },
  {
    code: 'BEY',
    city: 'Beirut',
    country: 'Lebanon',
    name: 'Beirut-Rafic Hariri International Airport',
    region: 'Middle East',
    countryCode: 'LB',
    aliases: ['beirut', 'bey', 'lebanon', 'rafic hariri']
  },
  {
    code: 'CAI',
    city: 'Cairo',
    country: 'Egypt',
    name: 'Cairo International Airport',
    region: 'Middle East',
    countryCode: 'EG',
    isPopular: true,
    aliases: ['cairo', 'cai', 'egypt', 'pyramids', 'giza']
  },
  {
    code: 'HBE',
    city: 'Alexandria',
    country: 'Egypt',
    name: 'Borg El Arab Airport',
    region: 'Middle East',
    countryCode: 'EG',
    aliases: ['alexandria', 'hbe', 'borg el arab', 'egypt']
  },
  {
    code: 'SSH',
    city: 'Sharm El Sheikh',
    country: 'Egypt',
    name: 'Sharm El Sheikh International Airport',
    region: 'Middle East',
    countryCode: 'EG',
    aliases: ['sharm el sheikh', 'ssh', 'red sea', 'sinai', 'egypt']
  },
  {
    code: 'HRG',
    city: 'Hurghada',
    country: 'Egypt',
    name: 'Hurghada International Airport',
    region: 'Middle East',
    countryCode: 'EG',
    aliases: ['hurghada', 'hrg', 'red sea', 'egypt']
  },
  {
    code: 'LXR',
    city: 'Luxor',
    country: 'Egypt',
    name: 'Luxor International Airport',
    region: 'Middle East',
    countryCode: 'EG',
    aliases: ['luxor', 'lxr', 'nile', 'egypt']
  },
  {
    code: 'IST',
    city: 'Istanbul',
    country: 'Turkey',
    name: 'Istanbul Airport',
    region: 'Middle East',
    countryCode: 'TR',
    isPopular: true,
    aliases: ['istanbul', 'ist', 'turkey', 'turkish airlines', 'new istanbul airport']
  },
  {
    code: 'SAW',
    city: 'Istanbul',
    country: 'Turkey',
    name: 'Sabiha Gökçen International Airport',
    region: 'Middle East',
    countryCode: 'TR',
    aliases: ['istanbul', 'sabiha gokcen', 'saw', 'turkey', 'pegasus', 'asian side']
  },
  {
    code: 'AYT',
    city: 'Antalya',
    country: 'Turkey',
    name: 'Antalya Airport',
    region: 'Middle East',
    countryCode: 'TR',
    aliases: ['antalya', 'ayt', 'turkey', 'riviera']
  },
  {
    code: 'ESB',
    city: 'Ankara',
    country: 'Turkey',
    name: 'Ankara Esenboğa Airport',
    region: 'Middle East',
    countryCode: 'TR',
    aliases: ['ankara', 'esb', 'esenboga', 'turkey', 'capital']
  },
  {
    code: 'ADB',
    city: 'Izmir',
    country: 'Turkey',
    name: 'İzmir Adnan Menderes Airport',
    region: 'Middle East',
    countryCode: 'TR',
    aliases: ['izmir', 'adb', 'adnan menderes', 'turkey', 'aegean']
  },
  {
    code: 'BJV',
    city: 'Bodrum',
    country: 'Turkey',
    name: 'Milas-Bodrum Airport',
    region: 'Middle East',
    countryCode: 'TR',
    aliases: ['bodrum', 'bjv', 'milas', 'turkey']
  },
  {
    code: 'DLM',
    city: 'Dalaman',
    country: 'Turkey',
    name: 'Dalaman Airport',
    region: 'Middle East',
    countryCode: 'TR',
    aliases: ['dalaman', 'dlm', 'marmaris', 'fethiye', 'turkey']
  },
  {
    code: 'BGW',
    city: 'Baghdad',
    country: 'Iraq',
    name: 'Baghdad International Airport',
    region: 'Middle East',
    countryCode: 'IQ',
    aliases: ['baghdad', 'bgw', 'iraq']
  },
  {
    code: 'EBL',
    city: 'Erbil',
    country: 'Iraq',
    name: 'Erbil International Airport',
    region: 'Middle East',
    countryCode: 'IQ',
    aliases: ['erbil', 'ebl', 'kurdistan', 'iraq']
  },
  {
    code: 'BSR',
    city: 'Basra',
    country: 'Iraq',
    name: 'Basra International Airport',
    region: 'Middle East',
    countryCode: 'IQ',
    aliases: ['basra', 'bsr', 'iraq']
  },

  // ==========================================
  // SOUTH ASIA (Bangladesh, India, Pakistan, etc.)
  // ==========================================
  // Bangladesh (Explicitly requested)
  {
    code: 'DAC',
    city: 'Dhaka',
    country: 'Bangladesh',
    name: 'Hazrat Shahjalal International Airport',
    region: 'South Asia',
    countryCode: 'BD',
    isPopular: true,
    aliases: ['dhaka', 'dac', 'bangladesh', 'hazrat shahjalal', 'zia', 'biman']
  },
  {
    code: 'CGP',
    city: 'Chittagong',
    country: 'Bangladesh',
    name: 'Shah Amanat International Airport',
    region: 'South Asia',
    countryCode: 'BD',
    isPopular: true,
    aliases: ['chittagong', 'chattogram', 'cgp', 'shah amanat', 'bangladesh', 'port city']
  },
  {
    code: 'ZYL',
    city: 'Sylhet',
    country: 'Bangladesh',
    name: 'Osmani International Airport',
    region: 'South Asia',
    countryCode: 'BD',
    isPopular: true,
    aliases: ['sylhet', 'zyl', 'osmani', 'bangladesh', 'surma', 'tea capital']
  },
  {
    code: 'CXB',
    city: "Cox's Bazar",
    country: 'Bangladesh',
    name: "Cox's Bazar Airport",
    region: 'South Asia',
    countryCode: 'BD',
    aliases: ["cox's bazar", 'coxs bazar', 'cxb', 'bangladesh', 'sea beach']
  },
  {
    code: 'JSR',
    city: 'Jessore',
    country: 'Bangladesh',
    name: 'Jessore Airport',
    region: 'South Asia',
    countryCode: 'BD',
    aliases: ['jessore', 'jsr', 'jashores', 'bangladesh']
  },
  {
    code: 'RJH',
    city: 'Rajshahi',
    country: 'Bangladesh',
    name: 'Shah Makhdum Airport',
    region: 'South Asia',
    countryCode: 'BD',
    aliases: ['rajshahi', 'rjh', 'shah makhdum', 'bangladesh']
  },
  {
    code: 'SPD',
    city: 'Saidpur',
    country: 'Bangladesh',
    name: 'Saidpur Airport',
    region: 'South Asia',
    countryCode: 'BD',
    aliases: ['saidpur', 'spd', 'rangpur', 'bangladesh']
  },
  // India (Explicitly requested)
  {
    code: 'DEL',
    city: 'New Delhi',
    country: 'India',
    name: 'Indira Gandhi International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    isPopular: true,
    aliases: ['delhi', 'new delhi', 'del', 'indira gandhi', 'igi', 'india']
  },
  {
    code: 'BOM',
    city: 'Mumbai',
    country: 'India',
    name: 'Chhatrapati Shivaji Maharaj International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    isPopular: true,
    aliases: ['mumbai', 'bombay', 'bom', 'chhatrapati shivaji', 'india', 'maharashtra']
  },
  {
    code: 'CCU',
    city: 'Kolkata',
    country: 'India',
    name: 'Netaji Subhash Chandra Bose International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    isPopular: true,
    aliases: ['kolkata', 'calcutta', 'ccu', 'netaji subhash', 'dum dum', 'west bengal', 'india']
  },
  {
    code: 'MAA',
    city: 'Chennai',
    country: 'India',
    name: 'Chennai International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    isPopular: true,
    aliases: ['chennai', 'madras', 'maa', 'tamil nadu', 'india']
  },
  {
    code: 'BLR',
    city: 'Bengaluru',
    country: 'India',
    name: 'Kempegowda International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    isPopular: true,
    aliases: ['bengaluru', 'bangalore', 'blr', 'kempegowda', 'karnataka', 'india', 'silicon valley']
  },
  {
    code: 'HYD',
    city: 'Hyderabad',
    country: 'India',
    name: 'Rajiv Gandhi International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    isPopular: true,
    aliases: ['hyderabad', 'hyd', 'rajiv gandhi', 'telangana', 'india']
  },
  {
    code: 'COK',
    city: 'Kochi',
    country: 'India',
    name: 'Cochin International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    isPopular: true,
    aliases: ['kochi', 'cochin', 'cok', 'kerala', 'india']
  },
  {
    code: 'AMD',
    city: 'Ahmedabad',
    country: 'India',
    name: 'Sardar Vallabhbhai Patel International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    aliases: ['ahmedabad', 'amd', 'sardar vallabhbhai', 'gujarat', 'india']
  },
  {
    code: 'GOI',
    city: 'Goa (Dabolim)',
    country: 'India',
    name: 'Dabolim Airport',
    region: 'South Asia',
    countryCode: 'IN',
    aliases: ['goa', 'goi', 'dabolim', 'india']
  },
  {
    code: 'GOX',
    city: 'Goa (Mopa)',
    country: 'India',
    name: 'Manohar International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    aliases: ['goa', 'gox', 'mopa', 'manohar', 'north goa', 'india']
  },
  {
    code: 'ATQ',
    city: 'Amritsar',
    country: 'India',
    name: 'Sri Guru Ram Dass Jee International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    aliases: ['amritsar', 'atq', 'golden temple', 'punjab', 'india']
  },
  {
    code: 'LKO',
    city: 'Lucknow',
    country: 'India',
    name: 'Chaudhary Charan Singh International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    aliases: ['lucknow', 'lko', 'chaudhary charan singh', 'uttar pradesh', 'india']
  },
  {
    code: 'TRV',
    city: 'Thiruvananthapuram',
    country: 'India',
    name: 'Thiruvananthapuram International Airport',
    region: 'South Asia',
    countryCode: 'IN',
    aliases: ['thiruvananthapuram', 'trivandrum', 'trv', 'kerala', 'india']
  },
  // Pakistan (Explicitly requested)
  {
    code: 'KHI',
    city: 'Karachi',
    country: 'Pakistan',
    name: 'Jinnah International Airport',
    region: 'South Asia',
    countryCode: 'PK',
    isPopular: true,
    aliases: ['karachi', 'khi', 'jinnah', 'sindh', 'pakistan']
  },
  {
    code: 'LHE',
    city: 'Lahore',
    country: 'Pakistan',
    name: 'Allama Iqbal International Airport',
    region: 'South Asia',
    countryCode: 'PK',
    isPopular: true,
    aliases: ['lahore', 'lhe', 'allama iqbal', 'punjab', 'pakistan']
  },
  {
    code: 'ISB',
    city: 'Islamabad',
    country: 'Pakistan',
    name: 'Islamabad International Airport',
    region: 'South Asia',
    countryCode: 'PK',
    isPopular: true,
    aliases: ['islamabad', 'rawalpindi', 'isb', 'capital', 'pakistan']
  },
  {
    code: 'PEW',
    city: 'Peshawar',
    country: 'Pakistan',
    name: 'Bacha Khan International Airport',
    region: 'South Asia',
    countryCode: 'PK',
    aliases: ['peshawar', 'pew', 'bacha khan', 'kpk', 'pakistan']
  },
  {
    code: 'MUX',
    city: 'Multan',
    country: 'Pakistan',
    name: 'Multan International Airport',
    region: 'South Asia',
    countryCode: 'PK',
    aliases: ['multan', 'mux', 'punjab', 'pakistan']
  },
  {
    code: 'SKT',
    city: 'Sialkot',
    country: 'Pakistan',
    name: 'Sialkot International Airport',
    region: 'South Asia',
    countryCode: 'PK',
    aliases: ['sialkot', 'skt', 'punjab', 'pakistan']
  },
  // Sri Lanka, Maldives, Nepal
  {
    code: 'CMB',
    city: 'Colombo',
    country: 'Sri Lanka',
    name: 'Bandaranaike International Airport',
    region: 'South Asia',
    countryCode: 'LK',
    isPopular: true,
    aliases: ['colombo', 'cmb', 'sri lanka', 'bandaranaike', 'katunayake']
  },
  {
    code: 'MLE',
    city: 'Male',
    country: 'Maldives',
    name: 'Velana International Airport',
    region: 'South Asia',
    countryCode: 'MV',
    isPopular: true,
    aliases: ['male', 'maldives', 'mle', 'velana', 'hulhule', 'resort']
  },
  {
    code: 'KTM',
    city: 'Kathmandu',
    country: 'Nepal',
    name: 'Tribhuvan International Airport',
    region: 'South Asia',
    countryCode: 'NP',
    aliases: ['kathmandu', 'ktm', 'nepal', 'tribhuvan', 'everest', 'himalayas']
  },

  // ==========================================
  // ASIA-PACIFIC & SOUTHEAST ASIA
  // ==========================================
  // Malaysia (Explicitly requested)
  {
    code: 'KUL',
    city: 'Kuala Lumpur',
    country: 'Malaysia',
    name: 'Kuala Lumpur International Airport',
    region: 'Asia-Pacific',
    countryCode: 'MY',
    isPopular: true,
    aliases: ['kuala lumpur', 'kul', 'klia', 'klia2', 'malaysia', 'sepang', 'petronas']
  },
  {
    code: 'PEN',
    city: 'Penang',
    country: 'Malaysia',
    name: 'Penang International Airport',
    region: 'Asia-Pacific',
    countryCode: 'MY',
    isPopular: true,
    aliases: ['penang', 'pen', 'george town', 'bayan lepas', 'malaysia', 'food capital']
  },
  {
    code: 'LGK',
    city: 'Langkawi',
    country: 'Malaysia',
    name: 'Langkawi International Airport',
    region: 'Asia-Pacific',
    countryCode: 'MY',
    aliases: ['langkawi', 'lgk', 'kedah', 'malaysia', 'island']
  },
  {
    code: 'BKI',
    city: 'Kota Kinabalu',
    country: 'Malaysia',
    name: 'Kota Kinabalu International Airport',
    region: 'Asia-Pacific',
    countryCode: 'MY',
    aliases: ['kota kinabalu', 'bki', 'sabah', 'borneo', 'malaysia']
  },
  {
    code: 'KCH',
    city: 'Kuching',
    country: 'Malaysia',
    name: 'Kuching International Airport',
    region: 'Asia-Pacific',
    countryCode: 'MY',
    aliases: ['kuching', 'kch', 'sarawak', 'borneo', 'malaysia']
  },
  {
    code: 'JHB',
    city: 'Johor Bahru',
    country: 'Malaysia',
    name: 'Senai International Airport',
    region: 'Asia-Pacific',
    countryCode: 'MY',
    aliases: ['johor bahru', 'jhb', 'senai', 'johor', 'malaysia']
  },
  // Singapore
  {
    code: 'SIN',
    city: 'Singapore',
    country: 'Singapore',
    name: 'Singapore Changi Airport',
    region: 'Asia-Pacific',
    countryCode: 'SG',
    isPopular: true,
    aliases: ['singapore', 'sin', 'changi', 'jewel', 'singapore airlines']
  },
  // Thailand
  {
    code: 'BKK',
    city: 'Bangkok',
    country: 'Thailand',
    name: 'Suvarnabhumi Airport',
    region: 'Asia-Pacific',
    countryCode: 'TH',
    isPopular: true,
    aliases: ['bangkok', 'bkk', 'suvarnabhumi', 'thailand']
  },
  {
    code: 'DMK',
    city: 'Bangkok',
    country: 'Thailand',
    name: 'Don Mueang International Airport',
    region: 'Asia-Pacific',
    countryCode: 'TH',
    aliases: ['bangkok', 'dmk', 'don mueang', 'airasia', 'thailand']
  },
  {
    code: 'HKT',
    city: 'Phuket',
    country: 'Thailand',
    name: 'Phuket International Airport',
    region: 'Asia-Pacific',
    countryCode: 'TH',
    isPopular: true,
    aliases: ['phuket', 'hkt', 'thailand', 'andaman']
  },
  {
    code: 'CNX',
    city: 'Chiang Mai',
    country: 'Thailand',
    name: 'Chiang Mai International Airport',
    region: 'Asia-Pacific',
    countryCode: 'TH',
    aliases: ['chiang mai', 'cnx', 'thailand']
  },
  {
    code: 'USM',
    city: 'Koh Samui',
    country: 'Thailand',
    name: 'Samui Airport',
    region: 'Asia-Pacific',
    countryCode: 'TH',
    aliases: ['koh samui', 'usm', 'samui', 'thailand']
  },
  {
    code: 'KBV',
    city: 'Krabi',
    country: 'Thailand',
    name: 'Krabi International Airport',
    region: 'Asia-Pacific',
    countryCode: 'TH',
    aliases: ['krabi', 'kbv', 'thailand', 'ao nang']
  },
  // Indonesia
  {
    code: 'CGK',
    city: 'Jakarta',
    country: 'Indonesia',
    name: 'Soekarno-Hatta International Airport',
    region: 'Asia-Pacific',
    countryCode: 'ID',
    isPopular: true,
    aliases: ['jakarta', 'cgk', 'soekarno hatta', 'cengkareng', 'indonesia', 'java']
  },
  {
    code: 'DPS',
    city: 'Bali / Denpasar',
    country: 'Indonesia',
    name: 'Ngurah Rai International Airport',
    region: 'Asia-Pacific',
    countryCode: 'ID',
    isPopular: true,
    aliases: ['bali', 'denpasar', 'dps', 'ngurah rai', 'kuta', 'ubud', 'indonesia']
  },
  {
    code: 'SUB',
    city: 'Surabaya',
    country: 'Indonesia',
    name: 'Juanda International Airport',
    region: 'Asia-Pacific',
    countryCode: 'ID',
    aliases: ['surabaya', 'sub', 'juanda', 'east java', 'indonesia']
  },
  {
    code: 'KNO',
    city: 'Medan',
    country: 'Indonesia',
    name: 'Kualanamu International Airport',
    region: 'Asia-Pacific',
    countryCode: 'ID',
    aliases: ['medan', 'kno', 'kualanamu', 'north sumatra', 'indonesia']
  },
  // Philippines
  {
    code: 'MNL',
    city: 'Manila',
    country: 'Philippines',
    name: 'Ninoy Aquino International Airport',
    region: 'Asia-Pacific',
    countryCode: 'PH',
    isPopular: true,
    aliases: ['manila', 'mnl', 'naia', 'ninoy aquino', 'philippines']
  },
  {
    code: 'CEB',
    city: 'Cebu',
    country: 'Philippines',
    name: 'Mactan-Cebu International Airport',
    region: 'Asia-Pacific',
    countryCode: 'PH',
    aliases: ['cebu', 'ceb', 'mactan', 'philippines']
  },
  {
    code: 'CRK',
    city: 'Clark',
    country: 'Philippines',
    name: 'Clark International Airport',
    region: 'Asia-Pacific',
    countryCode: 'PH',
    aliases: ['clark', 'crk', 'angeles', 'pampanga', 'philippines']
  },
  // Vietnam
  {
    code: 'SGN',
    city: 'Ho Chi Minh City',
    country: 'Vietnam',
    name: 'Tan Son Nhat International Airport',
    region: 'Asia-Pacific',
    countryCode: 'VN',
    isPopular: true,
    aliases: ['ho chi minh city', 'saigon', 'sgn', 'tan son nhat', 'vietnam']
  },
  {
    code: 'HAN',
    city: 'Hanoi',
    country: 'Vietnam',
    name: 'Noi Bai International Airport',
    region: 'Asia-Pacific',
    countryCode: 'VN',
    isPopular: true,
    aliases: ['hanoi', 'han', 'noi bai', 'vietnam']
  },
  {
    code: 'DAD',
    city: 'Da Nang',
    country: 'Vietnam',
    name: 'Da Nang International Airport',
    region: 'Asia-Pacific',
    countryCode: 'VN',
    aliases: ['da nang', 'danang', 'dad', 'hoi an', 'vietnam']
  },
  // Japan (Explicitly requested Fukuoka)
  {
    code: 'HND',
    city: 'Tokyo',
    country: 'Japan',
    name: 'Tokyo Haneda Airport',
    region: 'Asia-Pacific',
    countryCode: 'JP',
    isPopular: true,
    aliases: ['tokyo', 'hnd', 'haneda', 'japan', 'ota']
  },
  {
    code: 'NRT',
    city: 'Tokyo',
    country: 'Japan',
    name: 'Narita International Airport',
    region: 'Asia-Pacific',
    countryCode: 'JP',
    isPopular: true,
    aliases: ['tokyo', 'nrt', 'narita', 'chiba', 'japan']
  },
  {
    code: 'KIX',
    city: 'Osaka',
    country: 'Japan',
    name: 'Kansai International Airport',
    region: 'Asia-Pacific',
    countryCode: 'JP',
    isPopular: true,
    aliases: ['osaka', 'kix', 'kansai', 'kyoto', 'japan']
  },
  {
    code: 'ITM',
    city: 'Osaka',
    country: 'Japan',
    name: 'Osaka International Airport (Itami)',
    region: 'Asia-Pacific',
    countryCode: 'JP',
    aliases: ['osaka', 'itm', 'itami', 'japan']
  },
  {
    code: 'FUK',
    city: 'Fukuoka',
    country: 'Japan',
    name: 'Fukuoka Airport',
    region: 'Asia-Pacific',
    countryCode: 'JP',
    isPopular: true,
    aliases: ['fukuoka', 'fuk', 'kyushu', 'hakata', 'japan']
  },
  {
    code: 'NGO',
    city: 'Nagoya',
    country: 'Japan',
    name: 'Chubu Centrair International Airport',
    region: 'Asia-Pacific',
    countryCode: 'JP',
    aliases: ['nagoya', 'ngo', 'centrair', 'chubu', 'japan']
  },
  {
    code: 'CTS',
    city: 'Sapporo',
    country: 'Japan',
    name: 'New Chitose Airport',
    region: 'Asia-Pacific',
    countryCode: 'JP',
    aliases: ['sapporo', 'cts', 'chitose', 'hokkaido', 'japan']
  },
  {
    code: 'OKA',
    city: 'Okinawa / Naha',
    country: 'Japan',
    name: 'Naha Airport',
    region: 'Asia-Pacific',
    countryCode: 'JP',
    aliases: ['okinawa', 'naha', 'oka', 'ryukyu', 'japan']
  },
  // South Korea
  {
    code: 'ICN',
    city: 'Seoul',
    country: 'South Korea',
    name: 'Incheon International Airport',
    region: 'Asia-Pacific',
    countryCode: 'KR',
    isPopular: true,
    aliases: ['seoul', 'icn', 'incheon', 'south korea', 'korea']
  },
  {
    code: 'GMP',
    city: 'Seoul',
    country: 'South Korea',
    name: 'Gimpo International Airport',
    region: 'Asia-Pacific',
    countryCode: 'KR',
    aliases: ['seoul', 'gmp', 'gimpo', 'south korea', 'korea']
  },
  {
    code: 'PUS',
    city: 'Busan',
    country: 'South Korea',
    name: 'Gimhae International Airport',
    region: 'Asia-Pacific',
    countryCode: 'KR',
    aliases: ['busan', 'pusan', 'pus', 'gimhae', 'south korea']
  },
  {
    code: 'CJU',
    city: 'Jeju',
    country: 'South Korea',
    name: 'Jeju International Airport',
    region: 'Asia-Pacific',
    countryCode: 'KR',
    aliases: ['jeju', 'cju', 'island', 'south korea']
  },
  // Greater China & Taiwan
  {
    code: 'HKG',
    city: 'Hong Kong',
    country: 'Hong Kong',
    name: 'Hong Kong International Airport (Chek Lap Kok)',
    region: 'Asia-Pacific',
    countryCode: 'HK',
    isPopular: true,
    aliases: ['hong kong', 'hkg', 'chek lap kok', 'cathay pacific']
  },
  {
    code: 'MFM',
    city: 'Macau',
    country: 'Macau',
    name: 'Macau International Airport',
    region: 'Asia-Pacific',
    countryCode: 'MO',
    aliases: ['macau', 'macao', 'mfm']
  },
  {
    code: 'TPE',
    city: 'Taipei',
    country: 'Taiwan',
    name: 'Taiwan Taoyuan International Airport',
    region: 'Asia-Pacific',
    countryCode: 'TW',
    isPopular: true,
    aliases: ['taipei', 'tpe', 'taoyuan', 'taiwan']
  },
  {
    code: 'TSA',
    city: 'Taipei',
    country: 'Taiwan',
    name: 'Taipei Songshan Airport',
    region: 'Asia-Pacific',
    countryCode: 'TW',
    aliases: ['taipei', 'tsa', 'songshan', 'taiwan']
  },
  {
    code: 'PEK',
    city: 'Beijing',
    country: 'China',
    name: 'Beijing Capital International Airport',
    region: 'Asia-Pacific',
    countryCode: 'CN',
    isPopular: true,
    aliases: ['beijing', 'pek', 'capital', 'china']
  },
  {
    code: 'PKX',
    city: 'Beijing',
    country: 'China',
    name: 'Beijing Daxing International Airport',
    region: 'Asia-Pacific',
    countryCode: 'CN',
    aliases: ['beijing', 'pkx', 'daxing', 'china']
  },
  {
    code: 'PVG',
    city: 'Shanghai',
    country: 'China',
    name: 'Shanghai Pudong International Airport',
    region: 'Asia-Pacific',
    countryCode: 'CN',
    isPopular: true,
    aliases: ['shanghai', 'pvg', 'pudong', 'china']
  },
  {
    code: 'SHA',
    city: 'Shanghai',
    country: 'China',
    name: 'Shanghai Hongqiao International Airport',
    region: 'Asia-Pacific',
    countryCode: 'CN',
    aliases: ['shanghai', 'sha', 'hongqiao', 'china']
  },
  {
    code: 'CAN',
    city: 'Guangzhou',
    country: 'China',
    name: 'Guangzhou Baiyun International Airport',
    region: 'Asia-Pacific',
    countryCode: 'CN',
    isPopular: true,
    aliases: ['guangzhou', 'canton', 'can', 'baiyun', 'china']
  },
  {
    code: 'SZX',
    city: 'Shenzhen',
    country: 'China',
    name: "Shenzhen Bao'an International Airport",
    region: 'Asia-Pacific',
    countryCode: 'CN',
    aliases: ['shenzhen', 'szx', 'baoan', 'china']
  },
  {
    code: 'TFU',
    city: 'Chengdu',
    country: 'China',
    name: 'Chengdu Tianfu International Airport',
    region: 'Asia-Pacific',
    countryCode: 'CN',
    aliases: ['chengdu', 'tfu', 'tianfu', 'sichuan', 'panda', 'china']
  },
  // Australia & New Zealand
  {
    code: 'SYD',
    city: 'Sydney',
    country: 'Australia',
    name: 'Sydney Kingsford Smith Airport',
    region: 'Asia-Pacific',
    countryCode: 'AU',
    isPopular: true,
    aliases: ['sydney', 'syd', 'kingsford smith', 'mascot', 'nsw', 'australia']
  },
  {
    code: 'MEL',
    city: 'Melbourne',
    country: 'Australia',
    name: 'Melbourne Airport (Tullamarine)',
    region: 'Asia-Pacific',
    countryCode: 'AU',
    isPopular: true,
    aliases: ['melbourne', 'mel', 'tullamarine', 'victoria', 'vic', 'australia']
  },
  {
    code: 'BNE',
    city: 'Brisbane',
    country: 'Australia',
    name: 'Brisbane Airport',
    region: 'Asia-Pacific',
    countryCode: 'AU',
    aliases: ['brisbane', 'bne', 'queensland', 'qld', 'gold coast', 'australia']
  },
  {
    code: 'PER',
    city: 'Perth',
    country: 'Australia',
    name: 'Perth Airport',
    region: 'Asia-Pacific',
    countryCode: 'AU',
    aliases: ['perth', 'per', 'western australia', 'wa', 'australia']
  },
  {
    code: 'ADL',
    city: 'Adelaide',
    country: 'Australia',
    name: 'Adelaide Airport',
    region: 'Asia-Pacific',
    countryCode: 'AU',
    aliases: ['adelaide', 'adl', 'south australia', 'sa', 'australia']
  },
  {
    code: 'AKL',
    city: 'Auckland',
    country: 'New Zealand',
    name: 'Auckland Airport',
    region: 'Asia-Pacific',
    countryCode: 'NZ',
    isPopular: true,
    aliases: ['auckland', 'akl', 'new zealand', 'mangere']
  },
  {
    code: 'CHC',
    city: 'Christchurch',
    country: 'New Zealand',
    name: 'Christchurch International Airport',
    region: 'Asia-Pacific',
    countryCode: 'NZ',
    aliases: ['christchurch', 'chc', 'south island', 'new zealand']
  },

  // ==========================================
  // EUROPE (United Kingdom, France, Germany, etc.)
  // ==========================================
  // United Kingdom (Explicitly requested Manchester, Birmingham)
  {
    code: 'LHR',
    city: 'London',
    country: 'United Kingdom',
    name: 'Heathrow Airport',
    region: 'Europe',
    countryCode: 'GB',
    isPopular: true,
    aliases: ['london', 'lhr', 'heathrow', 'uk', 'great britain', 'england', 'british airways']
  },
  {
    code: 'LGW',
    city: 'London',
    country: 'United Kingdom',
    name: 'Gatwick Airport',
    region: 'Europe',
    countryCode: 'GB',
    isPopular: true,
    aliases: ['london', 'lgw', 'gatwick', 'uk', 'great britain', 'england']
  },
  {
    code: 'STN',
    city: 'London',
    country: 'United Kingdom',
    name: 'London Stansted Airport',
    region: 'Europe',
    countryCode: 'GB',
    aliases: ['london', 'stn', 'stansted', 'essex', 'ryanair', 'uk']
  },
  {
    code: 'LTN',
    city: 'London',
    country: 'United Kingdom',
    name: 'London Luton Airport',
    region: 'Europe',
    countryCode: 'GB',
    aliases: ['london', 'ltn', 'luton', 'easyjet', 'wizz', 'uk']
  },
  {
    code: 'LCY',
    city: 'London',
    country: 'United Kingdom',
    name: 'London City Airport',
    region: 'Europe',
    countryCode: 'GB',
    aliases: ['london', 'lcy', 'city airport', 'docklands', 'canary wharf', 'uk']
  },
  {
    code: 'SEN',
    city: 'London',
    country: 'United Kingdom',
    name: 'London Southend Airport',
    region: 'Europe',
    countryCode: 'GB',
    aliases: ['london', 'sen', 'southend', 'uk']
  },
  {
    code: 'MAN',
    city: 'Manchester',
    country: 'United Kingdom',
    name: 'Manchester Airport',
    region: 'Europe',
    countryCode: 'GB',
    isPopular: true,
    aliases: ['manchester', 'man', 'uk', 'england', 'ringway', 'north west']
  },
  {
    code: 'BHX',
    city: 'Birmingham',
    country: 'United Kingdom',
    name: 'Birmingham Airport',
    region: 'Europe',
    countryCode: 'GB',
    isPopular: true,
    aliases: ['birmingham', 'bhx', 'uk', 'england', 'midlands', 'solihull']
  },
  {
    code: 'EDI',
    city: 'Edinburgh',
    country: 'United Kingdom',
    name: 'Edinburgh Airport',
    region: 'Europe',
    countryCode: 'GB',
    isPopular: true,
    aliases: ['edinburgh', 'edi', 'scotland', 'uk']
  },
  {
    code: 'GLA',
    city: 'Glasgow',
    country: 'United Kingdom',
    name: 'Glasgow Airport',
    region: 'Europe',
    countryCode: 'GB',
    aliases: ['glasgow', 'gla', 'scotland', 'abbotsinch', 'uk']
  },
  {
    code: 'BRS',
    city: 'Bristol',
    country: 'United Kingdom',
    name: 'Bristol Airport',
    region: 'Europe',
    countryCode: 'GB',
    aliases: ['bristol', 'brs', 'uk', 'south west']
  },
  {
    code: 'NCL',
    city: 'Newcastle',
    country: 'United Kingdom',
    name: 'Newcastle International Airport',
    region: 'Europe',
    countryCode: 'GB',
    aliases: ['newcastle', 'ncl', 'uk', 'tyne']
  },
  {
    code: 'BFS',
    city: 'Belfast',
    country: 'United Kingdom',
    name: 'Belfast International Airport',
    region: 'Europe',
    countryCode: 'GB',
    aliases: ['belfast', 'bfs', 'northern ireland', 'uk', 'aldergrove']
  },
  // France (Explicitly requested Lyon)
  {
    code: 'CDG',
    city: 'Paris',
    country: 'France',
    name: 'Charles de Gaulle Airport',
    region: 'Europe',
    countryCode: 'FR',
    isPopular: true,
    aliases: ['paris', 'cdg', 'charles de gaulle', 'roissy', 'air france', 'france']
  },
  {
    code: 'ORY',
    city: 'Paris',
    country: 'France',
    name: 'Paris Orly Airport',
    region: 'Europe',
    countryCode: 'FR',
    isPopular: true,
    aliases: ['paris', 'ory', 'orly', 'france']
  },
  {
    code: 'BVA',
    city: 'Paris / Beauvais',
    country: 'France',
    name: 'Beauvais-Tillé Airport',
    region: 'Europe',
    countryCode: 'FR',
    aliases: ['paris', 'beauvais', 'bva', 'ryanair', 'france']
  },
  {
    code: 'LYS',
    city: 'Lyon',
    country: 'France',
    name: 'Lyon-Saint Exupéry Airport',
    region: 'Europe',
    countryCode: 'FR',
    isPopular: true,
    aliases: ['lyon', 'lys', 'saint exupery', 'satolas', 'france', 'rhone']
  },
  {
    code: 'NCE',
    city: 'Nice',
    country: 'France',
    name: "Nice Côte d'Azur Airport",
    region: 'Europe',
    countryCode: 'FR',
    isPopular: true,
    aliases: ['nice', 'nce', 'cote dazur', 'french riviera', 'cannes', 'monaco', 'france']
  },
  {
    code: 'MRS',
    city: 'Marseille',
    country: 'France',
    name: 'Marseille Provence Airport',
    region: 'Europe',
    countryCode: 'FR',
    aliases: ['marseille', 'mrs', 'provence', 'marignane', 'france']
  },
  {
    code: 'TLS',
    city: 'Toulouse',
    country: 'France',
    name: 'Toulouse-Blagnac Airport',
    region: 'Europe',
    countryCode: 'FR',
    aliases: ['toulouse', 'tls', 'blagnac', 'airbus', 'france']
  },
  {
    code: 'BOD',
    city: 'Bordeaux',
    country: 'France',
    name: 'Bordeaux-Mérignac Airport',
    region: 'Europe',
    countryCode: 'FR',
    aliases: ['bordeaux', 'bod', 'merignac', 'wine', 'france']
  },
  // Germany
  {
    code: 'FRA',
    city: 'Frankfurt',
    country: 'Germany',
    name: 'Frankfurt Airport',
    region: 'Europe',
    countryCode: 'DE',
    isPopular: true,
    aliases: ['frankfurt', 'fra', 'germany', 'lufthansa', 'am main', 'deutschland']
  },
  {
    code: 'MUC',
    city: 'Munich',
    country: 'Germany',
    name: 'Munich Airport',
    region: 'Europe',
    countryCode: 'DE',
    isPopular: true,
    aliases: ['munich', 'muc', 'munchen', 'bavaria', 'germany', 'deutschland']
  },
  {
    code: 'BER',
    city: 'Berlin',
    country: 'Germany',
    name: 'Berlin Brandenburg Airport',
    region: 'Europe',
    countryCode: 'DE',
    isPopular: true,
    aliases: ['berlin', 'ber', 'brandenburg', 'willy brandt', 'germany', 'deutschland']
  },
  {
    code: 'HAM',
    city: 'Hamburg',
    country: 'Germany',
    name: 'Hamburg Airport',
    region: 'Europe',
    countryCode: 'DE',
    aliases: ['hamburg', 'ham', 'germany', 'deutschland']
  },
  {
    code: 'DUS',
    city: 'Dusseldorf',
    country: 'Germany',
    name: 'Düsseldorf Airport',
    region: 'Europe',
    countryCode: 'DE',
    aliases: ['dusseldorf', 'düsseldorf', 'dus', 'north rhine', 'germany']
  },
  {
    code: 'CGN',
    city: 'Cologne / Bonn',
    country: 'Germany',
    name: 'Cologne Bonn Airport',
    region: 'Europe',
    countryCode: 'DE',
    aliases: ['cologne', 'koln', 'bonn', 'cgn', 'germany']
  },
  {
    code: 'STR',
    city: 'Stuttgart',
    country: 'Germany',
    name: 'Stuttgart Airport',
    region: 'Europe',
    countryCode: 'DE',
    aliases: ['stuttgart', 'str', 'germany']
  },
  // Benelux & Ireland
  {
    code: 'AMS',
    city: 'Amsterdam',
    country: 'Netherlands',
    name: 'Amsterdam Airport Schiphol',
    region: 'Europe',
    countryCode: 'NL',
    isPopular: true,
    aliases: ['amsterdam', 'ams', 'schiphol', 'netherlands', 'holland', 'klm']
  },
  {
    code: 'BRU',
    city: 'Brussels',
    country: 'Belgium',
    name: 'Brussels Airport (Zaventem)',
    region: 'Europe',
    countryCode: 'BE',
    isPopular: true,
    aliases: ['brussels', 'bru', 'zaventem', 'belgium']
  },
  {
    code: 'DUB',
    city: 'Dublin',
    country: 'Ireland',
    name: 'Dublin Airport',
    region: 'Europe',
    countryCode: 'IE',
    isPopular: true,
    aliases: ['dublin', 'dub', 'ireland', 'aer lingus', 'ryanair']
  },
  // Spain & Portugal
  {
    code: 'MAD',
    city: 'Madrid',
    country: 'Spain',
    name: 'Adolfo Suárez Madrid-Barajas Airport',
    region: 'Europe',
    countryCode: 'ES',
    isPopular: true,
    aliases: ['madrid', 'mad', 'barajas', 'iberia', 'spain', 'espana']
  },
  {
    code: 'BCN',
    city: 'Barcelona',
    country: 'Spain',
    name: 'Josep Tarradellas Barcelona-El Prat Airport',
    region: 'Europe',
    countryCode: 'ES',
    isPopular: true,
    aliases: ['barcelona', 'bcn', 'el prat', 'catalonia', 'spain', 'espana']
  },
  {
    code: 'AGP',
    city: 'Malaga',
    country: 'Spain',
    name: 'Málaga-Costa del Sol Airport',
    region: 'Europe',
    countryCode: 'ES',
    aliases: ['malaga', 'agp', 'costa del sol', 'andalusia', 'spain']
  },
  {
    code: 'PMI',
    city: 'Palma de Mallorca',
    country: 'Spain',
    name: 'Palma de Mallorca Airport',
    region: 'Europe',
    countryCode: 'ES',
    aliases: ['palma', 'mallorca', 'majorca', 'pmi', 'balearic islands', 'spain']
  },
  {
    code: 'ALC',
    city: 'Alicante',
    country: 'Spain',
    name: 'Alicante-Elche Miguel Hernández Airport',
    region: 'Europe',
    countryCode: 'ES',
    aliases: ['alicante', 'alc', 'costa blanca', 'spain']
  },
  {
    code: 'SVQ',
    city: 'Seville',
    country: 'Spain',
    name: 'Seville Airport',
    region: 'Europe',
    countryCode: 'ES',
    aliases: ['seville', 'sevilla', 'svq', 'andalusia', 'spain']
  },
  {
    code: 'VLC',
    city: 'Valencia',
    country: 'Spain',
    name: 'Valencia Airport',
    region: 'Europe',
    countryCode: 'ES',
    aliases: ['valencia', 'vlc', 'spain']
  },
  {
    code: 'IBZ',
    city: 'Ibiza',
    country: 'Spain',
    name: 'Ibiza Airport',
    region: 'Europe',
    countryCode: 'ES',
    aliases: ['ibiza', 'ibz', 'eivissa', 'balearic islands', 'spain']
  },
  {
    code: 'LIS',
    city: 'Lisbon',
    country: 'Portugal',
    name: 'Humberto Delgado Airport',
    region: 'Europe',
    countryCode: 'PT',
    isPopular: true,
    aliases: ['lisbon', 'lisboa', 'lis', 'portela', 'tap', 'portugal']
  },
  {
    code: 'OPO',
    city: 'Porto',
    country: 'Portugal',
    name: 'Francisco Sá Carneiro Airport',
    region: 'Europe',
    countryCode: 'PT',
    aliases: ['porto', 'opo', 'sa carneiro', 'portugal']
  },
  {
    code: 'FAO',
    city: 'Faro',
    country: 'Portugal',
    name: 'Faro Airport',
    region: 'Europe',
    countryCode: 'PT',
    aliases: ['faro', 'fao', 'algarve', 'portugal']
  },
  {
    code: 'FNC',
    city: 'Funchal / Madeira',
    country: 'Portugal',
    name: 'Cristiano Ronaldo International Airport',
    region: 'Europe',
    countryCode: 'PT',
    aliases: ['funchal', 'madeira', 'fnc', 'cristiano ronaldo', 'portugal']
  },
  // Italy
  {
    code: 'FCO',
    city: 'Rome',
    country: 'Italy',
    name: 'Leonardo da Vinci-Fiumicino Airport',
    region: 'Europe',
    countryCode: 'IT',
    isPopular: true,
    aliases: ['rome', 'roma', 'fco', 'fiumicino', 'leonardo da vinci', 'italy', 'italia']
  },
  {
    code: 'CIA',
    city: 'Rome',
    country: 'Italy',
    name: 'Rome Ciampino Airport',
    region: 'Europe',
    countryCode: 'IT',
    aliases: ['rome', 'roma', 'cia', 'ciampino', 'ryanair', 'italy']
  },
  {
    code: 'MXP',
    city: 'Milan',
    country: 'Italy',
    name: 'Milan Malpensa Airport',
    region: 'Europe',
    countryCode: 'IT',
    isPopular: true,
    aliases: ['milan', 'milano', 'mxp', 'malpensa', 'italy', 'italia']
  },
  {
    code: 'LIN',
    city: 'Milan',
    country: 'Italy',
    name: 'Milan Linate Airport',
    region: 'Europe',
    countryCode: 'IT',
    aliases: ['milan', 'milano', 'lin', 'linate', 'italy']
  },
  {
    code: 'BGY',
    city: 'Bergamo / Milan',
    country: 'Italy',
    name: 'Orio al Serio International Airport',
    region: 'Europe',
    countryCode: 'IT',
    aliases: ['bergamo', 'milan', 'bgy', 'orio al serio', 'ryanair', 'italy']
  },
  {
    code: 'VCE',
    city: 'Venice',
    country: 'Italy',
    name: 'Venice Marco Polo Airport',
    region: 'Europe',
    countryCode: 'IT',
    aliases: ['venice', 'venezia', 'vce', 'marco polo', 'italy']
  },
  {
    code: 'FLR',
    city: 'Florence',
    country: 'Italy',
    name: 'Florence Airport (Peretola)',
    region: 'Europe',
    countryCode: 'IT',
    aliases: ['florence', 'firenze', 'flr', 'peretola', 'tuscany', 'italy']
  },
  {
    code: 'NAP',
    city: 'Naples',
    country: 'Italy',
    name: 'Naples International Airport',
    region: 'Europe',
    countryCode: 'IT',
    aliases: ['naples', 'napoli', 'nap', 'capodichino', 'amalfi', 'italy']
  },
  {
    code: 'BLQ',
    city: 'Bologna',
    country: 'Italy',
    name: 'Bologna Guglielmo Marconi Airport',
    region: 'Europe',
    countryCode: 'IT',
    aliases: ['bologna', 'blq', 'marconi', 'italy']
  },
  // Switzerland, Austria, Central Europe
  {
    code: 'ZRH',
    city: 'Zurich',
    country: 'Switzerland',
    name: 'Zurich Airport (Kloten)',
    region: 'Europe',
    countryCode: 'CH',
    isPopular: true,
    aliases: ['zurich', 'zrh', 'kloten', 'swiss', 'switzerland']
  },
  {
    code: 'GVA',
    city: 'Geneva',
    country: 'Switzerland',
    name: 'Geneva Airport (Cointrin)',
    region: 'Europe',
    countryCode: 'CH',
    isPopular: true,
    aliases: ['geneva', 'gva', 'cointrin', 'switzerland']
  },
  {
    code: 'BSL',
    city: 'Basel / Mulhouse',
    country: 'Switzerland',
    name: 'EuroAirport Basel Mulhouse Freiburg',
    region: 'Europe',
    countryCode: 'CH',
    aliases: ['basel', 'mulhouse', 'freiburg', 'bsl', 'euroairport', 'switzerland']
  },
  {
    code: 'VIE',
    city: 'Vienna',
    country: 'Austria',
    name: 'Vienna International Airport (Schwechat)',
    region: 'Europe',
    countryCode: 'AT',
    isPopular: true,
    aliases: ['vienna', 'wien', 'vie', 'schwechat', 'austria']
  },
  {
    code: 'PRG',
    city: 'Prague',
    country: 'Czech Republic',
    name: 'Václav Havel Airport Prague',
    region: 'Europe',
    countryCode: 'CZ',
    isPopular: true,
    aliases: ['prague', 'praha', 'prg', 'vaclav havel', 'ruzyne', 'czech republic']
  },
  {
    code: 'BUD',
    city: 'Budapest',
    country: 'Hungary',
    name: 'Budapest Ferenc Liszt International Airport',
    region: 'Europe',
    countryCode: 'HU',
    aliases: ['budapest', 'bud', 'ferenc liszt', 'ferihegy', 'hungary']
  },
  {
    code: 'WAW',
    city: 'Warsaw',
    country: 'Poland',
    name: 'Warsaw Chopin Airport',
    region: 'Europe',
    countryCode: 'PL',
    isPopular: true,
    aliases: ['warsaw', 'warszawa', 'waw', 'chopin', 'okecie', 'poland']
  },
  {
    code: 'KRK',
    city: 'Krakow',
    country: 'Poland',
    name: 'Kraków John Paul II International Airport',
    region: 'Europe',
    countryCode: 'PL',
    aliases: ['krakow', 'cracow', 'krk', 'balice', 'john paul ii', 'poland']
  },
  {
    code: 'ATH',
    city: 'Athens',
    country: 'Greece',
    name: 'Athens International Airport (Eleftherios Venizelos)',
    region: 'Europe',
    countryCode: 'GR',
    isPopular: true,
    aliases: ['athens', 'ath', 'venizelos', 'greece', 'hellas']
  },
  {
    code: 'HER',
    city: 'Heraklion / Crete',
    country: 'Greece',
    name: 'Heraklion International Airport',
    region: 'Europe',
    countryCode: 'GR',
    aliases: ['heraklion', 'crete', 'her', 'kazantzakis', 'greece']
  },
  {
    code: 'SKG',
    city: 'Thessaloniki',
    country: 'Greece',
    name: 'Thessaloniki Airport',
    region: 'Europe',
    countryCode: 'GR',
    aliases: ['thessaloniki', 'skg', 'macedonia', 'greece']
  },
  // Nordics
  {
    code: 'CPH',
    city: 'Copenhagen',
    country: 'Denmark',
    name: 'Copenhagen Airport (Kastrup)',
    region: 'Europe',
    countryCode: 'DK',
    isPopular: true,
    aliases: ['copenhagen', 'kobenhavn', 'cph', 'kastrup', 'denmark', 'sas']
  },
  {
    code: 'ARN',
    city: 'Stockholm',
    country: 'Sweden',
    name: 'Stockholm Arlanda Airport',
    region: 'Europe',
    countryCode: 'SE',
    isPopular: true,
    aliases: ['stockholm', 'arn', 'arlanda', 'sweden']
  },
  {
    code: 'OSL',
    city: 'Oslo',
    country: 'Norway',
    name: 'Oslo Airport (Gardermoen)',
    region: 'Europe',
    countryCode: 'NO',
    isPopular: true,
    aliases: ['oslo', 'osl', 'gardermoen', 'norway']
  },
  {
    code: 'HEL',
    city: 'Helsinki',
    country: 'Finland',
    name: 'Helsinki-Vantaa Airport',
    region: 'Europe',
    countryCode: 'FI',
    isPopular: true,
    aliases: ['helsinki', 'hel', 'vantaa', 'finnair', 'finland']
  },
  {
    code: 'KEF',
    city: 'Reykjavik',
    country: 'Iceland',
    name: 'Keflavík International Airport',
    region: 'Europe',
    countryCode: 'IS',
    aliases: ['reykjavik', 'keflavik', 'kef', 'iceland']
  },

  // ==========================================
  // AFRICA
  // ==========================================
  {
    code: 'JNB',
    city: 'Johannesburg',
    country: 'South Africa',
    name: 'O.R. Tambo International Airport',
    region: 'Africa',
    countryCode: 'ZA',
    isPopular: true,
    aliases: ['johannesburg', 'jnb', 'or tambo', 'south africa', 'joburg']
  },
  {
    code: 'CPT',
    city: 'Cape Town',
    country: 'South Africa',
    name: 'Cape Town International Airport',
    region: 'Africa',
    countryCode: 'ZA',
    isPopular: true,
    aliases: ['cape town', 'cpt', 'south africa', 'table mountain']
  },
  {
    code: 'DUR',
    city: 'Durban',
    country: 'South Africa',
    name: 'King Shaka International Airport',
    region: 'Africa',
    countryCode: 'ZA',
    aliases: ['durban', 'dur', 'king shaka', 'south africa']
  },
  {
    code: 'NBO',
    city: 'Nairobi',
    country: 'Kenya',
    name: 'Jomo Kenyatta International Airport',
    region: 'Africa',
    countryCode: 'KE',
    isPopular: true,
    aliases: ['nairobi', 'nbo', 'kenya', 'jomo kenyatta', 'safari']
  },
  {
    code: 'ADD',
    city: 'Addis Ababa',
    country: 'Ethiopia',
    name: 'Addis Ababa Bole International Airport',
    region: 'Africa',
    countryCode: 'ET',
    isPopular: true,
    aliases: ['addis ababa', 'add', 'bole', 'ethiopian airlines', 'ethiopia']
  },
  {
    code: 'CMN',
    city: 'Casablanca',
    country: 'Morocco',
    name: 'Mohammed V International Airport',
    region: 'Africa',
    countryCode: 'MA',
    isPopular: true,
    aliases: ['casablanca', 'cmn', 'mohammed v', 'royal air maroc', 'morocco']
  },
  {
    code: 'RAK',
    city: 'Marrakech',
    country: 'Morocco',
    name: 'Marrakesh Menara Airport',
    region: 'Africa',
    countryCode: 'MA',
    aliases: ['marrakech', 'marrakesh', 'rak', 'menara', 'morocco']
  },
  {
    code: 'TUN',
    city: 'Tunis',
    country: 'Tunisia',
    name: 'Tunis-Carthage International Airport',
    region: 'Africa',
    countryCode: 'TN',
    aliases: ['tunis', 'tun', 'carthage', 'tunisia']
  },
  {
    code: 'LOS',
    city: 'Lagos',
    country: 'Nigeria',
    name: 'Murtala Muhammed International Airport',
    region: 'Africa',
    countryCode: 'NG',
    isPopular: true,
    aliases: ['lagos', 'los', 'murtala muhammed', 'nigeria', 'ikeja']
  },
  {
    code: 'ACC',
    city: 'Accra',
    country: 'Ghana',
    name: 'Kotoka International Airport',
    region: 'Africa',
    countryCode: 'GH',
    aliases: ['accra', 'acc', 'kotoka', 'ghana']
  },
  {
    code: 'ALG',
    city: 'Algiers',
    country: 'Algeria',
    name: 'Houari Boumediene Airport',
    region: 'Africa',
    countryCode: 'DZ',
    aliases: ['algiers', 'alg', 'houari boumediene', 'algeria']
  }
];

/**
 * Searches and ranks local airports based on user query and optional region filter.
 * 
 * Ranking priority:
 * 1. Exact 3-letter IATA code match (ALWAYS ranked #1, e.g. "SDF" -> Louisville)
 * 2. Prefix IATA code match (e.g. "SD" -> SDF)
 * 3. Exact city name match or city name startsWith (e.g. "London" -> LHR, LGW, STN, LCY, LTN)
 * 4. Alias match (e.g. "Heathrow" -> LHR, "Muhammad Ali" -> SDF, "JFK" -> JFK)
 * 5. Other substring matches (airport full name, country)
 */
export function searchAirports(
  query: string,
  regionFilter: string = 'all',
  currentValue?: string
): AirportOption[] {
  let baseList = GLOBAL_AIRPORTS;

  if (regionFilter && regionFilter !== 'all') {
    baseList = baseList.filter((a) => a.region === regionFilter);
  }

  const clean = (query || '').trim().toLowerCase();

  // If input is empty or equals the currently selected value, return default popular list
  if (!clean || (currentValue && clean === currentValue.toLowerCase().trim())) {
    return [
      ...baseList.filter((a) => a.isPopular),
      ...baseList.filter((a) => !a.isPopular)
    ].slice(0, 30);
  }

  const exactCodeMatches: AirportOption[] = [];
  const prefixCodeMatches: AirportOption[] = [];
  const exactCityMatches: AirportOption[] = [];
  const prefixCityMatches: AirportOption[] = [];
  const aliasMatches: AirportOption[] = [];
  const airportNameMatches: AirportOption[] = [];
  const otherMatches: AirportOption[] = [];

  const seen = new Set<string>();

  for (const airport of baseList) {
    const code = airport.code.toLowerCase();
    const city = airport.city.toLowerCase();
    const country = airport.country.toLowerCase();
    const name = airport.name.toLowerCase();
    const aliases = (airport.aliases || []).map((a) => a.toLowerCase());

    if (code === clean) {
      exactCodeMatches.push(airport);
      seen.add(airport.code);
    } else if (code.startsWith(clean)) {
      prefixCodeMatches.push(airport);
      seen.add(airport.code);
    } else if (city === clean) {
      exactCityMatches.push(airport);
      seen.add(airport.code);
    } else if (city.startsWith(clean)) {
      prefixCityMatches.push(airport);
      seen.add(airport.code);
    } else if (aliases.some((alias) => alias === clean || alias.startsWith(clean))) {
      aliasMatches.push(airport);
      seen.add(airport.code);
    } else if (name.includes(clean)) {
      airportNameMatches.push(airport);
      seen.add(airport.code);
    } else if (
      city.includes(clean) ||
      country.includes(clean) ||
      aliases.some((alias) => alias.includes(clean))
    ) {
      otherMatches.push(airport);
      seen.add(airport.code);
    }
  }

  return [
    ...exactCodeMatches,
    ...prefixCodeMatches,
    ...exactCityMatches,
    ...prefixCityMatches,
    ...aliasMatches,
    ...airportNameMatches,
    ...otherMatches
  ];
}

/**
 * Formats an airport for display in input, e.g. "Louisville (SDF)" or "London (LHR)"
 */
export function formatAirportSelection(airport: AirportOption): string {
  return `${airport.city} (${airport.code})`;
}

/**
 * Given freeform input, extracts uppercase IATA code if present (e.g. "SDF" or "Louisville (SDF)" -> "SDF")
 */
export function extractIataCode(input: string): string | null {
  if (!input) return null;
  const trimmed = input.trim();
  // 1. Direct 3 letter code
  if (/^[A-Za-z]{3}$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  // 2. Code inside parentheses, e.g. "Louisville (SDF)"
  const match = trimmed.match(/\(([A-Za-z]{3})\)/);
  if (match) {
    return match[1].toUpperCase();
  }
  // 3. Leading code format e.g. "SDF - Louisville"
  const leading = trimmed.match(/^([A-Za-z]{3})\s*[-–:]/);
  if (leading) {
    return leading[1].toUpperCase();
  }
  return null;
}
