import React from 'react'
import './allProducts.scss'
import img from '../../assets/img/mango.jpg'
import useGetData from '../../customHooks/useGetData'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../firebase.config'
import { toast } from 'react-toastify'

const AllProducts = () => {
  const { data: productsData } = useGetData('products')


let deleteProduct = async (id) => {
  await deleteDoc(doc(db, "products", id));
  toast.success('Deleted!')
}

  return (
    <div className='all-products-section'>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            productsData.map((item, index) => (
              <tr key={index}>
                <td className='image'><img src={item.imgURL} alt="product-pic" /></td>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td><button className='delete-btn' onClick={() => deleteProduct(item.id)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default AllProducts
