import axios from "axios";
import store from "@/store/index";
import apiErrorHandler from "../helpers/apiErrorHandler";

export default () => {
  const { token } = store.state;
  const ApiAuth = axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  ApiAuth.interceptors.response.use(response => response, apiErrorHandler);
  return ApiAuth;
};
