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
  getGroups: async () => {
    return axios.get(`${BASE_URL}/groups`).then((res) => res.data);
  },
};
// TODO GTB-工程实践: - 模块命名不合适
// TODO GTB-工程实践: +- 有将数据请求抽取service层，但是命名不太合适
// TODO GTB-工程实践: + 有将baseURL抽取常量
