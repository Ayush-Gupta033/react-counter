import React, { useState, useEffect } from "react";
import { Button, Stack, TextField, Typography } from "@mui/material";

function Task() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  const handleButtonClick = () => {
    setList([...list, inputValue]);
    setInputValue("");
    console.log(list);
  };

  useEffect(() => {
    console.log("Case 1: I am rendered everytime ");
  });

  useEffect(() => {
    console.log("Case 2: I am rendered At First === DidMount");
  }, []);

  useEffect(() => {
    console.log(
      "Case 3: Rendered At First + On Dependency update === DidUpdate"
    );
  }, [inputValue]);

  return (
    <div style={{margin:"35px"}}>
      <Stack spacing={2} alignItems={"center"}>
        <Typography variant="h3">Task 1</Typography>
        <TextField
          id="outlined-basic"
          label="Please enter something.."
          variant="outlined"
          color="success"
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="success" onClick={handleButtonClick}>
          Add
        </Button>

        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </Stack>
    </div>
  );
}

export default Task;
