import useFormulario from './hooks/useFormulario'
import Input from './components/Input'

const App = () => {
  const [formulario, handleChange] = useFormulario({ name: '', lastname: '' })

  console.log(formulario)
  
  return (
    <div>
      <form>
        <Input label="Nombre" name="name" value={formulario.name} onChange={handleChange} />
        <Input label="Apellido" name="lastname" value={formulario.lastname} onChange={handleChange} />
      </form>
    </div>
  );
}

export default App;
