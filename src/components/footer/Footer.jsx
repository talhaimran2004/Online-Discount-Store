import React from 'react'
import { NavLink } from 'react-router-dom'
import './footer.scss'
import {ImFacebook, ImTwitter, ImLinkedin2} from 'react-icons/im'
import {GrGithub} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer className="footer-distributed">

      <div className="footer-right">

        <a href="facebook.com"><ImFacebook /></a>
        <a href="twitter.com"><ImTwitter /></a>
        <a href="linkedin.com"><ImLinkedin2 /></a>
        <a href="github.com"><GrGithub /></a>


      </div>

      <div className="footer-left">

        <p className="footer-links">
          <NavLink style={{  margin: '0 10px 0 0'}} to={'/'}>Home</NavLink>
          <NavLink style={{  margin: '0 10px'}} to={'shop'}>Shop</NavLink>
          <NavLink style={{  margin: '0 10px'}} to={'cart'}>Cart</NavLink>
        </p>

        <p>Jacobs &copy; 2023</p>
      </div>

    </footer>
  )
}

export default Footer
