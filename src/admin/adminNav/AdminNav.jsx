import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { AiOutlineUser, AiOutlineSetting } from 'react-icons/ai'
import { BiSearchAlt } from 'react-icons/bi'
import './adminNav.scss'
import useAuth from '../../customHooks/useAuth'

const AdminNav = () => {

  const {currentUser} = useAuth()

  const navLinks = [
    {
      path: '/dashboard',
      display: 'Dashboard'
    },
    {
      path: '/dashboard/all-products',
      display: 'All Products'
    },
    {
      path: '/dashboard/add-products',
      display: 'Add Products'
    },
    {
      path: '/dashboard/orders',
      display: 'Orders'
    },
    // {
    //   path: '/dashboard/users',
    //   display: 'Users'
    // },
  ]

  return (
    <nav className='admin-nav'>
      <div className='row-one'>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="search-box">
          <input type="text" placeholder='Search Product'/>
          <BiSearchAlt className='icon' />
        </div>

        <div className="nav-icons">

          <div>
            <IoMdNotificationsOutline className='icon' />
            <div className="badge">1</div>
          </div>

          <div>
            <AiOutlineSetting className='icon' />
          </div>

          <div className='profile'>
            <img src={currentUser && currentUser.photoURL} alt="profile" />
          </div>

        </div>
      </div>

      <div className='navigation'>
        <ul>
          {navLinks.map((item, index) => <li key={index}>
            <NavLink to={item.path}>{item.display}</NavLink>
          </li>)}
        </ul>
      </div>
    </nav>
  )
}

export default AdminNav
