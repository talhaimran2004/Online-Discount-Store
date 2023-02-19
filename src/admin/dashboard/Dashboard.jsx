import React from 'react'
import useGetData from '../../customHooks/useGetData'
import './dashboard.scss'

const Dashboard = () => {

const {data: products} = useGetData('products')
const {data: users} = useGetData('users')

  return (
    <div className='dashboard'>
      <div className="box box-one">
        <p>Total Sales</p>
        <p>Rs. 50,250</p>
      </div>
      <div className="box box-two">
        <p>Orders</p>
        <p>480</p>
      </div>
      <div className="box box-three">
        <p>Total Products</p>
        <p>{products.length}</p>
      </div>
      <div className="box box-four">
        <p>Total Users</p>
        <p>{users.length}</p>
      </div>
    </div>
  )
}

export default Dashboard
