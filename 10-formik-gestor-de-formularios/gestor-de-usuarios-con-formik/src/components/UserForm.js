import { useFormik } from 'formik'

import './UserForm.css'
import Input from './Input'
import Button from './Button' 

const validate = (values) => {
  const errors = {}

  if(!values.name) {
    errors.name = 'Campo requerido'
  }

  if(!values.lastname) {
    errors.lastname = 'Campo requerido'
  }

  if(!values.email) {
    errors.email = 'Campo requerido'
  }

  return errors
}

const UserForm = ({ submit }) => {
  const data = useFormik({
    initialValues: {
      name: '', 
      lastname: '',
      email: '',
    },
    validate,
    onSubmit: (values, actions) => {
      submit(values)
      actions.resetForm()
    }
  })

  return (
    <form onSubmit={data.handleSubmit}>
      <Input 
        label="Nombre"
        type="text"
        {...data.getFieldProps('name')}
        placeholder="Nombre"
      />
      {data.touched.name && data.errors.name ? <div className="field-errors">{data.errors.name}</div> : null}
      <Input
        label="Apellido"
        type="text"
        {...data.getFieldProps('lastname')}
        placeholder="Apellido"
      />
      {data.touched.lastname && data.errors.lastname ? <div className="field-errors">{data.errors.lastname}</div> : null}
      <Input
        label="Correo Electrónico"
        type="email"
        {...data.getFieldProps('email')}
        placeholder="Correo Electrónico"
      />
      {data.touched.email && data.errors.email ? <div className="field-errors">{data.errors.email}</div> : null}
      <Button type="submit">Enviar</Button>
    </form> 
  )
}

export default UserForm
