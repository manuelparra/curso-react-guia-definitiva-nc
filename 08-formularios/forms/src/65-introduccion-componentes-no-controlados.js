const submit = (e) => {
  e.preventDefault()
  const data = Array.from(new FormData(e.target))
  console.log(Object.fromEntries(data))
}

const App = () => {
  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <span>
            lala
          </span>
          <input name='campo' />
        </div>
        <input name='campo-2' />
        <input type='submit' value='Enviar' /> 
      </form> 
    </div>
  )
}

export default App
