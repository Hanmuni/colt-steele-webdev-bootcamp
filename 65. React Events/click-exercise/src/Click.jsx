export default function Click({ message, buttonText }) {
  function alertMessage() {
    alert(message);
  }

  return (
    <div>
      <button onClick={alertMessage}> {buttonText}</button>
    </div>
  );
}
