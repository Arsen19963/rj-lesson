import axios from "axios";

const BASE_URL = "https://api-nodejs-todolist.herokuapp.com";
// https://api-nodejs-todolist.herokuapp.com/user/register
const getToken = () => {
  const token = localStorage.getItem("token");
  return `Bearer ${token}`;
};
const getHeaders = () => ({
  "Authorization": getToken(),
  "Content-Type": "application/json",
});

export const register = (data) => {
  return axios.post(`${BASE_URL}/user/register`, data);
};
export const login = (data) => {
  return axios.post(`${BASE_URL}/user/login`, data);
};
export const getAllTasks = () => {
  return axios.get(`${BASE_URL}/task`, {
    headers:  getHeaders(),
  });
};
export const addTask = (data) => {
  return axios.post(`${BASE_URL}/task`, data, {
    headers:  getHeaders(),
  });
};
