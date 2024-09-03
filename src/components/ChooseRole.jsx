import React, { useState } from "react";

function Choose() {
  const [activeCircle, setActiveCircle] = useState(null);

  const handleCircleClick = (circleId) => {
    setActiveCircle(circleId);
  };

  return (
    <div className="flex gap-2 mb-3">
      <div
        className={`w-20 h-10 rounded-full border flex justify-center items-center p-3 cursor-pointer
          ${
            activeCircle === "circle1"
              ? "shadow-md shadow-blue-500"
              : "hover:shadow-md hover:shadow-blue-300"
          }`}
        onClick={() => handleCircleClick("circle1")}
      >
        Admin
      </div>
      <div
        className={`w-24 h-10 rounded-full border flex justify-center items-center p-3 cursor-pointer
          ${
            activeCircle === "circle2"
              ? "shadow-md shadow-blue-500"
              : "hover:shadow-md hover:shadow-blue-300"
          }`}
        onClick={() => handleCircleClick("circle2")}
      >
        Researcher
      </div>
      <div
        className={`w-20 h-10 rounded-full border flex justify-center items-center p-3 cursor-pointer
          ${
            activeCircle === "circle3"
              ? "shadow-md shadow-blue-500"
              : "hover:shadow-md hover:shadow-blue-300"
          }`}
        onClick={() => handleCircleClick("circle3")}
      >
        Company
      </div>
    </div>
  );
}

export default Choose;
