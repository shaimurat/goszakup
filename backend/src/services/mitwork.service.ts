import axios from 'axios';
import { MitworkLot } from '../interfaces/mitwork.interface';
import { apiConfig } from '../utils/api.config';

export class MitworkService {
  private readonly apiUrl = 'https://zakup.gov.kz/api/core/api/core/_lots';

  async getLots(): Promise<MitworkLot[]> {
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          system_id__in: 2,
          delivery_address_id__in: 23248,
          limit: 10,
        },
        headers: apiConfig.headers,
      });

      return response.data.results as MitworkLot[];
    } catch (error) {
      console.error('Error fetching mitwork lots:', error);
      throw error;
    }
  }
}