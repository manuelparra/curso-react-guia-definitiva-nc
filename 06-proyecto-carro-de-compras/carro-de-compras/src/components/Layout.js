import { Component } from 'react'

const styles = {
  layout: {
    backgroundColor: '#fff',
    color: '#0A283E', 
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    width:  '900px',
  }
}

class Layout extends Component {
  render() {
    const { children } = this.props
    return (
      <div style={styles.layout}>
        <div style={styles.container}>
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
