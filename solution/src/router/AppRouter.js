import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Detail from "../pages/detail/Detail";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import NotFound from "../pages/notfound/NotFound";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="detail" element={<Detail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
