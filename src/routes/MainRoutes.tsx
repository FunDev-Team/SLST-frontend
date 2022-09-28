import HomePage from "../pages/Home/Home";
import AboutPage from "../pages/About/About";
import ExamPage from "../pages/Exam/Exam";
import { Routes, Route } from "react-router-dom";
import Document from "../pages/Document/Document";
import Admin from "../pages/Admin/Admin";

const MainRoutes=()=>{
    return (
        <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/test" element={<ExamPage />} />
        <Route path="/document" element={<Document />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    )
}

export default MainRoutes;