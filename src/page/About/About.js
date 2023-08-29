import React from 'react'
import "./About.css"
import { Link } from 'react-router-dom'
import { HiArrowLongRight } from "react-icons/hi2";
const About = () => {
  return (
    <div className='about' data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500">
        <div className='about_title'> <HiArrowLongRight /><h5>about US</h5></div>
        <div className='about_container'>
            <div className='about_left' 
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="500"> 
                    <h5>ultimate experiences story emotion & purpose </h5>
                    <img src='https://o3mdm.com/wp-content/uploads/2022/12/o3m-design-new.png' alt=''/>
            </div>
            <div className='about_right'
             data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500">
            <p>
            Digital Marketing is one the leading Digital Marketing companies in Chennai,
             Tamil Nadu is a registered organization in 2017. We are a top digital marketing company having with a great team. Our dedicated team will provide excellent output results in website design and development, search engine optimization, social media marketing, graphic design, mobile app development, and more. We produce 100% results for our clients like a pure ocean. We framed our work for them in the manner of top to bottom. We deliver our services in a user-friendly manner, and our primary priority is on giving support to the clients.
            </p>
            <br></br>
            <h5>
                "our mission is to produce the highest quality work for
                every clients , on every project with full of every we have "

            </h5>
            <br></br>
            <span><HiArrowLongRight /> sibi </span>
            <br></br>
            <Link to="/">move explore us</Link>
            </div>
           
        </div>
    </div>
  )
}

export default About