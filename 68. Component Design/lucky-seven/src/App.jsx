import "./App.css";
import LuckyN from "./LuckyN";
import { sum } from "./utils";

const winAt7 = (dice) => sum(dice) === 7;

function App() {
  return (
    <>
      <LuckyN winCheck={winAt7} condition={7} />
    </>
  );
}

export default App;
