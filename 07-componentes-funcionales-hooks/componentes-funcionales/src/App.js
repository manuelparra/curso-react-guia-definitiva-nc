
// Todos los componentes funcionales en React cumplen con la condición de ser funciones puras
// Una función pura es aquella que nunca cambia el valor de retorno
const MiComponente = (props) => {
  const { miProp } = props
  return (
    <div>
      Nombre: {miProp}
    </div>
  )
}

// Función impura, es aquella cuyo valor cambia en cada llamada
const impura = () => {
  return new Date().toLocaleString()
}

console.log(impura()) // Cada vez que se imprime este console.log estamos obteniendo un resultado diferente: la fecha y hora actual

// Otro ejemplo de funciones impuras es el llamado a una API o el llamado a una base de datos

// En React los componentes funcionales, todos sin excepción, son funciones puras, con los cuales,
// siempre nos vamos a asegurar que no importa cuantas veces los llamamos, estos siempre van a retornar
// exactamente el mismo resultado

// Función App
const App = () => {
  return (
    <MiComponente miProp={'lalala'} />
  )
}

export default App
