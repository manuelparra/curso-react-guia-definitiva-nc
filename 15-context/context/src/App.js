import { createContext, Component, useContext } from 'react'

const Context1 = createContext('Mi primer context')
const Context2 = createContext('Mi segundo context')

const Provider = ({ children }) => {
  return (
    <Context1.Provider value='Mi valor 1'>
      <Context2.Provider value='Mi valor 2'>
        {children}
      </Context2.Provider>
    </Context1.Provider>
  )
}

class Componente extends Component {
  render() {
    return (
      <Context1.Consumer>
        {
          valor1 =>
            <Context2.Consumer>
              {
                valor2 => <div>{`${valor1} ${valor2}`}</div>
              }
            </Context2.Consumer>
        }
      </Context1.Consumer>
    )
  }
}

const Componente2 = () => {
  const valor1 = useContext(Context1)
  const valor2 = useContext(Context2)
  return (
    <div>{`${valor1}, ${valor2}`}</div>
  )
}

const App = () => {
  return (
    <div>
      <Provider>
        <Componente />
      </Provider>
      <Componente2 />
    </div>
  )
}

export default App
