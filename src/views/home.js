import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Banner1 from '../components/banner1'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import Features10 from '../components/features10'
import Testimonial6 from '../components/testimonial6'
import Banner11 from '../components/banner11'
import Navbar1 from '../components/navbar1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar></Navbar>
      <Hero></Hero>
      <Banner1></Banner1>
      <Features1></Features1>
      <CTA></CTA>
      <Features2></Features2>
      <Pricing></Pricing>
      <Steps></Steps>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
      <Features10></Features10>
      <Testimonial6></Testimonial6>
      <Banner11></Banner11>
      <Navbar1></Navbar1>
    </div>
  )
}

export default Home
