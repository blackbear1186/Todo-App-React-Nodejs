import React, { useState } from "react";
import axios from "axios";

function TodoForm() {
  const [task, setTask] = useState();
  const handleTask = async () => {
    await axios
      .post("http://localhost:5000/add", { task: task })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input type="text" onChange={e => setTask(e.target.value)} placeholder="Enter a task"/>
      <button type="button" onClick={handleTask}>Add</button>
    </div>
  );
}

export default TodoForm;
