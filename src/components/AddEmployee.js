import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

function AddEmployee() {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();
  var oneOrMoreFieldsAreEmpty = true;

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    checkIfThereIsAnEmptyField();
    !oneOrMoreFieldsAreEmpty &&
      EmployeeService.saveEmployee(employee)
        .then((response) => {
          console.log(response.data);
          console.log("Empty: " + oneOrMoreFieldsAreEmpty);
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
  };

  const checkIfThereIsAnEmptyField = () => {
    employee.firstName === "" ||
    employee.lastName === "" ||
    employee.emailId === ""
      ? (oneOrMoreFieldsAreEmpty = true)
      : (oneOrMoreFieldsAreEmpty = false);
  };

  const clearCells = (e) => {
    e.preventDefault(); // to prevent page refresh

    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  };
  return (
    <div className="flex flex-col shadow max-w-2xl m-5 border-b  mx-auto p-5">
      <div className="p-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1 className="">Add new Employee</h1>
        </div>
      </div>

      <div className="mt-3 justify-center items-center mx-auto">
        <div className="h-10 ">
          <input
            className="bg-gray-200 px-2 py-1 border border-cyan-300 rounded-lg "
            type="text"
            name="firstName"
            value={employee.firstName}
            onChange={(e) => handleChange(e)}
            placeholder="First Name"
          ></input>
        </div>
        <div className="h-10 ">
          <input
            className="bg-gray-200 px-2 py-1 border border-cyan-300 rounded-lg"
            type="text"
            name="lastName"
            value={employee.lastName}
            onChange={(e) => handleChange(e)}
            placeholder="Last Name"
          ></input>
        </div>
        <div className="h-10 ">
          <input
            className="bg-gray-200 px-2 py-1 border border-cyan-300 rounded-lg"
            type="text"
            name="emailId"
            value={employee.emailId}
            onChange={(e) => handleChange(e)}
            placeholder="Email"
          ></input>
        </div>

        <div className="h-10 flex space-x-2 mt-2">
          <button
            onClick={saveEmployee}
            className="rounded font-bold bg-green-300 w-full text-white font-large py-1 text-center hover:bg-green-600"
          >
            Save
          </button>
          <button
            onClick={clearCells}
            className="rounded font-bold bg-red-300 w-full text-white font-large py-1 text-center hover:bg-red-600"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddEmployee;
