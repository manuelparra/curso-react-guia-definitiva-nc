import { useFormik } from 'formik'
import Input from './Input'
import Button from './Button' 

const UserForm = ({ submit }) => {
  const data = useFormik({
    initialValues: {
      name: '', 
      lastname: '',
      email: '',
    },
    onSubmit: (values, actions) => {
      submit(values)
      actions.resetForm()
    }
  })

  return (
    <form onSubmit={data.handleSubmit}>
      <Input 
        label="Nombre"
        name="name"
        type="text"
        onChange={data.handleChange}
        value={data.values.name}
        placeholder="Nombre"
        
      />
      <Input
        label="Apellido"
        name="lastname"
        type="text"
        onChange={data.handleChange}
        value={data.values.lastname}
        placeholder="Apellido"
      />
      <Input
        label="Correo Electrónico"
        name="email"
        type="email"
        onChange={data.handleChange}
        value={data.values.email}
        placeholder="Correo Electrónico"
      />
      <Button type="submit">Enviar</Button>
    </form> 
  )
}

export default UserForm
