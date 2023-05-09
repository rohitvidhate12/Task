import { Button, Grid, TextField } from "@mui/material";
import React from "react";
const Login = () => {
  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          width: 600,
          border: "1px solid black",
          ml: "30%",
          mt: "8%",
          p: 5,
        }}
      >
        <Grid item md={12}>
          <TextField
            required
            fullWidth
            id="userId"
            label="UserId"
            name="userId"
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
          />
        </Grid>
        <Button fullWidth>Login</Button>
      </Grid>
    </>
  );
};

export default Login;
