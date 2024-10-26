// // import React from 'react';
// // import { Table } from "antd";

// // const columns = [
// //     {
// //         title: "SNo",
// //         dataIndex: "key",
// //     },
// //     {
// //         title: "Title",
// //         dataIndex: "name",
// //     },
// //     {
// //         title: "Product",
// //         dataIndex: "product",
// //     },
// //     {
// //         title: "Staus",
// //         dataIndex: "staus",
// //     },
// // ];

// // const data1 = [];
// // for (let i = 0; i < 46; i++) {
// //     data1.push({
// //         key: i,
// //         name: `Edward King ${i}`,
// //         product: 32,
// //         staus: `London, Park Lane no. ${i}`,
// //     });
// // }
// // const Orders = () => {
// //     return (
// //         <div>
// //             <h3 className="mb-4 title">Orders</h3>
// //             <div>
// //                 <Table columns={columns} dataSource={data1} />
// //             </div>
// //         </div>
// //     )
// // }

// // export default Orders

// // eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Link } from "react-router-dom";
// // import { getOrdersData } from "../features/auth/authSlice";
// import { getOrdersData } from "../features/auth/authSlice";
// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Product",
//     dataIndex: "product",
//   },
//   {
//     title: "Amount",
//     dataIndex: "amount",
//   },
//   {
//     title: "Date",
//     dataIndex: "date",
//   },

//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const Orders = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getOrdersData());
//   }, [dispatch]);

//   const orderState = useSelector((state) => state?.auth?.orders);
//   console.log('order state', orderState);
  

//   const data1 = orderState?.map((order, index) => ({
//     key: index + 1,
//     name: orderState[index].user.firstName +  " " + orderState[index].user.lastName,
//     product: (
//       <Link to={`/admin/order/${order._id || ""}`}>View Orders</Link>
//     ),
//     amount: orderState[index].products[0].price,
    
//     date: order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A",
//     action: (
//       <>
//         <Link to="/" className="fs-3 text-danger">
//           <BiEdit />
//         </Link>
//         <Link className="ms-3 fs-3 text-danger" to="/">
//           <AiFillDelete />
//         </Link>
//       </>
//     ),
//   }));

//   return (
//     <div>
//       <h3 className="mb-4 title">Orders</h3>
//       <Table columns={columns} dataSource={data1} />
//     </div>
//   );
// };

// export default Orders;


// import React, { useEffect } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import { getOrdersData } from "../features/auth/authSlice";

// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//   },
//   {
//     title: "Product",
//     dataIndex: "product",
//   },
//   {
//     title: "Amount",
//     dataIndex: "amount",
//   },
//   {
//     title: "Date",
//     dataIndex: "date",
//   },
//   {
//     title: "Action",
//     dataIndex: "action",
//   },
// ];

// const Orders = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getOrdersData());
//   }, [dispatch]);

//   const orderState = useSelector((state) => state?.auth?.orders);
//   console.log('order state', orderState.orders);

//   // Prepare data for the table
//   const data1 = orderState?.order?.map((order, index) => ({
//     key: index + 1,
//     name: `${order.user?.firstName || ""} ${order.user?.lastName || ""}`, // Ensure user data exists
//     product: (
//       <Link to={`/admin/order/${order._id}`}>View Orders</Link> // Direct to specific order
//     ),
//     amount: order.products?.reduce((total, product) => total + product.price * product.quantity, 0) || 0, // Calculate total amount
//     date: order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A", // Format date
//     action: (
//       <>
//         <Link to="/" className="fs-3 text-danger">
//           <BiEdit />
//         </Link>
//         <Link className="ms-3 fs-3 text-danger" to="/">
//           <AiFillDelete />
//         </Link>
//       </>
//     ),
//   }));

//   return (
//     <div>
//       <h3 className="mb-4 title">Orders</h3>
//       <Table columns={columns} dataSource={data1} />
//     </div>
//   );
// };

// export default Orders;


import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { getOrdersData } from "../features/auth/authSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Amount",
    dataIndex: "amount",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Orders = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrdersData());
  }, [dispatch]);

  const orderState = useSelector((state) => state?.auth?.orders);
  console.log('order state', orderState);

  // Prepare data for the table
  const data1 = orderState?.orders?.map((order, index) => ({
    key: index + 1,
    name: `${order.user?.firstName || ""} ${order.user?.lastName || ""}`, // Ensure user data exists
    product: (
      <Link to={`/admin/order/${order.user._id}`}>View Orders</Link> // Direct to specific order
    ),
    amount: order.products?.reduce(
      (total, product) => total + product.price * product.quantity, 
      0
    ) || 0, // Calculate total amount
    date: order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A", // Format date
    action: (
      <>
        <Link to={`/admin/edit-order/${order._id}`} className="fs-3 text-danger">
          <BiEdit />
        </Link>
        <Link className="ms-3 fs-3 text-danger" to={`/admin/delete-order/${order._id}`}>
          <AiFillDelete />
        </Link>
      </>
    ),
  }));

  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default Orders;
