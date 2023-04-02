import { Component } from 'react'
import BubbleAlert from './BubbleAlert'
import CardDetails from './CardDetails'

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
    const { card, isCardVisible, showCard } = this.props
    const cantidad = card.reduce((acc, el) => acc + el.cantidad, 0)
    return (
      <div>
        <span style={styles.bubble}>
          {(cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null)}
        </span>
        <button onClick={showCard} style={styles.card}>
          Carro
        </button>
        {isCardVisible ? <CardDetails card={card} />: null}
      </div>
    )
  }
}

export default Card
