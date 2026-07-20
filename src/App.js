// Carwash\src\App.js

import Navbar from "./components/Navbar";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./Home";

import Service from "./Service";
import Carsize from "./Carsize";
import Login from "./login";
import Signup from "./Signup";
import Booking from "./booking";
import Dashboard from "./dashboard";
import View from "./view";

import Deposit from "./Deposit";
function App() {
  const [user, setUser] = useState(null);

  // Load user data from localStorage on mount
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("userData"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUser(null);
  };

  return (
    <Router>
       <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/Carsize" element={<Carsize />} />
        <Route path="/Service" element={<Service />} />
        
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />

        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/Deposit" element={<Deposit />} />
      </Routes>
    </Router>
  );
}

export default App;
