/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import { homechoose } from '../../data/data'
const Home = () => {
  return (
    <div className='home'data-aos="fade-up"
    data-aos-easing="linear"
    data-aos-duration="1500">
      <div className='home_container'>
        <section className='home_main'>
          <div className='main_left'>
            <h1>digital products <span>creator agency</span></h1>
            <p>make product discovery continuous. validate the big-picture and day-by-day product decisions with user insight</p>
            <Link to="/" >see portfolio</Link>
          </div>
          <div className='main_right'>
            <img src="https://gryffin.com/wp-content/uploads/2022/06/Header-image.png" alt='image' />
          </div>
        </section>
        <section className='home_showcase' >
          <h5>Trusted by 1000 +brands</h5>
          <div className='showcase_brand'>
            <img src='https://logodownload.org/wp-content/uploads/2014/09/google-logo-1.png' alt=''/>
             <img src='https://logos-world.net/wp-content/uploads/2020/11/Tripadvisor-Logo.png' alt=''/>
            <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png' alt=''/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Slack_Technologies_Logo.svg/1280px-Slack_Technologies_Logo.svg.png' alt=''/>
            <img src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt=''/>
            <img src='https://www.freepnglogos.com/uploads/microsoft-logo-4.png' alt=''/>
          </div>
        </section>
        <section 
      className='home_choose' data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-duration="1500"
      
      >
          {
            homechoose.map((item,index)=>{
              return(
                <div className='choose_details' key={index}>
                  <h5>{item.title}</h5>
                  <p>{item.details}</p>
                  <Link to="/">learn more</Link>
                  <img src={item.img} alt=''/>
                </div>
              )
            })
          }
        </section>
      </div>
    </div>
  )
}

export default Home