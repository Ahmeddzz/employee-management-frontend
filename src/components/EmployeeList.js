import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeService from "../services/EmployeeService";
import Employee from "./Employee";
import EmployeeListHeader from "./EmployeeListHeader";

function EmployeeList() {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadEmployees = async () => {
    setLoading(true);
    try {
      const response = await EmployeeService.getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  const deleteEmployee = (e, id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((response) => {
      if (employees) {
        setEmployees((employees) => {
          return employees.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  useEffect(() => {
    loadEmployees();
  }, []);
  return (
    <div className=" container mx-auto justify-center my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white text-xl px-6 py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b mt-2">
        <table className="min-w-full">
          <EmployeeListHeader />
          {!loading && (
            <tbody>
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmployee={deleteEmployee}
                  key={employee.id}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
}

export default EmployeeList;
