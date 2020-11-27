import axios from 'axios';
import { BASE_URL } from '../constant';

export const TrainerApi = {
  getAllTrainers: async () => {
    return axios.get(`${BASE_URL}/trainers?grouped=false`).then((res) => res.data);
  },
};
