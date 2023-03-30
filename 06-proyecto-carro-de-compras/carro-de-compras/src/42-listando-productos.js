import { Component } from 'react'
import Products from './components/Products'

class App extends Component {
  state = {
    products: [
      { name: 'Tomato', price: 1500, img: '/products/tomato.jpg'}, 
      { name: 'Bees', price: 2500, img: '/products/bees.jpg'}, 
      { name: 'Lettuce', price: 500, img: '/products/lettuce.jpg'}, 
    ] 
  }
  
  render() {
    return (
      <div>
        <Products 
          addToCard={() => console.log('No hace nada')}
          products={this.state.products}
        />
      </div>
    )
  }
}

export default App
