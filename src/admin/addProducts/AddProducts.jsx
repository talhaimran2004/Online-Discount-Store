import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { addProductFunc } from '../../store/addProductSlice'
import './addProduct.scss'

const AddProducts = () => {

  const navigate = useNavigate()

  const { isLoading } = useSelector((state) => state);

  const dispatch = useDispatch()

  const title = useRef()
  const shortDesc = useRef()
  const desc = useRef()
  const price = useRef()
  const quantity = useRef()
  const category = useRef()
  const [image, setImage] = useState(null)

  let addProduct = (e) => {
    e.preventDefault()
      dispatch(addProductFunc({
        title: title.current.value,
        shortDesc: shortDesc.current.value,
        desc: desc.current.value,
        price: price.current.value,
        quantity: quantity.current.value,
        category: category.current.value,
        image
      })).unwrap().then(() => {
        isLoading ? toast.info('Loading...') : toast.success('Product Added Successfully!')
        console.log(isLoading + 'from wnwrap');

      }).catch((error) => {
        toast.error(error.message + ' from page')
      })


      title.current.value = ''
      shortDesc.current.value = ''
      desc.current.value = ''
      price.current.value = ''
      category.current.value = ''
      // navigate('/dashboard/all-products')

  }
  console.log(isLoading + ' outside func');
  return (
    <div>
      <h3 className='add-heading'>Add Product</h3>
      <form className="add-form" onSubmit={addProduct}>
        <p>Product Title</p>
        <input type="text" placeholder='Title' ref={title} required />
        <p>Short Description</p>
        <input type="text" placeholder='short description' ref={shortDesc} required />
        <p>Description</p>
        <input type="text" placeholder='description' ref={desc} required />
        <div className="section">

          <div>
            <p>Price</p>
            <input type="text" placeholder='price' ref={price} required />
          </div>

          <div>
            <p>Category</p>
            <select className='category' ref={category} required>
              <option value="vegetables">Vegetables</option>
              <option value="meat">Meat</option>
              <option value="dry-fruits">Dry Fruits</option>
              <option value="fruits">Fruits</option>
              <option value="other">other</option>
            </select>
          </div>

          <div>
            <p>Quantity</p>
            <select className='category' ref={quantity} required>
              <option value="per-kg">per kg</option>
              <option value="dozen">a dozen</option>
            </select>
          </div>

        </div>
        <p>Product Image</p>
        <input type="file" onChange={e => setImage(e.target.files[0])} required />

        <button type='submit'>Add Product</button>
      </form>
    </div>
  )
}

export default AddProducts
