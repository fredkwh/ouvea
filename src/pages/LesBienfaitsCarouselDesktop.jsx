import Slider from "react-slick";
import { data } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LesBienfaitsCarouselDesktop() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: "12%",
    arrows: true,
  };

  return (
    <div className="py-10 px-4 max-w-6xl mx-auto text-noir-cacao-doux">
      <h2 className="text-2xl font-serif text-center mb-8 text-ocre-dore">
        Les bienfaits de nos bols
      </h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-blanc-coco border border-ocre-dore rounded-xl p-6 shadow-sm text-noir-cacao-doux">
              <img src={item.image} alt={item.title} style={{ width: "140px", height: "140px" }} className="mx-auto object-contain mb-4" />
              <h2 className="text-xl font-bold mb-4">{item.title}</h2>
              <p className="mb-2">{item.text}</p>
              <details className="mt-4 cursor-pointer">
                <summary className="text-sm text-ocre-dore underline">En savoir plus</summary>
                <div className="mt-2 text-sm">{item.macros}</div>
              </details>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
