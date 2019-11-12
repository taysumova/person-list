import axios from "axios";
import apiErrorHandler from "../helpers/apiErrorHandler";

export default () => {
  const Api = axios.create({});

  Api.interceptors.response.use(response => response, apiErrorHandler);
  return Api;
};
