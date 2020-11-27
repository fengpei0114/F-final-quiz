import axios from 'axios';
import { BASE_URL } from '../constant';

export const getData = {
  getAll: async (resource) => {
    return axios.get(`${BASE_URL}/${resource}?grouped=false/17 `).then((res) => res.data);
  },
  createNew: async (resource, name) => {
    return axios.post(`${BASE_URL}/${resource}`, { name }).then((res) => res.data);
  },
  deleteById: async (resource, id) => {
    return axios.delete(`${BASE_URL}/${resource}/${id}`);
  },
};
