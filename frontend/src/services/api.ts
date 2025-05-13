import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const fetchLots = async <T>(
  type: 'goszakup' | 'mitwork' | 'samruk',
  params: Record<string, any>
): Promise<T[]> => {
  try {
    const response = await axios.get<T[]>(`${API_BASE}/api/${type}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${type} lots:`, error);
    return [];
  }
};
