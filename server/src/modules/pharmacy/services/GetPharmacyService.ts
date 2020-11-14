import axios from 'axios';

import AppError from '@shared/errors/AppError';

import { APP_API_URL } from '@shared/utils/environment';

import { PharmacyData, GetPharmaciesResponse, GetPharmaciesInfo } from '../../../@types';

class GetPharmacyService {
  public async show(id: string): Promise<PharmacyData> {
    try {
      const response = await axios.get(`${APP_API_URL}desafio/farmacias/${id}`);
      const { data } = response;

      if (!data) {
        throw new Error('Pharmacy not found');
      }

      return data;
    } catch (err) {
      const errorArray = err?.response?.data?.errors ? err.response.data.errors : [];
      let errors = null;
      if (errorArray.length > 0) {
        errors = Object.values(errorArray[0]);
        errors = errors.join(': ');
      }
      throw new AppError(errors ? errors : err.message, 500);
    }
  }

  public async index(): Promise<GetPharmaciesInfo> {
    try {
      let info = [];

      const response: { data: GetPharmaciesResponse } = await axios.get(`${APP_API_URL}desafio/farmacias`);
      const { data } = response;

      if (!data) {
        throw new Error('Not found');
      }

      const pharmacies = data?.data;

      for (const idx in pharmacies) {
        const res: { data: PharmacyData } = await axios.get(`${APP_API_URL}desafio/farmacias/${String(pharmacies[idx].id)}`);
        const resData = res?.data;

        const pharmacy = resData?.data;

        if (pharmacy) {
          info.push({
            type: pharmacy?.type,
            id: pharmacy?.id,
            name: pharmacy?.attributes?.nome,
            lat: pharmacy?.attributes?.lat,
            lng: pharmacy?.attributes?.lon,
            medicines: pharmacy?.attributes?.medicamentos.map(medicine => ({
              name: medicine?.nome,
              price: medicine?.preco,
            })),
          });
        }
      }

      return { pharmacies: info };
    } catch (err) {
      throw new AppError(err?.response?.data ? err?.response?.data : err.message, 500);
    }
  }
}

export default new GetPharmacyService();
