import React, { useState } from 'react'
import CommonSection from '../../components/commonSection/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import Products from '../../assets/data/products'
import ProductList from '../../components/productList/ProductList'
import { BiSearchAlt } from 'react-icons/bi'
import './shop.scss'

const Shop = () => {
  const [data, setData] = useState(Products)

  let handleByCategory = e => {
    let filterValue = e.target.value;

    if (filterValue === 'all') {
      setData(Products)
    }
    if (filterValue === 'sofa') {
      let filteredProducts = Products.filter(item => item.category === 'sofa')
      setData(filteredProducts)
    }
    if (filterValue === 'mobile') {
      let filteredProducts = Products.filter(item => item.category === 'mobile')
      setData(filteredProducts)
    }
    if (filterValue === 'chair') {
      let filteredProducts = Products.filter(item => item.category === 'chair')
      setData(filteredProducts)
    }
    if (filterValue === 'watch') {
      let filteredProducts = Products.filter(item => item.category === 'watch')
      setData(filteredProducts)
    }
    if (filterValue === 'wireless') {
      let filteredProducts = Products.filter(item => item.category === 'wireless')
      setData(filteredProducts)
    }
  }

  let handleSearch = e => {
    let value = e.target.value;
    let searchedProduct = Products.filter(
      item => item.productName.toLowerCase().includes(value.toLowerCase())
    )
    setData(searchedProduct)
  }
  setTimeout(() => {
    window.scrollTo(0, 350)
  }, 1000)  

  return (
    <div>
      <Helmet title={'Shop'} />
      <CommonSection title={'Products'}/>

      <div className="filter-section">
        <select className='category' onChange={handleByCategory}>
          <option hidden>Sort By Category</option>
          <option value="all">All</option>
          <option value="sofa">Sofa</option>
          <option value="mobile">Mobile</option>
          <option value="chair">Chair</option>
          <option value="watch">Watch</option>
          <option value="wireless">Wireless</option>
        </select>

        <select className='price'>
          <option hidden>Sort By</option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>

        <div className="search">
          <input type="search" placeholder='Search Product' onChange={handleSearch} />
          <BiSearchAlt className='icon' onClick={handleSearch} />
        </div>
      </div>

      {
        data.length === 0 ? <h2 style={{textAlign: 'center', margin: '20px 0'}}>No Products Found😕</h2  > :
          <ProductList data={data} />
      }

    </div>
  )
}

export default Shop
