import axios from 'axios';

console.log('API_BASE:', process.env.REACT_APP_API_BASE);
const API_BASE = process.env.REACT_APP_API_BASE;

export const fetchLots = async <T>(
  params: Record<string, any>
): Promise<T[]> => {
  try {
    const response = await axios.get<T[]>(`${API_BASE}/api/zakup`, {
      params
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching zakup lots:', error);
    return [];
  }
};
