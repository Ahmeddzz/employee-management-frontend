import React from "react";

function EmployeeListHeader() {
  return (
    <thead className="bg-gray-100">
      <tr>
        <th className="header">First Name</th>
        <th className="header">Last Name</th>
        <th className="header">Email</th>
        <th className="header text-right">Actions</th>
      </tr>
    </thead>
  );
}

export default EmployeeListHeader;
