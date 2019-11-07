import React from 'react'
import '../css/style.css'
import ProductList from '../components/products/productList/productList'
import PromotionList from '../components/promotions/promotionList/promotionList'
import Cartbar from '../components/cartbar'
import CategoryBar from '../components/categoryBar'
import Navbar from '../components/navbar'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      promotions: [],

    }
  }
  componentDidMount = () => {
    this.fetchProducts()
    this.fetchPromotions()
  }
  
  addToLocalStorage = (products) => {
    localStorage.setItem('products', JSON.stringify({products}))
  }
  fetchProducts = () => {
    const requestBody = {
      query: `
        query{product{
          _id
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
        this.setState({ products: products })
        this.addToLocalStorage(this.state.products)
      })
      .catch(err => {
        console.log(err)
      })
  }

  fetchPromotions = () => {
    const requestBody = {
      query: `
      query{promotion{
        _id
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
        const promotions = resData.data.promotion
        this.setState({ promotions: promotions })
        this.addToLocalStorage(this.state.products)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <React.Fragment>
        <div>
        <Navbar/>
        </div>
        <div className="container">
          <PromotionList promotion={this.state.promotions} />
          <CategoryBar />
          <ProductList product={this.state.products} />
        </div>
        </React.Fragment>
    )
  }
}

export default Home;
