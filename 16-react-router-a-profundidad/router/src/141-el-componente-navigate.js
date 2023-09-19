import { Outlet, Routes, Route, NavLink, useParams, Navigate } from 'react-router-dom'

const Session  = () => {
  const loggedIn = false

  if (!loggedIn) {
    return (
      <Navigate to="/" replace={true} />
    )
  }

  return (
    <h1>Portafolio</h1>
  )
}

const Inicio = () => {
  return (
    <h1>Inicio</h1>
  )
}

const Perfil = () => {
  return (
    <h1>Perfil</h1>
  )
}

const Proyecto = () => {
  const myId = useParams()
  return (
    <h2>Proyecto {myId.proyecto_id}</h2>
  )
}

const Portafolio = () => {
  return (
    <div>
      <Session />
      <ul>
        <li>
          <NavLink end to="/portafolio/1" style={({ isActive }) => {
              return (
                isActive ? {color: "red", fontWeight: "bold", fontSize: "25px"} : null 
              )
            }}>Proyecto 1</NavLink>
        </li>
        <li>
          <NavLink end to="/portafolio/2" style={({ isActive }) => {
              return (
                isActive ? {color: "red", fontWeight: "bold", fontSize: "25px"} : null 
              )
            }}>Proyecto 2</NavLink>
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
            <NavLink end to="/" style={({ isActive }) => {
              return (
                isActive ? {color: "red", fontWeight: "bold", fontSize: "25px"} : null 
              )
            }}>Inicio</NavLink>
          </li>
          <li>
            <NavLink end to="/perfil" style={({ isActive }) => {
              return (
                isActive ? {color: "red", fontWeight: "bold", fontSize: "25px"} : null 
              )
            }}>Perfil</NavLink>
          </li>
          <li>
            <NavLink end to="/portafolio" style={({ isActive }) => {
              return (
                isActive ? {color: "red", fontWeight: "bold", fontSize: "25px"} : null
              )
            }}>Portafolio</NavLink>
          </li>
        </ul>
      </nav>  
      <section>
        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/perfil" element={<Perfil />} />
          <Route path="/portafolio" element={<Portafolio />}>
            <Route path=":proyecto_id" element={<Proyecto />} />
          </Route>
        </Routes>
      </section>
    </div>
  )
}

export default App
