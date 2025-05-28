import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import CommandSite from "./components/CommandSite";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";

export default function App() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <Router>
      <Header cartCount={cart.length} />
      <div className="p-8">
        <Routes>
          <Route path="/" element={<CommandSite cart={cart} setCart={setCart} />} />
          <Route path="/notre-histoire" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/panier" element={<Cart cart={cart} setCart={setCart} />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
      </div>
    </Router>
  );
}