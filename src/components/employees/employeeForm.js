import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState, useEffect } from "react";

export const designationList = [
  {
    designationId: 1,
    designation: "SD",
  },
  {
    designationId: 2,
    designation: "QA",
  },
  {
    designationId: 3,
    designation: "BA",
  },
  {
    designationId: 4,
    designation: "HR",
  },
];

const EmployeeForm = ({ data, onCancel, onSubmit }) => {
  const [employeeData, setEmployeeData] = useState({
    employeeNo: "",
    firstName: "",
    lastName: "",
    designationId: "",
    resume: [""],
    salary: "",
  });

  useEffect(() => {
    if (data) {
      setEmployeeData(data);
    }
  }, [data]);

  const handleChange = (e, name) => {
    const { value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmit = () => {
    console.log({ employeeData });
    onSubmit(employeeData);
  };
  return (
    <>
      <Box>
        <Grid
          container
          sx={{
            width: 700,
            border: "1px solid black",
            padding: 2,
            flexDirection: "column",
            alignItems: "start",
            ml: "30%",
            mt: "3%",
          }}
          spacing={2}
        >
          <Grid item md={12}>
            <TextField
              id="employeeNo"
              label="Employee No"
              name="employeeNo"
              onChange={(e) => handleChange(e, "employeeNo")}
              value={employeeData.employeeNo || ""}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 1, p: 2 }}>
            <Grid item md={6}>
              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                onChange={(e) => handleChange(e, "firstName")}
                value={employeeData.firstName || ""}
              />
            </Grid>
            <Grid item md={6}>
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                onChange={(e) => handleChange(e, "lastName")}
                value={employeeData.lastName || ""}
              />
            </Grid>
          </Grid>
          <Grid item md={12}>
            <FormControl sx={{ width: 600 }}>
              <InputLabel htmlFor="designation">Designation</InputLabel>
              <Select
                labelId="designation"
                id="designation"
                label="Designation"
                onChange={(e) => handleChange(e, "designationId")}
                value={employeeData.designationId || ""}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {designationList.map(({ designationId, designation }) => {
                  return (
                    <MenuItem key={designationId} value={designationId}>
                      {designation}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>

          <Grid item md={12}>
            <TextField
              id="salary"
              label="Salary"
              name="salary"
              onChange={(e) => handleChange(e, "salary")}
              value={employeeData.salary || ""}
            />
          </Grid>
          <Grid item md={12} sx={{ mt: 1, mb: 2 }}>
            <Input
              id="resume"
              label="Resume"
              name="resume"
              type="file"
              onChange={(e) => handleChange(e, "resume")}
              // value={employeeData.resume}
            />
          </Grid>
          <Grid container sx={{ mt: 1 }}>
            <Grid item md={6}>
              <Button variant="contained" onClick={handleSubmit}>
                Save
              </Button>
            </Grid>
            <Grid md={6}>
              <Button variant="contained" onClick={onCancel}>
                Cancel
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default EmployeeForm;
