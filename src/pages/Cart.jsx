
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart = [], setCart }) => {
  const handleRemove = (indexToRemove) => {
    const updated = cart.filter((_, i) => i !== indexToRemove);
    setCart(updated);
  };

  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return;
    const updated = cart.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCart(updated);
  };

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 1),
    0
  );

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Votre panier</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Votre panier est vide.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:justify-between bg-white shadow-md rounded-2xl p-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={item.image || '/placeholder.png'} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">Format : {item.size}</p>
                    <p className="text-sm font-medium">Prix unitaire : {item.price.toFixed(2)} $</p>
                    <div className="mt-2 flex items-center gap-2 justify-center sm:justify-start">
                      <label htmlFor={`qty-${index}`} className="text-sm">Quantité :</label>
                      <input
                        id={`qty-${index}`}
                        type="number"
                        min="1"
                        value={item.quantity || 1}
                        onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
                        className="w-16 border rounded px-2 py-1 text-sm"
                      />
                    </div>
                    <p className="text-sm font-semibold mt-1">Sous-total : {(item.price * (item.quantity || 1)).toFixed(2)} $</p>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(index)}
                  className="mt-3 sm:mt-0 bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600 transition"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mb-6">
            <p className="text-lg font-semibold">Total : {total.toFixed(2)} $</p>
          </div>

          <Link
            to="/validation"
            className="block text-center bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Valider ma commande
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
