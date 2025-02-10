import axios from 'axios';

//API 
const API_URL = 'https://example-api.com/api/';

export const ApiService = {
  get(path) {
    return axios.get(`${API_URL}${path}`);
  },
  post(path, data) {
    return axios.post(`${API_URL}${path}`, data);
  },
  put(path, data) {
    return axios.put(`${API_URL}${path}`, data);
  },
  delete(path) {
    return axios.delete(`${API_URL}${path}`);
  },
};