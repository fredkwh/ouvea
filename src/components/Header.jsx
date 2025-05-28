import { Link } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <header className="bg-white border-b border-black py-10 px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo + titre */}
        <div className="text-left leading-tight">
          <h1 className="text-5xl font-bold">BOWL</h1>
          <p className="italic text-xl">and the gang</p>
        </div>

        {/* Navigation */}
        <nav className="flex gap-8 items-center text-xl">
          <Link to="/" className="hover:underline">Menu</Link>
          <Link to="/notre-histoire" className="hover:underline">Notre histoire</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Panier avec compteur texte uniquement */}
        <Link to="/panier" className="flex items-center gap-2 text-lg hover:underline">
          <span className="text-2xl">🛒</span>
          <span className="font-semibold">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
}