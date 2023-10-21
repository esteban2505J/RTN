import React from "react";
import Home from "./pages/Home";
// import home from "./pages/home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/studentPage";
import TeacherPage from "./pages/TecherPage";

function App() {
  // const route = new Router();
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/studentPage" element={<StudentPage />} />
            <Route path="/teacherPage" element={<TeacherPage />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
