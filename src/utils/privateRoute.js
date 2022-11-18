import { Navigate } from "react-router-dom";

export const PrivateRouteUser = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(role);
  return token && role === "user" ? children : <Navigate to={"/"} />;
};

export const PrivateRouteAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin" ? children : <Navigate to={"/"} />;
};

export const PrivateRouteBlockAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  return !token || token !== "iniadmin" ? children : <Navigate to={"/admin"} />;
};
