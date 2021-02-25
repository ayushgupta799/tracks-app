import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const instance = axios.create({
    baseURL: 'http://12e137eec3ad.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await SecureStore.getItemAsync('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
    },
    (err) => {
        return Promise.reject(err);
    }
);
export default instance;