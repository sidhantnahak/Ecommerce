import { AccountCircleOutlined, DashboardOutlined, Language, NotificationImportantOutlined, Search, SettingsOutlined } from '@material-ui/icons'
import React from 'react'
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar_left"><strong>Dashboard</strong>
            </div>
            <div className="navbar_right">
                <div ><Search /></div>
                <div><Language /></div>
                <div><DashboardOutlined /></div>
                <div><NotificationImportantOutlined /></div>
                <div><SettingsOutlined /></div>
                <div><AccountCircleOutlined /></div>
            </div>
        </div>
    )
}

export default Navbar