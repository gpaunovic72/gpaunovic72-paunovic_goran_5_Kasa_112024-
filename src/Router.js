import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import AboutPage from "./pages/AboutPage";
import DescriptionPage from "./pages/DescriptionPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
