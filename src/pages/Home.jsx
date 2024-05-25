import React, { useEffect } from 'react';
import "./Home.css";
import OurService from "../components/Our Service/OurService";
import ConnectUs from "../components/ConnectUs/ConnectUs";
import Testimonials from "../components/Testimonials/Testimonials";
import FooterNexalab from '../components/Footer/FooterNexalab';
import Hero from "../components/Hero/Hero";
import { ServicesList } from '../Data/ServicesData';
import { Helmet } from 'react-helmet';
import ReactGA from "react-ga";






function Home() {


  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    
    
    ReactGA.pageview(window.location.pathname)



  });




  return (

    <>

      <Helmet>
        <title>Nexalab - Innovative Software Solutions for Your Business</title>
        <meta name='description' content="Nexalab provides cutting-edge software solutions that enhance your business productivity and growth. Contact us today to learn more about our services and how we can help you achieve your goals." />

      </Helmet>
      <Hero />
      <OurService ServicesList={ServicesList} />
      <ConnectUs />
      <Testimonials />
      <FooterNexalab />


    </>
  )
}

export default Home