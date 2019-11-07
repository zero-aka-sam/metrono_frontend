import React from 'react'
import '../css/style.css'
import logo from '../assets/logoLight.png'


class brandName extends React.Component {
    render() {
        return (
            <div className="logo">
            <img src={logo}></img>
            </div>
        )
    }
}

export default brandName;