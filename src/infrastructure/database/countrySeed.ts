import countriesData from '@/data/two-countries.json';
import {logger} from '../logging/logger';
import {Country} from '@/app/models/countryModel';

export const countrySeedDatabase = async () => {
  try {
    const countries = countriesData;
    // clear existing countries
    await Country.deleteMany({});
    logger.info('countries documents cleared successfully');

    // insert countries
    await Country.insertMany(countries);
    logger.info('countries documents seeded successfully');
  } catch (error) {
    logger.error(`countries database seeding failed. \n${error}`);
  }
};
