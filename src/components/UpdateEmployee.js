import React, { useState, useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";

export default function UpdateEmployee() {
  const { id } = useParams();
  const updateEmployee = (e) => {
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };
  const fetchData = async () => {
    try {
      const response = await EmployeeService.getEmployeeById(id);
      setEmployee(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const cancel = () => {
    navigate("/");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex flex-col shadow max-w-2xl m-5 border-b  mx-auto p-5">
      <div className="p-8">
        <div className="font-thin text-2xl tracking-wider">
          <h1 className="">Edit Employee</h1>
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
            onClick={updateEmployee}
            className="rounded font-bold bg-green-300 w-full text-white font-large py-1 text-center hover:bg-green-600"
          >
            Update
          </button>
          <button
            onClick={cancel}
            className="rounded font-bold bg-red-300 w-full text-white font-large py-1 text-center hover:bg-red-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
