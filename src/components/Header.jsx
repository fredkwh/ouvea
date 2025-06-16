import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const logo = "/v5.png";

function Header() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="bg-blanc-coco py-4 shadow-md">
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between relative">
        {/* Partie gauche */}
        <div className="w-1/3 flex justify-center space-x-6 items-center">
          <Link to="/" className="font-semibold text-noir-cacao-doux hover:underline">
            Nos Bols
          </Link>
          <Link to="/les-bienfaits" className="font-semibold text-noir-cacao-doux hover:underline">
            Les bienfaits
          </Link>
        </div>

        {/* Logo centré absolument */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/">
            <img src={logo} alt="Ouvéa" className="h-10" />
          </Link>
        </div>

        {/* Partie droite */}
        <div className="w-1/3 flex justify-center items-center space-x-6">
          <Link to="/notre-histoire" className="font-semibold text-noir-cacao-doux hover:underline">
            Notre histoire
          </Link>
          <Link to="/contact" className="font-semibold text-noir-cacao-doux hover:underline">
            Contact
          </Link>
          <Link to="/login" className="relative text-noir-cacao-doux">
            <FaUser className="text-xl" />
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