import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
import { BsSuitHeart } from 'react-icons/bs'
import { IoMdLogIn } from 'react-icons/io'
import { RiShoppingCart2Line } from 'react-icons/ri'
import './header.scss'
import { useSelector } from 'react-redux'
import useAuth from '../../customHooks/useAuth'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify'
import Modal from '../modal/Modal'

const Header = () => {

  const { currentUser } = useAuth()
  const [toggle, setToggle] = useState(false)
  const [modal, setModal] = useState(false)
  const navigate = useNavigate()

  const navLinks = [
    {
      path: '/',
      display: 'Home'
    },
    {
      path: 'shop',
      display: 'Shop'
    },
    {
      path: 'cart',
      display: 'Cart'
    },
  ]

  let a = [
    [],
  ]

  const totalQuantity = useSelector(state => state.cart.totalQuantity)


  let logOutUser = async () => {
    await signOut(auth).then(() => {
      toast.success('Signed-Out Successfully')
      navigate('/')
    }).catch((error) => {
      toast.error(error.message)
    });
  }

  return (
    <nav>

      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <div className='navigation'>
        <ul>
          {navLinks.map((item, index) => <li key={index}>
            <NavLink to={item.path}>{item.display}</NavLink>
          </li>)}
        </ul>
      </div>

      <div className="nav-icons">

        <div>
          <BiSearchAlt className='icon' />
        </div>

        {/* <div>
          <BsSuitHeart className='icon' />
          <div className="badge">1</div>
        </div> */}

        <div>
          <NavLink to={'cart'}>
            <RiShoppingCart2Line className='icon' />
            <div className="badge">{totalQuantity}</div>
          </NavLink>
        </div>

        {
          currentUser ? (
            <div className="profile" onClick={() => setToggle(!toggle)}>
              <img src={currentUser ? `${currentUser.photoURL}` : ''} alt="profile" />

              {
                toggle ? (
                  <>
                    <button className='logout' onClick={logOutUser}>LogOut</button>
                    <button className='modal-btn' onClick={() => setModal(!modal)}>My Orders</button>
                    <button className='dashboard-btn' onClick={()=>navigate('/dashboard ')}>Dashboard</button>
                  </>
                ) : ''
              }
            </div>
          ) : <div>
            <NavLink to={'/login'}>
              <IoMdLogIn className='icon' />
            </NavLink>
          </div>
        }

        {/* {
          modal ? <div className='modal'><Modal /></div> : ''
        } */}
      </div>
      {
        modal ? <div className='modal'><Modal user={currentUser}/></div> : ''
      }
      


    </nav>
  )
}

export default Header
