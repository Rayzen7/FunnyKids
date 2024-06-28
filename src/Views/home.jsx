import React from 'react'
import Navbar from '../Pages/Navbar/navbar.jsx'
import Hero from '../Pages/Hero/hero.jsx'
import About from '../Pages/About/about.jsx'
import Value from '../Pages/Value/value.jsx'
import Testimonials from '../Pages/Testimonials/Testimonials.jsx'
import './CSS/home.css'
import Footer from '../Pages/Footer/footer.jsx'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Value/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home