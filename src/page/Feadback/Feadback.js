import React from 'react'
import "./Feadback.css"
import { HiArrowLongRight } from 'react-icons/hi2'
import Fead from '../../components/fead/fead'
import { articlelist } from '../../data/data'
import {Link} from "react-router-dom"
import {TbPhoneCall} from "react-icons/tb"
const Feadback = () => {
  return (
    <div className='feadback'>
        <div className='feadback_title'>
        <h5><HiArrowLongRight />tesimonial</h5>
        <h1>what client say's about <span>our services</span></h1>
        </div>
            <Fead />
        <div className='feadback_article'>
          <div className='article_title'>
          <h5><HiArrowLongRight />article</h5>
          <h1>keep up with the freshest <span>trending blogs </span></h1>
          </div>
          <div className='article_container'
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1500">
           {
            articlelist.map((article,index)=>{
              return(
                <div className='article_main' key={index}>
                  <img src={article.img} alt=''/>
                  <br></br>
                  <span>{article.time}</span>
                  <br></br>
                  <h5>{article.title}</h5>
                </div>
              )
            })
           }

          </div>
        </div>
        <div className='feadback_contact'
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000">
          <div className='contact_container'>
            <div className='contact_left'
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
             <img src='https://externlabs.com/images/hdf39.webp' alt=''/> 
            </div>
            <div className='contact_right'
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine">
              <h1>strong and beautiful, just like <span>features smartly</span></h1>
              <br></br>
              <p>make product discovery continuous. validate the big-picture and day-to-day product decisions with user insights</p>
              <br></br>
              <Link to="/" >
               <TbPhoneCall/>
                <h5>7915484848</h5>
              </Link>
            </div>

          </div>

        </div>
        
    </div>
  )
}

export default Feadback