import React,{useEffect} from 'react';
import '../pages/Home.css';
import Navbar from '../components/Navbar';
import {Swiper,SwiperSlide} from 'swiper/react';
import slide1 from '../assets/swiperimg1.png';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';



const Home = () => {


  return (
  
    <div className='home-page'>

   {/* total navbar height is 100px and 60px goes to the navbar offer height */}
      <div className='navbar-section'>
        <Navbar />
      </div>
      
      {/* margin top 100px */}
      <div className='home-content'>

        <div className='home-slider-space'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            speed={1200}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide><img className='swiper-slide-image' src={slide1}/></SwiperSlide>
            <SwiperSlide><img className='swiper-slide-image' src={slide1}/></SwiperSlide>
           
          
          </Swiper>
        </div>

      </div>

    </div>
  )
}

export default Home