
import { Link } from "react-router-dom";
import { ShoppingBag, User } from "lucide-react";

export default function Header({ cart, user }) {
  return (
    <header className="bg-white border-b border-black py-4 px-4 sm:py-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="text-left">
          <h1 className="text-3xl sm:text-4xl font-bold">BOWL</h1>
          <p className="italic text-sm sm:text-lg">and the gang</p>
        </div>

        <nav className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 text-sm sm:text-lg">
          <Link to="/" className="hover:underline">Menu</Link>
          <Link to="/notre-histoire" className="hover:underline">Notre histoire</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link to="/panier" className="flex items-center gap-1 text-sm sm:text-base hover:underline">
            <ShoppingBag className="w-6 h-6" />
            <span className="font-semibold">{cart.length}</span>
          </Link>

          <Link to={user ? "/mon-compte" : "/login"} className="flex items-center gap-1 text-sm sm:text-base hover:underline">
            <User className="w-6 h-6" />
            <span>{user ? "Mon compte" : "Connexion"}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
