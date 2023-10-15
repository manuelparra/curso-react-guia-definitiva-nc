'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'

const Home = () => {
  const [id, setId] = useState(1)
  const [propiedad, setPropiedad] = useState({ valor: 'undefine', valores: ['undefine', 'descripcion', 'caracteristicas', 'comentarios']})

  return (
    <div>
      <p>Chanchito Feliz</p> 
      <Link href="/chanchito">Chanchito Triste</Link>
      <br />
      <Link href="/chanchitos">Ir a chanchitos</Link>
      <br />
      <label name="id">Introduzca el Id: </label>
      <input id="id"
             name="id"
             type="text"
             size="8"
             style={{ marginTop: "8px" }}
             value={id}
             onChange={e => setId(e.target.value)}/>
      <br />
      <label name="propiedades">Selecciene la propiedad: </label>
      <select name="propiedades" 
              id="propiedades"
              style={{ marginTop: "8px" }}
              onChange={e => setPropiedad({...propiedad, valor: e.target.value})}>
        <option value={propiedad.valores[0]}>{propiedad.valores[0].charAt(0).toUpperCase() + propiedad.valores[0].slice(1)}</option> 
        <option value={propiedad.valores[1]}>{propiedad.valores[1].charAt(0).toUpperCase() + propiedad.valores[1].slice(1)}</option> 
        <option value={propiedad.valores[2]}>{propiedad.valores[2].charAt(0).toUpperCase() + propiedad.valores[2].slice(1)}</option> 
        <option value={propiedad.valores[3]}>{propiedad.valores[3].charAt(0).toUpperCase() + propiedad.valores[3].slice(1)}</option> 
      </select>
      <br />
      <Link href={propiedad.valor === 'undefine' ? `/shop/${id}` : `/shop/${id}/${propiedad.valor}`}>{propiedad.valor === 'undefine' ? `Ir a Shop/${id}` : `Ir a Shop/${id}/${propiedad.valor}`}</Link>
      <br />
      <Image 
        src='/coffee.png' 
        alt='Coffee' 
        width={300} 
        height={300}
        style={{ marginTop: "20px" }}
        priority={true} />
    </div> 
  )
}

export default Home
