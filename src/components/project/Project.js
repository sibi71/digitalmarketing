import React from 'react'
import "./project.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { productlist } from '../../data/data';
const Project = () => {
  return (
    <div className='list_title' >
    <h5>some of work in craft <span>digital agency </span></h5>
    <Swiper
slidesPerView={3}
spaceBetween={30}
pagination={{
clickable: true,
}}
modules={[Pagination]}
className="mySwiper"
data-aos="fade-up"
data-aos-easing="ease-in-sine"
    data-aos-duration="1500"
>
{productlist.map((product,index)=>{
return(
<SwiperSlide key={index} className='list_main'>
    <img src={product.img}alt=''/>
    <h5>{product.title}</h5>
    <span>{product.details}</span>
</SwiperSlide>
)
})}
</Swiper>
</div>
  )
}

export default Project