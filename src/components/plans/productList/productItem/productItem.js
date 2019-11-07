import React from 'react'

const productItem = (props) => (
    <div className="container">
                  <div key= {props.productId} className="product_card">
                      <img src=""/>
                      <h4>{props.name}</h4>
                      <p>{props.description}</p>
                      <p>{props.foodPreference}</p>
                      <h3>{props.price}</h3>
                      <button className="button">Add</button>
                  </div>
    </div>
)

export default productItem;
