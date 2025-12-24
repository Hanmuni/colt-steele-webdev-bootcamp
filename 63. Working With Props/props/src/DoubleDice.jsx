export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const isWinner = num1 === num2;
  const styles = { color: isWinner ? "greenyellow" : "crimson" };
  return (
    <>
      <div className="DoubleDice" style={styles}>
        <h2>Double Dice </h2>
        {isWinner && <h3>You win!</h3>}
        <p>Number 1: {num1}</p>
        <p>Number 2: {num2}</p>
      </div>
    </>
  );
}
