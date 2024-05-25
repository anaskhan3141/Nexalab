import { Button, Typography , notification } from 'antd';
import Layout from 'antd/es/layout/layout';
import axios from 'axios';
import React, { useState } from 'react';
import "./ContactForm.css";
import "./ContactFormMobile.css";
import "./ContactFormTablet.css";
import { validateEmail } from '../../utils/validateEmail';
import validator from 'validator';




const { Title } = Typography;



function ContactForm() {

    const error = "error";



    const [ api, contextHolder] = notification.useNotification();




    const openNotificationWithIcon = (type,message, description) => {

        api[type] ({
            message: message,
            description:
            description
        });

    };




    const [email, setEmail] = useState("");


    const [name, setName] = useState("");


    const [phone, setPhone] = useState("");


    const [message, setMessage] = useState("");






    const onChangeName = (event) => {


        setName(event.target.value);

    }





    const onChangeEmail = (event) => {


        setEmail(event.target.value);

    }






    const onChangePhone = (event) => {


        setPhone(event.target.value);

    }






    const onChangeMessage = (event) => {


        setMessage(event.target.value);

    }







    const sendMessage = () => {




        if (validateEmail(email)) {

            if (name.length > 0) {


                if(validator.isMobilePhone(phone)) {



                    if (message.length > 0) {


                        axios.post
                        (
                            `http://143.244.156.234/api/mail`,
                            {
                                clientEmail: email,
                                name: name,
                                phoneNo: phone,
                                message: message
                            }
                        )


                        setTimeout ( () => {

                            const message = "Email success";
                            const description = "Email has been sended successfully";
                
                            openNotificationWithIcon("success",message,description);

                        },500)
    
                    }


                    else 
                    {
                        const message = "Incorrect Message";
                        const description = "Enter a correct message";
            
                        openNotificationWithIcon(error,message,description);
                    }

                }


                else 
                {
                    const message = "Incorrect Phone No";
                    const description = "Enter a correct phone number";
        
                    openNotificationWithIcon(error,message,description);
                }

              

            }

            else 
            {
                const message = "Incorrect Name";
                const description = "Enter a correct name";
    
                openNotificationWithIcon(error,message,description);

            }

          

        }


        else 
        {
            const message = "Incorrect Email";
            const description = "Enter a correct email";

            openNotificationWithIcon(error,message,description);
        }



        // axios.post
        // (
        //     `http://localhost:3001/mail`,
        //     {
        //         clientEmail: email,
        //         name: name,
        //         phoneNo: phone,
        //         message: message
        //     }
        // )

    }








    return (
        <Layout id='contact-form-layout'>

            <div id='contact-form-container'>



                <Title level={3} id="contact-form-heading" >CONTACT US</Title>


                <input placeholder='youremail@domain.com' type="email" className='input' name='email' value={email}


                    onChange={onChangeEmail}
                />



                <div id='phone-and-name-container-contact-form'>

                    <input placeholder='Your Name' type="text" className='input-phone-name' name='name' value={name}


                        onChange={onChangeName}
                    />


                    <input placeholder='Phone' type="text" className='input-phone-name' name='Phone' value={phone}


                        onChange={onChangePhone}
                    />


                </div>




                <textarea placeholder='Here Goes Your Message' className='text-area-message-contact-form'

                    value={message}


                    onChange={onChangeMessage}
                />



                <Button id='send-msg-btn' size='large' onClick={sendMessage}>SEND MESSAGE</Button>



            </div>


        {contextHolder}
        </Layout>
    )
}

export default ContactForm;