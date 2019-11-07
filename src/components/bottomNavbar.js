import React from 'react'
import {NavLink} from 'react-router-dom'
import Wallet from '../pages/wallet'

import '../css/style.css'
import logo from '../assets/logoLight.png'
import location from '../assets/location.svg'
import down from '../assets/down.svg'
import cart from '../assets/cart.svg'
import orders from '../assets/order_icon.svg'
import wallet from '../assets/wallet.svg'
import user from '../assets/user.svg'


class bottomNavbar extends React.Component {
      render() {
        return (
          <section className="bottom_navbar_wrapper">
            <NavLink className="icon" to='./home'>
                <img src={orders}/>
            </NavLink>
            <NavLink className="icon" to='./search'>
            <img src={orders}/>
            </NavLink>
            <NavLink className="icon" to='./cart'>
            <img src={cart}/>
            </NavLink>
            <NavLink className="icon" to='./wallet'>
            <img src={wallet}/>

            </NavLink>
            <NavLink className="icon" to='/settings'>
            <img src={user}/>
   
            </NavLink>
          </section>
        ) 
        }
    }
    
    export default bottomNavbar;