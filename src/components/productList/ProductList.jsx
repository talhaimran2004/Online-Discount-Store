import React, { useState } from 'react'
import ProductCard from '../productCard/ProductCard'

const ProductList = ({ data }) => {

    return (
        <div style={{
            width: '90%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            margin: '30px auto'
        }}>

            {
                data.map(
                    (item, index) => <ProductCard item={item} key={index} />
                )
            }

        </div >
    )
}

export default ProductList
