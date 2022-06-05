import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LinkPage from "./components/LinkPages/LinkPage";
import "./index.css";
import Main from "./Main";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/btn" element={<LinkPage />}></Route>
    </Routes>
  </BrowserRouter>
);
