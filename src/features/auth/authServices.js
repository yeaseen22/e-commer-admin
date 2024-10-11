import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

//#region login
const login = async (user) => {
  const response = await axios.post(`${base_url}user/admin-login`, user);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};
const getOrders = async () => {
  const response = await axios.get(`${base_url}user/get-orders`, config);
  console.log('order store', getOrders)
  console.log(response.data);
  
  return response.data;
};
const getOrderBy = async (id) => {
  const response = await axios.post(
    `${base_url}user/getorderbyuser/${id}`,
    "",
    config
  );

  return response.data;
};

const authService = {
  login,
  getOrders,
  getOrderBy,
};

export default authService;
