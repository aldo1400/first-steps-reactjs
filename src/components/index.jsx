import React,{Component} from 'react'
import uid from 'uid';
import { courses } from '../data/courses.json'
import PropTypes from 'prop-types';
import CoursesList from './CoursesList'
import CourseAddForm from './CourseAddForm';


class App extends Component{
    constructor(...props){
        super(...props)
        this.state={
            courses:courses
        }
        this.handleOnAddCourse=this.handleOnAddCourse.bind(this)
    }
    
    handleOnAddCourse(e){
        // alert('Evento en React');
        e.preventDefault()
        // Obtener datos del formularios, añadirlo al this.state.courses
        let  form=e.target,
        course={
            id:form.id.value,
            name:(form.name.value) ? form.name.value : App.defaultProps.name,
            teacher:(form.teacher.value) ? form.teacher.value : App.defaultProps.teacher,
        }
        // añadir el nuevo curso al objeto courses
        this.setState({
            courses:this.state.courses.concat([course])
        })

        form.reset();
    }

    render(){
        return (
            <div>
            <CourseAddForm onAddCourse={this.handleOnAddCourse} />
            <CoursesList  courses={this.state.courses} />
            </div>
        )
    }
}
App.propTypes={
    // DEFINIR LOS TIPOS DE VARIABLES
    id: PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    teacher:PropTypes.string.isRequired
}

App.defaultProps={
    id:uid(10),
    name:'Curso desconocido',
    teacher:'Profesor no Asignado',
}

export default App 