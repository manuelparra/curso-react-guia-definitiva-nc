import useFormulario from './hooks/useFormulario'
import Input from './components/Input'
import Card from './components/Card'
import Container from './components/Container'

const App = () => {
  const [formulario, handleChange] = useFormulario({ name: '', lastname: '' })

  console.log(formulario)
  
  return (
    <Container>
      <Card>
        <div style={{ padding: 20 }} >
          <form>
            <Input 
              label="Nombre" 
              name="name" 
              value={formulario.name} 
              onChange={handleChange} 
            />
            <Input 
              label="Apellido" 
              name="lastname" 
              value={formulario.lastname} 
              onChange={handleChange} 
            />
          </form>
        </div>
      </Card>
    </Container>
  );
}

export default App;
