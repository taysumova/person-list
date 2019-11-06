import axios from "axios";
import store from "@/store/index";

export default () => {
  const { token } = store.state;
  return axios.create({
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
};
