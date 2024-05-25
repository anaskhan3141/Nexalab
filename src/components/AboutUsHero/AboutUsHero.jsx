import Layout from 'antd/es/layout/layout';
import React, { useState } from 'react';
import "./AboutUsHero.css";
import "./AboutUsHeroMobile.css";
import "./AboutUsHeroTablet.css";
import AboutUsHeroImage from "../../assets/AboutUsHero/AboutUsHeroImage.png"
import { Link } from 'react-router-dom';
import { Typography } from 'antd';





const { Title } = Typography;





function AboutUsHero() {





    const [selectedElement, setSelectedElement] = useState("");







  const onSelectElement = (currentElement) => {

    setSelectedElement(currentElement);

  };






  

    return (

        <Layout id='about-us-hero-layout'>

            <div id='about-us-hero-left-container'>


                <Title id='about-us-hero-title' level={1}>About Us</Title>

            </div>




            <div id='about-us-hero-right-container'>

                <img src={AboutUsHeroImage} alt="" id='about-us-hero-img' />

                <div id='hero-about-us-link-container'>

                    <Link
                        className=
                        {
                            selectedElement === "Home" ? 'hero-about-us-link-blue'
                                : 'hero-about-us-link-white'
                        }


                        onClick={() => onSelectElement("Home")}

                    >
                        Home
                    </Link>

                    <span id='hero-about-us-link-dash'>/</span>

                    <Link

                        className=
                        {
                            selectedElement === "About Us" ? 'hero-about-us-link-blue'
                                : 'hero-about-us-link-white'
                        }


                        onClick={() => onSelectElement("About Us")}

                    >
                        About Us
                    </Link>



                </div>


            </div>

        </Layout>
    )
}


export default AboutUsHero;