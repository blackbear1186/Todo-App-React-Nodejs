import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import axios from "axios";
import {
  ListItem,
  ListItemText,
  List,
  Grid,
  Box,
  Checkbox,
  IconButton,
  Paper
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

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
  const handleEdit = async (id) => {
    await axios
      .put(`http://localhost:5000/update/${id}`)
      .then((result) => {
        // setTodos(result.data);
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:5000/delete/${id}`)
      .then((result) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <Box>
      <Grid container spacing={2}>
      <Grid item xs={6} md={6} sx={{ml:'auto', mr:'auto',  mt:'1em',textAlign: 'center', }}>
         <Paper elevation={24} >
         <TodoForm />
          <List className="list" sx={{width: '100%', maxWidth: 762,margin:'auto'}}>
            {todos.map((todo) => (
              <ListItem key={todo._id} className="list-item">
                <Checkbox onChange={() => handleEdit(todo._id)} />

                <ListItemText primary={todo.task} />
                <IconButton>
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(todo._id)}>
                  <DeleteIcon
                    fontSize="small"
                    className="del"
                    color="error"
                  />
                </IconButton>
              </ListItem>
            ))}
          </List>
         </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
