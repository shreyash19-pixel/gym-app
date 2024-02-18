import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import About from '../../views/About'
import Classes from '../../views/Classes'
import ChooseUs from '../../views/ChooseUs'
import Coaches from '../../views/Coaches'

const Home = () => {
  return (
    <div style = {{display:"flex", flexDirection: "column", alignItems : "center"}}>
        <Nav />
        <Hero />
        <About />
        <Classes />
        <ChooseUs />
        <Coaches/>
    </div>
  )
}

export default Home