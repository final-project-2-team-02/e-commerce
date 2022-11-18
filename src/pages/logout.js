import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { tambah } from "../redux/userredux";
import { resetCart } from "../redux/ecom";

export const Logout = () => {
  const dispach = useDispatch();
  const { product } = useSelector((state) => state.persistedReducer.ecom);

  const { user } = useSelector((state) => state.persistedReducer.user);
  const { val } = user.find(
    (val) => val.val.username === localStorage.getItem("token")
  );
  const navi = useNavigate();
  const log = () => {
    const inilist = [];
    product.forEach((data) => {
      inilist.push(data.cart);
    });
    dispach(tambah(inilist));
    dispach(resetCart());
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navi("/");
  };
  const menu = () => {
    navi("/");
  };
  return (
    <section className="bungkus">
      <div className="ingfo">
        <div className="bulat"></div>
        <div className="nama">{val.username}</div>
        <div className="email">{val.email}</div>
        <div onClick={menu} className="menu">
          Back to menu
        </div>
        <div onClick={log} className="logout">
          Logout
        </div>
      </div>
    </section>
  );
};
