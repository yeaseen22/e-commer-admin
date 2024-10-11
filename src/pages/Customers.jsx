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
// const Customers = () => {
//     return (
//         <div>
//             <h3 className="mb-4 title">Customers</h3>
//             <div>
//                 <Table columns={columns} dataSource={data1} />
//             </div>
//         </div>
//     )
// }

// export default Customers

// eslint-disable-next-line no-unused-vars
// import React, { useEffect } from "react";
// import { Table } from "antd";
// import { useDispatch, useSelector } from "react-redux";
// // import { getUsers } from "../features/cutomers/customerSlice";
// import { getUsers } from "../features/customers/customerSlice";
// const columns = [
//   {
//     title: "SNo",
//     dataIndex: "key",
//   },
//   {
//     title: "Name",
//     dataIndex: "name",
//     sorter: (a, b) => a.name?.length - b.name?.length,
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//   },
//   {
//     title: "Mobile",
//     dataIndex: "mobile",
//   },
// ];

// const Customers = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getUsers());
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   const onChange = (pagination, filters, sorter, extra) => {
//     console.log("params", pagination, filters, sorter, extra);
//   };


//   const customerstate = useSelector((state) => state.customer.customers);
//   const data1 = [];
//   for (let i = 0; i < customerstate.length; i++) {
    
//     if (customerstate[i].role !== "admin") {
//       data1.push({
//         key: i + 1,
//         name: customerstate[i].firstName + " " + customerstate[i].lastName,
//         email: customerstate[i].email,
//         mobile: customerstate[i].mobile,
//       });
//     }
//   }

//   return (
//     <div>
//       <h3 className="mb-4 title">Customers</h3>
//       <div>
//         <Table columns={columns} dataSource={data1} onChange={onChange} />
//       </div>
//     </div>
//   );
// };

// export default Customers;


// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../features/customers/customerSlice";

const columns = [
  {
    title: "SNo",
    dataIndex: "key",
    sorter: (a, b) => a.key - b.key, // Sorting function for ascending/descending order
  },
  {
    title: "Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Email",
    dataIndex: "email",
    sorter: (a, b) => a.email.localeCompare(b.email),
  },
  {
    title: "Mobile",
    dataIndex: "mobile",
    sorter: (a, b) => a.mobile.localeCompare(b.mobile),
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  const customerstate = useSelector((state) => state.customer.customers || []);
  const [data, setData] = useState([]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    const customerArray = Array.isArray(customerstate)
      ? customerstate
      : Object.values(customerstate || {});

    const formattedData = customerArray
      .filter((customer) => customer.role !== "admin")
      .map((customer, index) => ({
        key: index + 1,
        name: `${customer.firstName} ${customer.lastName}`,
        email: customer.email,
        mobile: customer.mobile,
      }));

    setData(formattedData);
  }, [customerstate]);

  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);

    if (sorter.order) {
      const sortedData = [...data].sort((a, b) => {
        const { columnKey, order } = sorter;

        if (order === "ascend") {
          return a[columnKey] > b[columnKey] ? 1 : -1;
        } else {
          return a[columnKey] < b[columnKey] ? 1 : -1;
        }
      });
      setData(sortedData);
    }
  };

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default Customers;
