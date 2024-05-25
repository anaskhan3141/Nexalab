import {Layout, Row, Col, Card} from 'antd'
import React from 'react'
import './OurService.css'
import Logo from '../../assests/images/N-01 1.png'
import Border from '../../assests/images/Rectangle 5 (1).png'


const {Content} = Layout
const {Meta} = Card

function OurService({ServicesList}) {
  return (
    <Layout className='main'>
        <Content>
      <img className='logo' src={Logo} alt ='logo'></img>
      <Row> 
                <Col span={24} className ="col">
                <div className='service-heading'>
                <span className='span'>WHAT WE DO
                <h2 className='h2'> Our Services</h2>
                </span>                
                <img  className='border-img' src={Border} alt='border'></img>
                </div>
                </Col>     
      </Row>
      <Row>
      <Col span={24} className ='card-col'>
          {ServicesList.map((services,index) => (
            <Card
           className='card'
           key={index}
            cover={<img alt="services" className='card-img' src={services.image} />} >
          <h2 className='card-h2'>  {services.name} <Meta/></h2>
                  </Card>
                  
          ))}
          </Col>
      </Row>
      </Content>
      </Layout>
    
  )
}

export default OurService
