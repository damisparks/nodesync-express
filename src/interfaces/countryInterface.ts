export interface ICountry {
  common: string;
  official: string;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: string[];
  capital: string[];
  status: string;
  independent: boolean;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
  nativeName: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  translations: {
    [key: string]: {
      official: string;
      common: string;
    };
  };
  region: string;
  unMember: boolean;
  latlng: number[];
  landlocked: boolean;
  timezones: string[];
  continents: string[];
  flags: {
    svg: string;
    png: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  population: number;
  car: {
    signs: string[];
    side: string;
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
    fra: {
      f: string;
      m: string;
    };
  };
  flag: string;
  area: number;
  subregion: string;
  languages: {
    [key: string]: string;
  };
  idd: {
    root: string;
    suffixes: string[];
  };
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  // cioc: string;
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
}

// "name": {
//   "common": "Jordan",
//   "official": "Hashemite Kingdom of Jordan",
//   "nativeName": {
//     "ara": {
//       "official": "المملكة الأردنية الهاشمية",
//       "common": "الأردن"
//     }
//   }
// },
