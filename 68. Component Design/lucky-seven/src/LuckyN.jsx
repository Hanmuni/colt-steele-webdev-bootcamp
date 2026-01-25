import { useState } from "react";
import { getRolls } from "./utils";
import Dice from "./Dice";
import Button from "./Button";

export default function LuckyN({ numDice = 2, winCheck, condition }) {
  const [dice, setDice] = useState(getRolls(numDice));

  const isWinner = winCheck(dice);

  const roll = () => setDice(getRolls(numDice));

  return (
    <main>
      
      <h1>
        Lucky
        <span style={{ color: "greenyellow" }}>{condition}</span>
      </h1>

      <Dice dice={dice} />

      <p style={{ fontSize: "3em" }}>
        {isWinner ? "Congrats you Win! 🎉" : ""}
      </p>

      <Button btnAction={roll} btnText="Re-roll dice!" />
    </main>
  );
}
