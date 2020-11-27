import axios from 'axios';
import { BASE_URL } from '../constant';

export const TraineeApi = {
  getAllTrainees: async () => {
    return axios.get(`${BASE_URL}/trainees?grouped=false`).then((res) => res.data);
  },
};
