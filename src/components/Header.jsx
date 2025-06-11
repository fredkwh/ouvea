
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-sable-chaud shadow-md">
      <Link to="/">
        <img src="/v5.png" alt="Logo Ouvéa" className="h-10 sm:h-12" />
      </Link>

      <nav className="flex-1 flex justify-center space-x-6 text-noir-cacao-doux font-medium">
        <Link to="/" className="hover:text-ocre-dore transition">Menu</Link>
        <Link to="/notre-histoire" className="hover:text-ocre-dore transition">Notre histoire</Link>
        <Link to="/contact" className="hover:text-ocre-dore transition">Contact</Link>
      </nav>

      <div className="flex items-center space-x-4">
        <Link to="/panier" className="hover:text-ocre-dore transition text-xl">🛒</Link>
        <Link to="/login" className="hover:text-ocre-dore transition text-sm border border-ocre-dore px-3 py-1 rounded-full">
          Connexion
        </Link>
      </div>
    </header>
  );
}
