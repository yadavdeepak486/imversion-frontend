const config = {
  development: {
    baseURL: 'http://localhost:3000',
  },
  production: {
    baseURL: process.env.REACT_APP_API_URL || 'https://your-production-url.com',
  },
  test: {
    baseURL: 'http://localhost:3000',
  }
};

const environment = process.env.NODE_ENV || 'development';

export const getBaseURL = () => config[environment].baseURL; 