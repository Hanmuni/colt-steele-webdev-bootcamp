import "./Button.css";

export default function Button({ btnAction, btnText }) {
  return (
    <button className="Button" onClick={btnAction}>
      {btnText}
    </button>
  );
}
