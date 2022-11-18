import { Route, Routes } from "react-router-dom";
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
import {
  PrivateRouteBlockAdmin,
  PrivateRouteAdmin,
  PrivateRouteUser,
} from "./utils/privateRoute";

function App() {
  return (
    <section className="view">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouteBlockAdmin>
              <Tampil />
            </PrivateRouteBlockAdmin>
          }
        >
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
        <Route
          path="*"
          element={
            <PrivateRouteUser>
              <PrivateRouteAdmin>
                <Tampil />
              </PrivateRouteAdmin>
            </PrivateRouteUser>
          }
        />
      </Routes>
    </section>
  );
}

export default App;
