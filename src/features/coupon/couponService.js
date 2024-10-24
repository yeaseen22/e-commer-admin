// import axios from "axios";
// import { config } from "../../utils/axiosconfig";
// import { base_url } from "../../utils/baseUrl";
// const getCoupons = async () => {
//   const response = await axios.get(`${base_url}coupon/`, config);

//   return response.data;
// };

// const createCoupons = async (coupon) => {
//   const response = await axios.post(`${base_url}coupon/`, coupon, config);

//   return response.data;
// };
// const updateCoupon = async (coupon) => {
//   const response = await axios.put(
//     `${base_url}coupon/${coupon.id}`,
//     {
//       name: coupon.couponData.name,
//       expiry: coupon.couponData.expiry,
//       discount: coupon.couponData.discount,
//     },
//     config
//   );

//   return response.data;
// };
// const getCoupon = async (id) => {
//   const response = await axios.get(`${base_url}coupon/${id}`, config);

//   return response.data;
// };

// const deleteCoupon = async (id) => {
//   const response = await axios.delete(`${base_url}coupon/${id}`, config);

//   return response.data;
// };
// const couponService = {
//   getCoupons,
//   createCoupons,
//   deleteCoupon,
//   getCoupon,
//   updateCoupon,
// };

// export default couponService;


import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";

// Fetch all coupons
const getCoupons = async () => {
  const response = await axios.get(`${base_url}coupon/`, config);
  return response.data;
};

// Create a new coupon
const createCoupons = async (coupon) => {
  const response = await axios.post(`${base_url}coupon/`, coupon, config);
  return response.data;
};

// Update a coupon
const updateCoupon = async (coupon) => {
  const response = await axios.put(
    `${base_url}coupon/${coupon.id}`,
    {
      name: coupon.couponData.name,
      expiry: coupon.couponData.expiry,
      discount: coupon.couponData.discount,
    },
    config
  );
  return response.data;
};

// Get a specific coupon by id
const getCoupon = async (id) => {
  const response = await axios.get(`${base_url}coupon/${id}`, config);
  return response.data;
};

// Delete a coupon by id
const deleteCoupon = async (id) => {
  const response = await axios.delete(`${base_url}coupon/${id}`, config);
  return response.data;
};

// Export coupon services
const couponService = {
  getCoupons,
  createCoupons,
  updateCoupon,
  getCoupon,
  deleteCoupon,
};

export default couponService;
