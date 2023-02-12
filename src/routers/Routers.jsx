import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../admin/Dashboard'
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

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:id' element={<ProductDetails />} />
        <Route path='cart' element={<Cart />} />

        <Route path='/*' element={<ProtectedRoute />} >

          <Route path='checkout' element={<Checkout />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='dashboard/all-products' element={<Checkout />} />
          <Route path='dashboard/add-products' element={<Checkout />} />  

        </Route>

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </div>
  )
}

export default Routers
