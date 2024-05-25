import { Layout } from 'antd'
import React from 'react'
import "./Hero.css"
import HeroImage from "../../assets/HomeHero/HomePageImage.jpg"

function Hero() {
  return (
    <Layout className='hero'>
        <div className='hero-main'>
            <img id='hero-img' src={HeroImage} alt="" />
            <div className='text-on-image'>
                <h1 id='welcome-id'>WELCOME TO</h1>
                <h1 id='nexalab'>NEXALAB</h1>
                <h1 id='slogan-id'>Empowering the future with Intelligent software</h1>

            </div>
        </div>
    </Layout>
  )
}

export default Hero