import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import React, { useRef, useState } from 'react'
import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
import { BsEyeSlash } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth, storage } from '../../firebase.config'
import { addUser } from '../../store/authSlice'
import './signup.scss'

const Signup = () => {

  const dispatch = useDispatch()

  const name = useRef()
  const contact = useRef()
  const email = useRef()
  const pass = useRef()
  const [profile, setProfile] = useState(null)

  const navigate = useNavigate()

  let signUpUser = async (e) => {
    e.preventDefault()

    let nameVal = name.current.value
    let contactVal = contact.current.value
    let emailVal = email.current.value
    let passVal = pass.current.value

    console.log(profile);


    await createUserWithEmailAndPassword(auth, emailVal, passVal)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        navigate('/login')
        toast.success('Registered')

        const storageRef = ref(storage, `images/${Date.now() + nameVal}`)
        const uploadTask = uploadBytesResumable(storageRef, profile)

        uploadTask.on((error) => {
          toast.error(error.message)
        }, () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(user, {
              nameVal,
              photoURL: downloadURL,
            })

            dispatch(addUser({
              nameVal,
              contactVal,
              emailVal,
              passVal,
              uid: user.uid,
              photoURL: downloadURL,
            }))

          })
        })


      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message)

        // ..
      });
  }

  return (
    <div className='signup'>
      <div className="header">
        <h2>SAYLANI WELFARE</h2>
        <h5>ONLINE DISCOUNT STORE</h5>
      </div>

      <form className="form" onSubmit={signUpUser}>
        <div>
          <input type="text" placeholder='Full Name' required ref={name} />
          <AiOutlineUser className='icon' />
        </div>
        <div>
          <input type="tel" placeholder='Contact' required ref={contact} />
          <AiOutlinePhone className='icon' />
        </div>
        <div>
          <input type="email" placeholder='Email' required ref={email} />
          <AiOutlineMail className='icon' />
        </div>
        <div>
          <input type="password" placeholder='Password' required ref={pass} />
          <BsEyeSlash className='icon' />
        </div>
        <div>
          <input type="file" onChange={(e) => setProfile(e.target.files[0])} />
        </div>

        <button type='submit'>Sign Up</button>
      </form>
      <p>Already have an account? <span> <Link to={'/login'}>Login</Link> </span></p>
    </div>
  )
}

export default Signup
