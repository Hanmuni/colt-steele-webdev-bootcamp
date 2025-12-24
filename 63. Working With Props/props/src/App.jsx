import Greeter from "./Greeter";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import ColorList from "./ColorList";

function App() {
  return (
    <div>
      <Greeter person="Hong Hanh" from="Lisa" />
      <Greeter person="Justin" from="Britney" />
      <Greeter person="Andrea" from="Ines" />
      <Greeter />
      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["A", "B", "C"]} />
      <DoubleDice />
      <DoubleDice />
      <DoubleDice />
      <ColorList colors={["red", "greenyellow", "blue", "orange"]} />
    </div>
  );
}

export default App;
