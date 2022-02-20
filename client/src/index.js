import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "react-loading-skeleton/dist/skeleton.css";
import "./App.css";
import ErrorPage from "./pages/404";
import HomePage from "./pages/Home.jsx";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import BlogPage from "./pages/Blog";
import ProjectPage from "./pages/Project";
import BBHUB from "./pages/BBHUB";

const appRouting = (
  <BrowserRouter>
    <Routes>
      <Route element={<HomePage></HomePage>} exact path="/"></Route>
      <Route element={<BlogPage></BlogPage>} path="/blog"></Route>
      <Route element={<ProjectPage></ProjectPage>} path="/projects"></Route>
      <Route element={<AboutPage></AboutPage>} path="/about"></Route>
      <Route element={<ContactPage></ContactPage>} path="/contact"></Route>
      <Route element={<BBHUB></BBHUB>} path="/bbhub"></Route>
      <Route element={<ErrorPage></ErrorPage>} path="*"></Route>
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(appRouting, document.getElementById("root"));
