import React from 'react'
import ProductItem from '../productList/productItem/productItem'

const productList = (props) => {
    const products = props.product.map(
        product => { return (<ProductItem key={product._id} productId={product._id} name={product.name} description={product.description} foodPreference={product.foodPreference} price={product.price} />) }

    )



    return <div>{products}</div>
}

export default productList;
