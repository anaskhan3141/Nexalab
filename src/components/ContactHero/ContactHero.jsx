import Layout from 'antd/es/layout/layout';
import React, { useState } from 'react';
import "./ContactHero.css";
import "./ContactHeroMobile.css";
import "./ContactHeroTablet.css";
import ContactHeroImage from "../../assets/ContactHero/ContactHero.png"
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';




const { Title } = Typography;




function ContactHero() {



    const [selectedElement, setSelectedElement] = useState("");







    const onSelectElement = (currentElement) => {

        setSelectedElement(currentElement);

    };








    return (


        <Layout id='contact-hero-layout'>

            <div id='contact-hero-left-container'>


                <Title id='contact-hero-title' level={1}>Contact</Title>

            </div>




            <div id='contact-hero-right-container'>

                <img src={ContactHeroImage} alt="" id='contact-hero-img' />

                <div id='hero-contact-link-container'>

                    <Link
                        className=
                        {
                            selectedElement == "Home" ? 'hero-contact-link-blue'
                                : 'hero-about-us-link-white'
                        }


                        onClick={() => onSelectElement("Home")}
                    to=""
                    >
                        Home
                    </Link>

                    <span id='hero-contact-link-dash'>/</span>

                    <Link

                        className=
                        {
                            selectedElement == "Contact" ? 'hero-contact-link-blue'
                                : 'hero-contact-link-white'
                        }


                        onClick={() => onSelectElement("Contact")}
                    to=""
                    >
                        Contact
                    </Link>



                </div>


            </div>

        </Layout>

    )
}

export default ContactHero;