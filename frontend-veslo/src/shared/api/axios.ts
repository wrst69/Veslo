import axios from 'axios';
import { API_URL } from '../constants/const';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
  });
