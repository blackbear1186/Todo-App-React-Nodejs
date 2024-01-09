import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, IconButton, FormControl, Input } from "@mui/material";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import SaveIcon from "@mui/icons-material/Save";

function TodoForm({ isEditing, id }) {
  const [task, setTask] = useState("");
  const [newTask, setNewTask] = useState("");
  const [edit, setEdit] = useState(false);

  const handleTask = async () => {
    await axios
      .post("http://localhost:5000/add", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  const keydown = async (e) => {
    if (e.key === "Enter") {
      await axios
        .post("http://localhost:5000/add", { task: task })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  };

  const editTask = async (id, newTask) => {
    await axios
      .put(`http://localhost:5000/update/${id}`, { task: newTask })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };
  const HandleSubmitEdit = (e) => {
    e.preventDefault();
    editTask(id, newTask);
    setNewTask("");
    window.location.reload();
  };
  const keydownEdit = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      editTask(id, newTask);
      setNewTask("");
      window.location.reload();
    }
  };

  useEffect(() => {
    isEditing === true ? setEdit(true) : setEdit(false);
  }, [isEditing]);

  const saveTemplate = (
    <FormControl
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <Input
        label="Enter a task"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => keydownEdit(e)}
        autoFocus
      />
      <IconButton onClick={(e) => HandleSubmitEdit(e)}>
        <SaveIcon />
      </IconButton>
    </FormControl>
  );

  const viewTemplate = (
    <FormControl
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <TextField
        variant="filled"
        label="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={keydown}
        autoFocus
        size="small"
      />

      <IconButton onClick={handleTask}>
        <AddBoxRoundedIcon fontSize="large" sx={{ color: "green" }} />
      </IconButton>
    </FormControl>
  );
  return <>{edit === true ? saveTemplate : viewTemplate}</>;
}

export default TodoForm;
