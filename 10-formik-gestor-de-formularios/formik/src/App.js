import { Formik, Form } from 'formik'
import TextInput from "./components/TextInput"
import CheckBox from "./components/CheckBox"
import Select from "./components/Select"

const validate = (values) => {
  const errors = {} 

  if(!values.name) {
    errors.name = 'Requerido'
  } else if(values.name.length < 5) {
    errors.name = 'El nombre es muy corto'
  }

  if(!values.lastname) {
    errors.lastname = 'Requerido'
  } else if(values.lastname.length < 5) {
    errors.lastname = 'El apellido es muy corto'
  }

  if(!values.email) {
    errors.email = 'Requerido'
  }

  return errors
}

const App = () => {
  return (
    <Formik 
      initialValues={{ name: '', lastname: '', email: '', chancho: '' }}
      validate={validate}
      onSubmit={values => console.log(values)}
  >
      <Form>
        <TextInput name="name" label="Nombre" />
        <TextInput name="lastname" label="Apellido" />
        <TextInput name="email" label="Email" />
        <label>Seleccione la clase de chanchito que eres</label>
        <Select label="Tipo de chancho" name="chancho">
          <option value="">Seleccione el tipo de chancho</option>
          <option value="filipe">Felipe</option>
          <option value="chanchitofeliz">Chanchito Feliz</option>
          <option value="chanchitotriste">Chanchito Triste</option>
        </Select>
        <CheckBox name="accept">
          Aceptar terminos y condiciones
        </CheckBox>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App
