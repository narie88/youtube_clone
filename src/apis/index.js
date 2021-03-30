import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_YOUTUBE_BASE,
  params: {
    key: process.env.REACT_APP_YOUTUBE_KEY,
  },
});
