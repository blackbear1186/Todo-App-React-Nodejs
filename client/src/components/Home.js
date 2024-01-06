import React, { useState } from "react";
import TodoForm from './TodoForm'

function Home() {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h2>Todo List</h2>
      <TodoForm />
      {todos.length === 0 ? (
        <h2>No Record</h2>
      ) : (
        todos.map((todo) => <div>{todo}</div>)
      )}
    </div>
  );
}

export default Home;
