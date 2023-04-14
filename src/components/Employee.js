import React from "react";
import { useNavigate } from "react-router-dom";

function Employee({ employee, deleteEmployee }) {
  const navigate = useNavigate();
  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };
  return (
    <tr>
      <td className="text-left  px-6 py-1 ">
        <div className="text-gray-300">{employee.firstName}</div>
      </td>
      <td className="text-left  px-6 py-1 ">
        <div className="text-gray-300">{employee.lastName}</div>
      </td>
      <td className="text-left  px-6 py-1 ">
        <div className="text-gray-300">{employee.emailId}</div>
      </td>
      <td className="text-right text-sm font-bold space-x-5 px-6 py-1 ">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="text-green-200 hover:text-green-400 cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmployee(e, employee.id)}
          className="text-red-200 hover:text-red-400 cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
}

export default Employee;
