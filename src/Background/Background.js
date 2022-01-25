import React from "react";
import "./Background.css";
import { SliderData, SliderDataHome } from "../All_Data/All_DATA";
// import { Link } from "react-router-dom";
import ImageSlider from "../Carousel/ImageSlider";
import { About } from "../AboutUS/About";
import Home from "../Home/Home";
export default function Background() {
  return (
    <>
      <div className="hero-container" style={{ zIndex: -1 }}>
        {/* <img
          src="https://sm.mashable.com/mashable_in/seo/default/pm-narendra-modi-speech-highlights-21-day-complete-lockdown_eve9.jpg"
          alt="modiJi"
        /> */}
        <Home slidesHome={SliderDataHome} />
        <h1 id="Heading_Container">
          क्षेत्र के विकास एवं प्रगति हेतु हम संकल्पित है। सबका साथ, सबका
          विकास।।
        </h1>
      </div>
      <div className="quote-Home" style={{ zIndex: -1 }}>
        <ImageSlider slides={SliderData} />
      </div>

      <div style={{ zIndex: 0 }}>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/mahantdiliprawat/"
          data-tabs="timeline"
          data-width=""
          data-height=""
          data-small-header="false"
          data-adapt-container-width="true"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/mahantdiliprawat/"
            class="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/mahantdiliprawat/">
              Mahant Daleep Rawat
            </a>
          </blockquote>
        </div>
      </div>
    </>
  );
}
