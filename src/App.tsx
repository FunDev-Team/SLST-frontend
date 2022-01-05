/* eslint-disable react/jsx-no-undef */
import React, { useState } from "react";
import { Link } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ExamPage from './pages/Exam';
import { Routes,Route } from "react-router-dom";
import Header from"./components/Header"
import TaiLieu from "./pages/TaiLieu"
import Admin from "./pages/Admin"

function App() {
 
  
  return (
    <div>
      
      
      
      <Header />
      <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/thiThu" element={<ExamPage />} />
      <Route path="/taiLieu" element={<TaiLieu />} />
      <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>

  );
}

export default App;
