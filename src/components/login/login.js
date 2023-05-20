import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
const Login = () => {
  const [userData, setUserData] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e, name) => {
    const { value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log({ userData });
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
            onChange={(e) => handleChange(e, "userId")}
          />
        </Grid>
        <Grid item md={12}>
          <TextField
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            onChange={(e) => handleChange(e, "password")}
          />
        </Grid>
        <Button fullWidth onClick={handleSubmit}>
          Login
        </Button>
      </Grid>
    </>
  );
};

export default Login;
