import React from 'react'
import '../css/style.css'
import { NavLink } from 'react-router-dom'

import location from '../assets/location.svg'

class CategoryBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       products: []
    }
  }
  componentDidMount = () => {
    this.fetchProducts()
  }
  fetchProducts = () => {
      const requestBody = {
        query: `
        query{product{
          name
          description
          foodPreference
          price
        }
        }
        `
      }

      fetch('http://localhost:8000/graphql', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => {
          if (res.status !== 200 && res.status !== 201) {
            throw new Error('Failed')
          }
          return res.json()
        })
        .then(resData => {
          console.log(resData)
          const products = resData.data.product
          this.setState({products: products})
        })
        .catch(err => {
          console.log(err)
        })}
  render() {
    return (
      <div className="categorybar_wrapper">
        <div className="category">
            <NavLink to='./home'className="category_icon">
            <img src={location}/>
            <p>Breakfast</p>
            </NavLink>
            <NavLink to='./home' className="category_icon">
            <img src={location}/>
            <p>Lunch</p>
            </NavLink>
            <NavLink to='./home' className="category_icon">
            <img src={location}/>
            <p>Dinner</p>
            </NavLink>
        </div>
        <div className="sub_category">
                <NavLink to='./home' className="sub_category_link">
                <h4>North Indian</h4>
                </NavLink>
                <NavLink to='./home' className="sub_category_link">
                <h4>South Indian</h4>
                </NavLink>
        </div>
        <div className="info">
            <p>50 Dishes</p>
            <NavLink to='./home' className="sort_filter">
                <p className="sort_filter_link">Sort/Filter</p>
                <img src={location}/>
            </NavLink>
        </div>
      </div>
    )
    }
}

export default CategoryBar;
