import { useState } from 'react'
import { Formik, Form, Field } from 'formik'
import ArticleItem from './components/ArticleItem'
import ArticleItemPlaceholder from './components/ArticleItemPlaceholder' 
import './header.css'
import './content.css'
import './article.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [photos, setPhotos] = useState([])

  const handleSubmit = async(values) => {
    // set loading variable to true
    setIsLoading(true)
    // llamar a api de unsplash
    const response = await fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${values.search}`, {
      headers: {
        'Authorization': 'Client-ID 9or8rL6V5TB_aHq9E7faPw_oMEySjo2AgpR6Q7-k-KE'
      }
    })
    const data = await response.json()
    setPhotos(data.results)
    setIsLoading(false)
  }

  return (
    <div>
      <header>
        <Formik
          initialValues={{ search: '' }}
          onSubmit={handleSubmit}
        >
          <Form>
            <Field name="search" />
          </Form>
        </Formik>
      </header>
      <div className="container">
        <div className="center">
          {isLoading && 
            photos.map((photo) =>
              <ArticleItemPlaceholder key={photo.id} />
            )
          }
          {!isLoading && 
            photos.map(photo => 
              <ArticleItem key={photo.id} photo={photo} /> 
            )
          }
        </div>
      </div>
    </div>
  )
}

export default App
