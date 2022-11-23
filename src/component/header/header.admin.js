import React from "react";
import { useNavigate } from "react-router-dom";

export const Headermin = () => {
  const navigate = useNavigate();
  const logot = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };
  return (
    <div className="header">
      <h3
        style={{
          "&:hover": {
            color: "#efefef",
          },
        }}
        onClick={() => navigate("/admin")}
      >
        Tokopakedi
      </h3>
      <ul>
        <li onClick={() => navigate("/admin")}>Product</li>
        <li onClick={() => navigate("/admin/recap")}>Recap</li>
        <li>User</li>
        <li onClick={logot}>Logout</li>
      </ul>
    </div>
  );
};
