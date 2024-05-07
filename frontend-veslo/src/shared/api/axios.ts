import axios from 'axios';
import { API_URL } from '../constants/constants';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
  });

  
/* axiosInstance.interceptors.request.use(async (config) => {
    const isSSR = typeof window === 'undefined';

    if (isSSR) {
        const { cookies } = await import('next/headers');

        const accessToken = cookies().get('access-token')?.value;

        if (accessToken) {
            config.headers.set(
                'cookie',
                `${'access-token'}=${accessToken}`
            );
        }
    }
}) */
