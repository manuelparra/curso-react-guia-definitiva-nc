import { useState } from 'react'
//import { Component, useState } from 'react'

//class App extends Component {
//
//  state = { contador: 0 }
//
//  incrementar = () => {
//    this.setState({ contador: this.state.contador + 1 })
//  }
//
//  decrementar = () => {
//    this.setState({ contador: this.state.contador - 1 })
//  }
//  
//  render() {
//    return (
//      <div>
//        contador: {this.state.contador}
//        <br /> 
//        <button style={{ marginTop: '5px' }} onClick={this.incrementar}>Incrementar</button>
//        <button style={{ marginLeft: '5px' }} onClick={this.decrementar}>Decrementar</button>
//      </div>
//    )
//  }
//}

// Reglas de los hooks:
//  * No se puede utilizar un hooks dentro de un componente de clases (class)
//  * No se llaman en loops, ni condiciones ni while, ni nada, 
//    siempre deben estar en el nivel más alto del componente funcional
//  * Solo se llaman aen 2 partes:
//    > Componentes de react
//    > Custom hooks
//    > Cuando creemos un custom hook, su nombre debe comenzar por: use

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial) // useState retorna un arreglo, por ese motivo es destractoring se escribe como un arreglo [arg1, arg2, ...argn]

  const incrementar = () => {
    setContador(contador + 1)
  }

  const decrementar = () => {
    setContador(contador - 1)
  }

  return  [contador, incrementar, decrementar] 
}

const App = () => {
  const [contador, incrementar, decrementar] = useContador(0)

  return (
    <div>
      Contador: {contador}
      <br />
      <button style={{ marginTop: '10px' }} onClick={() => incrementar()}>Incrementar</button>
      <button style={{ marginLeft: '5px' }} onClick={() => decrementar()}>Decrementar</button>
    </div>
  )
}

export default App
