import logo from './logo.png';
import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';
import Todo from './components/Todo.js'

function App() {

  const [todos, setTodos] = useState(null);
  const[todo,setTodo]=useState(null);

  useEffect(() => {
    console.log("Loaded up!")
    if (todos == null) {
      fetch('http://localhost:8080/v1/api/todo/').then(response => {
        response.json().then(todoList => {
          console.log(todoList);
          setTodos(todoList);
        })
      })
    }
  });




  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1>TODO APPLICATION</h1><div>
          <input type="text" id="todoInput" placeholder="View add tasks via backend" />
          <input type="submit" value="+" className="btn" style={{flex: '10'}}/>
          {todos ? todos.map((todo) => {
            return (
              <p><Todo key={todo.id} data={todo} /></p>
            );
          }) : <div>Nothing yet!</div>}
        </div>
      </header>
    </div>
  );

}

export default App;
