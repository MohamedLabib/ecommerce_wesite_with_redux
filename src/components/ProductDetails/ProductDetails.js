import React from 'react'
import './ProductDetails.css';
import { FaStar, FaShippingFast } from 'react-icons/fa';
import { MdPolicy } from "react-icons/md";
import {useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../../reduxTK/reduxSlices/products-slice';
import { ADD_TO_CART } from '../../reduxTK/reduxSlices/cart-slice';
import { ADD_TO_WISH } from '../../reduxTK/reduxSlices/wish-slice';
export default function ProductDetails() {
    const {id} = useParams()
    const dispatch = useDispatch() ; 
    const products = useSelector((state) => state.products);
    const object  = products.filter((item)=> item.id == id); 
    const product = { ...object[0] };
    console.log(object)
    useEffect(() => {
        dispatch(fetchProducts());
      }, [])


    return (
        <section className='single-product'>

            <div className='image'>
                <img src={product.image} alt='' ></img>
            </div>
            <div className='product-details'>
                <h6> {product.name}</h6>
                <div className='price'>
                    <div className='actual-price'><span>was: </span> {product.actual_price}</div>
                    <div className='discount-price'><span>now: </span> {product.discount_price ? product.discount_price :product.actual_price }</div>
                </div>
                <div className='rating'>{product.ratings} <FaStar /></div>
                <div className='btns'>
                    <button onClick={()=> dispatch(ADD_TO_CART(product))} className='add-cart'>Add To Cart </button>
                    <button onClick={()=> dispatch(ADD_TO_WISH(product))} className='add-wishlist'>Add To wishlist</button>   
                </div>
                <div className='description'>

                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
                </div>
                <div className='ploicy'>
                    <div ><FaShippingFast className='shipping' />  Free delivery on Lockers & Pickup Points</div>
                    <div ><MdPolicy className='terms' />  Enjoy hassle free returns with this offer.Learn more</div>
                </div>
            </div>
               
        
           
        </section>
    )
}
