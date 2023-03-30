import { Component } from 'react'
import Product from './Product'

class Products extends Component {
  render() {
    const { products, addToCard } = this.props
    
    return (
      <div>
        {products.map(product => 
          <Product
            addToCard={addToCard}
            key={product.name}
            product={product}
          />)}
      </div>
    )
  }
}

export default Products
