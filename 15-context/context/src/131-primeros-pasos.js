import { createContext, useContext } from "react"

const ContextDefault = createContext('Valor por defecto')
const Context2 = createContext('Valor por defecto 2')

const DefaultProvider = ({ children }) => {
  return (
    <ContextDefault.Provider value={'mi valor'}>
      {children}
    </ContextDefault.Provider>
  )
}

const Contenido = () => {
  const ctx = useContext(ContextDefault)
  return (
    <div>{ctx}</div>
  )
}

const Contenido2 = () => {
  const ctx = useContext(Context2)
  return (
    <div>{ctx}</div>
  )
}

const App = () => {
  return (
    <DefaultProvider>
      <Contenido />
      <Contenido2 />
    </DefaultProvider>
  )
}

export default App
