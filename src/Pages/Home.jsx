import React from 'react'
import Hero from '../components/Hero'
import Tracker from "../components/Tracker.jsx"
//import Items from '../components/Items.jsx'
//import Why from "../components/Why.jsx"
import Productdeatils from '../components/Productdetails.jsx'
import Review from "../components/Review.jsx"
//import { Helmet } from 'react-helmet-async';
const Home = () => {
  return (
    <div className=''>
      
      <Hero />
      
      <Productdeatils/>
      <Tracker />
      <Review/>
    </div>
  )
}

export default Home
