import { Typography } from 'antd';
import Layout from 'antd/es/layout/layout';
import React from 'react';
import "./ContactLocation.css";
import "./ContactLocationMobile.css";
import "./ContactLocationTablet.css";
import EmailMessageImage from "../../assets/ContactLocation/Message.png";
import CallImage from "../../assets/ContactLocation/Call.png";
import LinkedinImage from "../../assets/ContactLocation/LinkedIn.png";








const { Title } = Typography;
const { Text } = Typography;





function ContactLocation() {
    return (
        <Layout id='contact-location-layout'>
            <div id='contact-location-layout-main-container'>
            <Title level={2} id='contact-location-heading'>NEXALAB</Title>
            <Title level={2} id="contact-location-slogan">WHERE WE BRING DIGITAL DREAMS TO LIFE</Title>
            <Text id='contact-location-text'>Get in touch with us to get the ball rolling</Text>

            <div id='contact-location-content-container'>







                <div id='contact-location-container'>

                    <img src={LinkedinImage} alt="" id='contact-location-content-email-img' />


                    <div
                        id='email-contact'
                    >
                        <Title level={5} style={{ color: "#61C2D0", marginTop: 0, marginBottom: 2 }}>Our LinkedIn</Title>
                        <a alt="NexaLab-LinkedIn" style={{color: 'black'}} target="_blank" href=' https://www.linkedin.com/company/nexalab/'>linkedin.com/company/nexalab/</a>
                    </div>

                </div>











                <div id='contact-location-container'>

                    <img src={EmailMessageImage} alt="" id='contact-location-content-email-img' />


                    <div
                        id='email-contact'
                    >
                        <Title level={5} style={{ color: "#61C2D0", marginTop: 0, marginBottom: 2 }}>Send us an Email</Title>
                        <Text id="email">nexalab.tech@gmail.com</Text>
                    </div>

                </div>











                <div id='contact-location-container'>

                    <img src={CallImage} alt="" id='contact-location-content-email-img' />


                    <div
                        id='email-contact'
                    >
                        <Title level={5} style={{ color: "#61C2D0", marginTop: 0, marginBottom: 2 }}>Give us a Call</Title>
                        <Text id="email">+92-3353801076</Text>
                    </div>

                </div>

            </div>

            </div>
        </Layout>
    )
}

export default ContactLocation;