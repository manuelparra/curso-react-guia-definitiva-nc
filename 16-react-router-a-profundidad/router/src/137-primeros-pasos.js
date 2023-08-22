import { Switch, Routes, Route, Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <h1>Inicio</h1>
  )
}

const Portafolio = () => {
  return (
    <h1>Portafolio</h1>
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
          <Route path="/portafolio" element={<Portafolio />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
