import {ICountry} from '@/interfaces/countryInterface';
import {Country} from '../countryModel';

interface CountryService {
  getCountry(): Promise<{allCountries: ICountry[]}>;
}

const countryService: CountryService = {
  getCountry: async () => {
    try {
      const data = await Country.find({});
      return {allCountries: data};
    } catch (error) {
      throw new Error(error);
    }
  },
};

export {countryService};
