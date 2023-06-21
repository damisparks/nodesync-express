import {countryController} from '@/api/controllers/countryController';
import {Router} from 'express';

const router = Router();

router.get('/all', countryController.getCountry);

export const CountryApiRoute: Router = router;
