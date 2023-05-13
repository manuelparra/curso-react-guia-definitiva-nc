import Input from './Input'
import Button from './Button'
import useFormulario from '../hooks/useFormulario'

const UserForm = ({ submit }) => {
  const [data, handleChange, reset] = useFormulario({ 
    name: '', 
    lastname: '',
    email: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    submit(data)
    reset()
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label="Nombre" 
        name="name" 
        value={data.name} 
        onChange={handleChange} 
        placeholder="Nombre"
      />
      <Input 
        label="Apellido" 
        name="lastname" 
        value={data.lastname} 
        onChange={handleChange} 
        placeholder="Apellido"
      />
      <Input 
        label="Correo" 
        name="email" 
        value={data.email} 
        onChange={handleChange} 
        placeholder="Correo electrónico"
      />
      <Button>Enviar</Button>
    </form>
  )
}

export default UserForm
