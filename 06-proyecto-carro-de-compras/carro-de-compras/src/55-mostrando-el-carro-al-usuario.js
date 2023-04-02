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
    card: [],
    isCardVisible: false,
  }

  addToCard = (product) => {
    const { card, isCardVisible } = this.state
    if(this.state.isCardVisible) this.setState({ isCardVisible: !isCardVisible })
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

  showCard = () => {
    if(!this.state.card.length) {
      return
    }

    this.setState({ isCardVisible: !this.state.isCardVisible })
  }
  
  render() {
    const { isCardVisible } = this.state
    return (
      <div>
        <Navbar card={this.state.card} isCardVisible={isCardVisible} showCard={this.showCard} />
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
