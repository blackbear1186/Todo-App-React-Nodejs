import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import axios from "axios";
import {nanoid} from 'nanoid'

function Home() {
  const [todos, setTodos] = useState([]);
  // const id = nanoid()

  useEffect(() => {
      axios
        .get("http://localhost:5000/get")
        .then((result) => {
          setTodos(result.data)
        })
        .catch((err) => console.log(err));
    
  },[]);
  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm />
      <ul>
        
      {todos.map((todo) => <li key={''}>{todo.task}</li>)}

        
      </ul>
      
    </div>
  );
}

export default Home;
