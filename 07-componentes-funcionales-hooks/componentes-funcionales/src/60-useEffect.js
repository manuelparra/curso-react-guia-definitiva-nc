import { useState, useEffect } from 'react'

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
    </div>
  )
}

export default App
