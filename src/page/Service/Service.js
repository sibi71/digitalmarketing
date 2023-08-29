import React from 'react'
import "./Service.css"
import { HiArrowLongRight } from 'react-icons/hi2'
import serviceimg  from "../../img/pngegg.png"
const Service = () => {
  return (
    <div className='service'  data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="500"
    >
        <div className='service_title' >
        <HiArrowLongRight /><h5>service</h5>
        </div>
        <div className='service_container'>
            <h5>the world's most powerful <span>design tool.</span></h5>
            <img src={serviceimg} alt=''/>
        </div>
    </div>
  )
}

export default Service