import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState({ normal: 'Por defecto', texto: '', select: '', check: false, estado: '' })
  const handleChange = ({ target }) => {
    console.log(target.type, target.checked)
    setValue((state) => ({
      ...state, 
      [target.name]: target.type === 'checkbox' ? target.checked : target.value 
    }))
  }
  console.log(value)

  return (
    <div>
      {value.length < 5 ? <span>Longitud mínima de 5</span> : null}
      <input type='text' name='normal' value={value.normal} onChange={handleChange} />
      <textarea name='texto' value={value.texto} onChange={handleChange} />

      <select value={value.select} name='select' onChange={handleChange}>
        <option value=''>-- Seleccione --</option>
        <option value='Chancho feliz'>Chancho feliz</option>
        <option value='Chanchito feliz'>Chanchito feliz</option>
        <option value='Chanchito triste'>Chanchito triste</option>
      </select>

      <input 
        type="checkbox"
        name="check"
        onChange={handleChange}
        checked={value.check} 
      />
     
      <div onChange={handleChange}>
        <label>Chancho</label>
        <input type="radio" value="feliz" name="estado" /> Feliz
        <input type="radio" value="triste" name="estado" /> Triste
        <input type="radio" value="felipe" name="estado" /> Felipe
      </div>
    </div>
  )
}

export default App
