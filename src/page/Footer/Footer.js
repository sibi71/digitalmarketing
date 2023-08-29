import React from 'react'
import "./Footer.css"
import { HiArrowLongRight } from 'react-icons/hi2'
import { BsFacebook,BsInstagram } from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer_container'>
        <div className='footer_title'>
            <h1>digital<span>market</span></h1>
            <br></br>
            <div className='footer_follow'>
            <h5>follow up <HiArrowLongRight /></h5>
            <br></br>
            <p>
            <Link to = ""><BsFacebook/></Link>
            <Link to = ""><BsInstagram /></Link>
            <Link to = ""><AiFillTwitterCircle /></Link>
            </p>
            </div>
        </div>
        <div className='footer_company'>
            <h5>company</h5>
            <br></br>
            <ul>
                <li>about</li>
                <li>career</li>
                <li>price</li>
                <li>contact Us</li>
            </ul>
        </div>
        <div className='footer_fullink'>
            <h5>use full links</h5>
            <br></br>
            <ul>
                <li>about</li>
                <li>career</li>
                <li>price</li>
                <li>contact Us</li>
            </ul>

        </div>
        <div className='footer_fullink'>
            <h5>Do you have project ?</h5>
            <br></br>
            <ul>
                <li>about</li>
                <li>career</li>
                <li>price</li>
                <li>contact Us</li>
            </ul>

        </div>
        </div>
    </div>
  )
}

export default Footer