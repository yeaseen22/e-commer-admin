// import React, { useState } from 'react';
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from '@ant-design/icons';
// import { Button, Layout, Menu, theme } from 'antd';
// const { Header, Sider, Content } = Layout;
// import { AiOutlineBgColors, AiOutlineDashboard, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
// import { SiBrandfolder } from 'react-icons/si';
// import { BiCategoryAlt } from 'react-icons/bi';
// // import { AiOutlineBgColors, } from 'react-icons/ai';
// import { FaClipboardList } from 'react-icons/fa';
// import { FaBloggerB } from 'react-icons/fa';
// import { IoIosNotifications } from 'react-icons/io';
// import { ImBlog } from 'react-icons/im';
// import { useNavigate, Link } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

// const MainLayout = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();
//   const navigate = useNavigate()
//   return (
//     <Layout>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="logo">
//           <h2 className="text-white fs-5 text-center py-3 mb-0">
//             <span className="sm-logo">DC</span>
//             <span className="lg-logo">Dev Corner</span>
//           </h2>
//         </div>

//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['']}
//           onClick={({ key }) => {
//             if (key === 'signout') {

//             } else {
//               navigate(key)
//             }
//           }}
//           items={[
//             {
//               key: '',
//               icon: <AiOutlineDashboard className='fs-4' />,
//               label: 'Dashboard',
//             },
//             {
//               key: 'customers',
//               icon: <AiOutlineUser className='fs-4' />,
//               label: 'Customers',
//             },
//             {
//               key: 'Catalog',
//               icon: <AiOutlineShoppingCart className='fs-4' />,
//               label: 'Catalog',
//               children: [
//                 {
//                   key: 'product',
//                   icon: <AiOutlineShoppingCart className='fs-4' />,
//                   label: 'Add Product'
//                 },
//                 {
//                   key: 'product-list',
//                   icon: <AiOutlineShoppingCart className='fs-4' />,
//                   label: 'Product List'
//                 },
//                 {
//                   key: 'brand',
//                   icon: <SiBrandfolder className='fs-4' />,
//                   label: 'Brand'
//                 },
//                 {
//                   key: 'brand-list',
//                   icon: <SiBrandfolder className='fs-4' />,
//                   label: 'Brand List'
//                 },
//                 {
//                   key: 'category',
//                   icon: <BiCategoryAlt className='fs-4' />,
//                   label: 'Category'
//                 },
//                 {
//                   key: 'category-list',
//                   icon: <BiCategoryAlt className='fs-4' />,
//                   label: 'Category List'
//                 },
//                 {
//                   key: 'color',
//                   icon: <AiOutlineBgColors className='fs-4' />,
//                   label: 'Color'
//                 },
//                 {
//                   key: 'color-list',
//                   icon: <AiOutlineBgColors className='fs-4' />,
//                   label: 'Color List'
//                 }
//               ]
//             },
//             {

//               key: 'orders',
//               icon: <FaClipboardList className='fs-4' />,
//               label: 'Orders',
//             },
//             {

//               key: 'blogs',
//               icon: <FaBloggerB className='fs-4' />,
//               label: 'Blogs',
//               children: [
//                 {
//                   key: 'blog',
//                   icon: <ImBlog className='fs-4' />,
//                   label: 'Add Blogs',
//                 },
//                 {
//                   key: 'blog-list',
//                   icon: <FaBloggerB className='fs-4' />,
//                   label: 'Blog List',
//                 },
//                 {
//                   key: 'blog-category',
//                   icon: <ImBlog className='fs-4' />,
//                   label: 'Add Blog Category',
//                 },
//                 {
//                   key: 'blog-category-list',
//                   icon: <FaBloggerB className='fs-4' />,
//                   label: 'Blog Category list',
//                 }
//               ]
//             },
//             {
//               key: "enquiries",
//               icon: <FaClipboardList className='fs-4' />,
//               label: "Enquiries"
//             }
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           className='d-flex justify-content-between ps-1 pe-3'
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         >
//           <Button
//             type="text"
//             icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//             onClick={() => setCollapsed(!collapsed)}
//             style={{
//               fontSize: '16px',
//               width: 64,
//               height: 64,
//             }}
//           />
//           <div className="d-flex gap-4 align-items-center">
//             <div className="position-relative">
//               <IoIosNotifications className="fs-4" />
//               <span className="badge bg-warning rounded-circle p-1 position-absolute">
//                 3
//               </span>
//             </div>

//             <div className="d-flex gap-3 align-items-center dropdown">
//               <div>
//                 <img
//                   width={32}
//                   height={32}
//                   src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
//                   alt=""
//                 />
//               </div>

