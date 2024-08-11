import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Flashcard from "./components/cards/Flashcard";
import AdminDashboard from "./components/admin/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/" element={<Flashcard />} />
      </Routes>
    </Router>
  );
};

export default App;
