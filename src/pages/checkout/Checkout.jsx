import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CommonSection from '../../components/commonSection/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import useAuth from '../../customHooks/useAuth'
import { addOrder } from '../../store/orderSlice'
import './checkout.scss'

const Checkout = () => {

    const { currentUser } = useAuth()

    const navigate = useNavigate()

    const name = useRef()
    const email = useRef()
    const number = useRef()
    const address = useRef()
    const country = useRef()
    const city = useRef()
    const code = useRef()

    const totalQuantity = useSelector(state => state.cart.totalQuantity)
    const totalAmount = useSelector(state => state.cart.totalAmount)
    const cartItems = useSelector(state => state.cart.cartItems)

    const dispatch = useDispatch()

    let placeOrder = () => {

        dispatch(addOrder({
            nameVal: name.current.value,
            emailVal: email.current.value,
            numberVal: number.current.value,
            addressVal: address.current.value,
            countryVal: country.current.value,
            cityVal: city.current.value,
            codeVal: code.current.value,
            uid: currentUser.uid,
            totalQuantity,
            totalAmount,
            cartItems
        }))

        name.current.value = ''
        email.current.value = ''
        number.current.value = ''
        address.current.value = ''
        country.current.value = ''
        city.current.value = ''
        code.current.value = ''

        navigate('/shop')
    }

    return (
        <div>
            <Helmet title={'checkout'} />
            <CommonSection title={'Checkout'} />

            <div className="checkout">
                <div className="info">
                    <h3>Billing Information</h3>
                    <input type="text" placeholder='Enter your name' ref={name} />
                    <input type="email" placeholder='Enter your email' ref={email} />
                    <input type="tel" placeholder='Phone number' ref={number} />
                    <input type="text" placeholder='Street address' ref={address} />
                    <input type="text" placeholder='Country' ref={country} />
                    <input type="text" placeholder='City' ref={city} />
                    <input type="number" placeholder='Postal code' ref={code} />
                </div>

                <div className="subtotal">
                    <p>Total Qty: <span>{totalQuantity} items</span></p>
                    <p>Subtotal: <span>${totalAmount}</span></p>
                    <p>Shipping: <span>$0</span></p>
                    <p>Total Cost: <span>${totalAmount}</span></p>
                    <button onClick={placeOrder}>Place an order</button>
                </div>
            </div>
        </div>
    )
}

export default Checkout
