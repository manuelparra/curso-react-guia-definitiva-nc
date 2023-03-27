import Button from './Button'

const App = () => {
  return (
    <div>
      <h1 onClick={(e) => console.log('Click', e)}>Hola mundo!!</h1>
      <Button onClick={() => console.log('Clickeando')}>
        Enviar
      </Button>
    </div>
  )
}

export default App
