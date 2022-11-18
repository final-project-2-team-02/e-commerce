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
import './style/style.css'

function App() {

  return (
    <section className="view">
      <Routes>
        <Route path="/" element={<Tampil />}>
          <Route index element={<Content />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/admin" element={<CobaAdmin />} >
          <Route index element={<Admin />} />
          <Route path="recap" element={<Recap />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/tampil" element={<Nampil />} />
      </Routes>
    </section>
  );
}

export default App;
