import React from 'react'
import './Sidebar.css'
import { BorderColor, ContactsSharp, DraftsRounded, FolderOpenRounded, LocalMallRounded, LocalPostOfficeRounded, PersonOutlineSharp, ReceiptOutlined, TocRounded } from '@material-ui/icons';
import { DashboardRounded } from '@material-ui/icons';
import { KeyboardArrowDownRounded } from '@material-ui/icons';
import { DateRangeOutlined } from '@material-ui/icons';
import { ChatBubbleOutlineRounded } from '@material-ui/icons';

const Sidebar = () => {
    return (
        <div className="sidebar_container">
            <div className="sidebar">
                <div className="menu_icon">
                    <TocRounded />
                </div>
                <div className="groups">
                    <div className="group">
                        <div className="dashboard">
                            <h5>Menu</h5>
                            <div className="dashboard_icon">
                                <div className='dash_icon'>
                                   <DashboardRounded /> 
                                    <span>Dashboard</span>
                                </div>
                                <div>
                                    <KeyboardArrowDownRounded />

                                </div>
                            </div>
                            <div className="dashboard_list">
                                <ul>
                                    <li >Ecommerce</li>
                                    <li>saas</li>
                                    <li>crypto</li>
                                </ul>
                            </div>

                        </div>

                        <div className="application_box">
                            <h5>Application</h5>
                            <div className="calender_icon">
                                <div className='cal_icon'>
                                    <DateRangeOutlined />
                                    <span>Calender</span>
                                </div>
                            </div>
                        </div>

                        <div className="chat">
                            <div className="chat_icon_box">
                                <div className='chat_icon'>
                                    <ChatBubbleOutlineRounded />
                                    <span>Chat</span>
                                </div>
                                <div>
                                    <span className='hot_span'>Hot</span>
                                </div>
                            </div>
                        </div>

                        <div className="application_box">
                            <div className="calender_icon">
                                <div className='cal_icon'>
                                    <FolderOpenRounded />
                                    <span>File Manager</span>
                                </div>
                            </div>
                        </div>

                        <div className="Ecommerece">
                            <div className="ecommerece_icon">
                                <div className='ecom_icon'>
                                    <LocalMallRounded />
                                    <span>Ecommerece</span>
                                </div>
                                <div>
                                    <KeyboardArrowDownRounded />

                                </div>
                            </div>
                            <div className="dashboard_list">
                                <ul>
                                    <li >Ecommerce</li>
                                    <li>saas</li>
                                    <li>crypto</li>
                                </ul>
                            </div>

                        </div>

                        <div className="Ecommerece">
                            <div className="ecommerece_icon">
                                <div className='ecom_icon'>
                                    <LocalPostOfficeRounded />
                                    <span>Email</span>
                                </div>
                                <div>
                                    <KeyboardArrowDownRounded />

                                </div>
                            </div>
                        </div>
                        <div className="Ecommerece">
                            <div className="ecommerece_icon">
                                <div className='ecom_icon'>
                                    <ReceiptOutlined />
                                    <span>Invoice</span>
                                </div>
                                <div>
                                    <KeyboardArrowDownRounded />

                                </div>
                            </div>
                        </div>
                        <div className="Ecommerece">
                            <div className="ecommerece_icon">
                                <div className='ecom_icon'>
                                    <DraftsRounded />
                                    <span>Projects</span>
                                </div>
                                <div>
                                    <KeyboardArrowDownRounded />

                                </div>
                            </div>
                        </div>

                        <div className="Ecommerece">
                            <div className="ecommerece_icon">
                                <div className='ecom_icon'>
                                    <ContactsSharp />
                                    <span>Contact</span>
                                </div>
                                <div>
                                    <KeyboardArrowDownRounded />

                                </div>
                            </div>
                        </div>

                        <h5 className='layouts'>Layouts</h5>
                        <h5 className='pages'>Pages</h5>

                        <div className="Ecommerece">
                            <div className="ecommerece_icon">
                                <div className='ecom_icon'>
                                    <ContactsSharp />
                                    <span>Authentication</span>
                                </div>
                                <span className="authentication_span">2</span>
                                <div>

                                </div>

                            </div>
                        </div>

                        <div className="Ecommerece">
                            <div className="ecommerece_icon">
                                <div className='ecom_icon'>
                                    <PersonOutlineSharp />
                                    <span>Utility</span>
                                </div>
                                <div>
                                    <KeyboardArrowDownRounded />

                                </div>
                            </div>
                        </div>
                        <h5 className='components'>Components</h5>


                        <div className="Ecommerece">
                            <div className="ecommerece_icon">
                                <div className='ecom_icon'>
                                    <PersonOutlineSharp />
                                    <span>Ui Elements</span>
                                </div>
                                <div>
                                    <KeyboardArrowDownRounded />

                                </div>
                            </div>
                        </div>
                        <div className="Ecommerece">
                            <div className="ecommerece_icon">
                                <div className='ecom_icon'>
                                    <BorderColor />
                                    <span>Forms</span>
                                </div>
                                <div>
                                    <KeyboardArrowDownRounded />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sidebar