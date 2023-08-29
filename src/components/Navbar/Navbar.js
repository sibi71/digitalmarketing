import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [scroll ,setScroll] = useState(false)

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      setScroll(window.scrollY > 20)
    })
  },[])
  
  return (
    <div className={scroll ? "navbar_active":"navbar"}>
      <div className='navbar_container'>
        <div className='navbar_left'>
          <h1>Digital <span>Market</span></h1>
        </div>
        <div className='navbar_right'>
          <Link to="/" >About</Link>
          <Link to="/" >service</Link>
          <Link to="/" >pages</Link>
          <Link to="/" >blogs</Link>
          <div  className='right_btn'>
          <Link to="/">Get started</Link>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default Navbar