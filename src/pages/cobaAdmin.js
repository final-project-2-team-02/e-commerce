import React from "react";
import { Outlet } from "react-router-dom";
import { Headermin } from "../component/header/header.admin";
import "../style/admin.css";

export const CobaAdmin = () => {
  return (
    <section className="view-admin">
      <Headermin />
      <Outlet />
    </section>
  );
};
