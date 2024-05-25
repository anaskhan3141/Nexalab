import React from 'react'
import { Layout, Typography,Input,Button } from 'antd';
import "./FooterNexalab.css"
import NexaLabLogo from "../../assets/footerImages/NexaLabLogo.svg"
import { Link } from 'react-router-dom';
import FacebookImg from '../../assets/footerImages/Facebook.png'
import LinkedinImg from '../../assets/footerImages/Linkedin.png'
import TwitterImg from '../../assets/footerImages/Twitter.png'
const { Text } = Typography;
const { Footer } = Layout;

function FooterNexalab() {

  

  const fbLink = () =>{
    window.open("https://www.facebook.com/profile.php?id=100090870199140","NexaLab | Facebook" , "noopener");
  }
  const linkedInLink = () =>{
    window.open("https://www.linkedin.com/company/nexalab/about/", "NexaLab | LinkedIn", "noopener");
  }
  const twitterLink = () =>{
    window.open("https://twitter.com/nexalab_tech?t=BO_5m_M53-i_eqaBiG1lxg&s=09" ,  "NexaLab | Twitter", "noopener" );
  }
  return (
      <Footer className='footer'>
        <Layout className='main-footer'>
            <Layout className='main-footer-left'>
              <Text className='text'>About Nexalab</Text>
              <div className='footer-img-container'><img id='main-footer-left-img-container' src={NexaLabLogo} alt="" /></div>
              <p>
                NexaLab is a business that creates, develops, and sells software products or services. We
                specialize in developing software applications, systems, and platforms for a wide variety of
                purposes, including business, entertainment, education, healthcare, and more.
              </p>
            </Layout>
            <Layout className='main-footer-mid'>
              <Text className='text'>More Information</Text>
              <Layout className='footer-mid-link-container'>
                <Link className='footer-mid-link' to='/'>Home</Link>        
                <Link className='footer-mid-link' to='/about'>About Us</Link>      
                <Link className='footer-mid-link' to='/services'>Services</Link>     
                <Link className='footer-mid-link' >Blogs</Link>  
                <Link className='footer-mid-link' to='/contact'>Contact</Link>     
              </Layout>
            </Layout>
            <Layout className='main-footer-right'>
              <Text className='text' id='followus'>Follow Us</Text>
              <Layout className='footer-right-icon-container'>
                <div className='footer-right-icon'><img src={FacebookImg} alt="" onClick={() => {fbLink()}}/></div>
                <div className='footer-right-icon'><img src={LinkedinImg} alt="" onClick={() => {linkedInLink()}}/></div>
                <div className='footer-right-icon'><img src={TwitterImg} alt="" onClick={() => {twitterLink()}}/></div>
              </Layout>
              <Text className='text' id='contactus'>Contact Us!</Text>
              <Layout className='mail-button-container'>
                <Input className='right-footer-input' size="large" shape='round' placeholder='mail@example.com'/>
                <Button className='right-footer-btn' type="primary" size='large' shape="round">SEND</Button>
              </Layout>
          </Layout>
        </Layout>
          <Layout className='sec-footer'>
            <hr className='divider'/>
            <Text style={{marginTop: "15px"}} id="rights">© 2022. All rights reserved.</Text>
          </Layout>
      </Footer>
  )
}


export default FooterNexalab;
