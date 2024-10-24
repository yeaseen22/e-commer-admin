// import { React, useEffect, useState } from "react";
// import CustomInput from "../components/CustomInput";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate, useLocation } from "react-router-dom";
// import { toast } from "react-toastify";
// import * as yup from "yup";
// import { useFormik } from "formik";
// import {
//   createCoupon,
//   getACoupon,
//   resetState,
//   updateACoupon,
// } from "../features/coupon/couponSlice";

// let schema = yup.object().shape({
//   name: yup.string().required("Coupon Name is Required"),
//   expiry: yup.date().required("Expiry Date is Required"),
//   discount: yup.number().required("Discount Percentage is Required"),
// });
// const AddCoupon = () => {
//   const dispatch = useDispatch();
//   const location = useLocation();
//   const navigate = useNavigate();
//   const getCouponId = location.pathname.split('/')[3];
//   console.log(getCouponId);

//   const newCoupon = useSelector((state) => state?.coupon?.coupons);
//   console.log(newCoupon);


//   const {
//     isSuccess,
//     isError,
//     isLoading,
//     createdCoupon,
//     couponName,
//     couponDiscount,
//     couponExpiry,
//     updatedCoupon,
//   } = newCoupon;
//   const changeDateFormet = (date) => {
//     const newDate = new Date(date).toLocaleDateString();
//     const [month, day, year] = newDate.split("/");
//     return [year, month, day].join("-");
//   };

//   useEffect(() => {
//     if (getCouponId !== undefined) {
//       dispatch(getACoupon(getCouponId));
//     } else {
//       dispatch(resetState());
//     }
//   }, [getCouponId]);

//   useEffect(() => {
//     if (isSuccess && createdCoupon) {
//       toast.success("Coupon Added Successfullly!");
//     }
//     if (isSuccess && updatedCoupon) {
//       toast.success("Coupon Updated Successfullly!");
//       navigate("/admin/coupon-list");
//     }
//     if (isError && couponName && couponDiscount && couponExpiry) {
//       toast.error("Something Went Wrong!");
//     }
//   }, [isSuccess, isError, isLoading]);
//   const formik = useFormik({
//     enableReinitialize: true,
//     initialValues: {
//       name: couponName || "",
//       expiry: changeDateFormet(couponExpiry) || "",
//       discount: couponDiscount || "",
//     },
//     validationSchema: schema,
//     onSubmit: (values) => {
//       if (getCouponId !== undefined) {
//         const data = { id: getCouponId, couponData: values };
//         dispatch(updateACoupon(data));
//         dispatch(resetState());
//       } else {
//         dispatch(createCoupon(values));
//         formik.resetForm();
//         setTimeout(() => {
//           dispatch(resetState);
//         }, 300);
//       }
//     },
//   });

//   return (
//     <div>
//       <h3 className="mb-4 title">
//         {getCouponId !== undefined ? "Edit" : "Add"} Coupon
//       </h3>
//       <div>
//         <form action="" onSubmit={formik.handleSubmit}>
//           <CustomInput
//             type="text"
//             name="couponName"
//             onChng={formik.handleChange("name")}
//             onBlr={formik.handleBlur("name")}
//             val={formik.values.name}
//             label="Enter Coupon Name"
//             id="name"
//           />
//           <div className="error">
//             {formik.touched.name && formik.errors.name}
//           </div>
//           <CustomInput
//             type="date"
//             name="expiry"
//             onChng={formik.handleChange("expiry")}
//             onBlr={formik.handleBlur("expiry")}
//             val={formik.values.expiry}
//             label="Enter Expiry Data"
//             id="date"
//           />
//           <div className="error">
//             {formik.touched.expiry && formik.errors.expiry}
//           </div>
//           <CustomInput
//             type="number"
//             name="discount"
//             onChng={formik.handleChange("discount")}
//             onBlr={formik.handleBlur("discount")}
//             val={formik.values.discount}
//             label="Enter Discount"
//             id="discount"
//           />
//           <div className="error">
//             {formik.touched.discount && formik.errors.discount}
//           </div>
//           <button
//             className="btn btn-success border-0 rounded-3 my-5"
//             type="submit"
//           >
//             {getCouponId !== undefined ? "Edit" : "Add"} Coupon
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddCoupon;


import React, { useEffect } from "react";
import CustomInput from "../components/CustomInput";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  createCoupon,
  getACoupon,
  resetState,
  updateACoupon,
} from "../features/coupon/couponSlice";

// Yup Validation Schema
const schema = yup.object().shape({
  name: yup.string().required("Coupon Name is required"),
  expiry: yup.date().required("Expiry Date is required"),
  discount: yup.number().required("Discount Percentage is required"),
});

const AddCoupon = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Get coupon ID from URL
  const getCouponId = location.pathname.split("/")[3];

  // Get coupon state from Redux store
  const couponState = useSelector((state) => state.coupon);
  const {
    isSuccess,
    isError,
    createdCoupon,
    updatedCoupon,
    couponName,
    couponDiscount,
    couponExpiry,
  } = couponState;

  // Helper function to format date (YYYY-MM-DD)
  const changeDateFormat = (date) => {
    const validDate = new Date(date);
    if (isNaN(validDate.getTime())) {
      console.error("Invalid date:", date);
      return ""; // Return default value for invalid dates
    }
    return validDate.toISOString().split("T")[0]; // Return formatted date
  };

  // Fetch coupon details when editing
  useEffect(() => {
    if (getCouponId) {
      dispatch(getACoupon(getCouponId));
    }

    // Reset the state when unmounting or switching between coupons
    return () => {
      dispatch(resetState());
    };
  }, [dispatch, getCouponId]);

  // Handle success and error notifications
  useEffect(() => {
    if (isSuccess && createdCoupon) {
      toast.success("Coupon Added Successfully!");
      formik.resetForm();
      dispatch(resetState());
    }

    if (isSuccess && updatedCoupon) {
      toast.success("Coupon Updated Successfully!");
      navigate("/admin/coupon-list");
      dispatch(resetState());
    }

    if (isError) {
      toast.error("Something went wrong!");
    }
  }, [isSuccess, isError, createdCoupon, updatedCoupon, dispatch, navigate]);

  // Formik for form handling
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: couponName || "",
      expiry: couponExpiry ? changeDateFormat(couponExpiry) : "",
      discount: couponDiscount || "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      if (getCouponId) {
        const data = { id: getCouponId, couponData: values };
        dispatch(updateACoupon(data));
      } else {
        dispatch(createCoupon(values));
      }
    },
  });

  return (
    <div>
      <h3 className="mb-4 title">{getCouponId ? "Edit" : "Add"} Coupon</h3>
      <div>
        <form onSubmit={formik.handleSubmit}>
          {/* Coupon Name */}
          <CustomInput
            type="text"
            name="name"
            label="Enter Coupon Name"
            id="name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>

          {/* Expiry Date */}
          <CustomInput
            type="date"
            name="expiry"
            label="Enter Expiry Date"
            id="expiry"
            onChng={formik.handleChange("expiry")}
            onBlr={formik.handleBlur("expiry")}
            val={formik.values.expiry}
          />
          <div className="error">
            {formik.touched.expiry && formik.errors.expiry}
          </div>

          {/* Discount Percentage */}
          <CustomInput
            type="number"
            name="discount"
            label="Enter Discount Percentage"
            id="discount"
            onChng={formik.handleChange("discount")}
            onBlr={formik.handleBlur("discount")}
            val={formik.values.discount}
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>

          {/* Submit Button */}
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            {getCouponId ? "Edit" : "Add"} Coupon
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoupon;
