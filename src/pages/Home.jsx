import React, { useEffect, useState } from 'react';
import '../pages/Home.css';
import Navbar from '../components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1 from '../assets/swiperimg1.png';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ProductSkeleton from '../skeletons/ProductSkeleton';
import mobslide from '../assets/mobbanner.png';
import { useDispatch } from 'react-redux';
import { fetchCartData } from '../slices/cartSlice';


const Home = () => {

  const user_id = localStorage.getItem("userId")
  const dispatch = useDispatch()
  const name = useSelector((store) => store.auth.userName)
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState([{
    id: null,
    product_name: "",
    product_des: "",
    product_price: "",
    stock_quantity: null,
    product_image: "",

  }])

  useEffect(() => {
    
    dispatch(fetchCartData(user_id))

    const getProductData = async () => {
      try {
        const productData = await axios.get("https://server-orcin-delta.vercel.app/products/allProducts", { headers: { "Content-Type": "application/json" } })
        setProducts(productData.data)
        setLoading(false)
      } catch (err) {
        console.log("error in fetching product data", err)
        setLoading(true)
      }
    }
    getProductData()
  }, [])

  return (

    <div className='page'>
      {/* total navbar height is 100px and 60px goes to the navbar offer height */}
      <div className='navbar-section'>
        <Navbar />
      </div>
      {/* margin top 100px */}
      <div className='content'>

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
            <SwiperSlide><img className='swiper-slide-image' src={slide1} />
            <img className='swiper-mobile-image' src={mobslide} />
            </SwiperSlide>
            <SwiperSlide><img className='swiper-slide-image' src={slide1} />
            <img className='swiper-mobile-image' src={mobslide} />
            </SwiperSlide>
      
          </Swiper>
        </div>


        <div className='home-products-space'>
          <div className='home-products-title'>Shop Our Latest</div>

          {loading ? (<div className='products-cards-container'>
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
            <ProductSkeleton />
          </div>) : (<div className='products-cards-container'>
            {products.map((data) => (
              <ProductCard
                product_id={data.id}
                name={data.product_name}
                description={data.product_des}
                image={data.product_image}
                price={data.product_price}
                quantity={data.stock_quantity}
              />
            ))}
          </div>)}
        </div>
      </div>
    </div>
  )
}

export default Home

