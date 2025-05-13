import axios from 'axios';
import { SamrukLot } from '../interfaces/samruk.interface';
import { apiConfig } from '../utils/api.config';

export class SamrukService {
  private readonly apiUrl = 'https://zakup.gov.kz/api/core/api/core/_lots';

  async getLots(): Promise<SamrukLot[]> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          system_id__in: 3,
          delivery_address_id__in: 23248,
          limit: 10,
        },
        headers: apiConfig.headers,
      });

      return response.data.results as SamrukLot[];
    } catch (error) {
      console.error('Error fetching samruk lots:', error);
      throw error;
    }
  }
}