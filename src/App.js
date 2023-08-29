import React from 'react'
import "./App.css"
import Home from './page/Home/Home'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router , Routes,Route} from "react-router-dom"
import About from './page/About/About'
import Service from './page/Service/Service'
import Product from './page/Productlist/Product'
import Workflow from './page/Workflow/Workflow'
import Feadback from './page/Feadback/Feadback'
import Footer from './page/Footer/Footer'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
          <Home />
          <About />
          <Service />
          <Product />
          <Workflow />
          <Feadback />
          <Footer />
          </>
          
        }/>
      </Routes>
    </Router>
      
  )
}

export default App