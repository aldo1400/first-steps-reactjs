import React,{Component} from 'react'

export default class CoursesList extends Component{
    render(){
        return(
            <div>
            <form>
                <input type="text" placeholder="Nombre del curso" className="name" required/>
                <input type="text" placeholder="Profesor" className="teacher" required/>
                <input type="hidden" className="id" value={Math.floor(Math.random()*100)}/>
                <input type="submit" value="Guardar" />
            </form>
            <ul>
                <li >Curso 1</li>
                <li>Curso 2</li>
            </ul>
            </div>
        )
    }
}