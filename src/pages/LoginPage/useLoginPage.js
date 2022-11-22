import React from "react";
import { setCart } from "../../redux/ecom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useLoginPage = () => {
  const navigate = useNavigate();
  const isUserLoggedIn = localStorage.getItem("token");
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const { user } = useSelector((state) => state.user);
  const dispach = useDispatch();

  const loginAcces = () => {
    let userFind = user.find(
      (user) => user.val.email === email && user.val.password === password
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

  return {
    isUserLoggedIn,
    email,
    setEmail,
    password,
    setPassword,
    user,
    loginAcces,
  };
};
