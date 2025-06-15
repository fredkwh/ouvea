import React from "react";

export default function LesBienfaits() {
  const bols = [{"name": "Vitae", "image": "/img/vitae.png", "description": "Une explosion de fraîcheur à base de spiruline, riche en antioxydants et fibres, idéale pour soutenir l’immunité et l’énergie quotidienne.", "macros": {"calories": 314, "glucides": 38.6, "protéines": 7.6, "lipides": 15.9, "fibres": 8.1}}, {"name": "Aurea", "image": "/img/aurea.png", "description": "L’acai rencontre la douceur des fruits rouges. Un bol riche en anthocyanines pour nourrir les cellules et favoriser la récupération après l’effort.", "macros": {"calories": 301, "glucides": 35.2, "protéines": 6.4, "lipides": 14.7, "fibres": 7.8}}, {"name": "Solea", "image": "/img/solea.png", "description": "Le goji et l’ananas créent un mélange vivifiant, riche en bêta-carotènes et en vitamine C, parfait pour la vitalité et l’éclat de la peau.", "macros": {"calories": 322, "glucides": 36.9, "protéines": 8.2, "lipides": 16.1, "fibres": 8.4}}, {"name": "Alba", "image": "/img/alba.png", "description": "Une base coco apaisante pour un bol doux et nourrissant, riche en acides gras sains et en fibres, pour une digestion en douceur.", "macros": {"calories": 298, "glucides": 33.5, "protéines": 6.9, "lipides": 13.8, "fibres": 7.2}}];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-noir-cacao-doux">
      <h1 className="text-3xl sm:text-4xl font-bold mb-10 text-center text-ocre-dore">Les bienfaits de nos bols</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {bols.map((bowl, index) => (
          <div key={index} className="bg-blanc-coco p-6 rounded-xl shadow border border-ocre-dore flex flex-col items-center">
            <img src={bowl.image} alt={bowl.name} className="h-32 w-auto object-contain mb-4 rounded-xl" />
            <h2 className="text-xl font-semibold text-ocre-dore mb-2">{bowl.name}</h2>
            <p className="text-sm mb-4 text-center">{bowl.description}</p>
            <h3 className="text-sm font-semibold mb-1 text-noir-cacao-doux">Valeurs nutritionnelles :</h3>
            <ul className="text-xs space-y-0.5 text-center">
              <li><strong>Calories :</strong> {bowl.macros.calories} kcal</li>
              <li><strong>Glucides :</strong> {bowl.macros.glucides} g</li>
              <li><strong>Protéines :</strong> {bowl.macros.protéines} g</li>
              <li><strong>Lipides :</strong> {bowl.macros.lipides} g</li>
              <li><strong>Fibres :</strong> {bowl.macros.fibres} g</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
