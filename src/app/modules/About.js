import React from "react";
import "../globals.css";

const About = () => {
  return (
    <div className="pt-4 text-sm md:text-base xl:text-lg text-white">
      <div className="md:mb-4 lg:mb-6">
        Hello! I'm a second-year undergrad majoring in CS & Math @ MIT, and I
        hope to gain an industry internship experience in tech this summer.
      </div>
      <div className="mb-4 lg:mb-6">
        I have many interests that I'd love to explore! Algorithms, geometric
        deep learning, evolutionary biology, and UI/UX design.
      </div>
      <div className="mb-4 lg:mb-6">
        In my free time, I love IDing flowers, writing into the void, reading
        about morality, and drawing sticker designs.
      </div>
      <div>Reach out if you want to get in touch! :)</div>
    </div>
  );
};

export default About;
