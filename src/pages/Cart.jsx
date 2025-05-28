import { useNavigate } from "react-router-dom";

export default function Cart({ cart, setCart }) {
  const navigate = useNavigate();

  const handleRemove = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOrder = () => {
    setCart([]);
    navigate("/confirmation");
  };

  const prixParBol = 10;
  const total = cart.length * prixParBol;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Votre panier</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Votre panier est vide.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-6">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center border-b pb-2">
                <span>{item.name}</span>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-red-600 hover:underline text-sm"
                >
                  Retirer
                </button>
              </li>
            ))}
          </ul>

          <div className="text-right mb-6">
            <p className="text-lg font-semibold">Total estimé : ${total.toFixed(2)}</p>
            <p className="text-sm text-gray-500">(Basé sur ${prixParBol.toFixed(2)} par bol)</p>
          </div>

          <div className="flex justify-center gap-4">
            <button
              onClick={handleOrder}
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800"
            >
              Commander
            </button>
            <button
              onClick={handleClearCart}
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600"
            >
              Vider le panier
            </button>
          </div>
        </>
      )}
    </div>
  );
}