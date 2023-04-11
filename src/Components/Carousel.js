import "../Styles/Carousel.css";
import VectorRight from "../Assets/vectorright.png";
import VectorLeft from "../Assets/vectorleft.png";
import { useState } from "react";

function Carousel({ imageSlider }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      currentIndex === imageSlider.length - 1 ? 0 : currentIndex + 1
    ); // on repart au premier slide quand on arrive au dernier
  };
  const prevSlide = () => {
    setCurrentIndex(
      currentIndex === 0 ? imageSlider.length - 1 : currentIndex - 1
    ); // on repart au dernier slide quand on est au premier
  };

  return (
    <section id="carousel">
      {imageSlider.length > 1 && (
        <img
          className="VectorRight"
          src={VectorRight}
          alt="show next slider"
          onClick={nextSlide}
        />
      )}
      {imageSlider.length > 1 && (
        <img
          className="VectorLeft"
          src={VectorLeft}
          alt="show previous slider"
          onClick={prevSlide}
        />
      )}
      {imageSlider.map((slide, index) => (
        <div
          key={index} // mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
          className={
            currentIndex === index
              ? "slider bl-msk wh-msk active-anim"
              : "slider bl-msk wh-msk"
          }
        >
          {index === currentIndex && (
            <img src={slide} alt="appartement à louer" />
          )}
          {index === currentIndex && (
            <span className="slideCount">
              {currentIndex + 1} / {imageSlider.length}
            </span>
          )}
        </div>
      ))}
    </section>
  );
}

export default Carousel;
