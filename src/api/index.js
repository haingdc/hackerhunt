import axios from "axios";

export function getArticles(page = 0) {
  const url = `https://hackerhunt.co/api/daily/${page}`;
  return axios.get(url).then(res => {
    return { data: res.data };
  });
}