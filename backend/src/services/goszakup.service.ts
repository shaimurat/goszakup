import axios from 'axios';
import { GoszakupLot } from '../interfaces/goszakup.interface';
import { apiConfig } from '../utils/api.config';

export class GoszakupService {
  private readonly apiUrl = 'https://zakup.gov.kz/api/core/api/core/_lots';

  async getLots(params?: Record<string, any>): Promise<GoszakupLot[]> {
    try {
      const defaultParams = {
        system_id__in: 1,
        delivery_address_id__in: 23248,
        limit: 10,
        q: 'работа ( строительство, реконструкция, кап.ремонт и тд)',
      };

      const finalParams = { ...defaultParams, ...params };

      const response = await axios.get(this.apiUrl, {
        params: finalParams,
        headers: apiConfig.headers,
      });

      return response.data.results as GoszakupLot[];
    } catch (error) {
      console.error('Error fetching goszakup lots:', error);
      throw error;
    }
  }
}
