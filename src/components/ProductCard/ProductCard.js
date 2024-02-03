import React from 'react'
import './ProductCard.css';
import { IoIosCheckmarkCircle } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';
import { FaCartPlus, FaRegHeart, FaRegEye } from 'react-icons/fa';
import Ratings from '../common/rating';
import { ADD_TO_WISH } from '../../reduxTK/reduxSlices/wish-slice';
import { ADD_TO_CART } from '../../reduxTK/reduxSlices/cart-slice';
import { useDispatch } from 'react-redux';

export default function Card({ product }) {
    const dispatch = useDispatch();
    return (
        <div className='product' key={uuidv4()}>
            <div className='image'>
                <img src={product.image}></img>
            </div>
            <div className='product-summary'>
                <div className='title'>{product.name.substring(0, 30)}</div>
                {product.discount_price ? <span className='price'>{product.discount_price}</span> : <span className='price'>{product.actual_price}</span>}
                <div className='ratings'>{Ratings(product.ratings)}</div>
            </div>
            <div className='btns'>
                <div onClick={() => dispatch(ADD_TO_WISH(product))}><FaRegHeart className='icons' /></div>
                <div onClick={() => dispatch(ADD_TO_CART(product))}><FaCartPlus className='icons' /></div>
                <div><FaRegEye className='icons' /></div>
            </div>
        </div>

    )
}
