import { Component } from 'react'
import logo from './logo.svg';
import './App.css';

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
        <p>Hola mundo!!</p>
      </div>
    )
  }
}

export default App
