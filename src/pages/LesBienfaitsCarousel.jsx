import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LesBienfaitsCarousel() {
  const bols = [
    {
      name: "Vitae",
      image: "/img/vitae.png",
      description:
        "Une base verte revitalisante à la spiruline, riche en chlorophylle, fer biodisponible et phycocyanine. Ce bol soutient l’oxygénation cellulaire, la récupération et la clarté mentale, tout en protégeant les cellules du stress oxydatif. Une recharge naturelle pour les matins où tout compte.",
      macros: {
        calories: 314,
        glucides: 38.6,
        protéines: 7.6,
        lipides: 15.9,
        fibres: 8.1,
      },
    },
    {
      name: "Aurea",
      image: "/img/aurea.png",
      description:
        "Un mélange élégant de fruits rouges, d’açai et de mûres, concentré en anthocyanines, oméga-9 et vitamine C. Ce bol agit comme un véritable bouclier antioxydant, régulant le stress oxydatif, soutenant l’humeur et la peau. Idéal pour recharger ton éclat intérieur.",
      macros: {
        calories: 301,
        glucides: 35.2,
        protéines: 6.4,
        lipides: 14.7,
        fibres: 7.8,
      },
    },
    {
      name: "Solea",
      image: "/img/solea.png",
      description:
        "Un bol tropical solaire aux notes d’ananas, de fraises et de baies de goji. Riche en vitamines C et A, enzymes digestives et oligoéléments toniques, il soutient l’immunité, la digestion et l’éclat de la peau. En bonus : ses caroténoïdes naturels favorisent aussi la santé visuelle.",
      macros: {
        calories: 319,
        glucides: 36.7,
        protéines: 7.1,
        lipides: 14.2,
        fibres: 8.4,
      },
    },
    {
      name: "Alba",
      image: "/img/alba.png",
      description:
        "La douceur du lait de coco associée à la mangue et l’ananas, pour un bol onctueux et apaisant. Source d’acides gras essentiels, d’enzymes digestives et de magnésium naturel, Alba soutient le système nerveux, la digestion et favorise un équilibre intérieur durable à faible index glycémique.",
      macros: {
        calories: 312,
        glucides: 34.9,
        protéines: 6.9,
        lipides: 15.3,
        fibres: 7.9,
      },
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    swipe: true,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-noir-cacao-doux">
      <h1 className="text-2xl font-serif text-center mb-8 text-ocre-dore">
        Les bienfaits de nos bols
      </h1>
      <Slider {...settings}>
        {bols.map((bowl, index) => (
          <div
            key={index}
            className="bg-blanc-coco p-6 rounded-xl shadow-md border border-ocre-dore flex flex-col items-center justify-center text-center"
          >
            <img
              src={bowl.image}
              alt={bowl.name}
              className="h-32 w-auto object-contain mx-auto mb-4 rounded-xl"
            />
            <h2 className="text-xl font-serif text-noir-cacao-doux mb-2">
              {bowl.name}
            </h2>
            <p className="text-base text-noir-cacao-doux leading-relaxed px-4 mb-4">
              {bowl.description}
            </p>
            <div className="text-sm text-noir-cacao-doux space-y-1">
              <p><strong>Calories :</strong> {bowl.macros.calories} kcal</p>
              <p><strong>Glucides :</strong> {bowl.macros.glucides} g</p>
              <p><strong>Protéines :</strong> {bowl.macros.protéines} g</p>
              <p><strong>Lipides :</strong> {bowl.macros.lipides} g</p>
              <p><strong>Fibres :</strong> {bowl.macros.fibres} g</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}