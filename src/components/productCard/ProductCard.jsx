import React from 'react'
import './productCard.scss'
import { RiAddCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addItem } from '../../store/cartSlice'
import { toast } from 'react-toastify';


const ProductCard = ({ item, index }) => {

    let dispatch = useDispatch()

    let addToCart = () => {
        dispatch(
            addItem({
                id: item.id,
                title: item.title,
                imgURL: item.imgURL,
                price: item.price
            }
            )
        )
        toast.success('Product Added Successfully!')
    }

    return (
        <div className='product-card' key={index}>
            <div className="img">
                <img src={item.imgURL} alt="product" />
            </div>

            <div className="text">
                <h3 className="name">
                    <Link to={`/shop/${item.id}`}>{item.title}</Link>
                </h3>

                <div className="category">
                    {item.category}
                </div>

                <hr />

                <div className="card-bottom">
                    <div className="price">{item.price}</div>  <span>{item.quantity}</span>
                    <RiAddCircleFill className='add-icon' onClick={addToCart} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
