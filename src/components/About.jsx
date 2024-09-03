import React, { useState } from "react";

function About() {
  const [activeCircle, setActiveCircle] = useState(null);

  const handleCircleClick = (circleId) => {
    setActiveCircle(activeCircle === circleId ? null : circleId);
  };

  return (
    <div className="flex gap-4 items-center text-center p-2 justify-evenly h-72 m-8 border shadow-lg">
      <p
        className={`max-w-xs transition-opacity duration-300 ${
          activeCircle === "circle1" ? "opacity-100" : "opacity-0"
        }`}
      >
        Our mission is to empower coal workers by providing a secure, efficient,
        and transparent platform that facilitates the seamless management of
        their work-related activities. We aim to enhance operational efficiency,
        ensure compliance with safety and environmental standards, and foster a
        culture of accountability and collaboration within the coal industry.
      </p>
      <div
        className={`rounded-full shadow-lg p-5 border ${
          activeCircle === "circle1"
            ? "shadow-blue-500"
            : "hover:shadow-blue-500"
        } cursor-pointer`}
        onClick={() => handleCircleClick("circle1")}
      >
        Mission
      </div>
      <h1 className="text-4xl font-serif">About</h1>
      <div
        className={`rounded-full shadow-lg p-5 border ${
          activeCircle === "circle2"
            ? "shadow-blue-500"
            : "hover:shadow-blue-500"
        } cursor-pointer`}
        onClick={() => handleCircleClick("circle2")}
      >
        Vision
      </div>
      <p
        className={`max-w-xs transition-opacity duration-300 ${
          activeCircle === "circle2" ? "opacity-100" : "opacity-0"
        }`}
      >
        Our vision is to become the leading digital platform for the coal
        industry, where every worker, from the ground level to management, can
        easily access and manage their tasks, resources, and information. We
        aspire to contribute to a more sustainable and efficient coal sector by
        leveraging technology to support workers, improve operational
        transparency, and promote environmental stewardship.
      </p>
    </div>
  );
}

export default About;
