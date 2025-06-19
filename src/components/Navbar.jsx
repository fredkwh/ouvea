
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const logo = "/v5.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-blanc-coco py-4 shadow-md relative z-50">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between md:justify-center relative">
        {/* Burger mobile à gauche */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-noir-cacao-doux text-2xl absolute left-4"
        >
          ☰
        </button>

        {/* Logo centré */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={logo} alt="Ouvéa" className="h-10" />
          </Link>
        </div>

        {/* Partie droite (desktop uniquement) */}
        <div className="hidden md:flex w-full justify-between items-center text-noir-cacao-doux font-semibold">
          <div className="flex gap-6">
            <Link to="/">Nos Bols</Link>
            <Link to="/les-bienfaits">Les bienfaits</Link>
          </div>
          <div className="flex gap-6 items-center">
            <Link to="/notre-histoire">Notre histoire</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login" className="relative">
              <FaUser className="text-xl" />
            </Link>
            <Link to="/panier" className="relative">
              <FaShoppingCart className="text-xl" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Menu mobile plein écran */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-blanc-coco border-t border-ocre-dore py-6 px-6 shadow-lg flex flex-col gap-4 text-noir-cacao-doux font-medium z-50">
          <Link to="/" onClick={() => setIsOpen(false)}>Nos Bols</Link>
          <Link to="/les-bienfaits" onClick={() => setIsOpen(false)}>Les bienfaits</Link>
          <Link to="/notre-histoire" onClick={() => setIsOpen(false)}>Notre histoire</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/login" onClick={() => setIsOpen(false)}>
            <div className="flex items-center gap-2">
              <FaUser className="text-xl" /> Mon compte
            </div>
          </Link>
          <Link to="/panier" onClick={() => setIsOpen(false)}>
            <div className="flex items-center gap-2 relative">
              <FaShoppingCart className="text-xl" /> Panier
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}
