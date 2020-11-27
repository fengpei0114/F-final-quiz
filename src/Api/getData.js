import axios from 'axios';
import { BASE_URL } from '../constant';

export const getData = {
  getAll: async (resource) => {
    return axios.get(`${BASE_URL}/${resource}`).then((res) => res.data);
  },
  createNew: async (resource, name) => {
    axios.post(`${BASE_URL}/${resource}`, { name }).then((res) => res.data);
  },
};
