import { Component, useState } from 'react'

// Reglas de los hooks:
//  * No se puede utilizar un hooks dentro de un componente de clases (class)
//  * No se llaman en loops, ni condiciones ni while, ni nada, 
//    siempre deben estar en el nivel más alto del componente funcional
//  * Solo se llaman aen 2 partes:
//    > Componentes de react
//    > Custom hooks
//    > Cuando creemos un custom hook, su nombre debe comenzar por: use

class App extends Component {

  state = { contador: 0 }

  incrementar = () => {
    this.setState({ contador: this.state.contador + 1 })
  }

  decrementar = () => {
    this.setState({ contador: this.state.contador - 1 })
  }
  
  render() {
    return (
      <div>
        contador: {this.state.contador}
        <br /> 
        <button style={{ marginTop: '5px' }} onClick={this.incrementar}>Incrementar</button>
        <button style={{ marginLeft: '5px' }} onClick={this.decrementar}>Decrementar</button>
      </div>
    )
  }
}

//const App = () => {
//  const [contador, setContador] = useState(0) // useState retorna un arreglo, por ese motivo es destractoring se escribe como un arreglo [arg1, arg2, ...argn]
//  return (
//    <div>
//      Contador: {contador}
//      <br />
//      <button style={{ marginTop: '10px' }} onClick={() => setContador(contador + 1)}>Incrementar</button>
//      <button style={{ marginLeft: '5px' }} onClick={() => setContador(contador - 1)}>Decrementar</button>
//    </div>
//  )
//}

export default App
