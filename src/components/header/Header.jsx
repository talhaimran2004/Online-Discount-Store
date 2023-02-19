import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { BiSearchAlt } from 'react-icons/bi'
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
            <div className="profile" onMouseEnter={() => setToggle(!toggle)} onMouseLeave={() => setToggle(!toggle)}>
              <img src={currentUser ? `${currentUser.photoURL}` : ''} alt="profile" />

              {
                toggle ? (
                  <ul className='profile-dropdown'>
                    <li onClick={logOutUser}>LogOut</li>
                    <li onClick={() => setModal(!modal)}>My Orders</li>
                    {
                      currentUser?.email === 'muhammadtalha1400@gmail.com' ? <li onClick={()=>navigate('/dashboard ')}>Dashboard</li> : ''
                    }
                    
                  </ul>
                ) : ''
              }
            </div>
          ) : <div>
            <NavLink to={'/login'}>
              <IoMdLogIn className='icon' />
            </NavLink>
          </div>
        }
      </div>

      {
        modal ? <div className='modal'><Modal user={currentUser} setModal={setModal}/></div> : ''
      }



    </nav>
  )
}

export default Header
