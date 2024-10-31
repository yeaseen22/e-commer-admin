
import React, { useState, useEffect } from "react";
import { Column } from "@ant-design/plots";
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { getMonthlyData, getOrdersData, getYearlyData } from "../features/auth/authSlice";

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
    title: "Product Count",
    dataIndex: "productCount",
  },
  {
    title: "Total Price",
    dataIndex: "totalPrice",
  },
  {
    title: "Total Price After Discount",
    dataIndex: "totalPriceAfterDiscount",
  },
  {
    title: "Status",
    dataIndex: "orderStatus",
  },
];

const Dashboard = () => {
  const dispatch = useDispatch();
  const monthlyData = useSelector((state) => state?.auth?.monthlyData);
  const yearlyDataState = useSelector((state) => state?.auth?.yearlyData);
  const orderData = useSelector((state) => state?.auth?.orderbyuser);

  const [dataMonthly, setDataMonthly] = useState([]);
  const [dataMonthlySales, setDataMonthlySales] = useState([]);
  const [orderDataState, setOrderDataState] = useState([]);

  console.log('order state', yearlyDataState);

  useEffect(() => {
    dispatch(getMonthlyData());
    dispatch(getYearlyData());
    dispatch(getOrdersData());
  }, []);

  useEffect(() => {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    // Set monthly income and order count data for charts
    const data = monthlyData?.map((element) => ({
      type: monthNames[element.month - 1],
      income: element.totalIncome,
    }));
    const monthlyOrderCount = monthlyData?.map((element) => ({
      type: monthNames[element.month - 1],
      sales: element.orderCount,
    }));

    setDataMonthly(data);
    setDataMonthlySales(monthlyOrderCount);

    // Map order data to the format required for the table
    const data1 = orderData?.orders?.map((order, i) => ({
      key: i + 1,
      name: `${order.user.firstName} ${order.user.lastName}`,
      productCount: order.orderItems.length,
      totalPrice: order.totalPrice,
      totalPriceAfterDiscount: order.totalPriceAfterDiscount || order.totalPrice - (order.discountAmount || 0),
      orderStatus: order.orderStatus || "N/A",
    }));
    setOrderDataState(data1);
  }, [monthlyData, orderData]);

  const config = {
    data: dataMonthly,
    xField: "type",
    yField: "income",
    color: "#ffd333",
    label: {
      position: "middle",
      style: { fill: "#FFFFFF", opacity: 1 },
    },
    xAxis: {
      label: { autoHide: true, autoRotate: false },
    },
    meta: {
      type: { alias: "Month" },
      sales: { alias: "Income" },
    },
  };

  const config2 = {
    data: dataMonthlySales,
    xField: "type",
    yField: "sales",
    color: "#ffd333",
    label: {
      position: "middle",
      style: { fill: "#FFFFFF", opacity: 1 },
    },
    xAxis: {
      label: { autoHide: true, autoRotate: false },
    },
    meta: {
      type: { alias: "Month" },
      sales: { alias: "Sales" },
    },
  };

  return (
    <div>
      <h3 className="mb-4 title">Dashboard</h3>
      <div className="d-flex justify-content-between align-items-center gap-3">
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Order</p>
            <h4 className="mb-0 sub-title">{yearlyDataState?.totalOrders}</h4>
          </div>
          <div className="d-flex flex-column align-items-end">
            <p className="mb-0 desc">Yearly Total Sales</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 roudned-3">
          <div>
            <p className="desc">Income</p>
            <h4 className="mb-0 sub-title">${yearlyDataState?.totalAmountAfterDiscount}</h4>
          </div>
          <div className="d-flex p-3 flex-column align-items-end">
            <p className="mb-0 desc">Yearly Total Sales</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between gap-3">
        <div className="mt-4 flex-grow-1 w-50">
          <h3 className="mb-5 title">Income Statics</h3>
          <Column {...config} />
        </div>
        <div className="mt-4 flex-grow-1 w-50">
          <h3 className="mb-5 title">Sales Statics</h3>
          <Column {...config2} />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-5 title">Recent Orders</h3>
        <Table columns={columns} dataSource={orderDataState} />
      </div>
    </div>
  );
};

export default Dashboard;

