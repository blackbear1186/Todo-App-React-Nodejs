import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ListItem,
  ListItemText,
  List,
  Checkbox,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Home({ setEditing, setID }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/get")
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = (id) => {
    setID(id);
    setEditing(true);
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((result) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  

  return  (
    <List
      sx={{ width: "100%", maxWidth: 762, margin: "auto" }}
    >
      {todos.map((todo) => (
        <ListItem key={todo._id}>
          <Checkbox />
          <ListItemText primary={todo.task} />
          <IconButton onClick={() => handleEdit(todo._id)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => handleDelete(todo._id)}>
            <DeleteIcon fontSize="small" color="error" />
          </IconButton>
        </ListItem>
      ))}
    </List>
  );
}

export default Home;
