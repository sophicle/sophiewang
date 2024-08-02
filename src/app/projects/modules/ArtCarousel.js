import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ArtCarousel = () => {
  return (
    <Carousel
      className="bg-white rounded-xl"
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows={false}
      infiniteLoop
      interval={2000}
      autoPlay={true}
      emulateTouch
    >
      <div className="h-60 flex justify-center items-center">
        <img src={"./art1.jpg"} alt="Art 1" className="object-contain h-full" />
      </div>
      <div className="h-60 flex justify-center items-center">
        <img src={"./art2.png"} alt="Art 2" className="object-contain h-full" />
      </div>
      <div className="h-60 flex justify-center items-center">
        <img src={"./art3.png"} alt="Art 3" className="object-contain h-full" />
      </div>
      <div className="h-60 flex justify-center items-center">
        <img src={"./art4.png"} alt="Art 4" className="object-contain h-full" />
      </div>
    </Carousel>
  );
};

export default ArtCarousel;
