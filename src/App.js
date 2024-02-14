import { React, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage"; // Import the DashboardPage component
import Kanban from "./components/Kanban";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<Kanban />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