//               <div
//                 role="button"
//                 id="dropdownMenuLink"
//                 data-bs-toggle="dropdown"
//                 aria-expanded="false"
//               >
//                 <h5 className="mb-0">Navdeep</h5>
//                 <p className="mb-0">navdeepdahiya753@gmail.com</p>
//               </div>
//               <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
//                 <li>
//                   <Link
//                     className="dropdown-item py-1 mb-1"
//                     style={{ height: "auto", lineHeight: "20px" }}
//                     to="/"
//                   >
//                     View Profile
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="dropdown-item py-1 mb-1"
//                     style={{ height: "auto", lineHeight: "20px" }}
//                     to="/"
//                   >
//                     Signout
//                   </Link>
//                 </li>
//               </div>
//             </div>
//           </div>
//         </Header>
//         <Content
//           style={{
//             margin: '24px 16px',
//             padding: 24,
//             minHeight: 280,
//             background: colorBgContainer,
//             borderRadius: borderRadiusLG,
//           }}
//         >
//           <Outlet />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };
// export default MainLayout;

import React, { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors,
} from "react-icons/ai";
import { RiCouponLine } from "react-icons/ri";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { IoIosNotifications } from "react-icons/io";
import { FaClipboardList, FaBloggerB } from "react-icons/fa";
import { SiBrandfolder } from "react-icons/si";
import { BiCategoryAlt } from "react-icons/bi";
import { Layout, Menu, theme } from "antd";
import { useNavigate } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout /* onContextMenu={(e) => e.preventDefault()} */>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-3 mb-0">
            <span className="sm-logo">DC</span>
            <span className="lg-logo">Dev Corner</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[""]}
          onClick={({ key }) => {
            if (key === "signout") {
              // Handle signout logic here
              console.log("Signout clicked");
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: "",
              icon: <AiOutlineDashboard className="fs-4" />,
              label: "Dashboard",
            },
            {
              key: "customers",
              icon: <AiOutlineUser className="fs-4" />,
              label: "Customers",
            },
            {
              key: "Catalog",
              icon: <AiOutlineShoppingCart className="fs-4" />,
              label: "Catalog",
              children: [
                {
                  key: "product",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product",
                },
                {
                  key: "product-list",
                  icon: <AiOutlineShoppingCart className="fs-4" />,
                  label: "Product List",
                },
                {
                  key: "brand",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand",
                },
                {
                  key: "brand-list",
                  icon: <SiBrandfolder className="fs-4" />,
                  label: "Brand List ",
                },
                {
                  key: "category",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category",
                },
                {
                  key: "category-list",
                  icon: <BiCategoryAlt className="fs-4" />,
                  label: "Category List",
                },
                {
                  key: "color",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color",
                },
                {
                  key: "color-list",
                  icon: <AiOutlineBgColors className="fs-4" />,
                  label: "Color List",
                },
              ],
            },
            {
              key: "orders",
              icon: <FaClipboardList className="fs-4" />,
              label: "Orders",
            },
            {
              key: "marketing",
              icon: <RiCouponLine className="fs-4" />,
              label: "Marketing",
              children: [
                {
                  key: "coupon",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Coupon",
                },
                {
                  key: "coupon-list",
                  icon: <RiCouponLine className="fs-4" />,
                  label: "Coupon List",
                },
              ],
            },
            {
              key: "blogs",
              icon: <FaBloggerB className="fs-4" />,
              label: "Blogs",
              children: [
                {
                  key: "blog",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog List",
                },
                {
                  key: "blog-category",
                  icon: <ImBlog className="fs-4" />,
                  label: "Add Blog Category",
                },
                {
                  key: "blog-category-list",
                  icon: <FaBloggerB className="fs-4" />,
                  label: "Blog Category List",
                },
              ],
            },
            {
              key: "enquiries",
              icon: <FaClipboardList className="fs-4" />,
              label: "Enquiries",
            },
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed),
            }
          )}
          <div className="d-flex gap-4 align-items-center">
            <div className="position-relative">
              <IoIosNotifications className="fs-4" />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                3
              </span>
            </div>

            <div className="d-flex gap-3 align-items-center dropdown">
              <div>
                <img
                  width={32}
                  height={32}
                  src="https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg"
                  alt=""
                />
              </div>
              <div
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <h5 className="mb-0">Navdeep</h5>
                <p className="mb-0">navdeepdahiya753@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    View Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item py-1 mb-1"
                    style={{ height: "auto", lineHeight: "20px" }}
                    to="/"
                  >
                    Signout
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={250}
            hideProgressBar={false}
            newestOnTop={true}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
