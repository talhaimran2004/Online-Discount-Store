import { signInWithEmailAndPassword } from 'firebase/auth'
import React, { useRef } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsEyeSlash } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../firebase.config'
import './login.scss'



const Login = () => {

  const email = useRef()
  const pass = useRef()

  const navigate = useNavigate()


  let loginUser = async (e) => {
    e.preventDefault()

    let emailVal = email.current.value
    let passVal = pass.current.value


    await signInWithEmailAndPassword(auth, emailVal, passVal)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/checkout')
        toast.success('Logged In')

      })
      .catch((error) => {
        toast.warning(error.message)
      });
  }

  return (
    <div className='login'>
      <div className="header">
        <h2>SAYLANI WELFARE</h2>
        <h5>ONLINE DISCOUNT STORE</h5>
      </div>

      <form className="form" onSubmit={loginUser}>
        <div>
          <input type="email" placeholder='Email' required ref={email} />
          <AiOutlineMail className='icon' />
        </div>
        <div>
          <input type="password" placeholder='Password' required ref={pass} />
          <BsEyeSlash className='icon' />
        </div>
        {/* <Link to={'/login'}>Forgot Password?</Link> */}
        <button type='submit'>Sign in</button>
      </form>
      <p>Don't have an account?<span> <Link to={'/signup'}>Register</Link> </span></p>
    </div>
  )
}

export default Login
