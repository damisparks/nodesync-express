import {Request, Response, NextFunction} from 'express';
import {logger} from '@/infrastructure/logging/logger';
import {countryService} from '@/app/models/services/countryService';

const getCountry = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await countryService.getCountry();
    res.status(200).json(data);
  } catch (e) {
    logger.error('Error getting country: ', e);
    next(e);
  }
};

export const countryController = {
  getCountry,
};
