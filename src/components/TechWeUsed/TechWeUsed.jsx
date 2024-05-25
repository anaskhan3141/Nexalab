import { Layout, Typography } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import "./TechWeUsed.css";
import "./TechWeUsedTablet.css";
import "./TechWeUsedMobile.css";
import { technologiesWeUsed } from '../../ProjectData/ProjectData';
import PrevButton from "../../assets/TechWeUsed/PrevTechStackBtn.png";
import NextButton from "../../assets/TechWeUsed/NextTechStackBtn.png"
import TechStackUnderline from '../../assets/TechWeUsed/TechStackDash.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import TechStackCard from './Card/TechStackCard';






const { Title } = Typography;



function TechWeUsed() {

    const [ carouselitems, setCarouselItems] = useState([]);
 
    const techStackCarouselRef = useRef();


    const handlePrevClick = () => {
        techStackCarouselRef.current.slidePrev();
    };


    const handleNextClick = () => {
        techStackCarouselRef.current.slideNext();
    };



    useEffect( () => {

        setCarouselItems(technologiesWeUsed);

    },[]);

    
    const techItems = carouselitems.map(technology => <TechStackCard key = { technology.id } 
        techImage = { technology.techImage }
    />);


    const responsive = {

        0: {
            items: 1,
        },
        500: {
            items: 2,
        },
        600: {
            items: 3,
        },

        1100: {
            items: 6,
        }
    };


    return (
        <Layout id='tech-we-used-layout'>

            <Title level={4} id="tech-how-we-used-heading">HOW WE DO</Title>
            <Title level={2} id="tech-we-used-heading">Technologies we use</Title>

            <img src={TechStackUnderline} alt="" />

            <div id='tech-we-used-carousel-container'>


                <img src={PrevButton} alt="" id='tech-stack-carousel-prev-btn'

                    onClick={handlePrevClick}

                />

                   
                    <AliceCarousel
                    
                    ref = { techStackCarouselRef }

                    infinite
                    mouseTracking
                    autoPlay
                    disableButtonsControls
                    disableDotsControls
                    autoPlayInterval={1000}
                    animationDuration={1500}

                    items = { techItems }
                    responsive = { responsive }
                />





                <img src={NextButton} alt="" id='tech-stack-carousel-next-btn'

                    onClick={handleNextClick}
                />

            </div>



        </Layout>
    )
}

export default TechWeUsed;