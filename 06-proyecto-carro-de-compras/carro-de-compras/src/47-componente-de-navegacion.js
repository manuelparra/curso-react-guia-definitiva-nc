import { Component } from 'react'
import Navbar from './components/Navbar'
import Layout from './components/Layout'
import Title from './components/Title'
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
        <Navbar />
        <Layout>
          <Title />
          <Products 
            addToCard={() => console.log('No hace nada')}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
