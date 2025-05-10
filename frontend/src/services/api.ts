import axios from 'axios';

const API_BASE = 'http://localhost:5000';

export const fetchLots = async (type: 'goszakup' | 'mitwork' | 'samruk') => {
  try {
    const response = await axios.get(`${API_BASE}/api/${type}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${type} lots:`, error);
    return [];
  }
};