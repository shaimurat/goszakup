import axios from 'axios';
import { IGoszakupLot } from '../interfaces/goszakup.interface';
import { apiConfig } from '../utils/api.config';

export class GoszakupService {
  private readonly apiUrl = 'https://zakup.gov.kz/api/core/api/core/_lots';

  async getLots(): Promise<IGoszakupLot[]> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          system_id__in: 1,
          delivery_address_id__in: 23248,
          limit: 10,
        },
        headers: apiConfig.headers,
      });

      return response.data.results as IGoszakupLot[];
    } catch (error) {
      console.error('Error fetching goszakup lots:', error);
      throw error;
    }
  }
}