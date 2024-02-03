import './Cart.css';
import { GiCancel } from 'react-icons/gi'
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_FROM_CART, ADD_TO_CART, DECREASE_QTY } from '../../reduxTK/reduxSlices/cart-slice';
export default function Cart() {
  const cart = useSelector(state => state.cart);
  const total = cart.reduce((acc, product) => {
    acc += +(product.discount_price).substring(1) * product.qty;
    return acc;
  }, 0);
  const dispatch = useDispatch();
  return (
    <section>
      {cart.length > 0 ?       <div className='cart'>
        <div className='cart-items'>
          {
            cart.map((product) => {
              return (
                <div className='cart-item'>
                  <div className='image'><img src={product.image}></img></div>
                  <div className='item-info'>
                    <div className='item-title'>{product.name.substring(0, 43)}</div>
                    <div className='cart-btns'>
                      <div className='item-price'>{product.discount_price}</div>
                      <div className='btns'>
                        <button onClick={() => dispatch(DECREASE_QTY(product))}>-</button>
                        <div className='quantity'>{product.qty}</div>
                        <button onClick={() => dispatch(ADD_TO_CART(product))}>+</button>
                      </div>
                      <div className='delete' onClick={() => dispatch(REMOVE_FROM_CART(product))}><GiCancel /></div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className='cart-footer'>
          <div className='cart-info'>
            <div className='cart-total'>grand total ${total} </div>
            <div className='note'>
              <div>Aditional note</div>
              <textarea> </textarea>
            </div>
            <div className='terms'>
              <input type='radio'></input>
              <p>I agree with terms & conditions</p>
            </div>
            <button className='checkout'>Checkout</button>
          </div>
        </div>
      </div>: <h1>You Cart Is Empty, Brows Our New Products</h1>}

    </section>

  )
}
