import express from 'express';

import PharmacyController from '@modules/pharmacy/controllers/PharmacyController';

const pharmacyRouter = express.Router();

pharmacyRouter.get('/:id', PharmacyController.get).get('/', PharmacyController.index);
export default pharmacyRouter;
