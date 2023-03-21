import React from "react";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div style={{ margin: "35px auto", maxWidth: "500px" }}>
      <Typography variant="h3" color="initial">
        Home
      </Typography>
      <Typography variant="h6" color="initial">
        <p>
          Welcome, this is your home screen! This was made for the purpose of
          routing, in this application you can route to other pages where you
          can make use of applications such Counter, Todo App and a Task App.
        </p>
      </Typography>
    </div>
  );
}
