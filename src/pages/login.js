import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import gambar from "../data/undraw_login_re_4vu2.svg";
import { setCart } from "../redux/ecom";
import { login } from "../redux/loginredux";
import { tambah } from "../redux/userredux";
import { Logout } from "./logout";
import { Nampil } from "./nampilin";

export const Login = () => {
  const navigate = useNavigate();
  const isFill = localStorage.getItem("token");
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const { product } = useSelector((state) => state.persistedReducer.ecom);
  const { user } = useSelector((state) => state.persistedReducer.user);
  // const { userLogin } = useSelector((state) => state.persistedReducer.data)
  const dispach = useDispatch();
  const pindah = () => {
    // console.log(user);
    user.find((ind) => {
      if (ind.val.email === email) {
        if (ind.val.password === pass) {
          // dispach(login(ind.val))
          localStorage.setItem("token", ind.val.username);
          if (ind.request.length > 0) {
            dispach(setCart(ind.request));
          }
          // dispach(tambah(product))
          if (ind.role === "admin") {
            navigate("/admin");
            localStorage.setItem("role", "admin");
          } else {
            localStorage.setItem("role", "user");
            navigate("/");
          }
        } else {
          console.log("password salah");
        }
      } else {
        console.log("email salah");
      }
    });
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
        {/* <p>{JSON.stringify(user)}</p> */}
      </div>
    </div>
  );
};
