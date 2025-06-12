
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const logo = "/v5.png";

function Header() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.length;

  return (
    <header className="bg-blanc-coco py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Partie gauche */}
        <div className="flex space-x-6 items-center">
          <Link to="/" className="font-semibold text-noir-cacao-doux hover:underline">
            Menu
          </Link>
          <Link to="/notre-histoire" className="font-semibold text-noir-cacao-doux hover:underline">
            Notre histoire
          </Link>
        </div>

        {/* Logo au centre */}
        <div className="flex justify-center">
          <img src={logo} alt="Ouvéa" className="h-10" />
        </div>

        {/* Partie droite */}
        <div className="flex items-center space-x-6">
          <Link to="/contact" className="font-semibold text-noir-cacao-doux hover:underline">
            Contact
          </Link>
          <Link to="/login" className="border border-ocre-dore px-4 py-1 rounded-full text-noir-cacao-doux font-semibold hover:bg-ocre-dore/20 transition">
            Connexion
          </Link>
          <Link to="/panier" className="relative text-noir-cacao-doux">
            <FaShoppingCart className="text-xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
