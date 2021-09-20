import React, { useState } from 'react';

const Todo = (props) => {
    const[todo,setTodo]=useState(props.data);

function updateTaskStatus(){
    setTodo({...todo, completed : !todo.completed});
    fetch('http://localhost:8080/v1/api/todo/',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(todo),
    })
   
}

    return (
        <React.Fragment >
            <input type="checkbox" checked={todo.completed}  onChange={updateTaskStatus}/>
            <span>{todo.task}</span>
        </React.Fragment>
    );
}

export default Todo;