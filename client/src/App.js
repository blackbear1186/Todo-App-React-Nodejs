import "./App.css";
import Home from "./components/Home";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
import {
  Grid,
  Box,
  Paper,
  Typography,
} from "@mui/material";

function App() {

  const [isEditing, setEditing] = useState(false);
  const [id, setID] = useState('')

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          md={6}
          sx={{ ml: "auto", mr: "auto", mt: "1em", textAlign: "center" }}
        >
          <Paper elevation={24}>
            <Typography sx={{ mt: 4, mb: 2, ml: 2, textAlign:'start' }} variant="h5" component="div">
              Get work done
            </Typography>
            <TodoForm id={id} isEditing={isEditing} setEditing={setEditing}/>
            <Home setID={setID} setEditing={setEditing}/>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
