//Imports
import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";
import TablePage from "./pages/TablePage";
import { Sidebar } from "./components/shared/Sidebar";
import { AuthProvider } from "./context/AuthContex";

function App() {
  return (
    <>
      <main>
        <AuthProvider>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/studentPage" element={<StudentPage />} />
              <Route path="/teacherPage" element={<TeacherPage />} />
              <Route path="/teacherPage/table" element={<TablePage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </main>
    </>
  );
}

export default App;
