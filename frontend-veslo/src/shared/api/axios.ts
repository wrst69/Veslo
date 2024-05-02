import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3003/',
    withCredentials: true
  });

axiosInstance.interceptors.request.use(async (config) => {
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
})
