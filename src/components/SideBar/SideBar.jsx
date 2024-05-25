import { Drawer, Layout, Menu } from 'antd'
import React, { useState } from 'react'
import "./SideBar.css"
import NexaLabLogo from "../../assets/NexaLabNLogo.jpeg"
import BackButtonOfSideBar from "../../assets/BackButtonSideBar.png"
import SideBarIcon from "../../assets/SideBarIcon.png";
import { useHistory } from 'react-router-dom';




function SideBar() {

    const [sideBarOpen, setSideBarOpen] = useState(false);

    const [ currentNavLink, setCurrentNavLink ] = useState('Home')


    const history = useHistory();









    const onSelectNavLink = (event) => {
        setCurrentNavLink(event.key);
        if(event.key !== "Blogs"){
          history.push(event.key);
          setSideBarOpen(false);
        }
  
    }







    const showSideBarDrawer = () => {
        setSideBarOpen(true);
    };






    const closeSideBar = () => {
        setSideBarOpen(false);
    };





    return (
        <Layout id='sidebar'>

            <Drawer id='sidebar-sider' placement="right" closable={false}  open={sideBarOpen}>
                <div
                    id='drawer-div-container'
                >
                    <div id='drawer-logo-container'>

                        <img src={BackButtonOfSideBar} alt=""

                        id='back-button-of-sidebar'
                        style=
                        {{
                            cursor:"pointer",
                        }}

                        onClick= {closeSideBar}
                        />

                        <img
                            src={NexaLabLogo}
                            alt=""
                            id='side-bar-nexlab-logo'
                            

                        />

                    </div>

                </div>


                <Menu
                    id='sidebar-links'
                    items=
                    {
                        [
                            {
                                label: "Home",
                                key: "/",
                            },
                            {
                                label: "About Us",
                                key: "/about"
                            },
                            {
                                label: "Our Services",
                                key: "/services",
                                children:
                                    [



                                        {
                                            label: "Custom Software Development",
                                            key: "/services",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Web Development",
                                            key: "/services",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Mobile Development",
                                            key: "/services",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Web Design",
                                            key: "/services",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Social Media Marketing",
                                            key: "/services",
                                            className: "services-links"
                                        },




                                        {
                                            label: "SEO",
                                            key: "/services",
                                            className: "services-links"
                                        },




                                        {
                                            label: "Content",
                                            key: "/services",
                                            className: "services-links"
                                        },



                                        {
                                            label: "Software Quality Assurance (QA)",
                                            key: "/services",
                                            className: "services-links"
                                        },



                                        {
                                            label: "Graphics Designer",
                                            key: "/services",
                                            className: "services-links"
                                        },



                                    ]
                            },


                            {
                                label: "Blogs",
                                key: "Blogs"
                            },
                            {
                                label: "Contact",
                                key: "/contact"
                            },
                        ]
                    }
                    onClick = {onSelectNavLink}
                    selectedKeys = { [ currentNavLink ] }
                ></Menu>

            </Drawer>
            <img src={SideBarIcon} alt="" onClick={showSideBarDrawer}
            
            style=
            {{
                marginRight:24,
                cursor:"pointer"
            }}
            />
        </Layout>
    )
}

export default SideBar;