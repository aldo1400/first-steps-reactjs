import React,{Component} from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter

} from 'react-router-dom'

const fakeAuth={
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

    }

    render(){
        if(){

        }
        else{

        }
    }
}

const AuthSite=()=>(
    <Router>
        <div>
            <AuthButton />
            <ul>
                <li><Link to="/">Home</Link>Home</li>
                <li><Link to="/public">Home</Link></li>
                <li><Link to="/protected">Home</Link></li>
            </ul>
            <switch>
                <Route path="/" exact component={Home} />
                <Route path="/public" exact component={Public} />               
                <PrivateRoute path="/protected" component={Protected}/>
            </switch>
        </div>
    </Router>
)

export default AuthSite