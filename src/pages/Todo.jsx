import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@mui/material";

import DeleteIcon from '@mui/icons-material/Delete';
// bimport EditIcon from '@mui/icons-material/Edit';


export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleTaskInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };
// Test: The Task that is not equal to the index should be stored, eliminating the index that matches it 
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((task, i) => i !== index));
  };

//   const handleEditTask = (index) => {
//     const newTask = window.prompt("Edit Task", tasks[index]);
//     if (newTask !== null && newTask !== "") {
//       const newTasks = [...tasks];
//       newTasks[index] = newTask;
//       setTasks(newTasks);
//     }
//   };

  return (
    <div style={{ margin: "50px auto", maxWidth: "500px" }}>
        <Typography variant="h3">
        Todo App
        </Typography>
      <TextField
        label="Add Task ..."
        variant="outlined"
        fullWidth
        margin="normal"
        value={taskInput}
        onChange={handleTaskInputChange}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            <ListItemText primary={task} />
            <ListItemSecondaryAction>
              {/* <IconButton edge="end" onClick={() => handleEditTask(index)}>
                <EditIcon />
              </IconButton> */}
              <IconButton edge="end" onClick={() => handleDeleteTask(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}


