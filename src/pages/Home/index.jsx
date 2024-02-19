import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import About from '../../views/About'
import Classes from '../../views/Classes'
import ChooseUs from '../../views/ChooseUs'
import Coaches from '../../views/Coaches'
import Testimonial from '../../views/Testimonial'
import BMI from '../../views/BMI'
import Pricing from '../../views/Pricing'
import Blog from '../../views/Blog'
import Call from '../../views/Call'
import Footer from '../../components/Footer'

const Home = () => {
  return (
    <div style = {{display:"flex", flexDirection: "column", alignItems : "center"}}>
        <Nav />
        <Hero />
        <About />
        <Classes />
        <ChooseUs />
        <Coaches/>
        <Testimonial />
        <BMI />
        <Pricing />
        <Blog />
        <Call />
        <Footer />
    </div>
  )
}

export default Home