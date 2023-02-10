import { Stack, Button, TextField, Typography } from "@mui/material";
import React from "react";
import "./App.css";

function App() {
  return (
    <Stack
      spacing={3}
      marginLeft={"50px"}
      marginRight={"50px"}
      marginTop={"50px"}
    >
      <Typography align="center" variant={"h4"}>Login form</Typography>
      <Stack spacing={2} direction="row" marginTop={"50px"}>
        <TextField
          variant="outlined"
          label={"First Name"}
          fullWidth
        ></TextField>
        <TextField variant="outlined" label={"Last Name"} fullWidth></TextField>
      </Stack>
      <TextField variant="outlined" label={"Last Name"}></TextField>
    </Stack>
  );
}

export default App;
