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
    card: [
    ],
  }

  addToCard = (product) => {
    const { card } = this.state
    if (card.find(x => x.name === product.name)) {
      const newCard = card.map(x => x.name === product.name ? ({ ...x, cantidad: x.cantidad + 1 }) : x)
      return this.setState({ card: newCard })
    }
    return this.setState({
      card: this.state.card.concat({
        ...product,
        cantidad: 1,
      })
    })
  }
  
  render() {
    console.log(this.state.card)
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
