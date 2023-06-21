import {ICountry} from '@/interfaces/countryInterface';
import {Country} from '../countryModel';
import {logger} from '@/infrastructure/logging/logger';

interface CountryService {
  getCountry(): Promise<{allCountries: ICountry[]}>;
}

const countryService: CountryService = {
  getCountry: async () => {
    const data = await Country.find({});
    logger.info('CountryService.getCountry', data);
    return {allCountries: data};
  },
};

export {countryService};
