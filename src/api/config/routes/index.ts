import {Router} from 'express';
import {CountryApiRoute} from './country';

const router = Router();

router.use('/v0/countries', CountryApiRoute);

export const ApiRoute: Router = router;
