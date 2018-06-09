import React from 'react'

const CourseAddForm=(props)=>(
    <form onSubmit={props.onAddCourse}>
                <input type="text" placeholder="Nombre del curso" name="name" required/>
                <input type="text" placeholder="Profesor" name="teacher" required/>
                <input type="hidden" name="id" value={Math.floor(Math.random()*100)}/>
                <input type="submit" value="Guardar" />
    </form>
)

export default CourseAddForm