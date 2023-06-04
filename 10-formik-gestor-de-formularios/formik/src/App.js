import { Formik, Form, ErrorMessage } from 'formik'
import TextInput from "./components/TextInput"
import CheckBox from "./components/CheckBox"
import Select from "./components/Select"
import Radio from "./components/Radio"

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

  if(!values.radio) {
    errors.radio = 'Requerido'
  }

  return errors
}

const App = () => {
  return (
    <Formik 
      initialValues={{ name: '', lastname: '', email: '', chancho: '', radio: '' }}
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
        <div>
          <Radio name="radio" value="chanchito1" label="Chanchito 1" />
          <br />
          <Radio name="radio" value="chanchito2" label="Chanchito 2" />
          <br />
          <Radio name="radio" value="chanchito3" label="Chanchito 3" />
          <br />
          <ErrorMessage name="radio" />
        </div>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App
