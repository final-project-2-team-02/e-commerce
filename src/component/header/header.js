import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const isFill = localStorage.getItem("token");
  const navigate = useNavigate();

  return (
    <div className="header">
      <Link to="/">
        <h3>Tokopakedi</h3>
      </Link>
      <div className="navbar-menu">
        <Link to="/men">Men</Link>
        <Link to="/women">Women</Link>
        <Link to="/electronic">Electronic</Link>
        <Link to="/jewelry">Jewelry</Link>
      </div>
      {isFill ? (
        <div className="dia">
          <img
            alt="cart"
            onClick={() => navigate("/cart")}
            src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
          />
          <Link to="/login">
            <div className="avatar"></div>
          </Link>
        </div>
      ) : (
        <Link to="/login">
          <div className="fitur">masuk</div>
        </Link>
      )}
    </div>
  );
};
