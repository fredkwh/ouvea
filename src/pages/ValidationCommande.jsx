
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

export default function ValidationCommande({ cart, setCart }) {
  const navigate = useNavigate();
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState(null);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      setError("Vous devez être connecté pour valider votre commande.");
      return;
    }

    try {
      const db = getFirestore();
      await addDoc(collection(db, "users", user.uid, "orders"), {
        nom,
        email,
        telephone,
        items: cart,
        total,
        date: new Date().toISOString(),
      });
      setCart([]);
      navigate("/mon-compte");
    } catch (err) {
      console.error("Erreur lors de l'enregistrement de la commande :", err);
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Valider ma commande</h1>

      {error && <div className="text-red-600 mb-4 text-center">{error}</div>}

      <div className="bg-blanc-coco shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-lg font-semibold text-ocre-dore mb-3">🧾 Récapitulatif</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left border-b border-ocre-dore">
              <th className="py-2">Bol</th>
              <th>Format</th>
              <th>Quantité</th>
              <th>Prix unitaire</th>
              <th>Sous-total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} className="border-b border-ocre-dore">
                <td className="py-2">{item.name}</td>
                <td>{item.size}</td>
                <td>{item.quantity}</td>
                <td>{item.price.toFixed(2)} $</td>
                <td>{(item.price * item.quantity).toFixed(2)} $</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-right font-semibold mt-4 text-base">
          Total : {total} $
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-blanc-coco shadow-md rounded-lg p-4">
        <h2 className="text-lg font-semibold text-ocre-dore mb-4">👤 Informations client</h2>
        <div className="mb-3">
          <label className="block mb-1 text-sm font-medium">Nom</label>
          <input
            type="text"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full border border-ocre-dore rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-1 text-sm font-medium">Adresse courriel</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-ocre-dore rounded px-3 py-2"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Téléphone</label>
          <input
            type="tel"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="w-full border border-ocre-dore rounded px-3 py-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-ocre-dore text-white py-2 rounded hover:bg-ocre-dore/90 transition"
        >
          Confirmer ma commande
        </button>
      </form>
    </div>
  );
}
