import React, { useState } from "react";
import "../../styles/index.css";

export const Home = () => {
  const [color, setColor] = useState("red");

  const handleClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="traffic-light traffic-top">
     <div className={"light red" + ((color === "red") ? " glow" : "")}  onClick={() => handleClick("red")} ></div>
     <div className={"light yellow" + ((color === "yellow") ? " glow" : "")} onClick={() => handleClick("yellow")} ></div>
     <div className={"light green" + ((color === "green") ? " glow" : "")} onClick={() => handleClick("green")} ></div>
    </div>
  );
};

export default Home;