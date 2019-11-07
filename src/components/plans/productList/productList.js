import React from 'react'
import ProductItem from './productItem/productItem'


const productList= (props)=> {
    const products = props.product.map(product=>{
        console.log(product._id)
        return (
            <ProductItem key={product._id} productId={product._id} name={product.name} description={product.description} foodPreference={product.foodPreference} price={product.price}/>
            )
    })
    return <ul>{products}</ul>
}

export default productList;
