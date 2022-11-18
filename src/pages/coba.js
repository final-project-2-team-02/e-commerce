import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../component/header/header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "../style/style.css";

export const Tampil = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
