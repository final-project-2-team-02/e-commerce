import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage/HomePage";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";
import { CartPage } from "./pages/CartPage/CartPage";
import { DetailsProduct } from "./pages/DetailsProduct/DetailsProduct";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { UserOutlet } from "./pages/UserOutlet";
import { AdminOutlet } from "./pages/AdminOutlet";
import { SalesDataPage } from "./pages/SalesDataPage/SalesDataPage";

import MenClothPage from "./pages/CategoryPage/MenClothPage";
import WomensClothPage from "./pages/CategoryPage/WomensClothPage";
import ElectronicsPage from "./pages/CategoryPage/ElectronicsPage";
import JewelryPage from "./pages/CategoryPage/JewelryPage";

import {
  PrivateRouteBlockAdmin,
  PrivateRouteAdmin,
  PrivateRouteUser,
} from "./utils/privateRoute";

import "./style/style.css";
import "./App.css";


function App() {
  return (
    <section className="view">
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouteBlockAdmin>
              <UserOutlet />
            </PrivateRouteBlockAdmin>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<DetailsProduct />} />
          <Route
            path="/cart"
            element={
              <PrivateRouteUser>
                <CartPage />
              </PrivateRouteUser>
            }
          />
          <Route path="/men" element={<MenClothPage />} />
          <Route path="/women" element={<WomensClothPage />} />
          <Route path="/electronic" element={<ElectronicsPage />} />
          <Route path="/jewelry" element={<JewelryPage />} />
        </Route>
        <Route
          path="/admin"
          element={
            <PrivateRouteAdmin>
              <AdminOutlet />
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

        <Route
          path="*"
          element={
            <PrivateRouteUser>
              <PrivateRouteAdmin>
                <UserOutlet />
              </PrivateRouteAdmin>
            </PrivateRouteUser>
          }
        />
      </Routes>
    </section>
  );
}

export default App;
