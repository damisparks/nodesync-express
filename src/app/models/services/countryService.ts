import {ICountry} from '@/interfaces/countryInterface';
import {Country} from '../countryModel';
import {logger} from '@/infrastructure/logging/logger';

interface CountryService {
  getAllCountries(): Promise<{allCountries: ICountry[]}>;
  getCountryById(id: string): Promise<ICountry | null>;
  createCountry(country: ICountry): Promise<ICountry>;
  updateCountry(id: string, country: ICountry): Promise<ICountry | null>;
  deleteCountry(id: string): Promise<ICountry | null>;
}
/**
 * @name countryService
 * @description Country service layer
 */
const countryService: CountryService = {
  /**
   * @name createCountry
   * @param country Country object
   * @description Create a new country resource
   * @returns {Promise<ICountry>}
   *
   */
  createCountry: async (country: ICountry): Promise<ICountry> => {
    const data = await Country.create(country);
    logger.info('CountryService.createCountry', data);
    return data;
  },
  /**
   * @name getAllCountries
   * @description Get all countries
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
   * @description Get a ccountry resource by ID
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
   * @description Delete a country resource by ID
   */
  deleteCountry: async (id: string): Promise<ICountry | null> => {
    const data = await Country.findByIdAndDelete(id);
    logger.info('CountryService.deleteCountry', data);
    return data;
  },

  /**
   * @name updateCountry
   * @param id  Country ID
   * @param country  Country object
   * @description Update a country resource by ID
   * @returns {Promise<ICountry | null>}
   */
  updateCountry: async (
    id: string,
    country: ICountry
  ): Promise<ICountry | null> => {
    const data = await Country.findByIdAndUpdate(id, country);
    logger.info('CountryService.updateCountry', data);
    return data;
  },
};

export {countryService};
