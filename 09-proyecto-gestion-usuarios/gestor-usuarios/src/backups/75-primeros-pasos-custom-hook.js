
import useFormulario from './hooks/useFormulario'

const App = () => {
  const [formulario, handleChange] = useFormulario({ name: '' })

  console.log(formulario)
  
  return (
    <div>
      <form>
        <input 
          name="name" 
          placeholder="Nombre" 
          value={formulario.name}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default App;
