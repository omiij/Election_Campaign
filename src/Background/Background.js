import React from "react";
import "./Background.css";
import { SliderData } from "../All_Data/All_DATA";
// import { Link } from "react-router-dom";
import ImageSlider from "../Carousel/ImageSlider";
import { About } from "../AboutUS/About";
export default function Background() {
  return (
    <>
      <div className="hero-container">
        { <h1>
          क्षेत्र के विकास एवं प्रगति हेतु हम संकल्पित है। सबका साथ, सबका
          विकास।।
        </h1> }
        {/* { <h1>What are you waiting for?</h1> } */}
      </div>

      <ImageSlider slides={SliderData} />
      <div className="fb-page" data-href="https://www.facebook.com/mahantdiliprawat/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/mahantdiliprawat/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/mahantdiliprawat/">Mahant Daleep Rawat</a></blockquote></div>
    </>
  );
}
