import { Component } from 'react'

class App extends Component { // Es necesario extender el componente desde el Component de react, además el metodo de setState viene de
                              // Component por lo que si no extendemos desde esa clase el mismo no podria ser utilizado, solamente de esa 
                              // manera vamos a poder crear un estado dentro de un componente y también vamos a poder actualiazarlo
  state = { // React necesita que el estado de un componente se llame state, de lo contrario no va a funcionar
    valor: 3,
  }
  render() {
    console.log(this.state)
    return (
      <div>
        <p>Hola mundo!</p>
        <button 
          className={`${this.state.valor}`} 
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar
        </button>
      </div>
    )
  }
}

export default App
