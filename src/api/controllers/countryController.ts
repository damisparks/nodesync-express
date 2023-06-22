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
    const {countryId} = req.params;
    logger.info('CountryController.getCountryById', countryId);
    const country = await countryService.getCountryById(countryId);
    res.status(200).json(country);
  } catch (e) {
    logger.error('Error getting country: ', e);
    next(e);
  }
};

const deleteCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {countryId} = req.params;
    logger.info('CountryController.deleteCountry', countryId);
    const country = await countryService.deleteCountry(countryId);
    res.status(200).json({country, message: 'Country deleted successfully'});
  } catch (e) {
    logger.error('Error deleting country: ', e);
    next(e);
  }
};

const createCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const country = await countryService.createCountry(req.body);
    res.status(200).json({country, message: 'Country created successfully'});
  } catch (e) {
    logger.error('Error creating country: ', e);
    next(e);
  }
};

const updateCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {countryId} = req.params;
    const country = await countryService.updateCountry(countryId, req.body);
    res.status(200).json({country, message: 'Country updated successfully'});
  } catch (e) {
    logger.error('Error updating country: ', e);
    next(e);
  }
};

export const countryController = {
  getAllCountries,
  getCountryById,
  deleteCountry,
  createCountry,
  updateCountry,
};
