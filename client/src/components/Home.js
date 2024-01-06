import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import axios from "axios";

function Home() {
  const [todos, setTodos] = useState([]);
  // const id = nanoid()

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleEdit = (id) => {
    axios
      .put(`http://localhost:5000/update/${id}`)
      .then((result) => {
        // setTodos(result.data);
        console.log(result)
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((result) => {
        window.location.reload()
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container">
      <h2>Todo List</h2>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <button
              type="button"
              className="edit"
              // pass id into function to send to server to update
              onClick={() => handleEdit(todo._id)}
            >
              Done
            </button>
            {todo.task}
            <button type="button" className="del" onClick={() => handleDelete(todo._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
