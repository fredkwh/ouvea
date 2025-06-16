import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, setCart, removeFromCart } = useContext(CartContext);

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
    <div className="max-w-6xl mx-auto px-4 py-10 text-noir-cacao-doux">
      <h2 className="text-2xl font-serif text-center mb-8 text-ocre-dore">Votre panier</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Votre panier est vide.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:justify-between bg-blanc-coco shadow-md rounded-2xl p-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img src={item.image || '/placeholder.png'} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                  <div className="text-center sm:text-left">
                    <h3 className="text-lg font-semibold text-ocre-dore">{item.name}</h3>
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
                  className="mt-3 sm:mt-0 bg-ocre-dore text-white px-4 py-2 rounded-xl hover:bg-ocre-dore/90 transition"
                >
                  Supprimer
                </button>
              </div>
            ))}
          </div>

          <div className="text-right mb-6">
            <p className="text-lg font-semibold text-ocre-dore">Total : {total.toFixed(2)} $</p>
          </div>

          <Link
            to="/validation"
            className="block text-center bg-ocre-dore text-white py-3 rounded-xl font-semibold hover:bg-ocre-dore/90 transition"
          >
            Valider ma commande
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;