import { Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

export default function CounterFC() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");

  console.log("Count Component CAlled");

  function incrementCount() {
    setCount(count + 1);
    setStatus("INCREMENTED VALUE: ");
  }

  function decrementCount() {
    setCount(count > 0 ? count - 1 : 0);
    setStatus("DECREMENTED VALUE: ");
  }

  function resetCount() {
    setCount(0);
    setStatus("RESET TO: ");
  }

  return (
    <div style={{margin:"35px"}}>
      <Stack spacing={2} alignItems="center">
        <Typography variant="h4">
          COUNTER
        </Typography>

        <Typography variant="h5">{[status, count]}</Typography>
      </Stack>
      <Stack direction={"row"} spacing={2} justifyContent="center">
        <Button variant="contained" color="primary" onClick={incrementCount}>
          INCREMENT
        </Button>
        <Button variant="contained" color="primary" onClick={resetCount}>
          RESET
        </Button>
        <Button variant="contained" color="primary" onClick={decrementCount}>
          DECREMENT
        </Button>
      </Stack>
    </div>
  );
}
