import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { Tampil } from "./pages/tampil";
import { Content } from "./pages/coba";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

    <ProSidebarProvider>

      <BrowserRouter>
        {/* <App /> */}
        {/* <Market /> */}
        {/* <Tampil /> */}
        <Content />
      </BrowserRouter>
    </ProSidebarProvider>
  </Provider>
  // <ProSidebarProvider>
  //   <Layout />
  // </ProSidebarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
