import Slot from "./Slot";
import "./App.css";

function App() {
  return (
    <>
      <Slot val1="🍌" val2="🐶" val3="🐰" />
      <Slot val1="🐶" val2="🐶" val3="🐶" />
      <Slot val1="🐰" val2="🐰" val3="🐰" />
    </>
  );
}

export default App;
