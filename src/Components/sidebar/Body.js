import React from 'react'
import './Body.css'
import Content from './Content'
import Navbar from './Navbar'

const Body = () => {
    return (

        <div className="body_container">
        <Navbar/>
        <Content/>
        </div>
    )
}

export default Body