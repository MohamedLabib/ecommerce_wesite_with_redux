import React from "react";
import { useSwiper } from "swiper/react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
export const SwiperNavButtons = ()=>{
    const swiper = useSwiper(); 
    return (
        <div className="swiper-btns">
            <button className="left" onClick={() => swiper.slidePrev()}><FaArrowAltCircleLeft className="left" /></button>
            <button className="right" onClick={() => swiper.slideNext()}><FaArrowAltCircleRight className="right" /></button>
        </div>
    )
}