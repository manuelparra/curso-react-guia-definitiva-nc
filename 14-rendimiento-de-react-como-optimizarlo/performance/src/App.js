import { useState, useCallback } from 'react'
import Title from './components/Title' 
import MyForm from './components/MyForm'
import MyList from './components/MyList'

const App = () => {
  const [valores, setValores] = useState([])
  const handleSubmit = useCallback((values) => {
    setValores(data => ([
      ...data,
      values
    ]))
  }, [])

  return (
    <div>
      <Title>Mi título</Title>
      <MyForm onSubmit={handleSubmit} />
      <MyList data={valores} />
    </div>
  )
} 

export default App
