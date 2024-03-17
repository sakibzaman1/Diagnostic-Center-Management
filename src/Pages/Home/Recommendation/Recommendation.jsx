
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderImage from '../../../assets/diagnostic_banner.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Recommendation = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img className='mx-auto' src={sliderImage} alt="" /></SwiperSlide>
        <SwiperSlide><img className='mx-auto' src={sliderImage} alt="" /></SwiperSlide>
        <SwiperSlide><img className='mx-auto' src={sliderImage} alt="" /></SwiperSlide>
        <SwiperSlide><img className='mx-auto' src={sliderImage} alt="" /></SwiperSlide>
        <SwiperSlide><img className='mx-auto' src={sliderImage} alt="" /></SwiperSlide>
        <SwiperSlide><img className='mx-auto' src={sliderImage} alt="" /></SwiperSlide>
        <SwiperSlide><img className='mx-auto' src={sliderImage} alt="" /></SwiperSlide>
        <SwiperSlide><img className='mx-auto' src={sliderImage} alt="" /></SwiperSlide>
        <SwiperSlide><img className='mx-auto' src={sliderImage} alt="" /></SwiperSlide>
      </Swiper>
    </>
  );
};

export default Recommendation;
