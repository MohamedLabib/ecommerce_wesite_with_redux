import './Wish.css';
import { FaCartPlus, FaSearch, FaStar } from 'react-icons/fa';
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_WISH } from '../../reduxTK/reduxSlices/wish-slice';
import { ADD_TO_CART } from '../../reduxTK/reduxSlices/cart-slice';
export default function Wish() {
    const wish = useSelector((state) => state.wish);
    const dispatch = useDispatch();
    return (
        <section>

            {wish.length > 0 ? <div className='wish'>
        <div className='header'><div>MY Wishlist </div><Link to='/products' className='shoping'>Continuing Shopping</Link></div>
        <div className='wish-products'>
            {wish.map(product => {
                return (
                    <div className='wish-product' key={uuidv4()}>
                        <div className='image'>
                            <img src={product.image} alt='' ></img>
                        </div>
                        <div className='summary'>
                            <div className='title'>{product.name.substring(0, 29)}</div>
                            <div className='info'>
                                {product.discount_price ? <span className='discount-price'>{product.discount_price}</span> : <span className='discount-price'>{product.actual_price}</span>}
                                <div className='rate'>{product.ratings} <FaStar /> </div>
                            </div>
                        </div>
                        <div className='wish-btns'>
                            <div className='delete' onClick={() => dispatch(REMOVE_FROM_WISH(product))}>
                                <div className='icon'><MdDelete /></div>
                            </div>
                            <div className='add' onClick={() => dispatch(ADD_TO_CART(product))}>
                                <div className='icon'><FaCartPlus /></div>
                            </div>
                            <div className='find' onClick={() => dispatch(ADD_TO_CART(product))}>
                                <div className='icon'><FaSearch /></div>
                            </div>
                        </div>
                    </div>

                )
            })}

        </div>
    </div>

         :<h1>Your Wish list is empty brows our new products</h1>

        }

        </section>

    )
}
