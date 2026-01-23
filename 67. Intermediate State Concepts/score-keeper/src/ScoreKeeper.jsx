import { useState } from "react";

export default function ScoreKeeper() {
  const [scores, setScores] = useState({ scoreP1: 0, scoreP2: 0 });

  const increaseP1Score = () => {
    setScores((oldScores) => ({
      ...oldScores,
      scoreP1: oldScores.scoreP1 + 1,
    }));
  };

  const increaseP2Score = () => {
    setScores((oldScores) => ({
      ...oldScores,
      scoreP2: oldScores.scoreP2 + 1,
    }));
  };

  return (
    <div>
      <p> Player 1: {scores.scoreP1}</p>
      <p> Player 2: {scores.scoreP2}</p>
      <p>
        <button onClick={increaseP1Score}> + 1 Player 1</button>
      </p>
      <p>
        <button onClick={increaseP2Score}> + 1 Player 2</button>
      </p>
    </div>
  );
}
