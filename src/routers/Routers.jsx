import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProducts from '../admin/addProducts/AddProducts'
import AllProducts from '../admin/allProducts/AllProducts'
import Dashboard from '../admin/dashboard/Dashboard'
import Users from '../admin/users/Users'
import useAuth from '../customHooks/useAuth'
import Cart from '../pages/cart/Cart'
import Checkout from '../pages/checkout/Checkout'
import Home from '../pages/home/Home'
import Login from '../pages/login/Login'
import NoMatch from '../pages/noMatch/NoMatch'
import ProductDetails from '../pages/productDetails/ProductDetails'
import Shop from '../pages/shop/Shop'
import Signup from '../pages/signup/Signup'
import ProtectedRoute from './ProtectedRoute'

const Routers = () => {

  const { currentUser } = useAuth()
  console.log(currentUser);
  

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:id' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />

        <Route path='/*' element={<ProtectedRoute />} >

          <Route path='checkout' element={<Checkout />} />
          {
            currentUser?.email === 'muhammadtalha1400@gmail.com' ? (
              <>
                <Route path='dashboard' element={<Dashboard />} />
                <Route path='dashboard/all-products' element={<AllProducts />} />
                <Route path='dashboard/add-products' element={<AddProducts />} />
                {/* <Route path='dashboard/users' element={<Users />} />   */}
                {/* <Route path='dashboard/orders' element={<Orders />} />   */}
              </>
            ) : <Route path='*' element={<NoMatch />} />
          }

        </Route>

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default Routers
