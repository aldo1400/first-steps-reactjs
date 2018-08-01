import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    Switch,
    withRouter

} from 'react-router-dom'

const fakeAuth={
    // permite manejar si estoy autenticado o no
    isAuthenticated:false,
    authenticate(cb){
        this.isAuthenticated=true,
        setTimeout(cb,100) // SImula,la verificacion de datos
    },
    signout(cb){
        this.isAuthenticated=false,
        setTimeout(cb,100)
    }
}

const Home=()=><h3>Home</h3>
const Public=()=><h3>Contenido Publico</h3>
const Protected=()=><h3>Contenido Protegido</h3>

const AuthButton=withRouter(({history})=>(
    (fakeAuth.isAuthenticated) 
    ?  
    <div>
    <h2>!Bienvenido!:)</h2>
    <button onClick={()=>fakeAuth.signout(()=>history.push('/'))}>
    Salir
    </button>
    </div>
    :
    <h2>!No estas logeado :( !</h2>
))

const PrivateRoute=({component:Component,rest})=>(
    <Route {...rest} render={(props)=>(
        fakeAuth.isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{pathname:'/login',state:{from:props.location}}}/>
    )} 
    />
)

class Login extends Component{
    constructor(...props){
        super(...props)
        this.state={
            redirectRoute:false
        }
        // siempre bindear metodos
        this.login=this.login.bind(this)
    }

    login(){
        fakeAuth.authenticate(()=>this.setState({redirectRoute:true}))
    }

    render(){
        const {from}=this.props.location.state || {from:{pathname:'/'}}
        const {redirectRoute}=this.state;
        if(redirectRoute){
            return(
                <Redirect to={from}/>
            )
        }
        else{
            return(
                <div>
                    <h3>Debes estar logeado para ver esta pagina <mark>{from.pathname}</mark>
                    </h3>
                    <button onClick={this.login}>Log in </button>
                </div>
            )
        }
    }
}

const AuthSite=()=>(
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/public">Pagina publica</Link></li>
                <li><Link to="/protected">Pagina protegida</Link></li>
            </ul>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/public" exact component={Public} />               
                <PrivateRoute path="/protected" component={Protected}/>
                <Route path="/login" component={Login}/>
            </Switch>
        </div>
    </Router>
)

export default AuthSite