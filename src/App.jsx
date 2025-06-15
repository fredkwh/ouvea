import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import NosBols from "./pages/NosBols";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import ValidationCommande from "./pages/ValidationCommande";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MonCompte from "./pages/MonCompte";
import ForgotPassword from "./pages/ForgotPassword";
import EmailConfirm from "./pages/EmailConfirm";
import About from "./pages/About";
import LesBienfaits from "./pages/LesBienfaits";
import Contact from "./pages/Contact";

function App() {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });


  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/panier" element={<Cart />} />
        <Route path="/" element={<NosBols />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route path="/mon-compte" element={<MonCompte user={user} setUser={setUser} />} />
        <Route path="/mot-de-passe-oublie" element={<ForgotPassword />} />
        <Route path="/confirmation-email" element={<EmailConfirm />} />
        <Route path="/notre-histoire" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/les-bienfaits" element={<LesBienfaits />} />
      </Routes>
    </Router>
  );
}

export default App;
