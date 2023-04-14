import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-800 ">
      <div className="h-25 flex items-center justify-center">
        <button
          onClick={() => navigate("/")}
          className="p-5 font-bold text-2xl text-white"
        >
          Employee Management System
        </button>
      </div>
    </div>
  );
}
