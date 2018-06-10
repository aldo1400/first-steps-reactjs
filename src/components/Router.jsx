import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter

} from 'react-router-dom'


const StaticSite=()=>(
    <Router>
    <div>
      <h1>Primeros pasos con React Router</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/acerca">Acerca</Link></li>
          <li><Link to="/servicios">Servicios</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
      <hr/>
      <Route path="/" component={Home} />
      <Route path="/acerca" component={Acerca} />
      <Route path="/servicios" component={Servicios} />
      <Route path="/contacto" component={Contacto} />
    </div>
  </Router>
)

const Home=()=>(
    <div>
    <h2>Hola bienvenido a mi WebApp React :)</h2>
    </div>
)

const Acerca=()=>(
    <div>
    <h2>Hola soy tu amigo y docente digital Jonathan Mircha</h2>
    </div>
)

const Servicios=()=>(
    <ul>
        <li>Instrucción y Capacitacion Web</li>
        <li>Diseño y desarrollo web</li>
    </ul>
)

const Contacto=()=>(
    <div>
        <h2>Informacion de contacto</h2>
    </div>
)


export default StaticSite