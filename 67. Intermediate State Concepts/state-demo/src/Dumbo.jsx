import { use, useState } from "react";

function generateGameBoard() {
  console.log("Making the game board!");

  return Array(5000);
}
export default function Dumbo() {
  const [board, setBoard] = useState(generateGameBoard);
  return (
    <p>
    <button onClick={() => setBoard("Dumbo State changed!")}>
      Dumbo change state!
    </button>

    </p>
  );
}
