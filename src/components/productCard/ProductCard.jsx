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
                productName: item.productName,
                imgUrl: item.imgUrl,
                price: item.price
            }
            )
        )
        toast.success('Product Added Successfully!')
    }

    return (
        <div className='product-card' key={index}>
            <div className="img">
                <img src={item.imgUrl} alt="product" />
            </div>

            <div className="text">
                <h3 className="name">
                    <Link to={`/shop/${item.id}`}>{item.productName}</Link>
                </h3>

                <div className="category">
                    {item.category}
                </div>

                <hr />

                <div className="card-bottom">
                    <div className="price">{item.price}</div>
                    <RiAddCircleFill className='add-icon' onClick={addToCart} />
                </div>
            </div>
        </div>
    )
}

export default ProductCard
