import { useFormik } from 'formik'
import Input from './Input'
import Button from './Button' 

const UserForm = ({ submit }) => {

  return (
    <form>
      <Input 
        label="Nombre"
        name="name"
        placeholder="Nombre"
      />
      <Input
        label="Apellido"
        name="lastname"
        placeholder="Apellido"
      />
      <Input
        label="Correo Electrónico"
        name="email"
        placeholder="Correo Electrónico"
      />
      <Button>Enviar</Button>
    </form> 
  )
}

export default UserForm
