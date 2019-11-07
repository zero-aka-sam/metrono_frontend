import React from 'react'
import '../productItem/productItem.css'
import img from '../../../../assets/product.png'
import food from '../../../../assets/foodType.png'
import { NavLink } from 'react-router-dom'
class productItem extends React.Component {
      constructor(props) {
            super(props)
            this.state = {
                  products: [],
                  promotions: [],
                  cartEmpty: true,
                  inCartDetails: {
                    itemCount : 0,
                    total : 0,
                  }
                }
      }


      componentDidMount = () => {
            const result = this.viewItem()
            if(result){
                  this.setState({cartEmpty:false})
            }
      }

      addToCart = () => {
            const myItems = this.getItems()
            myItems.push(this.props)
            myItems ['quantity'] = 1
            localStorage.setItem('myItems', JSON.stringify(myItems))
            this.setState({cartEmpty:false})
      }

      getItems = () => {
            let myItems
            if (localStorage.getItem('myItems') === null) {
                  myItems = []
            }
            else {
                  myItems = JSON.parse(localStorage.getItem('myItems'))
            }
            return myItems
      }

      removeItems = () => {
            const myItems = this.getItems()
            myItems.forEach((myItem, index) => {
                  if (this.props.productId === myItem.productId) {
                        myItems.splice(index, 1)
                  }
            });
            localStorage.setItem('myItems', JSON.stringify(myItems))
      }

      viewItem = () => {
            const myItems = this.getItems()
            const id = this.props.productId
            const result = myItems.find(function (item) {
                  return item['productId'] === id
            })
            return result
      }
      increment = () => {
       var myItems = this.getItems()
       var price = myItems.price
       console.log(myItems)
            const result = myItems.map(myItem=>{
                  if(myItem.productId === this.props.productId){
                        myItems.price = myItems.price + price
                  return myItem
                  }

            })
            localStorage.setItem('myItems', JSON.stringify(result))
      }


      render() {
            return (
                  <div key={this.props.productId} className="productItem" onLoad={this.onLoadHandler}>
                        <img className="product_img" src={img} />
                        <h4 className="product_name">
                              <img className="food_preference" src={food} />{this.props.name}</h4>
                        <p className="product_description">{this.props.description}</p>
                        <p className="product_rating">{this.props.foodPreference}</p>
                        <h3 className="product_price">Rs.{this.props.price}</h3>
                        {!this.state.cartEmpty && <NavLink to='./cart'><button className="add_btn">View Cart</button></NavLink>}
                        {this.state.cartEmpty && <button className="add_btn" onClick={this.addToCart}>Add</button>}

                  </div>
            )
      }
}

export default productItem;
