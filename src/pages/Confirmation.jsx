import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Confirmation() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("lastOrder");
    if (saved) {
      setOrder(JSON.parse(saved));
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-2xl mx-auto text-center print:p-4 print:bg-white print:text-black">
      <h2 className="text-3xl font-bold mb-6">Merci pour votre commande !</h2>
      <p className="mb-4 text-lg">
        Votre commande a été prise en compte avec succès.
      </p>
      <p className="text-sm text-gray-600 mb-8">
        Un courriel de confirmation vous a été envoyé.
      </p>

      {order && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm text-left print:shadow-none print:bg-white print:border print:border-black">
          <h3 className="text-xl font-semibold mb-2">Détails de la commande</h3>
          <p><strong>Date :</strong> {order.date}</p>
          <p><strong>Nom :</strong> {order.user.name}</p>
          <p><strong>Email :</strong> {order.user.email}</p>
          <p><strong>Téléphone :</strong> {order.user.phone}</p>
          <p className="mt-4 font-medium">Bols commandés :</p>
          <ul className="list-disc list-inside">
            {order.items.map((item, idx) => (
              <li key={idx}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-6 print:hidden">
        <button
          onClick={handlePrint}
          className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-black transition"
        >
          Imprimer la commande
        </button>
      </div>

      <div className="mt-6 print:hidden">
        <Link
          to="/"
          className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
        >
          Retour au menu
        </Link>
      </div>
    </div>
  );
}
