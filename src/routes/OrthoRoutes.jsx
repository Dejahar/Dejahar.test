import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../ui/Navbar";
import { Main } from "../pages/Main/Main";
import {Footer} from "../ui/Footer";
import Services from "../pages/Services/Services";
import Tutoring from "../pages/Tutoring/Tutoring";
import About from "../pages/About/About";
import Calendar from "../pages/Calendar/Calendar";

function OrthoRoutes() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Services" element={<Services />} />
        <Route path="Tutoring" element={<Tutoring />} />
        <Route path="About" element={<About />} />
        <Route path="Calendar" element={<Calendar />} />
      </Routes>

      <Footer />
    </>
  );
}

export default OrthoRoutes;
