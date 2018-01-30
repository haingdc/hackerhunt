import axios from "axios";

export function getArticles(page = 0) {
  const url = `https://hackerhunt.co/api/daily/${page}`;
  return axios
    .get(url)
    .then(res => {
      return res;
    })
    .catch(err => Promise.reject(err));
}
