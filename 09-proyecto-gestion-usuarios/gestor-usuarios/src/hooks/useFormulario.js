import { useState } from 'react'

const useFormulario = (inicial) => {
  const [formulario, setFormulario] = useState(inicial)

  const handleChange = ({ target }) => {
    setFormulario({
      ...formulario,
      [target.name]: target.value
    })
  }

  return [formulario, handleChange]
}

export default useFormulario
