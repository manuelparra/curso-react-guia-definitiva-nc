import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import './header.css'

const App = () => {
  const [photos, setPhotos] = useState([])
  console.log(photos)
  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={async values => {
            // llamar a api de unsplash
            const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
              headers: {
                'Authorization': 'Client-ID 9or8rL6V5TB_aHq9E7faPw_oMEySjo2AgpR6Q7-k-KE'
              }
            })
            const data = await response.json()
            setPhotos(data.results)
          }}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
    </div>
  )
}

export default App
