import "./ColorBox.css";
import { useState } from "react";

export default function ColorBox({ colors }) {
  const randomChoice = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const [color, setColor] = useState(randomChoice(colors));

  const changeColor = () => {
    const randomColor = randomChoice(colors);
    setColor(randomColor);
  };

  return (
    <>
      <div
        className="color-box"
        onClick={changeColor}
        style={{ backgroundColor: color }}
      ></div>
    </>
  );
}
