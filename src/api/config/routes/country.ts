import {countryController} from '@/api/controllers/countryController';
import {Router} from 'express';

const router = Router();

// Retrieve all countries
router.get('/', countryController.getAllCountries);

// Retrieve a single country with id
router.get('/:id', countryController.getCountryById);

export const CountryApiRoute: Router = router;
