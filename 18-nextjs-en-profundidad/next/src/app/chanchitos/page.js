'use client'

import Link from 'next/link'
import { useState } from 'react'

const Chanchitos = () => {
  const [id, setId] = useState(1)

  return (
    <div>
      <p>Chanchitos</p>
      <Link href="/">Ir al inicio</Link><br />
      <label name="id">Introduzca el ID: </label>
      <input id="id"
             type="text" 
             name="id" 
             size="8" 
             style={{ marginTop: "5px" }}
             value={id}
             onChange={e => setId(e.target.value)}/>
      <br />
      <Link href={`/chanchitos/${id}`}>Ir a Chanchito {id}</Link>
    </div>
  )
}

export default Chanchitos
