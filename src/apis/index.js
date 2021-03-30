import axios from "axios";
import APIList from "./list";

const instance = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_BASE,
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY,
  },
});

const requestAPI = async ({ url, params = {} }) => {
  return await instance.get(url, { params: params });
};

export { APIList, requestAPI as default };
