import Button from './Button'

const arr = [
  'chanchito feliz', 
  'chanchito triste', 
  'chanchito emocionado',
]

const App = () => {
  const miVarible = false

  if (miVarible) {
    return <p>Mi variable dio true!</p>
  }

  return (
    <div>
      <h1 onClick={(e) => console.log('Click', e)}>Hola mundo!!</h1>
      {arr.map(el => <p key={el}>{el}</p>)}
      <Button onClick={() => console.log('Clickeando')}>
        Enviar
      </Button>
    </div>
  )
}

export default App
