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
    ],
    carro: [
      //{ name: 'Tomato', price: 1500, img: '/products/tomato.jpg', cantidad: 1 },
    ],
  }

  addToCard = (product) => {
    return this.setState({
      carro: this.state.carro.concat({
        ...product,
        cantidad: 1,
      })
    })
  }
  
  render() {
    console.log(this.state.carro)
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products 
            addToCard={this.addToCard}
            products={this.state.products}
          />
        </Layout>
      </div>
    )
  }
}

export default App
