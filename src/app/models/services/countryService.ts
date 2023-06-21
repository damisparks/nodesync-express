import {ICountry} from '@/interfaces/countryInterface';
import {Country} from '../countryModel';
import {logger} from '@/infrastructure/logging/logger';

interface CountryService {
  getAllCountries(): Promise<{allCountries: ICountry[]}>;
  getCountryById(id: string): Promise<ICountry | null>;
  deleteCountry(id: string): Promise<ICountry | null>;
}
/**
 * @name countryService
 * @description CountryService is a service layer that handles the country CRUD logic of the application
 */
const countryService: CountryService = {
  /**
   * @name getAllCountries
   * @description getAllCountries is a service layer for retrieving all countries
   * @returns {Promise<{allCountries: ICountry[]}>}
   */
  getAllCountries: async (): Promise<{allCountries: ICountry[]}> => {
    const data = await Country.find({});
    logger.info('CountryService.getCountry', data);
    return {allCountries: data};
  },

  /**
   * @name getCountryById
   * @param id Country ID
   * @description getCountryById is a service layer for retrieving a country by ID
   * @returns {Promise<ICountry | null>}
   */
  getCountryById: async (id: string): Promise<ICountry | null> => {
    const data = await Country.findById(id);
    logger.info('CountryService.getCountryById', data);
    return data;
  },

  /**
   *  @name deleteCountry
   * @param id Country ID
   * @description deleteCountry is a service layer for deleting a country by ID
   */
  deleteCountry: async (id: string): Promise<ICountry | null> => {
    const data = await Country.findByIdAndDelete(id);
    logger.info('CountryService.deleteCountry', data);
    return data;
  },
};

export {countryService};
