import axios from 'axios';

const BASE_URL = 'http://localhost:9001/api'; // Update with your backend URL

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/auth/login', loginData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add more API request functions as needed (e.g., for fetching blog posts)

export default api;
