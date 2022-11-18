import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import gambar from "../data/undraw_login_re_4vu2.svg";
import { setCart } from "../redux/ecom";
import { Logout } from "./logout";

export const Login = () => {
  const navigate = useNavigate();
  const isFill = localStorage.getItem("token");
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const { user } = useSelector((state) => state.persistedReducer.user);
  const dispach = useDispatch();
  const pindah = () => {
    let userFind = user.find(
      (user) => user.val.email === email && user.val.password === pass
    );

    if (userFind) {
      localStorage.setItem("token", userFind.val.username);
      if (userFind.request.length > 0) {
        dispach(setCart(userFind.request));
      }
      if (userFind.role === "admin") {
        localStorage.setItem("role", "admin");
        navigate("/admin");
      } else {
        localStorage.setItem("role", "user");
        navigate("/");
      }
    } else {
      console.log("password atau email salah");
    }
  };

  if (isFill) {
    return <Logout />;
  }
  return (
    <div className="wrapper">
      <img src={gambar} alt="" />
      <div className="login">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          id=""
          placeholder="email"
          onChange={(val) => setEmail(val.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id=""
          placeholder="password"
          onChange={(val) => setPass(val.target.value)}
        />
        <div className="button" onClick={pindah}>
          Login
        </div>
        <p>
          *Jika tidak bisa masuk, pastikan email dan password yang dimasukkan
          sama pada <a href="https://fakestoreapi.com/users">daftar ini</a>
        </p>
      </div>
    </div>
  );
};
