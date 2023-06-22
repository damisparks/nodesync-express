import {countryController} from '@/api/controllers/countryController';
import {Router} from 'express';
import {checkAuth} from '../middlewares';

const router = Router();

// Retrieve all countries
router.get('/', countryController.getAllCountries);

// Create a new country
router.post('/', checkAuth, countryController.createCountry);

// Retrieve a single country with id
router.get('/:countryId', checkAuth, countryController.getCountryById);

// Update a specific country
router.put('/:countryId', checkAuth, countryController.updateCountry);

// Delete a specific country
router.delete('/:countryId', checkAuth, countryController.deleteCountry);

export const CountryApiRoute: Router = router;
