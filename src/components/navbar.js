import React from 'react'
import Address from '../components/address'
import BrandName from '../components/brandName'
import Header from '../components/header'

import '../css/style.css'

class NavBar extends React.Component {
  constructor(props) {
    super(props)
}
  
  render() {
    return (
      <section className="navbar_wrapper">
      {!this.props.headerTitle &&  <BrandName/>}
      {!this.props.headerTitle && <Address/>}
      {this.props.headerTitle && <Header headerTitle={this.props.headerTitle}/>}
      </section>
    )
  }
}

export default NavBar;