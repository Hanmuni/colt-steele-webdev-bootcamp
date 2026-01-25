import Box from "./Box";
import { useState } from "react";

export default function BoxList({ isActive }) {
  const [boxes, setBoxes] = useState([
    false,
    false,
    true,
    false,
    true,
    false,
    false,
    false,
  ]);

  const reset = () => {
    setBoxes([false, false, false, false, false, false, false, false]);
  };

  const toggleBox = (idx) => {
    setBoxes((boxes) => boxes.map((val, i) => (i === idx ? !val : val)));
  };

  return (
    <div>
      {boxes.map((b, idx) => (
        <Box isActive={b} key={idx} toggleBox={() => toggleBox(idx)} />
      ))}

      <button onClick={reset}>Reset </button>
    </div>
  );
}
