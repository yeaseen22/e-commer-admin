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
// const Orders = () => {
//     return (
//         <div>
//             <h3 className="mb-4 title">Orders</h3>
//             <div>
//                 <Table columns={columns} dataSource={data1} />
//             </div>
//         </div>
//     )
// }

// export default Orders





// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { getOrdersData } from "../features/auth/authSlice";
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch]);
    const orderState = useSelector((state) => state?.auth?.orders);
    

    const data1 = [];
    for (let i = 0; i < orderState.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].orderby.firstname,
            product: (
                <Link to={`/admin/order/${orderState[i].orderby._id}`}>
                    View Orders
                </Link>
            ),
            amount: orderState[i].paymentIntent.amount,
            date: new Date(orderState[i].createdAt).toLocaleString(),
            action: (
                <>
                    <Link to="/" className=" fs-3 text-danger">
                        <BiEdit />
                    </Link>
                    <Link className="ms-3 fs-3 text-danger" to="/">
                        <AiFillDelete />
                    </Link>
                </>
            ),
        });
    }
    return (
        <div>
            <h3 className="mb-4 title">Orders</h3>
            <div>{<Table columns={columns} dataSource={data1} />}</div>
        </div>
    );
};

export default Orders;
