import ColorBox from "./ColorBox";
import "./ColorBoxList.css";

export default function ColorBoxList({ colors, numBoxes = 25 }) {
  return (
    <div className="all-boxes-container">
      {Array.from({ length: numBoxes }, (color, i) => (
        <ColorBox key={i} colors={colors} />
      ))}
    </div>
  );
}
