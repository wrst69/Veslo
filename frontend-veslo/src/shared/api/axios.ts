import axios from 'axios';
import { API_URL } from '../constants/constants';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
