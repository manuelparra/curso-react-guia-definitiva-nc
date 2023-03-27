import { Component } from 'react'

class Button extends Component {
  render() {  // Todos los componentes tienen que tener su metodo de render, en componentes extendidos de la clase Component esto es
              // obligatorio
    console.log('Ejecutando método de render de button')
    return (  // El método de render se ejecuta: 
              // 1) Cúando nosotros llamamos a setState
              // 2) Cúando un componente hijo, en este caso Button, se encuentra en el llamado de un componente padre, que en este caso es
              //    App
      <button>
        Enviar
      </button>
    )
  }
}

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
        <Button />
        <br />
        <button 
          className={`${this.state.valor}`} 
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar en App
        </button>
      </div>
    )
  }
}

export default App
