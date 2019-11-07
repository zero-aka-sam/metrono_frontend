import React from 'react'
import {NavLink} from 'react-router-dom'
import Wallet from '../pages/wallet'

import '../css/style.css'


class cartbar extends React.Component {
      render() {
        return (
          <NavLink to = './cart' className="cartbar_wrapper">
                <h5>4 Items</h5>
                <h5>| Rs.150</h5>
                <h3>view cart</h3>
          </NavLink>
        ) 
        }
    }
    
    export default cartbar;