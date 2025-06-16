import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function NosBols() {
  const bowls = [
    {
      name: "Vitae",
      image: "/img/vitae.png",
      shortDescription: "Un bol vibrant pour les matins actifs",
      longDescription: "Un bol vibrant pensé pour les matins actifs. Spiruline, mangue, fraise — une dose végétale d’énergie pure pour bien démarrer la journée.",
      tag: "Énergisant"
    },
    {
      name: "Aurea",
      image: "/img/aurea.png",
      shortDescription: "Fruits rouges & açai pour une pause fraîche",
      longDescription: "Riche en antioxydants, ce bol à base d’açai mêle fruits rouges et granola maison pour une pause fraîcheur intense et régénérante.",
      tag: "Antioxydant"
    },
    {
      name: "Solea",
      image: "/img/solea.png",
      shortDescription: "Fruits tropicaux & baies de goji",
      longDescription: "Un bol tropical solaire, aux notes d’ananas, de fraises et de baies de goji. Pour faire entrer l’été dans ton quotidien, à la cuillère.",
      tag: "Tropical"
    },
    {
      name: "Alba",
      image: "/img/alba.png",
      shortDescription: "Coco, mangue & ananas tout en douceur",
      longDescription: "La douceur du lait de coco mêlée à la mangue et à l’ananas. Crémeux, rond, réconfortant : un bol tout en apaisement.",
      tag: "Douceur"
    },

  ];

  const { addToCart } = useContext(CartContext);
  const [selectedBowl, setSelectedBowl] = useState(null);
  const [selectedSize, setSelectedSize] = useState("Regular");

  const handleAddToCart = () => {
    const price = selectedSize === "Petit" ? 12.5 : 17.5;
    addToCart({ ...selectedBowl, size: selectedSize, price });
    setSelectedBowl(null);
    setSelectedSize("Regular");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-noir-cacao-doux">
      <h2 className="text-2xl font-serif text-center text-center mb-8 text-ocre-dore">
        Nos bols signatures
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
        {bowls.map((bowl, index) => (
          <div
            key={index}
            role="button"
            onClick={() => setSelectedBowl(bowl)}
            tabIndex={0}
            className="cursor-pointer w-full max-w-[280px] bg-blanc-coco border border-ocre-dore shadow-md hover:shadow-xl active:scale-[0.98] hover:-translate-y-1 hover:ring-1 hover:ring-ocre-dore/30 transition-all duration-300 transform rounded-xl p-4 flex flex-col items-center focus:outline-none focus:ring-2 focus:ring-ocre-dore animate-fade-pop"
          >
            <img
              src={bowl.image}
              alt={bowl.name}
              className="h-32 w-auto object-contain mx-auto mb-4 rounded-xl"
            />
            <p className="text-base text-noir-cacao-doux text-gray-600 mt-1 text-center text-center">{bowl.shortDescription}</p>
            <div className="text-xl font-serif text-noir-cacao-doux text-center text-center mt-1">
              {bowl.name}
            </div>
            <p className="text-base text-noir-cacao-doux text-gray-500 mt-1">à partir de 12.50$</p>
            <span className="text-xs mt-2 px-2 py-1 bg-sable-chaud text-noir-cacao-doux font-medium rounded-full shadow-sm">
              {bowl.tag}
            </span>
            <button className="mt-4 px-4 py-2 bg-ocre-dore text-white text-base text-noir-cacao-doux rounded-xl hover:bg-ocre-dore-fonce transition-colors duration-200">
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      {selectedBowl && (
        <div className="fixed inset-0 bg-noir-cacao-doux/60 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-blanc-coco rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center text-center relative animate-fade-pop">
            <button
              onClick={() => setSelectedBowl(null)}
              className="absolute top-3 right-4 text-gray-500 hover:text-noir-cacao-doux text-xl"
            >
              &times;
            </button>
            <h2 className="text-3xl font-serif tracking-tight font-bold text-ocre-dore mb-2">
              {selectedBowl.name}
            </h2>
            <p className="mb-4 text-base leading-relaxed text-noir-cacao-doux">
              {selectedBowl.longDescription}
            </p>

            <hr className="my-4 border-t border-sable-chaud" />

            <h3 className="text-base text-noir-cacao-doux font-bold mt-4 mb-2">Choisir une taille :</h3>
            <div className="flex gap-4 justify-center mb-2">
              {["Petit", "Regular"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={
  selectedSize === size
    ? "px-4 py-2 rounded-full border text-base text-noir-cacao-doux font-medium shadow-sm bg-ocre-dore text-white border-ocre-dore shadow"
    : "px-4 py-2 rounded-full border text-base text-noir-cacao-doux font-medium shadow-sm bg-white text-noir-cacao-doux hover:bg-ocre-dore/10"
}
>
  {size === "Petit" ? "Petit – 12.50$" : "Regular – 17.50$"}
</button>
))}

            </div>

            <p className="text-base text-noir-cacao-doux text-gray-500 mt-2">
              Taille sélectionnée : <span className="font-medium text-ocre-dore">{selectedSize}</span>
            </p>

            <button
              onClick={handleAddToCart}
              className="mt-6 bg-ocre-dore text-white rounded px-4 py-2 hover:bg-ocre-dore-fonce transition"
            >
              Ajouter au panier
            </button>
          </div>
        </div>
      )}
    </div>
  );
}