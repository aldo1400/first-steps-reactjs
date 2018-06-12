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
      <Route path="/" component={Home}/>
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

const Contacto=({match})=>(
    <div>
        <h2>Informacion de contacto</h2>
        <Route path={`${match.url}/:contactoInfo`} component={InfoContacto}/>
        <Route exact path={match.url} render={()=>(
            <h3>Mantente en contacto</h3>
        )}

        />
        <ul>
            <li><Link to={`${match.url}/email`}>Email</Link></li>
            <li><Link to={`${match.url}/web`}>Sitio Web</Link></li>
            <li><Link to={`${match.url}/ubicación`}>Ubicación</Link></li>
        </ul>
        
        <Route path={`${match.url}/email`} render={()=>(
            <a href="mailto:jonmircha@gmail.com" target="_blank">jonmircha@gmail.com</a>
        )}/>

        <Route path={`${match.url}/web`} render={()=>(
            <a href="http://jonmircha.com" target="_blank">jonmircha.com</a>
        )}/>

        <Route path={`${match.url}/ubicación`} render={()=>(
            <a href="#" target="_blank">Mexico,CDMX</a>
        )}/>

    </div>
)

const InfoContacto=({match})=>(
    <div>
        <h4>{match.params.contactoInfo}</h4>
        </div>
   )

export default StaticSite