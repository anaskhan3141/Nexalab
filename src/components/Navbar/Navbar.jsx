import { Layout, Menu } from 'antd';
import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import  NexaLabLogo  from "../../assets/NexaLabLogo.svg";
import SideBar from '../SideBar/SideBar';
import { useHistory } from 'react-router-dom';



function Navbar() {


    const [ deviceWidth, setDeviceWidth] = useState(window.innerWidth);

    const [ currentNavLink, setCurrentNavLink ] = useState('Home')

    
    const history = useHistory();





    const onSelectNavLink = (event) => {
        setCurrentNavLink(event.key);
        if(event.key != "Blogs"){
          history.push(event.key);
        }
  
    }





    const calculateDeviceWidth = () => {
      setDeviceWidth(window.innerWidth);
    }





  useEffect( () => {

    window.addEventListener('resize', calculateDeviceWidth);

    return () => {
      window.removeEventListener('resize', calculateDeviceWidth);
    };

  },[]);





  return (
    <Layout id='navbar'>
       <img src={NexaLabLogo} alt=""  id='nexalab-logo'/>
       { 
       deviceWidth > 1067 ? 


       <Menu
        id='nav-links'
        items= 
        {
            [
                { label:"Home" , key: "/"},
                { label:"About Us" , key: "/about" },
                { label:"Our Services" , key: "/services" },
                { label:"Blogs" , key: "Blogs" },
                { label:"Contact" , key: "/contact" },
            ]
        }
        onClick = {onSelectNavLink}
        selectedKeys = { [ currentNavLink ] }
       ></Menu>


       : <SideBar/>
      }
    </Layout>
  )
}

export default Navbar;