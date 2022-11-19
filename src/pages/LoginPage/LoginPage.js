import React from "react";
import gambar from "../../assets/undraw_login_re_4vu2.svg";
import { LogoutPage } from "../LogoutPage/LogoutPage";
import { useLoginPage } from "./useLoginPage";

export const LoginPage = () => {
  const { setEmail, setPassword, isUserLoggedIn, loginAcces } = useLoginPage();

  return isUserLoggedIn ? (
    <LogoutPage />
  ) : (
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
          onChange={(val) => setPassword(val.target.value)}
        />
        <div className="button" onClick={loginAcces}>
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
