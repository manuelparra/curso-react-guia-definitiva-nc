import { Component } from 'react'

const styles = {
  carddetails: {
    backgroundColor: '#fff',
    position: 'absolute',
    marginTop: 30, 
    boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
    borderRadius: '5px',
    width: '200px',
    right: 50, 
  }, 
  img: {
    width: 50,
    height: 32,
  }, 
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 10px',
    borderBottom: 'solid 1px #aaa',
  }
}

class CardDetails extends Component {
  render() {
    const { card } = this.props
    console.log(card)
    return (
      <div style={styles.carddetails}>
        <ul style={styles.ul}>
          {card.map(x => 
            <li style={styles.product} key={x.name}>
              <img style={styles.img} alt={x.name} src={x.img} />
              {x.name} <span>{x.cantidad}</span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

export default CardDetails
