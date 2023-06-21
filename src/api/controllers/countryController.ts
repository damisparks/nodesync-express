import {Request, Response, NextFunction} from 'express';
import {logger} from '@/infrastructure/logging/logger';
import {countryService} from '@/app/models/services/countryService';

const getAllCountries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {allCountries} = await countryService.getAllCountries();
    res.status(200).json(allCountries);
  } catch (e) {
    logger.error('Error getting country: ', e);
    next(e);
  }
};

const getCountryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {id} = req.params;
    logger.info('CountryController.getCountryById', id);
    const country = await countryService.getCountryById(id);
    res.status(200).json(country);
  } catch (e) {
    logger.error('Error getting country: ', e);
    next(e);
  }
};

export const countryController = {
  getAllCountries,
  getCountryById,
};
