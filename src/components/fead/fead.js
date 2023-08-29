import React from 'react'
import "./fead.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { feedback } from '../../data/data';
const fead = () => {
  return (
    <div className='fead'>
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
data-aos-duration="500"
>
    {feedback.map((feads ,index)=>{
        return(
            <SwiperSlide key={index}>
                <div className='fead_card'>
                    <span>{feads.star}</span>
                    <h3>{feads.title}</h3>
                    <p>{feads.details}</p>
                    <div className='fead_profile'>
                        <img src={feads.img} alt=''/>
                        <p>
                            <h5>{feads.name}</h5>
                            <span>{feads.work}</span>
                        </p>
                    </div>
                </div>

            </SwiperSlide>
        )
    })}
</Swiper>
    </div>
  )
}

export default fead