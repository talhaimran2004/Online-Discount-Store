import React, { useEffect, useState } from 'react'
import CommonSection from '../../components/commonSection/CommonSection'
import Helmet from '../../components/helmet/Helmet'
import ProductList from '../../components/productList/ProductList'
import { BiSearchAlt } from 'react-icons/bi'
import './shop.scss'
import useGetData from '../../customHooks/useGetData'

const Shop = () => {
  const {data: allProducts} = useGetData('products')
  console.log(allProducts);
  
  const [data, setData] = useState(allProducts)

  useEffect(() => {
    setData(allProducts)
  }, [allProducts])

  let handleByCategory = e => {
    let filterValue = e.target.value;

    if (filterValue === 'all') {
      setData(allProducts)
    }
    if (filterValue === 'vegetables') {
      let filteredProducts = allProducts.filter(item => item.category === 'vegetables')
      setData(filteredProducts)
    }
    if (filterValue === 'meat') {
      let filteredProducts = allProducts.filter(item => item.category === 'meat')
      setData(filteredProducts)
    }
    if (filterValue === 'fruits') {
      let filteredProducts = allProducts.filter(item => item.category === 'fruits')
      setData(filteredProducts)
    }
    if (filterValue === 'dry-fruits') {
      let filteredProducts = allProducts.filter(item => item.category === 'dry-fruits')
      setData(filteredProducts)
    }
    if (filterValue === 'other') {
      let filteredProducts = allProducts.filter(item => item.category === 'other')
      setData(filteredProducts)
    }
  }

  let handleSearch = e => {
    let value = e.target.value;
    let searchedProduct = allProducts.filter(
      item => item.title.toLowerCase().includes(value.toLowerCase())
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
          <option value="vegetables">Vegetables</option>
          <option value="meat">Meat</option>
          <option value="dry-fruits">Dry Fruits</option>
          <option value="fruits">Fruits</option>
          <option value="other">other</option>
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
        data.length === 0 ? <h2 style={{textAlign: 'center', margin: '20px 0'}}>No allProducts Found😕</h2  > :
          <ProductList data={data} />
      }

    </div>
  )
}

export default Shop
