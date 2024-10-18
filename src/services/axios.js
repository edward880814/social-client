import axios from 'axios';

export let BASE_ENDPOINT = '';

// when developing locally, change this value to local
export const APP_ENVIRONMENT = 'development';

if (APP_ENVIRONMENT === 'local') {
  BASE_ENDPOINT = 'http://localhost:5000';
} else if (APP_ENVIRONMENT === 'development') {
  BASE_ENDPOINT = 'https://api.dev.kuanproject.xyz';
} else if (APP_ENVIRONMENT === 'staging') {
  BASE_ENDPOINT = 'https://api.stg.kuanproject.xyz';
} else if (APP_ENVIRONMENT === 'production') {
  BASE_ENDPOINT = 'https://api.kuanproject.xyz';
}

const BASE_URL = `${BASE_ENDPOINT}/api/v1`;

// 建立 axios 實例，並在 headers 中附加 token
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' }
});

// 直接從 localStorage 獲取 token
const getToken = () => {
  const token = window.localStorage.getItem('token');
  return token ? JSON.parse(token) : '';
};

// 在每個請求中攜帶 JWT
axiosInstance.interceptors.request.use((config) => {
  const token = getToken(); // 獲取 token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
