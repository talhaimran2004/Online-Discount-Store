import React from 'react'
import CommonSection from '../../components/commonSection/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import { MdDeleteSweep } from 'react-icons/md'
import './cart.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deleteItem } from '../../store/cartSlice'
import { toast } from 'react-toastify'
import { NavLink } from 'react-router-dom'

const Cart = () => {

  const cart = useSelector(state => state.cart.cartItems)
  const total = useSelector(state => state.cart.totalAmount)

  const dispatch = useDispatch()

  let handleDelete = (id) => {
    dispatch(
      deleteItem(id)
    )

    toast.error('Product Removed!')
  }

  return (
    <div>
      <Helmet title={'Cart'} />
      <CommonSection title={'Cart'}/>

      {
        cart.length === 0 ?
          <>
            <h3 style={{ textAlign: 'center', margin: '100px 0 0 0' }}>No products added to cart yet😕</h3>
            <NavLink className="shop-btn" to={'/shop'}>Continue Shoping</NavLink>
          </>

          :
          <div className="cart-section">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>

              <tbody>

                {
                  cart.map((item, index) => (
                    <tr key={index}>
                      <td className='image'><img src={item.imgUrl} alt="product-pic" /></td>
                      <td>{item.productName}</td>
                      <td>${item.price}</td>
                      <td>{item.quantity}</td>
                      <td><MdDeleteSweep className='delete' onClick={() => handleDelete(item.id)} /></td>
                    </tr>
                  ))
                }
              </tbody>
            </table>

            <div className="subtotal">
              <h3>Subtotal <span>${total}</span></h3>

              <p>takes and shipping will calculate in checkout</p>

              <NavLink to={'/shop'}>Continue Shoping</NavLink>
              <NavLink to={'/checkout'}>Checkout</NavLink>
            </div>
          </div>
      }

    </div>
  )
}

export default Cart
