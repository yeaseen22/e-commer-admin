// // eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Link, useLocation } from "react-router-dom";
// import { getOrderByUser } from "../features/auth/authSlice";
// const columns = [
//     {
//         title: "SNo",
//         dataIndex: "key",
//     },
//     {
//         title: "Product Name",
//         dataIndex: "name",
//     },
//     {
//         title: "Brand",
//         dataIndex: "brand",
//     },
//     {
//         title: "Count",
//         dataIndex: "count",
//     },
//     {
//         title: "Color",
//         dataIndex: "color",
//     },
//     {
//         title: "Amount",
//         dataIndex: "amount",
//     },
//     {
//         title: "Date",
//         dataIndex: "date",
//     },

//     {
//         title: "Action",
//         dataIndex: "action",
//     },
// ];

// const ViewOrder = () => {
//     const location = useLocation();
//     const userId = location.pathname.split("/")[3];
//     const dispatch = useDispatch();
//     useEffect(() => {
//         dispatch(getOrderByUser(userId));
//     }, []);
//     const orderState = useSelector((state) => state.auth.orderbyuser[0].products);
//     console.log(orderState);
//     const data1 = [];
//     for (let i = 0; i < orderState.length; i++) {
//         data1.push({
//             key: i + 1,
//             name: orderState[i].product.title,
//             brand: orderState[i].product.brand,
//             count: orderState[i].count,
//             amount: orderState[i].product.price,
//             color: orderState[i].product.color,
//             date: orderState[i].product.createdAt,
//             action: (
//                 <>
//                     <Link to="/" className=" fs-3 text-danger">
//                         <BiEdit />
//                     </Link>
//                     <Link className="ms-3 fs-3 text-danger" to="/">
//                         <AiFillDelete />
//                     </Link>
//                 </>
//             ),
//         });
//     }
//     return (
//         <div>
//             <h3 className="mb-4 title">View Order</h3>
//             <div>
//                 <Table columns={columns} dataSource={data1} />
//             </div>
//         </div>
//     );
// };

// export default ViewOrder;


// eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Link, useLocation } from "react-router-dom";
// import { getOrderByUser } from "../features/auth/authSlice";

// const columns = [
//     {
//         title: "SNo",
//         dataIndex: "key",
//     },
//     {
//         title: "Product Name",
//         dataIndex: "name",
//     },
//     {
//         title: "Brand",
//         dataIndex: "brand",
//     },
//     {
//         title: "Count",
//         dataIndex: "count",
//     },
//     {
//         title: "Color",
//         dataIndex: "color",
//     },
//     {
//         title: "Amount",
//         dataIndex: "amount",
//     },
//     {
//         title: "Date",
//         dataIndex: "date",
//     },
//     {
//         title: "Action",
//         dataIndex: "action",
//     },
// ];

// const ViewOrder = () => {
//     const location = useLocation();
//     const userId = location.pathname.split("/")[3];
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getOrderByUser(userId));
//     }, [dispatch, userId]);

//     const orderState = useSelector((state) => state?.auth?.orders);
//     console.log(orderState);

//     const data1 = orderState?.map((product, index) => ({
//         key: index + 1,
//         name: product?.product?.title || "N/A",
//         brand: product?.product?.brand || "N/A",
//         count: product?.quantity || 1,
//         color: product?.color || "N/A",
//         amount: product?.price || 0,
//         date: product?.createdAt ? new Date(product.createdAt).toLocaleString() : "N/A",
//         action: (
//             <>
//                 <Link to={`/admin/edit-product/${product._id}`} className="fs-3 text-primary">
//                     <BiEdit />
//                 </Link>
//                 <Link className="ms-3 fs-3 text-danger" to={`/admin/delete-product/${product._id}`}>
//                     <AiFillDelete />
//                 </Link>
//             </>
//         ),
//     }));

//     return (
//         <div>
//             <h3 className="mb-4 title">View Order</h3>
//             <div>
//                 <Table columns={columns} dataSource={data1} />
//             </div>
//         </div>
//     );
// };

// export default ViewOrder;

// import React, { useEffect } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Link, useLocation } from "react-router-dom";
// import { getOrderByUser } from "../features/auth/authSlice";

// const columns = [
//     {
//         title: "SNo",
//         dataIndex: "key",
//     },
//     {
//         title: "Product Name",
//         dataIndex: "name",
//     },
//     {
//         title: "Brand",
//         dataIndex: "brand",
//     },
//     {
//         title: "Count",
//         dataIndex: "count",
//     },
//     {
//         title: "Color",
//         dataIndex: "color",
//     },
//     {
//         title: "Amount",
//         dataIndex: "amount",
//     },
//     {
//         title: "Date",
//         dataIndex: "date",
//     },
//     {
//         title: "Action",
//         dataIndex: "action",
//     },
// ];

// const ViewOrder = () => {
//     const location = useLocation();
//     const userId = location.pathname.split("/")[3]; // Get userId from URL
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getOrderByUser(userId)); // Fetch orders for the user
//     }, [dispatch, userId]);

//     const orderState = useSelector((state) => state.auth.orders); // Access order data from the Redux store
//     console.log("Order State:", orderState); // Log the order state for debugging

