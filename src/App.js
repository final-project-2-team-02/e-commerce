import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { Content } from "./component/content";
import { Admin } from "./pages/admin";
import { Cart } from "./pages/cart";
import { Tampil } from "./pages/coba";
import { CobaAdmin } from "./pages/cobaAdmin";
import { Detail } from "./pages/detail";
import { Login } from "./pages/login";
import { Nampil } from "./pages/nampilin";
import { Recap } from "./pages/recap/recap";
import "./style/style.css";

function App() {
  return (
    <section className="view">
      <Routes>
        <Route path="/" element={<Tampil />}>
          <Route index element={<Content />} />
          <Route path="/:id" element={<Detail />} />
          <Route
            path="/cart"
            element={
              <PrivateRouteUser>
                <Cart />
              </PrivateRouteUser>
            }
          />
        </Route>
        <Route
          path="/admin"
          element={
            <PrivateRouteAdmin>
              <CobaAdmin />
            </PrivateRouteAdmin>
          }
        >
          <Route index element={<Admin />} />
          <Route
            path="recap"
            element={
              <PrivateRouteAdmin>
                <Recap />
              </PrivateRouteAdmin>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/tampil" element={<Nampil />} />
        <Route path="*" element={<Tampil />} />
      </Routes>
    </section>
  );
}

export default App;

const PrivateRouteUser = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  console.log(role);
  return token && role === "user" ? (
    children
  ) : token && role === "admin" ? (
    <Navigate to={"/admin"} />
  ) : (
    <Navigate to={"/"} />
  );
};

const PrivateRouteAdmin = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  return token && role === "admin" ? children : <Navigate to={"/"} />;
};
