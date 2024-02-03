import '../Home/Home.css'
//-------------------
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { ADD_TO_CART } from '../../reduxTK/reduxSlices/cart-slice';
import { ADD_TO_WISH } from '../../reduxTK/reduxSlices/wish-slice';
//---------------------------------------------
import { FaCartPlus, FaRegHeart, FaStar, FaSearch, FaHeart } from 'react-icons/fa';
import { MdCompareArrows } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import swiper js
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
//import data
import { Categories, priceDrop, trending, dealImgs, bestSelling, appleProducts, beauty, specialOffer } from '../../data/data';
//import images
import b1 from '../../assets/images/banners/1.png'
import b2 from '../../assets/images/banners/2.png'
import b3 from '../../assets/images/banners/3.png'
import o1 from '../../assets/images/offers/1.png'
import o2 from '../../assets/images/offers/2.png'
import o3 from '../../assets/images/offers/3.png'
import o4 from '../../assets/images/offers/4.png'
import o5 from '../../assets/images/offers/5.png'
import eventImg from '../../assets/images/event.jpg'
//import components
import Footer from '../../components/Footer/Footer';
import Countdown from '../../components/common/CountDown';
import Card from '../../components/ProductCard/ProductCard';
import { SwiperNavButtons } from '../../components/common/SwiperNavButtons';
import Ratings from '../../components/common/rating';
export default function Home() {
    const [targetDate, setTargetDate] = useState(new Date('2024-01-28T00:00:00'));
    const resetAndIncreaseDate = () => {
    const currentDate = new Date(); 
    if (currentDate.toDateString() >= targetDate.toDateString()) {
        const newTargetDate = new Date(targetDate); 
        newTargetDate.setDate(newTargetDate.getDate() + 10); 
        setTargetDate(newTargetDate); 
    }
    };  
    const dispatch = useDispatch();    
    return (
        <section className='home-page'>

            <div className="container">

                <div className='landing'>
                    <div className='swiper-container'>
                        <Swiper className='swiper' modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} loop='true' centeredSlides={true} autoplay={{ delay: 4000, disableOnInteraction: false, }}>
                            <SwiperSlide className='swiper-item'>
                                <div className='slide-content'>
                                    <img src={b1}></img>
                                    <div className='slide-info'>
                                        <h5 className='slide-main-title'>Modern Chair</h5>
                                        <div className='slide-sub-title'>MID CENTURY MODERN DESIGN</div>
                                        <p className='slide-desc'> The mid century modern accent of this chair ensures that it will be stylish for years to come</p>
                                        <Link to='/products' className='main-btn'>Shop Now</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <div className='slide-content'>
                                    <img src={b2}></img>
                                    <div className='slide-info'>
                                        <h5 className='slide-main-title'>Contmporary Sofa</h5>
                                        <div className='slide-sub-title'>Take me Home </div>
                                        <p className='slide-desc'>VELO is a unique, unrepeatablelike and modern sofa. Most sofas on the market are so similar to each other.</p>
                                        <Link to='/products' className='main-btn'>Shop Now</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className='swiper-item'>
                                <div className='slide-content'>
                                    <img src={b3}></img>
                                    <div className='slide-info'>
                                        <h5 className='slide-main-title'>Smart Watch</h5>
                                        <div className='slide-sub-title'>health care monitor</div>
                                        <p className='slide-desc'>Xiaomi Silicone Band for Apple Watch 42mm, White, AW42SW</p>
                                        <Link to='/products' className='main-btn'>Shop Now</Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className='offers'>
                        <div className='main-offer'>
                            <div className='info'>
                                <h5>Put the world on mute-50% OFF</h5>
                                <Countdown targetDate={targetDate} />
                                <div className='offer-images'>
                                    <img src={o1}></img>
                                    <img src={o2}></img>
                                    <img src={o3}></img>
                                    <img src={o4}></img>
                                    <img src={o5}></img>
                                </div>
                                <button className='main-btn'>Shop Now</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='categories'>
                    <h4 className='section-title main-title'>Shop by category</h4>
                    <Swiper className='categories-swiper' modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={10} slidesPerView={8} navigation pagination={{ clickable: true }} loop='true' centeredSlides={false} autoplay={{ delay: 6000, disableOnInteraction: false, }}
                        breakpoints={{
                            0: {
                                slidesPerView: 2
                            },
                            320: {
                                slidesPerView: 3
                            },
                            480: {
                                slidesPerView: 4
                            },
                            640: {
                                slidesPerView: 5
                            },
                            768: {
                                slidesPerView: 6
                            },
                            1024: {
                                slidesPerView: 7
                            },
                            1200: {
                                slidesPerView: 8
                            }
                            ,
                            1300: {
                                slidesPerView: 9
                            }
                        }}
                    >
                        {
                            Categories.map((cat) => {
                                return (
                                    <SwiperSlide className='cat-slide' key={uuidv4()}>
                                        <div className='cat'>
                                            <div className='image'><img src={cat.image}></img></div>
                                            <div className='title'>{cat.title} </div>
                                        </div>
                                    </SwiperSlide>
                                )

                            })
                        }
                        <SwiperNavButtons />
                    </Swiper>
                </div>

                <div className='price-drops'>
                    <div className='titles'><h5>Price drops</h5> <button>View All</button></div>
                    <div className='cards'>
                        {
                            priceDrop.map((product) => {
                                return (
                                    <div className='card' key={uuidv4()}>
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
                                        <div className='card-btns'>
                                            <div className='find' >
                                                <Link className='icon' to='/products' ><FaSearch /></Link>
                                            </div>
                                            <div className='add-wish' onClick={() => dispatch(ADD_TO_WISH(product))}>
                                                <div className='icon'><FaHeart /></div>
                                            </div>
                                            <div className='add' onClick={() => dispatch(ADD_TO_CART(product))}>
                                                <div className='icon'><FaCartPlus /></div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className='sale'>
                    <h4 className='section-title .main-title'>Bestselling Products</h4>
                    <div className='sale-swiper'>
                        <Swiper className='swiper' modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={10} slidesPerView={5} navigation pagination={{ clickable: true }} loop='true' centeredSlides={false}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    centeredSlides: true,
                                },
                                460: {
                                    slidesPerView: 2
                                },

                                768: {
                                    slidesPerView: 3
                                },
                                1000: {
                                    slidesPerView: 4
                                }

                            }}

                        >
                            {bestSelling.map((item) => {
                                return (
                                    <SwiperSlide className='swiper-item' key={uuidv4()}>
                                        <div className="card">
                                            <div className="content">
                                                <div className='product'>
                                                    <div className='image'>
                                                        <div className='image'><img src={item.image}></img></div>
                                                    </div>
                                                    <div className='product-info'>
                                                        <div className='title'>{(item.name).substring(0, 30)}</div>
                                                        <span className='price'>
                                                            <div className='discount_price'>{item.discount_price}</div>
                                                            <div className='actual_price'>{item.actual_price}</div>
                                                        </span>
                                                        <div className='rating'>
                                                            {Ratings(item.ratings)}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='discount'>-{(+(item.discount_price).substring(1).replace(',', '') / +(item.actual_price).substring(1).replace(',', '')).toFixed(2).split('0.')}%</div>
                                            <div className='buttons'>
                                                <div onClick={() => dispatch(ADD_TO_WISH(item))}><FaRegHeart className='btn' /></div>
                                                <div onClick={() => dispatch(ADD_TO_CART(item))}><FaCartPlus className='btn' /></div>
                                                <div><MdCompareArrows className='btn' /></div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                )

                            })}
                            <SwiperNavButtons />
                        </Swiper>
                    </div>
                </div>

                <div className='trending'>
                    <div className='maintitle'><h6>Trending</h6><p>Top View In the Week</p></div>
                    <div className='trending-container'>
                        {
                            trending.map((trend) => {
                                return (
                                    <div className='trend-card' key={uuidv4()}>
                                        <div className='trend-image'><img src={trend.image}></img></div>
                                        <div className='card-info'>
                                            <div className='card-title'>{trend.name}</div>
                                            <div className='card-price'>
                                                <div className='discount-price'>{trend.discount_price}</div>
                                                <div className='price'>{trend.actual_price}</div>
                                            </div>
                                        </div>
                                        <div className='buttons'>
                                            <div onClick={() => dispatch(ADD_TO_WISH(trend))}><FaRegHeart className='btn' /></div>
                                            <div onClick={() => dispatch(ADD_TO_CART(trend))}><FaCartPlus className='btn' /></div>
                                            <div><MdCompareArrows className='btn' /></div>
                                        </div>
                                        <div className='trend-discount'>30%</div>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className='more'><button>Load More</button></div>
                </div>

                <div className='events'>
                    <div className='apple-event'>
                        <div className='image'><img src={eventImg}></img></div>
                        <div className='info'>
                            <div className='title'>Apple Shopping Event</div>
                            <p>hurry and get discount on all apple devices up to 25%</p>
                            <Countdown targetDate={targetDate} />
                            <button>Go Shopping</button>
                        </div>
                    </div>
                    <div className='apple-products'>
                        <div className='slide-container'>
                            {
                                appleProducts.map((product) => {
                                    return (
                                        <div className='slide' key={uuidv4()}>
                                            <div className='slide-card'>
                                                <div className='image'><img src={product.image}></img></div>
                                                <div className='info'>
                                                    <div className='title'>{product.name}</div>
                                                    {Ratings(product.ratings)}
                                                    <div className='price'>{product.discount_price}</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                <div className='swiper-container single-slide deals'>
                <div className='maintitle'><h6>Weekly Offers</h6><p>Top offer In the Week</p></div>
                    <Swiper className='swiper' modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} loop='true' centeredSlides={true} autoplay={{ delay: 4000, disableOnInteraction: false, }}>
                        {
                            dealImgs.map(banner => {
                                return (
                                    <SwiperSlide className='swiper-item' key={uuidv4()}>
                                        <img src={banner.image}></img>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </div>

                <div className="special-offer">
                    <div className="container">

                        <div className="offer-banner">
                            <Swiper className='swiper' modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={50} slidesPerView={1} navigation pagination={{ clickable: true }} loop='true' centeredSlides={true} autoplay={{ delay: 4000, disableOnInteraction: false, }}>
                                {
                                    specialOffer.map(product => {
                                        return (
                                            <SwiperSlide className='swiper-item' key={uuidv4()}>
                                                <img src={product.image}></img>
                                            </SwiperSlide>
                                        )
                                    })
                                }
                                <SwiperNavButtons />
                            </Swiper>
                        </div>

                        <div className="offer-content">

                            <p className="offer-subtitle">
                                <span className="span">Special Offer</span>
                                <span className="badge">-40%</span>
                            </p>

                            <h2 className="main-title">Mountain Pine Bath Oil</h2>

                            <p className="text">
                                Made using clean, non-toxic ingredients, our products are designed for everyone.
                            </p>


                            <Countdown targetDate={targetDate} />


                            <a href="#" className="btn btn-primary">Get Only $19.00</a>

                        </div>

                    </div>
                </div>

                <div className='featured-section'>
                    <div className='titles'><h4>Beauty & Health</h4> <button>View All</button></div>
                    <div className='featured-products'>
                        <Swiper className='swiper' modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} spaceBetween={50} slidesPerView={5} navigation pagination={{ clickable: true }} loop='true' centeredSlides={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1

                                },
                                460: {
                                    slidesPerView: 2
                                },

                                768: {
                                    slidesPerView: 3
                                },
                                1000: {
                                    slidesPerView: 4
                                },
                                1200: {
                                    slidesPerView: 5
                                }

                            }}

                        >
                            {beauty.map((product) => {
                                return (
                                    <SwiperSlide className='swiper-item' key={uuidv4()}>
                                        <Card product={product} />
                                    </SwiperSlide>

                                )

                            })}
                            <SwiperNavButtons />
                        </Swiper>
                    </div>
                </div>

            </div>
            <Footer />
        </section>

    )


}