//     // Prepare data for the table
//     const data1 = orderState?.map((order, index) => ({
//         key: index + 1,
//         name: order?.orderItems?.map(item => item.product.title).join(", ") || "N/A", // Join multiple product names
//         brand: order?.orderItems?.map(item => item.product.brand).join(", ") || "N/A", // Join multiple brands
//         count: order?.orderItems?.reduce((acc, item) => acc + item.quantity, 0) || 0, // Sum of quantities
//         color: order?.orderItems?.map(item => item.color).join(", ") || "N/A", // Join multiple colors
//         amount: order.totalPrice || 0, // Total price of the order
//         date: new Date(order.createdAt).toLocaleString() || "N/A", // Format date
//         action: (
//             <>
//                 <Link to={`/admin/edit-order/${order._id}`} className="fs-3 text-primary">
//                     <BiEdit />
//                 </Link>
//                 <Link className="ms-3 fs-3 text-danger" to={`/admin/delete-order/${order._id}`}>
//                     <AiFillDelete />
//                 </Link>
//             </>
//         ),
//     }));

//     return (
//         <div>
//             <h3 className="mb-4 title">View Order</h3>
//             <div>
//                 <Table columns={columns} dataSource={data1} />
//             </div>
//         </div>
//     );
// };

// export default ViewOrder;


// import React, { useEffect } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// import { BiEdit } from "react-icons/bi";
// import { AiFillDelete } from "react-icons/ai";
// import { Link, useLocation } from "react-router-dom";
// import { getOrderByUser,getOrdersData } from "../features/auth/authSlice";

// const columns = [
//     {
//         title: "SNo",
//         dataIndex: "key",
//     },
//     {
//         title: "Product Name",
//         dataIndex: "name",
//     },
//     {
//         title: "Quantity",
//         dataIndex: "quantity",
//     },
//     {
//         title: "Price",
//         dataIndex: "price",
//     },
//     {
//         title: "Total Amount",
//         dataIndex: "totalAmount",
//     },
//     {
//         title: "Order Date",
//         dataIndex: "date",
//     },
//     {
//         title: "Action",
//         dataIndex: "action",
//     },
// ];

// const ViewOrder = () => {
//     const location = useLocation();
//     const userId = location.pathname.split("/")[3]; // Get userId from URL
//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(getOrderByUser(userId));
//         dispatch(getOrdersData());
//          // Fetch orders for the user
//     }, [dispatch, userId]);

//     const orderState = useSelector((state) => state?.auth?.orderbyuser?.orders); // Access user orders from Redux store
//     console.log("Order State:", orderState); // Log the order state for debugging
//     const orderData = useSelector((state) => state?.auth?.orderbyuser);
//     const [orderDataState, setOrderDataState] = useState([]);


//     // Prepare data for the table
//     const data1 = orderData?.flatMap((order, index) =>
//         order?.products?.map((product, productIndex) => ({
//             key: `${index + 1}-${productIndex + 1}`,
//             name: product?.product || "N/A",
//             quantity: product?.quantity || 1,
//             price: product?.price || 0,
//             totalAmount: order.totalPrice || 0, // Total order price
//             date: new Date(order.createdAt).toLocaleString() || "N/A", // Format date
//             action: (
//                 <>
//                     <Link key={index} to={`/admin/edit-order/${order._id}`} className="fs-3 text-danger">
//                         <BiEdit />
//                     </Link>
//                     <Link className="ms-3 fs-3 text-danger" to={`/admin/delete-order/${order._id}`}>
//                         <AiFillDelete />
//                     </Link>
//                 </>
//             ),
//         }))
//     );

//     return (
//         <div>
//             <h3 className="mb-4 title">View Order</h3>
//             <div>
//                 <Table columns={columns} dataSource={data1} />
//             </div>
//         </div>
//     );
// };

// export default ViewOrder;
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { getOrderByUser } from "../features/auth/authSlice";

const columns = [
    {
        title: "SNo",
        dataIndex: "key",
    },
    {
        title: "Product Name",
        dataIndex: "name",
    },
    {
        title: "Product Count",
        dataIndex: "productCount",
    },
    {
        title: "Total Price",
        dataIndex: "totalPrice",
    },
    {
        title: "Order Status",
        dataIndex: "orderStatus",
    },
    {
        title: "Order Date",
        dataIndex: "date",
    },
    {
        title: "Brand",
        dataIndex: "brand",
    },
];

const ViewOrder = () => {
    const location = useLocation();
    const userId = location.pathname.split("/")[3];
    const dispatch = useDispatch();
    const [orderDataState, setOrderDataState] = useState([]);

    useEffect(() => {
        dispatch(getOrderByUser(userId)); // Fetch orders for the specific user
    }, [dispatch, userId]);

    const orderState = useSelector((state) => state?.auth?.orderbyuser?.orders);
    console.log("Order State:", orderState);
    useEffect(() => {
        if (orderState) {
            // Map order data to match the table format
            const data1 = orderState.map((order, index) => ({
                key: index + 1,
                name: order?.orderItems?.map(item => item?.product?.title).join(", ") || "N/A",
                productCount: order?.orderItems?.reduce((count, item) => count + (item.quantity || 0), 0),
                totalPrice: order?.totalPrice || 0,
                orderStatus: order?.orderStatus || "N/A",
                date: new Date(order.createdAt).toLocaleString() || "N/A",
                brand: order?.orderItems?.map(item => item?.product?.brand).join(", ") || "N/A",
            }));
            setOrderDataState(data1);
        }
    }, [orderState]);

    return (
        <div>
            <h3 className="mb-4 title">View Order</h3>
            <div>
                <Table columns={columns} dataSource={orderDataState} />
            </div>
        </div>
    );
};

export default ViewOrder;
