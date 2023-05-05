import { useState } from 'react'

const App = () => {
  const [value, setValue] = useState({ 
    normal: 'Por defecto', 
    texto: '', 
    select: '', 
    check: false, 
    estado: 'feliz',
  })
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
     
      <div>
        <label>Chancho</label>
        <input 
          onChange={handleChange} 
          type="radio"  
          value="feliz" 
          name="estado" 
          checked={value.estado==='feliz'}
        /> Feliz
        <input 
          onChange={handleChange} 
          type="radio"  
          value="triste" 
          name="estado" 
          checked={value.estado==='triste'}
        /> Feliz
        <input 
          onChange={handleChange} 
          type="radio"  
          value="felipe" 
          name="estado" 
          checked={value.estado==='felipe'}
        /> Triste
      </div>
    </div>
  )
}

export default App
