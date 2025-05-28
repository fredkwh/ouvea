import { useState } from "react";

export default function CommandSite({ cart, setCart }) {
  const bowls = [
    {
      name: "Green Boost Bowl",
      description: "Base spiruline, granola, mangues, fraises.",
      macros: { calories: 314, glucides: 38.6, protéines: 7.6, lipides: 15.9, fibres: 8.1 },
    },
    {
      name: "Purple Power Bowl",
      description: "Base açai, granola, bleuets, bananes.",
      macros: { calories: 364, glucides: 41.0, protéines: 6.8, lipides: 17.5, fibres: 9.2 },
    },
    {
      name: "Goji Glow Bowl",
      description: "Base banane, fraises, granola, baies de goji.",
      macros: { calories: 332, glucides: 37.5, protéines: 6.9, lipides: 14.3, fibres: 8.6 },
    },
    {
      name: "Coco Dream Bowl",
      description: "Base coco, granola, ananas, mangues.",
      macros: { calories: 349, glucides: 39.8, protéines: 6.2, lipides: 16.7, fibres: 7.8 },
    },
  ];

  const [selectedBowl, setSelectedBowl] = useState(null);

  const handleAddToCart = (bowl) => {
    setCart((prevCart) => [...prevCart, bowl]);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Notre menu</h1>

      <div className="grid grid-cols-2 gap-6 place-items-center">
        {bowls.map((bowl, index) => (
          <div
            key={index}
            className="w-[250px] h-[250px] bg-white border border-gray-300 shadow-md flex flex-col justify-between items-center p-4 hover:shadow-lg transition relative"
          >
            <button
              onClick={() => setSelectedBowl(bowl)}
              className="text-lg font-medium text-center hover:underline"
            >
              {bowl.name}
            </button>

            <button
              onClick={() => handleAddToCart(bowl)}
              className="mt-4 px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800"
            >
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      {selectedBowl && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center relative">
            <button
              onClick={() => setSelectedBowl(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedBowl.name}</h2>
            <p className="mb-4">{selectedBowl.description}</p>
            <h3 className="text-lg font-semibold mb-2">Valeurs nutritionnelles</h3>
            <ul className="text-sm text-left mx-auto w-fit">
              <li><strong>Calories :</strong> {selectedBowl.macros.calories} kcal</li>
              <li><strong>Glucides :</strong> {selectedBowl.macros.glucides} g</li>
              <li><strong>Protéines :</strong> {selectedBowl.macros.protéines} g</li>
              <li><strong>Lipides :</strong> {selectedBowl.macros.lipides} g</li>
              <li><strong>Fibres :</strong> {selectedBowl.macros.fibres} g</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}