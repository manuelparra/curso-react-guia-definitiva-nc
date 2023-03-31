import { Component } from 'react'
import BubbleAlert from './BubbleAlert'

const styles = {
  card: {
    backgroundColor: '#359A2C',
    color: '#fff', 
    border: 'none', 
    padding: '15px', 
    borderRadius: '15px',
    cursor: 'pointer',
  }, 
  bubble: {
    position: 'relative', 
    left: 12, 
    top: 20,
  }
}

class Card extends Component {
  render() {
    return (
      <div>
        <span style={styles.bubble}>
          <BubbleAlert value={8} />
        </span>
        <button style={styles.card}>
          Carro
        </button>
      </div>
    )
  }
}

export default Card
