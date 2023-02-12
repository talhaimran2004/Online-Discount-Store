import React, { useEffect, useState } from 'react'
import Card from '../../components/card/Card'
import ImageCraousel from '../../components/imageCraousel/ImageCraousel'
import './home.scss'
import trend1 from '../../assets/images/trend1.jpg'
import trend2 from '../../assets/images/trend2.jpg'
import trend3 from '../../assets/images/trend3.jpg'
import trend4 from '../../assets/images/trend4.jpg'
import Helmet from '../../components/helmet/Helmet'
import ProductList from '../../components/productList/ProductList'
import Products from '../../assets/data/products'

const Home = () => {
  const year = new Date().getFullYear();
  const monthIndex = new Date().getMonth();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthName = months[monthIndex]

  const [trendingProducts, setTrendingProducts] = useState(Products)
  const [recomendedProducts, setRecomendedProducts] = useState(Products)

  useEffect(() => {
    let filteredProducts = trendingProducts.filter(item => item.category === 'chair')
    setTrendingProducts(filteredProducts)  

    let recomendedProducts = trendingProducts.filter(item => item.category === 'sofa')
    setRecomendedProducts(recomendedProducts)    
  }, [])

  return (
    <div>
      <Helmet title={'Home'} />

      <ImageCraousel />

      <div className="best-seller">

        <h1>Best Seller in {year}</h1>

        <div className='underline'></div>

        <div className="cards">
          <Card img={trend1} alt={'sneakers'} name={'Premium Unisex Sneakers'} price={'4,999'} price2={'2,499'} />
          <Card img={trend3} alt={'suit'} name={'Casual Suit'} price={'4,999'} price2={'2,499'} />
          <Card img={trend2} alt={'watch'} name={'Jat Black Watch'} price={'4,999'} price2={'2,499'} />
          <Card img={trend4} alt={'Jacket'} name={'Green Premium Jacket'} price={'4,999'} price2={'2,499'} />
        </div>
      </div>

      <div className="trending">

        <h1>Trending Prducts in {monthName}</h1>

        <div className='underline'></div>

        <ProductList data={trendingProducts}/>
      </div>

      <div className="recomended">

        <h1>Recomended Prducts in {monthName}</h1>

        <div className='underline'></div>

        <ProductList data={recomendedProducts}/>
      </div>


    </div>
  )
}

export default Home
