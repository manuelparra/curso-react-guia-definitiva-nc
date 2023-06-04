import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from "./components/TextInput"
import CheckBox from "./components/CheckBox"

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
      initialValues={{ name: '', lastname: '', email: ''}}
      validate={validate}
      onSubmit={values => console.log(values)}
  >
      <Form>
        <TextInput name="name" label="Nombre" />
        <br />
        <Field name="option" as="select" className="select">
          <option value="chanchitofeliz">Chanchito feliz</option>
          <option value="chanchitotriste">Chanchito triste</option>
        </Field>
        <br />
        <label>Apellido</label>
        <Field name="lastname" type="text" />
        <ErrorMessage name="lastname" />
        <br />
        <label>Email</label>
        <Field name="email" type="text" />
        <ErrorMessage name="email" />   
        <br />
        <CheckBox name="accept">
          Aceptar terminos y condiciones
        </CheckBox>
        <button type="submit">Enviar</button>
      </Form>
    </Formik>
  );
}

export default App
