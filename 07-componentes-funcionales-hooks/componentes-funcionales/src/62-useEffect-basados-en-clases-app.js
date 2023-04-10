import { Component, useState, useEffect } from 'react'

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

//const Interval = ({ contador }) => {
//  useEffect(() => {
//    const i = setInterval(() => console.log(contador), 1000)
//    return () => clearInterval(i)
//  }, [contador])
//  return (
//    <p>Intervalo</p>
//  )
//}

class Interval extends Component {
  intervalo = ''
  componentDidMount() {
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000)
  }
  
  componentWillMount() {
    clearInterval(this.intervalo)
  }

  render() {
    return (
      <p>Intervalo</p>
    )
  }
}

const App = () => {
  const [contador, incrementar, decrementar] = useContador(0)
  useEffect(() => {
    document.title = contador
    console.log('Soy un efecto!')
  }, [contador])

  return (
    <div>
      Contador: {contador}
      <br />
      <button style={{ marginTop: '10px' }} onClick={() => incrementar()}>Incrementar</button>
      <button style={{ marginLeft: '5px' }} onClick={() => decrementar()}>Decrementar</button>
      <Interval contador={contador} /> 
    </div>
  )
}

export default App
