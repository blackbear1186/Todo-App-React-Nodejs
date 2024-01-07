import React, { useState } from "react";
import axios from "axios";
import { TextField,Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';


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
      variant="outlined"
      label="Enter a task"      
      value={task}
      onChange={e => setTask(e.target.value)} 
      autoFocus
    />


      {/* <Button variant="contained" onClick={handleTask}>Add</Button> */}
      <AddBoxRoundedIcon
        fontSize="large"
        color="success"
        className="add"
      />
    </>
  );
}

export default TodoForm;
