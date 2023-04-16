// En React lo recomendado es utilizar controlled components pero en el caso de que nuestro
// formularo contenga un archivo, se debe utilizar uncontrolled components para este elemento,
// además es puede utilizar uncontrolled components para los casos en los que estemos migradon una
// pagina web y tengamos que evitar refactorizar código en las primeras de cambio, 
// para planificar y ejecutar dichas refatorizaciones dando o asignado prioridad segun la criticidad 
// de cada parte del sitio web.

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
        <input type='file' name='archivo' />
        <br />
        <input type='submit' value='Enviar' /> 
      </form> 
    </div>
  )
}

export default App
