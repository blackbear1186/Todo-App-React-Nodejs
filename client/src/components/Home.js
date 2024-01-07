import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import axios from "axios";
import { TextField, Container, ListItem, List, Button, Checkbox } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import EditIcon from '@mui/icons-material/Edit';

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
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((result) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Container className="container">
      <TodoForm />
      <List className="list">
        {todos.map((todo) => (
          <ListItem key={todo._id} className="list-item">
            <Checkbox 
              onChange={() => handleEdit(todo._id)}
            />
            {/* <Button
              variant="contained"
              color="success"
              // pass id into function to send to server to update
              onClick={() => handleEdit(todo._id)}
            >
              Done
            </Button> */}
            {todo.task}
            {/* <Button
              variant="contained"
              color="error"
              className="del"
              onClick={() => handleDelete(todo._id)}
            >
              Delete
            </Button> */}
            <EditIcon 
              color="primary"
            />
            <DeleteIcon 
            fontSize="small"
            className="del"
            color="error"
            onClick={() => handleDelete(todo._id)}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default Home;
