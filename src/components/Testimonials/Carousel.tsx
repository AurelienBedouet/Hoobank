import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "../../data";

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  useEffect(() => {
    // This variable prevents race condition
    let current = 1;
    const cycleReviews = () => {
      if (current === 5) {
        current = 1;
      } else {
        current += 1;
      }
      setActiveSlide(current);
    };
    // intervalId identified so it can be canceled on unmount
    const intervalId = setInterval(() => {
      cycleReviews();
    }, 5000);
    // Removes interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ul className="carousel__list bg-black-gradient rounded-xl shadow-xl px-12 py-6">
      {testimonials.map((card, index) => {
        const count = index + 1;
        return (
          <li
            className={`carousel__item
                ${count === activeSlide ? " active" : ""}
                ${count < activeSlide ? " left" : ""}
                ${count > activeSlide ? " right" : ""}
              `}
            key={count}
          >
            <TestimonialCard key={card.id} {...card} />
          </li>
        );
      })}
      <li className="carousel__indicator">
        <span
          className={`carousel__dot${activeSlide === 1 ? " active" : ""}`}
        />
        <span
          className={`carousel__dot${activeSlide === 2 ? " active" : ""}`}
        />
        <span
          className={`carousel__dot${activeSlide === 3 ? " active" : ""}`}
        />
        <span
          className={`carousel__dot${activeSlide === 4 ? " active" : ""}`}
        />
        <span
          className={`carousel__dot${activeSlide === 5 ? " active" : ""}`}
        />
      </li>
    </ul>
  );
};

export default Carousel;
