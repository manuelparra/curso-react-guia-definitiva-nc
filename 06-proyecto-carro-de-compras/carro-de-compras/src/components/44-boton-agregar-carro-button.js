import { Component } from 'react'

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: '#fff', 
    padding: '15px 20px', 
    border: 'none',
    borderRadius: '5px', 
    cursor: 'pointer'
  }
}

class Button extends Component {
  render () {
    console.log(this.props)
    const { children, onClick } = this.props
    return (
      <button style={styles.button} onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default Button
