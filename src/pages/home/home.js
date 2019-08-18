import React, { Component } from 'react'
import NavBar from '../../components/navbar'
import Hero from '../../components/hero'
import Welcome from '../../components/welcome'
import Tools from '../../components/tools'
import Portfolio from '../../components/portfolio'
import Collab from '../../components/collab'
import Footer from '../../components/footer'
import './home.css'



class Home extends Component {
    render () {
      return (
        <div>
            <NavBar />
            <Hero />
            <Welcome />
            <Tools />
            <Portfolio />
            <Collab />
            <Footer />
        </div>
      )
    }
  }
  
  export default Home
  