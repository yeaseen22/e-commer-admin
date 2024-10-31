
import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getOrdersData,updateOrderStatus } from "../features/auth/authSlice";

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
    amount: order.totalPrice,
    date: order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A", // Format date
    action: (
      <>
        <select defaultValue={order.orderStatus} onChange={(e) => updateOrderData(order._id, e.target.value)} name="" id="" className="form-control form-select">
        <option value="Ordered" disabled selected>Ordered</option>
          <option value="Processed">Processed</option>Delivered
          <option value="Shipping">Shipping</option>
          <option value="Out For Delivery">Out For Delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
      </>
    ),
  }));

  const updateOrderData = (a,b) => {
    dispatch(updateOrderStatus({id:a,status:b}))
  }

  return (
    <div>
      <h3 className="mb-4 title">Orders</h3>
      <Table columns={columns} dataSource={data1} />
    </div>
  );
};

export default Orders;
