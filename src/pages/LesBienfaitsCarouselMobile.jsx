import Slider from "react-slick";
import { data } from "../data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LesBienfaitsCarouselMobile() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: true,
  };

  return (
    <div className="py-10 px-4 text-noir-cacao-doux">
      <h2 className="text-2xl font-serif text-center mb-6 text-ocre-dore">
        Les bienfaits de nos bols
      </h2>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="px-1">
            <div className="bg-blanc-coco border border-ocre-dore rounded-lg p-4 shadow text-noir-cacao-doux">
              <img src={item.image} alt={item.title} style={{ width: "120px", height: "120px" }} className="mx-auto object-contain mb-3" />
              <h2 className="text-lg font-bold mb-3">{item.title}</h2>
              <p className="text-sm mb-2">{item.text}</p>
              <details className="mt-2 cursor-pointer">
                <summary className="text-sm text-ocre-dore underline">En savoir plus</summary>
                <div className="mt-1 text-sm">{item.macros}</div>
              </details>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
