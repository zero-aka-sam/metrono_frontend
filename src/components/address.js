import React from 'react'
import '../css/style.css'
import { NavLink } from 'react-router-dom'
import location from '../assets/location.svg'

class address extends React.Component {
  render() {
    return (
        <div>
                <NavLink to="./address" className="address_bar">
                    <h5 >Sivagami Street</h5>
                    <p >Deliver now</p>
                    <img src={location} className="location_icon"></img>
                </NavLink>
        </div>
    )
  }
}

export default address;