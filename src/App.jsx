
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import ValidationCommande from "./pages/ValidationCommande";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MonCompte from "./pages/MonCompte";
import ForgotPassword from "./pages/ForgotPassword";
import EmailConfirm from "./pages/EmailConfirm";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NosBols from "./pages/NosBols";
import LesBienfaitsCarousel from "./pages/LesBienfaitsCarousel";

function App() {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<NosBols cart={cart} setCart={setCart} />} />
        <Route path="/panier" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/validation" element={<ValidationCommande />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/moncompte" element={<MonCompte user={user} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/confirm-email" element={<EmailConfirm />} />
        <Route path="/notre-histoire" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/les-bienfaits" element={<LesBienfaitsCarousel />} />
      </Routes>
    </Router>
  );
}

export default App;
