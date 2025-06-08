import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000'; // TODO: Replace with your auth-api base URL

export interface SignupData {
  email: string;
  name: string;
  password: string;
}

export interface SigninData {
  email: string;
  password: string;
}

export const signup = async (data: SignupData) => {
  return axios.post(`${API_BASE_URL}/auth/signup`, data);
};

export const signin = async (data: SigninData) => {
  return axios.post(`${API_BASE_URL}/auth/signin`, data);
}; 