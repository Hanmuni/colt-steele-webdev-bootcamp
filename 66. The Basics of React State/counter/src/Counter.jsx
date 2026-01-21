import { useState } from "react";

export default function Counter() {
  const [number, setNumber] = useState(0);
  const incrementCount = () => setNumber(number + 1);
  return (
    <div>
      <p> The count is {number}</p>
      <button onClick={incrementCount}>+</button>
    </div>
  );
}
