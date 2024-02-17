import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import About from '../../views/About'

const Home = () => {
  return (
    <div style = {{display:"flex", flexDirection: "column", alignItems : "center"}}>
        <Nav />
        <Hero />
        <About />
    </div>
  )
}

export default Home