import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import CommandSite from "./components/CommandSite";
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
      <Header cart={cart} user={user} />
      <Routes>
        <Route path="/" element={<CommandSite cart={cart} setCart={setCart} />} />
        <Route path="/panier" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/validation" element={<ValidationCommande cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/mon-compte" element={<MonCompte user={user} setUser={setUser} />} />
        <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />
        <Route path="/confirmation-email" element={<EmailConfirm />} />
        <Route path="/notre-histoire" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
