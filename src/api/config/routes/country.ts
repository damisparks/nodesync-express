import {countryController} from '@/api/controllers/countryController';
import {Router} from 'express';

const router = Router();

// Retrieve all countries
router.get('/', countryController.getAllCountries);

// Create a new country
router.post('/', countryController.createCountry);

// Retrieve a single country with id
router.get('/:id', countryController.getCountryById);

// Update a specific country
// router.put('/:id', countryController.updateCountry);

// Delete a specific country
router.delete('/:id', countryController.deleteCountry);

export const CountryApiRoute: Router = router;
