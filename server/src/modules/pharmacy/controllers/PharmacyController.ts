import { Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

import GetPharmacyService from '../services/GetPharmacyService';

class PharmacyController {
  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const pharmacy = await GetPharmacyService.show(id);
      return res.status(200).json(pharmacy);
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }

  async index(req: Request, res: Response) {
    try {
      const pharmacy = await GetPharmacyService.index();
      return res.status(200).json(pharmacy);
    } catch (err) {
      throw new AppError(err.message, 500);
    }
  }
}

export default new PharmacyController();
