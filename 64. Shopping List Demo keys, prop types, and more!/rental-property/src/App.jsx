import PropertyList from "./PropertyList";
import "./App.css";

function App() {
  const properties = [
    { id: 129031, propertyName: "Desert Yurt", rating: 4.9, price: 150 },
    {
      id: 129331,
      propertyName: "Lone Mountain Cabin",
      rating: 4.8,
      price: 250,
    },
    { id: 129032, propertyName: "Cactus Retreat", rating: 4.75, price: 300 },
    {
      id: 129033,
      propertyName: "Redwood Treehouse Escape",
      rating: 4.9,
      price: 120,
    },
    { id: 129034, propertyName: "Oceanview Condo", rating: 4.7, price: 140 },
    {
      id: 129035,
      propertyName: "Gold Miner Campground",
      rating: 4.69,
      price: 96,
    },
  ];

  return (
    <>
      <PropertyList properties={properties} />{" "}
    </>
  );
}

export default App;
