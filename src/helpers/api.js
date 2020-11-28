import axios from 'axios';

const API_URL = {
  development: 'http://localhost:5000/',
  production: 'https://catmashh-api.herokuapp.com/',
};

const requestMethods = {
  getCats: () => 'cats',
  getCat: ({ _id }) => `cats/${_id}`,
  getCatMash: () => `mash`,
  postCatVote: ({ _id }) => `cats/${_id}/vote`,
};

const config = { headers: null };

const CURRENT_API_URL = API_URL[process.env.NODE_ENV];
const get = ({ requestMethod, extraParameters, withConfig = true }) =>
  axios.get(
    `${CURRENT_API_URL}${requestMethod(extraParameters)}`,
    withConfig && config,
  );

const post = ({ requestMethod, extraParameters, body, withConfig = true }) =>
  axios.post(
    `${CURRENT_API_URL}${requestMethod(extraParameters)}`,
    body,
    withConfig && config,
  );

const put = ({ requestMethod, extraParameters, body, withConfig = true }) =>
  axios.put(
    `${CURRENT_API_URL}${requestMethod(extraParameters)}`,
    body,
    withConfig && config,
  );

const del = ({ requestMethod, extraParameters, body: data }) =>
  axios.delete(`${CURRENT_API_URL}${requestMethod(extraParameters)}`, {
    ...config,
    data,
  });

export default {
  requestMethods,
  get,
  post,
  put,
  del,
};
