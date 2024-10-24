// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DashBoard from './pages/Dashboard'
import Login from './pages/Login'
import ResetPassword from './pages/ResetPassword'
import ForgotPassword from './pages/ForgotPassword'
import MainLayout from './Components/MainLayout'
import Enquiries from './pages/Enquiries'
import BlogList from './pages/BlogList'
import BlogCatList from './pages/BlogCatList'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import ColorList from './pages/ColorList'
import CategoryList from './pages/CategoryList'
import AddCategory from './pages/AddCategory'
import BrandList from './pages/BrandList'
import ProductList from './pages/ProductList'
import AddBlog from './pages/AddBlog'
import AddBlogCat from './pages/AddBlogCategory'
import AddColor from './pages/AddColor'
import AddBrand from './pages/AddBrand'
import AddProduct from './pages/AddProduct'
import ViewEnq from './pages/ViewEnq'
import ViewOrder from './pages/ViewOrder'
import Coupon from './pages/AddCoupon'
import CouponList from './pages/CouponList'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/admin' element={<MainLayout />}>
          <Route index element={<DashBoard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path="enquiries/:id" element={<ViewEnq />} />
          <Route path="coupon" element={<Coupon />} />
          <Route path="coupon/:id" element={<Coupon />} />
          <Route path="coupon-list" element={<CouponList />} />
          <Route path='blog-list' element={<BlogList />} />
          <Route path='blog' element={<AddBlog />} />
          <Route path='blog/:id' element={<AddBlog />} />
          <Route path='blog-category-list' element={<BlogCatList />} />
          <Route path='blog-category' element={<AddBlogCat />} />
          <Route path='blog-category/:id' element={<AddBlogCat />} />
          <Route path='orders' element={<Orders />} />
          <Route path="order/:id" element={<ViewOrder />} />
          <Route path='customers' element={<Customers />} />
          <Route path='color-list' element={<ColorList />} />
          <Route path='color' element={<AddColor />} />
          <Route path='color/:id' element={<AddColor />} />
          <Route path='category-list' element={<CategoryList />} />
          <Route path='category' element={<AddCategory />} />
          <Route path='category/:id' element={<AddCategory />} />
          <Route path='brand-list' element={<BrandList />} />
          <Route path='brand' element={<AddBrand />} />
          <Route path='brand/:id' element={<AddBrand />} />
          <Route path='product-list' element={<ProductList />} />
          <Route path='product/' element={<AddProduct />} />
        </Route>
      </Routes>
    </Router>
  )
}
export default App
