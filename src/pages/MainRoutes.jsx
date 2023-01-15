import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import CreateNote from "./CreateNote";
import Notes from "./Notes";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allnotes" element={<Notes />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createnote" element={<CreateNote />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
