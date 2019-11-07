import React from 'react'
import '../css/style.css'

class Product extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: null,
      description: null,
      foodPreference: null,
      price: null
    }
  }
  onLoadHandler = (event) => {
    event.preventDefault()
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
          this.setState({})
        })
        .catch(err => {
          console.log(err)
        })

  }
    render() {
      return (
        <div className="container" >
            <div className="product_card">
                <img src={productImg}/>
                <h4>Phulka</h4>
                <p>20% offer on order above Rs.50</p>
                <button className="button">Add</button>
            </div>
        </div>
      )
      }
  }

export default Product;
