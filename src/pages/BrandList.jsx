
// import React from 'react';
// import { Table } from "antd";


// const columns = [
//     {
//         title: "SNo",
//         dataIndex: "key",
//     },
//     {
//         title: "Title",
//         dataIndex: "name",
//     },
//     {
//         title: "Product",
//         dataIndex: "product",
//     },
//     {
//         title: "Staus",
//         dataIndex: "staus",
//     },
// ];

// const data1 = [];
// for (let i = 0; i < 46; i++) {
//     data1.push({
//         key: i,
//         name: `Edward King ${i}`,
//         product: 32,
//         staus: `London, Park Lane no. ${i}`,
//     });
// }
// const BrandList = () => {
//     return (
//         <div>
//             <h3 className="mb-4 title">Brand</h3>
//             <div>
//                 <Table columns={columns} dataSource={data1} />
//             </div>
//         </div>
//     )
// }

// export default BrandList



// eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import { Table } from "antd";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   deleteABrand,
//   getBrands,
//   resetState,
// } from "../features/brand/brandSlice";
// import CustomModal from "../components/CustomModal";

// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//     sorter: (a, b) => a.name.length - b.name.length,
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const Brandlist = () => {
//   const [open, setOpen] = useState(false);
//   const [brandId, setbrandId] = useState("");
//   const showModal = (e) => {
//     setOpen(true);
//     setbrandId(e);
//   };

//   const hideModal = () => {
//     setOpen(false);
//   };
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(resetState());
//     dispatch(getBrands());
//   }, []);
  
//   const brandState = useSelector((state) => state.brand.brands);
//   const data1 = [];
//   for (let i = 0; i < brandState.length; i++) {
//     data1.push({
//       key: i + 1,
//       name: brandState[i].title,
//       action: (
//         <>
//           <Link
//             to={`/admin/brand/${brandState[i]._id}`}
//             className=" fs-3 text-danger"
//           >
//             <BiEdit />
//           </Link>
//           <button
//             className="ms-3 fs-3 text-danger bg-transparent border-0"
//             onClick={() => showModal(brandState[i]._id)}
//           >
//             <AiFillDelete />
//           </button>
//         </>
//       ),
//     });
//   }
//   const deleteBrand = (e) => {
//     dispatch(deleteABrand(e));

//     setOpen(false);
//     setTimeout(() => {
//       dispatch(getBrands());
//     }, 100);
//   };
//   return (
//     <div>
//       <h3 className="mb-4 title">Brands</h3>
//       <div>
//         <Table columns={columns} dataSource={data1} />
//       </div>
//       <CustomModal
//         hideModal={hideModal}
//         open={open}
//         performAction={() => {
//           deleteBrand(brandId);
//         }}
//         title="Are you sure you want to delete this brand?"
//       />
//     </div>
//   );
// };

// export default Brandlist;

import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteACoupon, getAllCoupon, getACoupon, resetState } from "../features/coupon/couponSlice";
import CustomModal from "../components/CustomModal";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Discount",
    dataIndex: "discount",
    sorter: (a, b) => a.discount - b.discount,
  },
  {
    title: "Expiry",
    dataIndex: "expiry",
    sorter: (a, b) => new Date(a.expiry) - new Date(b.expiry),
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const CouponList = () => {
  const [open, setOpen] = useState(false);
  const [couponId, setCouponId] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const showModal = (id) => {
    setOpen(true);
    setCouponId(id);
  };

  const hideModal = () => {
    setOpen(false);
  };

  // Fetch all coupons when component mounts
  useEffect(() => {
    dispatch(resetState());
    dispatch(getAllCoupon());
  }, [dispatch]);

  const couponState = useSelector((state) => state.coupon.coupons);
  console.log('Coupons:', couponState);

  // Prepare table data
  const data1 = couponState.map((coupon, index) => ({
    key: index + 1,
    name: coupon.name,
    discount: coupon.discount,
    expiry: new Date(coupon.expiry).toLocaleDateString(),
    action: (
      <>
        <button
          className="fs-3 text-danger bg-transparent border-0"
          onClick={() => handleEdit(coupon._id)}
        >
          <BiEdit />
        </button>
        <button
          className="ms-3 fs-3 text-danger bg-transparent border-0"
          onClick={() => showModal(coupon._id)}
        >
          <AiFillDelete />
        </button>
      </>
    ),
  }));

  // Function to handle edit button click
  const handleEdit = (id) => {
    dispatch(getACoupon(id)); // Fetch specific coupon data
    navigate(`/admin/coupon/${id}`); // Navigate to edit page with coupon id
  };

  const deleteCoupon = () => {
    dispatch(deleteACoupon(couponId));
    setOpen(false);
    setTimeout(() => {
      dispatch(getAllCoupon()); // Refresh coupon list after deletion
    }, 100);
  };

  return (
    <div>
      <h3 className="mb-4 title">Coupons</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
      <CustomModal
        hideModal={hideModal}
        open={open}
        performAction={deleteCoupon}
        title="Are you sure you want to delete this Coupon?"
      />
    </div>
  );
};

export default CouponList;
