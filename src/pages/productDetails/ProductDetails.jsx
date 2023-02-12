import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Products from '../../assets/data/products'
import CommonSection from '../../components/commonSection/CommonSection'
import { BsStarFill, BsStarHalf } from 'react-icons/bs'
import './productDetails.scss'
import ProductList from '../../components/productList/ProductList'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'
import { toast } from 'react-toastify'

const ProductDetails = () => {
  const { id } = useParams()
  const [tab, setTab] = useState('desc')

  let mainProduct = Products.find(item => item.id === id)

  let { imgUrl, productName, price, avgRating, reviews, description, shortDesc, category } = mainProduct
  console.log(mainProduct)

  let allRelatedProducts = Products.filter(item => item.category === category)
  let relatedProducts = allRelatedProducts.filter(item => item.productName !== productName)

  let dispatch = useDispatch()

  let addToCart = () => {
    dispatch(
      addItem({
        id: id,
        imgUrl: imgUrl,
        productName: productName,
        price: price,
      })
    )
    toast.success('Product Added Successfully!')
  }

  return (
    <div>
      <CommonSection title={productName} />

      <div className='details' key={id}>
        <div className="img">
          <img src={imgUrl} alt="" />
        </div>

        <div className="info">
          <h2>{productName}</h2>

          <div className="rating">
            <div>
              <BsStarFill className='star' />
              <BsStarFill className='star' />
              <BsStarFill className='star' />
              <BsStarFill className='star' />
              <BsStarHalf className='star' />
            </div>

            <div>
              (<span className='avg-rating'>{avgRating}</span> ratings)
            </div>
          </div>

          <p className='price'>${price}</p>

          <p className='category'>Category: {category}</p>

          <div className='short-desc'>
            {shortDesc}
          </div>

          <button onClick={addToCart}>Add to Cart</button>

        </div>
      </div>

      <div className='bottom-section'>
        <div className="heading">
          <h3 className={tab === 'desc' ? 'active_tab' : ''} onClick={() => setTab('desc')}>Description</h3>
          <h3 className={tab === 'rev' ? 'active_tab' : ''} onClick={() => setTab('rev')}>Reviews({reviews.length})</h3>
        </div>

        <div className="text">
          {
            tab === 'desc' ? <p>{description}</p> :
              <p>{reviews.map(item => (
                <div>
                  <p className='rating'>{item.rating} (rating)</p>
                  <p>{item.text}</p>
                </div>
              ))}</p>
          }
        </div>
      </div>

      <hr style={{ width: '85%', margin: '50px auto', opacity: '0.7' }} />

      <div className="related-products">
        <h3 style={{ width: '85%', margin: 'auto' }}>You might also like</h3>
        <ProductList data={relatedProducts} />
      </div>
    </div>
  )
}

export default ProductDetails
