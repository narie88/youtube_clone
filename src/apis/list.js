const APIList = {
  getMostPopular: {
    url: "/videos",
    params: {
      part: "snippet",
      chart: "mostPopular",
      maxResults: 25,
    },
  },
  getSearch: {
    url: "/search",
    params: {
      part: "snippet",
      q: "bts",
      maxResults: 25,
    },
  },
};

export default APIList;
