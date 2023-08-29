import React from 'react'
import "./product.css"
import Project from '../../components/project/Project'
import {Link } from "react-router-dom"
import { pricelist } from '../../data/data'
import { HiArrowLongRight } from 'react-icons/hi2'
const Product = () => {
  return (
    <div className='product'>
        <Project />
        <div className='product_container'>
            <section className='product_expersion' 
            data-aos="fade-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1500">
              <div className='expersion_left'>
                <h5>let's build something awesome together!</h5>
                <Link to="/" >see portfolio</Link>
              </div>
              <div className='expersion_right'>
                <p>
                  40+
                  <span>clients</span>
                </p>
                <p>
                  10+
                  <span>year's experience</span>
                </p>
                <p>
                  2M+
                  <span>conversions</span>
                </p>
              </div>
            </section>
            <section className='product_price'>
              <div className='pirce_title'>
              <span><HiArrowLongRight /> pricing table</span>
              <h5>save time building complex <span>AI models</span></h5>
              </div>

              <div className='price_container' 
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1500"
              >
              {
                pricelist.map((pricedetails,index)=>{
                  return(
                    <div className='price_details' key={index}>
                     
                      <h5>{pricedetails.title}</h5>
                      <span>{pricedetails.details}</span>
                      <h2>{pricedetails.price}</h2>
                      <hr></hr>
                      <p>
                      <h3>what's included :</h3>
                      <ul>
                        <li>
                          {pricedetails.ui}
                        </li>
                        <li>
                          {pricedetails.stack}
                        </li>
                        <li>
                          {pricedetails.ani}
                        </li>
                        </ul>
                        </p>
                        <p>
                        <h3>design team:</h3>
                        <ul><li>
                          {pricedetails.time}</li></ul>
                        </p>
                        <Link to="">get started now</Link>
                        
                        
                    </div>
                  )
                })
              }
               </div>
            </section>
        </div>
    </div>
  )
}

export default Product