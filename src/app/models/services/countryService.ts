import {ICountry} from '@/interfaces/countryInterface';
import {Country} from '../countryModel';
import {logger} from '@/infrastructure/logging/logger';

interface CountryService {
  getAllCountries(): Promise<{allCountries: ICountry[]}>;
  getCountryById(id: string): Promise<ICountry | null>;
}

const countryService: CountryService = {
  getAllCountries: async () => {
    const data = await Country.find({});
    logger.info('CountryService.getCountry', data);
    return {allCountries: data};
  },
  getCountryById: async (id: string) => {
    const data = await Country.findById(id);
    logger.info('CountryService.getCountryById', data);
    return data;
  },
};

export {countryService};
