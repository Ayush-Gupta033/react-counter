import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { AppBar, Typography, Breadcrumbs } from "@mui/material";
import Home from "../pages/Home";
import Counter from "../pages/Counter";
import Todo from "../pages/Todo";
import Task from "../pages/Task";
import HomeIcon from "@mui/icons-material/Home";

function RouterTest() {
  return (
    <AppBar position="static">
      <Typography variant="h6">My Apps</Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/" element={<Home />} >
          Home
        </Link>
        <Link to="/about" element={<Counter />}>
          Counter
        </Link>
        <Link to="/todo" element={<Todo />}>
          Todo
        </Link>
        <Link to="/task" element={<Task />}>
          Task
        </Link>
      </Breadcrumbs>
    </AppBar>
  );
}

export default RouterTest;
