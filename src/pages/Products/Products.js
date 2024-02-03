import React, { useEffect } from 'react'
import './Products.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaRegHeart, FaRegEye,FaSearch } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Ratings from '../../components/common/rating';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../reduxTK/reduxSlices/products-slice';
import { ADD_TO_CART } from '../../reduxTK/reduxSlices/cart-slice';
import { ADD_TO_WISH } from '../../reduxTK/reduxSlices/wish-slice';
export default function Products() {
  const products = useSelector((state) => state.products);
  const [filtred, setFiltred] = useState([]);
  useEffect(() => {
    setFiltred(products);
  }, [products])
  const categories = products.map((product) => product.main_category).filter((val, id, array) => {
    return array.indexOf(val) == id;
  })
  const subCategories = products.map((product) => product.sub_category).filter((val, id, array) => {
    return array.indexOf(val) == id;
  })
  const selectedCategory = (cat) => {
    cat === 'all' ? setFiltred(products) : filterSubCategory(cat);
  }

  const filterCategory = ((cat) => {
    const result = products.filter((item) => {
      return item.main_category === cat;
    })
    setFiltred(result);
  })
  const filterSubCategory = ((cat) => {
    const result = products.filter((item) => {
      return item.sub_category === cat;
    })
    setFiltred(result);
  })
  const filterBasedPrice = (price) => {
    const result = products.filter((item) => {
      return price > parseInt((item.discount_price).slice(1));
    })
    setFiltred(result);
  }
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])
  
  const priceFilter = () => {
    const values = document.querySelector('.filters-price div input').value;
    const sliderValue = document.querySelector('.priceValue span');
    sliderValue.textContent = values;
  }
  const [menuOpen, setListOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  return (
    <div>
      <div className='products'>
        
        <div className={`filters${menuOpen ? ' hide-filters' : ''}`}>
          <h5 className='filters-title'>Main Categories</h5>
          <ul>
            <li><input onChange={() => setFiltred(products)} type='radio' name='category' id='all' vlaue='all'     ></input>       <label htmlFor="all">All categories                           </label>  </li>
            {
              categories.map((category) => {
                return (
                  <li><input onChange={() => filterCategory(category)} type='radio' name='category' id={category} vlaue={category}                 ></input>       <label htmlFor={category}>{category}                            </label>  </li>
                )
              })
            }
          </ul>

          <div className='filters-price'>
            <h4>Price Range(USD)</h4><br></br>
            <div className='priceValue'><span>0</span></div>
            <div className='priceSlider'>
              <div className='value left'>Min</div>
              <input onInput={() => priceFilter()} onChange={() => filterBasedPrice(+document.querySelector('.priceValue span').textContent)} type="range" name="points" min="10" max="1000"></input>
              <div className='value right'>Max</div>
            </div>
          </div>
        </div>

        <div className='products-container'>

          <div className='filter-options'>
            <button onClick={() => setListOpen((prev) => !prev)} >
              {menuOpen ? <AiOutlineMenu className='header-menu' /> : <AiOutlineClose className='header-menu' />}
            </button>
            <form className={`${formOpen ? 'showForm' : ''}`}>
              <input type='text' placeholder='search by product name' onChange={(e) => setSearch(e.target.value)}></input>
              <div className='search-icon'><FaSearch /></div>
            </form>
            <FaSearch className='temp-search' onClick={() => setFormOpen((prev) => !prev)} />
            <select onChange={() => selectedCategory(document.getElementById('category').value)} name="category" id="category">
              <option value="all">sub categories</option>
              {subCategories.map((category) => {
                return (
                  <option vlaue={category}>{category}</option>
                )
              })}
            </select>
          </div>

          <div className='all-products'>

            {filtred.filter((item) => {
              return search.toLowerCase() === '' ? item : item.name.toLowerCase().includes(search);
            }).map((product) => {
              return (
                <div className='product' key={uuidv4()}>
                  <div className='image'>
                    <img src={product.image} alt='' ></img>
                    <div className='product-btns'>
                      <div className='view'>
                        <span >Quick View</span>
                        <Link className='icon' to={`/products/${product.id}`}><FaRegEye  /></Link>
                      </div>
                      <div className='cart' onClick={() => dispatch(ADD_TO_CART(product))}>
                        <span>add to cart</span>
                        <div className='icon'><FaCartPlus /></div>
                      </div>
                    </div>
                  </div>
                  <div className='summary'>
                    <div className='title'>{product.name.substring(0, 29)}</div>
                    {product.discount_price ? <span className='discount-price'>{product.discount_price}</span> : <span className='discount-price'>{product.actual_price}</span>}
                    <div>{Ratings(product.ratings)} </div>
                  </div>
                  <div className='wish'>
                    <FaRegHeart onClick={() => dispatch(ADD_TO_WISH(product))} className='icon' />
                  </div>

                </div>

              )
            })}

          </div>

        </div>
      </div>
    </div>
  )
}
