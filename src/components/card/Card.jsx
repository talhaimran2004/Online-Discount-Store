import React from 'react'
import { BsSuitHeart, BsEye } from 'react-icons/bs'
import './card.scss'

const Card = ({ img, alt, name, price, price2 }) => {

    return (
        <div className='card' >
            <div className="discount">-30%</div>
            <BsSuitHeart className='heart' />
            <BsEye className='eye' />
            <div className="img">
                <img src={img} alt={alt} />
            </div>
            <a href="#">Add Cart</a>
            <div className="details">
                <h2>{name}</h2>
                <p><del style={{ color: '#aaaaaa' }}>{price}</del><ins style={{ color: 'red' }}>{price2}</ins></p>
            </div>
        </div>
    )
}

export default Card
