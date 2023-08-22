import { Outlet, Routes, Route, Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <h1>Inicio</h1>
  )
}

const Proyecto1 = () => {
  return (
    <h2>Proyecto 1</h2>
  )
}

const Proyecto2 = () => {
  return (
    <h2>Proyecto 2</h2>
  )
}

const Portafolio = () => {
  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to="/portafolio/proyecto-1">Proyecto 1</Link>
        </li>
        <li>
          <Link to="/portafolio/proyecto-2">Proyecto 2</Link>
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
            <Route path="proyecto-1" element={<Proyecto1 />} />
            <Route path="proyecto-2" element={<Proyecto2 />} />
          </Route>
        </Routes>
      </section>
    </div>
  )
}

export default App
