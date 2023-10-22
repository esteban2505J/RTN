//Imports
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/studentPage";
import TeacherPage from "./pages/TecherPage";
import { Sidebar } from "./components/shared/Sidebar";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Sidebar />

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
