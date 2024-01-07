import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";

function TodoForm() {
  const [task, setTask] = useState();

  const handleTask = async () => {
    await axios
      .post("http://localhost:5000/add", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <TextField
        variant="filled"
        label="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        autoFocus
        size="small"
      />

      <IconButton onClick={handleTask}>
        <AddBoxRoundedIcon fontSize="large" sx={{ color: "green" }} />
      </IconButton>
    </>
  );
}

export default TodoForm;
