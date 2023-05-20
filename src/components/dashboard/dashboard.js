import { useState } from "react";
import EmployeeForm from "../employees/employeeForm";
import EmployeeList from "../employees/employeeList";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const empData = [
  {
    id: 1,
    employeeNo: "0081",
    firstName: "Ramesh",
    lastName: "Soni",
    designationId: 1,
    salary: "4.5",
  },
  {
    id: 2,
    employeeNo: "0082",
    firstName: "Mahesh",
    lastName: "Patil",
    designationId: 1,
    salary: "6.5",
  },
  {
    id: 3,
    employeeNo: "0083",
    firstName: "Rohan",
    lastName: " Shah",
    designationId: 3,
    salary: "5.5",
  },
  {
    id: 4,
    employeeNo: "0084",
    firstName: "Suresh",
    lastName: "Singh",
    designationId: 2,
    salary: "4.5",
  },
  {
    id: 5,
    employeeNo: "0085",
    firstName: "Mahesh",
    lastName: "Patel",
    designationId: 4,
    salary: "6.5",
  },
  {
    id: 6,
    employeeNo: "0086",
    firstName: "Rohit",
    lastName: " Shinde",
    designationId: 2,
    salary: "5.5",
  },
  {
    id: 7,
    employeeNo: "0087",
    firstName: "Akshay",
    lastName: "kakde",
    designationId: 1,
    salary: "4.5",
  },
  {
    id: 8,
    employeeNo: "0088",
    firstName: "Yogesh",
    lastName: "Shinde",
    designationId: 4,
    salary: "6.5",
  },
  {
    id: 9,
    employeeNo: "0089",
    firstName: "Omkar",
    lastName: "Soni",
    designationId: 4,
    salary: "4.5",
  },
  {
    id: 10,
    employeeNo: "0090",
    firstName: "Milind",
    lastName: "Jadhav",
    designationId: 3,
    salary: "6.5",
  },
  {
    id: 11,
    employeeNo: "0091",
    firstName: "Rohan",
    lastName: "Kazi",
    designationId: 2,
    salary: "5.5",
  },
];

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [employeeList, setEmployeeList] = useState(empData);
  const [employee, setEmployee] = useState(null);

  const handleAdd = () => {
    // open employee form for add
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setEmployee(null);
  };

  const handleSubmit = (data) => {
    console.log("add", data);
    let newList = [...employeeList];
    if (employee) {
      // edit employee to list
      const index = employeeList.findIndex((e) => e.id === employee.id);
      newList[index] = { ...data };
    } else {
      // add employee to list
      newList = [...employeeList, { ...data }];
    }
    setEmployeeList(newList);
    setVisible(false);
    setEmployee(null);
  };

  const handleEdit = (data) => {
    // open employee form for edit
    setEmployee(data);
    setVisible(true);
  };

  const handleDelete = (data) => {
    // open delete confirmation dialog and set data
    setEmployee(data);
    setShowDialog(true);
  };

  const handleOk = (data) => {
    // delete from list
    const newList = employeeList.filter((x) => x.id !== employee.id);
    setEmployeeList(newList);
    setShowDialog(false);
    setEmployee(null);
  };

  return (
    <>
      {visible ? (
        <EmployeeForm
          data={employee}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      ) : (
        <EmployeeList
          data={employeeList}
          onAdd={handleAdd}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Delete Employee"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this record?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOk}>Ok</Button>
          <Button onClick={() => setShowDialog(false)} autoFocus>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Dashboard;
