import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "../ui";
import { Main, Services, Tutoring, About, Calendar } from "../pages";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Services" element={<Main />} />
        <Route path="Tutoring" element={<Tutoring />} />
        <Route path="About" element={<About />} />
        <Route path="Calendar" element={<Calendar />} />
        <Route path="*" element={ <Main />} />
      </Routes>
      <Footer />
    </>
  );
};
