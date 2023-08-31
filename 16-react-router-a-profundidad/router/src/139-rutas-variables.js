import { Outlet, Routes, Route, Link, useParams } from 'react-router-dom'

const Inicio = () => {
  return (
    <h1>Inicio</h1>
  )
}

const Proyecto = () => {
  const myId = useParams()
  console.log(myId)
  return (
    <h2>Proyecto {myId.proyecto_id}</h2>
  )
}

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to="/portafolio/1">Proyecto 1</Link>
        </li>
        <li>
          <Link to="/portafolio/2">Proyecto 2</Link>
        </li>
      </ul> 
      <div>
        <Outlet />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/portafolio">Portafolio</Link>
          </li>
        </ul>
      </nav>  
      <section>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route path="/portafolio" element={<Portafolio />}>
            <Route path=":proyecto_id" element={<Proyecto />} />
          </Route>
        </Routes>
      </section>
    </div>
  )
}

export default App
