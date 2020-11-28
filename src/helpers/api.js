import axios from 'axios';

const API_URL = {
  development: 'https://localhost:5000/',
  production: 'https://catmashh-api.herokuapp.com/',
};

const requests = {
  getCats: () => 'cats',
  getCat: ({ id }) => `cats/${id}`,
  postCatVote: ({ id }) => `cats/${id}/vote`,
};

const config = { headers: null };

const CURRENT_API_URL = API_URL[process.env.NODE_ENV];
const get = ({ request, extraParameters, withConfig = true }) =>
  axios.get(
    `${CURRENT_API_URL}${requests[request](extraParameters)}`,
    withConfig && config,
  );

const post = ({ request, extraParameters, body, withConfig = true }) =>
  axios.post(
    `${CURRENT_API_URL}${requests[request](extraParameters)}`,
    body,
    withConfig && config,
  );

const put = ({ request, extraParameters, body, withConfig = true }) =>
  axios.put(
    `${CURRENT_API_URL}${requests[request](extraParameters)}`,
    body,
    withConfig && config,
  );

const del = ({ request, extraParameters, body: data }) =>
  axios.delete(`${CURRENT_API_URL}${requests[request](extraParameters)}`, {
    ...config,
    data,
  });

export default {
  requests,
  get,
  post,
  put,
  del,
};
