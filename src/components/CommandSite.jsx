
import { useState } from "react";
import clsx from "clsx";

export default function CommandSite({ cart, setCart }) {
  const bowls = [
    {
      name: "Vitae.",
      description: "Base spiruline, granola, mangues, mûres.",
      macros: { calories: 314, glucides: 38.6, protéines: 7.6, lipides: 15.9, fibres: 8.1 },
    },
    {
      name: "Aurea.",
      description: "Base açai, granola, fraises, mûres.",
      macros: { calories: 364, glucides: 41.0, protéines: 6.8, lipides: 17.5, fibres: 9.2 },
    },
    {
      name: "Solea.",
      description: "Base baies de goji, granola, ananas, fraises.",
      macros: { calories: 332, glucides: 37.5, protéines: 6.9, lipides: 14.3, fibres: 8.6 },
    },
    {
      name: "Alba.",
      description: "Base coco, granola, ananas, mangues.",
      macros: { calories: 349, glucides: 39.8, protéines: 6.2, lipides: 16.7, fibres: 7.8 },
    },
  ];

  const [selectedBowl, setSelectedBowl] = useState(null);
  const [formatVisible, setFormatVisible] = useState(null);
  const [selectedSizes, setSelectedSizes] = useState({});

  const handleSizeSelect = (index, size) => {
    const price = size === "Petit" ? 12.5 : 17.5;
    const updatedSizes = { ...selectedSizes, [index]: size };
    setSelectedSizes(updatedSizes);
    setFormatVisible(null);
    const bowl = bowls[index];
    setCart((prev) => [...prev, { ...bowl, size, price, quantity: 1 }]);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center">
        {bowls.map((bowl, index) => (
          <div
            key={index}
            className="w-full max-w-[250px] min-h-[260px] bg-white border border-gray-300 shadow-md flex flex-col justify-between items-center p-4 hover:shadow-lg transition relative"
          >
            <button
              onClick={() => setSelectedBowl(bowl)}
              className="text-base sm:text-lg font-medium text-center hover:underline"
            >
              {bowl.name}
            </button>

            <div className="mt-4 relative w-full flex flex-col items-center">
              {formatVisible === index ? (
                <div
                  className={clsx(
                    "flex flex-col items-center gap-2 transition-opacity duration-300 ease-in-out opacity-0 bg-gray-100 border border-gray-300 p-3 rounded-xl w-full shadow-sm",
                    formatVisible === index && "opacity-100"
                  )}
                >
                  <button
                    onClick={() => handleSizeSelect(index, "Petit")}
                    className="px-3 py-1 bg-white rounded hover:bg-gray-100 text-sm w-full text-center"
                  >
                    🥣 Petit – 12.50$
                  </button>
                  <button
                    onClick={() => handleSizeSelect(index, "Regular")}
                    className="px-3 py-1 bg-white rounded hover:bg-gray-100 text-sm w-full text-center"
                  >
                    🥣 Regular – 17.50$
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setFormatVisible(index)}
                  className="px-4 py-2 bg-black text-white text-sm rounded hover:bg-gray-800 transition"
                >
                  Ajouter au panier
                </button>
              )}
            </div>
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
