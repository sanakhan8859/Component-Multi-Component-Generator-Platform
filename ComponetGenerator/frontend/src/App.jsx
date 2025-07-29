// App.jsx
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import HomeScreen from "./screen/HomeScreen";
import Login from "./screen/Login";
import SignUp from "./screen/SignUp";
import Genrate from "./screen/Genrate";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
  <div className="flex flex-col min-h-screen bg-gray-100">
    <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    

    <main className="flex-grow">
      <Routes>
        <Route path="/" element={<HomeScreen isLoggedIn={isLoggedIn} />} />
        <Route path="/genrate" element={isLoggedIn ? <Genrate /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </main>


    <Footer />
  </div>
</BrowserRouter>

  );
}

export default App;
