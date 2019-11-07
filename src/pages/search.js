import React from 'react'
import '../css/style.css'
import Navbar from '../components/navbar'
import ProductList from '../components/products/productList/productList'

class search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
      
          }
    }

    render() {
        return (
            <React.Fragment>
            <Navbar headerTitle={'search'} />
            <form>
               <div>
                    <input/>
                    <button>search</button>
               </div>
            </form>
            <ProductList product={this.state.products} />
            </React.Fragment>
            
        )
    }
}

export default search;