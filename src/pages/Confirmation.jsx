import { Link } from "react-router-dom";

export default function Confirmation() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-6">Merci pour votre commande !</h2>
      <p className="mb-4 text-lg">
        Votre commande a été prise en compte avec succès.
      </p>
      <p className="text-sm text-gray-600 mb-8">
        Un courriel de confirmation vous sera envoyé sous peu.
      </p>
      <Link
        to="/"
        className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
      >
        Retour au menu
      </Link>
    </div>
  );
}