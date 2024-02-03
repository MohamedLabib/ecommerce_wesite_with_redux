import './GuestNav.css';
import { AiOutlineMenu, AiOutlineUser, AiOutlineShoppingCart, AiOutlineHeart, AiOutlineClose } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function GuestNav() {
    const cart = useSelector((state) => state.cart);
    const wish = useSelector((state) => state.wish);
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    return (
        <section className='navbar'>
            <div className='guest-nav'>
                <div className='top-header'>
                    <div className='main-header'>
                        <div className='brand'>
                            <button onClick={() => setMenuOpen((prev) => !prev)} >
                                {menuOpen ? <AiOutlineClose className='header-menu' /> : <AiOutlineMenu className='header-menu' />}
                            </button>
                            <Link to='/' className='logo' href=''>Sully</Link>
                        </div>
                        <form className={`search-form${searchOpen ? ' show-form' : ''}`}>
                            <input className='header-search-input' type='text' placeholder='find your fit'></input>
                            <div className='header-search-icon'><FiSearch className='search-icon' /></div>
                        </form>
                        <div className='header-icons'>
                            <div className='header-icon search-icon'><FiSearch onClick={() => setSearchOpen((prev) => !prev)} /></div>
                            <div className='user-icon'><AiOutlineUser /></div>
                            <Link to='/cart' className='header-icon cart-icon'><AiOutlineShoppingCart /><span>{cart.length}</span></Link>
                            <Link to='/wish' className='header-icon'><AiOutlineHeart /> <span>{wish.length}</span> </Link>
                        </div>
                    </div>

                    <div className='sub-header'>
                        <ul className={`navlinks${menuOpen ? ' show-categories' : ''}`}>
                            <li><Link to="/products">Women        </Link></li>
                            <li><Link to="/products">Men          </Link></li>
                            <li><Link to="/products">Baby         </Link></li>
                            <li><Link to="/products">Electronics  </Link></li>
                            <li><Link to="/products">Home         </Link></li>
                            <li><Link to="/products">Sports       </Link></li>
                            <li><Link to="/products">Shoes & Bags </Link></li>
                            <li><Link to="/products">Fashion Deals</Link></li>
                            <li><Link to="/products">Jwelerry     </Link></li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

    )


}