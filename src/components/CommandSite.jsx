
import { useState } from "react";
import clsx from "clsx";

export default function CommandSite({ cart, setCart }) {
  const bowls = [
    {
      name: "Vitae",
      image: "/img/vitae.png",
      description: "Base spiruline, granola maison, mangues, mûres",
      macros: { calories: 314, glucides: 38.6, protéines: 7.6, lipides: 15.9, fibres: 8.1 },
    },
    {
      name: "Aurea",
      image: "/img/aurea.png",
      description: "Base açai, granola maison, fraises, mûres",
      macros: { calories: 301, glucides: 35.2, protéines: 6.4, lipides: 14.7, fibres: 7.8 },
    },
    {
      name: "Solea",
      image: "/public/img/solea.png",
      description: "Base baies de goji, granola maison, ananas, fraises, menthe",
      macros: { calories: 322, glucides: 36.9, protéines: 8.2, lipides: 16.1, fibres: 8.4 },
    },
    {
      name: "Alba",
      image: "/img/alba.png",
      description: "Base coco, granola maison, ananas, mangues",
      macros: { calories: 298, glucides: 33.5, protéines: 6.9, lipides: 13.8, fibres: 7.2 },
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
    <div className="max-w-5xl mx-auto px-4 py-10 text-noir-cacao-doux">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
        {bowls.map((bowl, index) => (
          <div
            key={index}
            className="w-full max-w-[280px] min-h-[280px] bg-blanc-coco border border-ocre-dore shadow-md flex flex-col items-center p-4"
          >
            <img
              src={bowl.image}
              alt={bowl.name}
              className="h-32 w-auto object-contain mx-auto mb-4 rounded-xl"
            />
            <button
              onClick={() => setSelectedBowl(bowl)}
              className="text-lg sm:text-xl font-semibold text-noir-cacao-doux text-center hover:underline"
            >
              {bowl.name}
            </button>


            <div className="mt-6 relative w-full flex flex-col items-center">
              {formatVisible === index ? (
                <div
                  className={clsx(
                    "flex flex-col items-center gap-2 transition-opacity duration-300 ease-in-out opacity-0 bg-sable-chaud border border-ocre-dore p-4 rounded-xl w-full shadow-sm",
                    formatVisible === index && "opacity-100"
                  )}
                >
                  <button
                    onClick={() => handleSizeSelect(index, "Petit")}
                    className="px-3 py-2 bg-white rounded hover:bg-ocre-dore/20 text-sm w-full text-center border"
                  >
                    🥣 Petit – 12.50$
                  </button>
                  <button
                    onClick={() => handleSizeSelect(index, "Regular")}
                    className="px-3 py-2 bg-white rounded hover:bg-ocre-dore/20 text-sm w-full text-center border"
                  >
                    🥣 Regular – 17.50$
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setFormatVisible(index)}
                  className="px-4 py-2 bg-ocre-dore text-white text-sm rounded hover:bg-ocre-dore/90 transition"
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
          <div className="bg-blanc-coco rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center relative">
            <button
              onClick={() => setSelectedBowl(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-noir-cacao-doux text-xl"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-ocre-dore mb-2">{selectedBowl.name}</h2>
            <p className="mb-4">{selectedBowl.description}</p>
            <h3 className="text-lg font-semibold text-ocre-dore mb-2">Valeurs nutritionnelles</h3>
            <ul className="text-sm text-left mx-auto w-fit space-y-1">
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
