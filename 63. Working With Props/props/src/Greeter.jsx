export default function Greeter({ person = "name", from = "greeter" }) {
  return (
    <>
      <h1>Hello {person}</h1>
      <h2>from &nbsp;{from}</h2>
    </>
  );
}
