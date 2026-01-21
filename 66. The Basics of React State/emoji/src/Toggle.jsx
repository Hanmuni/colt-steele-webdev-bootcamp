import { useState } from "react";
import "./Toggle.css";

export default function Toggle() {
  const [inLove, setInLove] = useState(true);
  const toggleInLove = () => setInLove(!inLove);

  return (
    <span className="Toggle" onClick={toggleInLove}>
      {inLove ? "😍" : "😥"}
    </span>
  );
}
