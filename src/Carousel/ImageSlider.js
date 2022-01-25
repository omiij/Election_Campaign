import React, { useState, useEffect, useRef } from "react";
import { SliderData } from "../All_Data/All_DATA";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./ImageSlider.css";
function ImageSlider({ slides }) {
  const [current, setCurrent] = useState(0);
  const Length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === Length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 4000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, Length]);
  const nextSlide = () => {
    setCurrent(current === Length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? Length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="slider">
        {/* <FaArrowAltCircleLeft className="left-arrow" onClick={nextSlide} />
        <FaArrowAltCircleRight className="right-arrow" onClick={prevSlide} /> */}
        {SliderData.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide-active" : "slide"}
              key={index}
            >
              {index === current && (
                <h1 className="image" id="overflow">
                  {" "}
                  {slide.content}
                </h1>
                // <img src={slide.image} alt={slide.alt} className="image" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default ImageSlider;
