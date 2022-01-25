import React, { useState, useEffect, useRef } from "react";
import { SliderDataHome } from "../All_Data/All_DATA";
import "../Home/Home.css";

import "../Home/Home.css";
function Home({ slidesHome }) {
  const [current, setCurrent] = useState(0);
  const Length = slidesHome.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === Length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 6000);
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

  if (!Array.isArray(slidesHome) || slidesHome.length <= 0) {
    return null;
  }

  return (
    <>
      <section className="sliderHome">
        {SliderDataHome.map((slide, index) => {
          return (
            <div
              className={index === current ? "slideHome-active" : "slideHome"}
              key={index}
            >
              {index === current && (
                <img
                  className="imageHome"
                  id="overflowHome"
                  src={slide.image}
                  alt={slide.alt}
                />

                // <img src={slide.image} alt={slide.alt} className="image" />
              )}
            </div>
          );
        })}
      </section>
    </>
  );
}

export default Home;
