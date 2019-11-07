import React from 'react'
import '../css/style.css'
import Navbar from '../components/navbar'

import ProductList from '../components/products/productList/productList'

import promotionImg from '../assets/promotion.png'

class settings extends React.Component {
 
  render() {
    return (
      <React.Fragment>
      <div className="container">
        <ProductList product={this.state.products}/>
      </div>
    </React.Fragment>

    )
    }
}

export default settings;
