import HomePage from "./pages/Home/Home";
import AboutPage from "./pages/About/About";
import ExamPage from "./pages/Exam/Exam";
import { Routes, Route } from "react-router-dom";
import Document from "./pages/Document/Document";
import Admin from "./pages/Admin/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/thiThu" element={<ExamPage />} />
        <Route path="/taiLieu" element={<Document />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
