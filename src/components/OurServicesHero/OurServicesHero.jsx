import Layout from 'antd/es/layout/layout';
import React, { useState } from 'react';
import "./OurServicesHero.css";
import "./OurServicesHeroMobile.css";
import "./OurServicesHeroTablet.css";
import OurServicesHeroImage from "../../assets/OurServicesHero/OurServicesHero.png"
import { Link } from 'react-router-dom';
import { Button, Typography } from 'antd';
import { useHistory } from 'react-router-dom';




const { Title } = Typography;



function OurServicesHero() {
const history = useHistory()



  const [selectedElement, setSelectedElement] = useState("");







  const onSelectElement = (currentElement) => {

    setSelectedElement(currentElement);

  }








  return (
    <Layout id='our-services-hero-layout'>

      <div id='our-services-hero-left-container'>


        <Title id='our-services-hero-title'  level={1}>Our Services</Title>
        <Button onClick={()=> {
          history.push('/contact')
        }} id='our-services-hero-button' size='large'>CONTACT US</Button>

      </div>




      <div id='our-services-hero-right-container'>

        <img src={OurServicesHeroImage} alt="" id='our-services-hero-img' />

        <div id='hero-our-services-link-container'>

          <Link
            className=
            {
              selectedElement == "Home" ? 'hero-our-services-link-blue'
                : 'hero-our-services-link-white'
            }


            onClick={() => onSelectElement("Home")}

          >
            Home
          </Link>

          <span id='hero-our-services-link-dash'>/</span>

          <Link

            className=
            {
              selectedElement == "Our Services" ? 'hero-our-services-link-blue'
                : 'hero-our-services-link-white'
            }


            onClick={() => onSelectElement("Our Services")}

          >
            Our Services
          </Link>



        </div>


      </div>

    </Layout>
  )
}

export default OurServicesHero;