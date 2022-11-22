import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Content } from "./component/content";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";
import { CartPage } from "./pages/CartPage/CartPage";
import { DetailsProduct } from "./pages/DetailsProduct/DetailsProduct";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Tampil } from "./pages/coba";
import { CobaAdmin } from "./pages/cobaAdmin";
import { Nampil } from "./pages/nampilin";
import { SalesDataPage } from "./pages/SalesDataPage/SalesDataPage";
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
          <Route path="/:id" element={<DetailsProduct />} />
          <Route
            path="/cart"
            element={
              <PrivateRouteUser>
                <CartPage />
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
          <Route index element={<AdminDashboard />} />
          <Route
            path="recap"
            element={
              <PrivateRouteAdmin>
                <SalesDataPage />
              </PrivateRouteAdmin>
            }
          />
        </Route>
        <Route path="/login" element={<LoginPage />} />
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
