import { Component } from 'react'

const styles = {
  bubbelAlert: {
    backgroundColor: '#E9725A',
    borderRadius: '15px', 
    color: '#fff', 
    padding: '2px 10px', 
    fontSize: '0.9rem',
    width: '20px',
  }
}

class BubbleAlert extends Component {
  render() {
    return (
      <span style={styles.bubbelAlert}>
        5
      </span>
    )
  }
}

export default BubbleAlert
