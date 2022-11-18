import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

export const Header = () => {
  const isFill = localStorage.getItem("token");
  const navi = useNavigate();

  return (
    <div className="header">
      <Link to="/">
        <h3>Tokopakedi</h3>
      </Link>
      <div className="searching">
        <input type="text" name="" id="" />
        <img
          alt="key"
          src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png"
        />
      </div>
      {isFill ? (
        <div className="dia">
          <img
            alt="kamu"
            onClick={() => navi("/cart")}
            src="https://img.icons8.com/material-outlined/24/000000/shopping-cart--v1.png"
          />
          <Link to="/login">
            <div classNameName="avatar"></div>
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
