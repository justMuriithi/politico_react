import axios from "axios";

export const post = (url, data = False) => axios.post(url, data);

export const get = (url, token) =>
  axios.get(url, { headers: { authorization: `Bearer ${token}` } });
