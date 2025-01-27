import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Importa os estilos do carrossel
import { Carousel } from "react-responsive-carousel";
import "./Banner.css";

const Banner = () => {

  return (
    <div className="Banner">
      <div className="carousel-wrapper">
        <Carousel
          autoPlay
          infiniteLoop
          showThumbs={false}
          showStatus={false}
          interval={3000}
        >
          <div>
            <img src="/banners/image1.jpeg" alt="Banner 1" />
          </div>
          <div>
            <img src="/banners/image2.jpeg" alt="Banner 2" />
          </div>
          <div>
            <img src="/banners/image3.jpeg" alt="Banner 3" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
