import "./App.css";
import Rating from "@mui/material/Rating";
import { useState } from "react";

function App() {
  const [rating, setRating] = useState(3);
  return (
    <>
      <h1>Current rating: {rating}</h1>
      <Rating
        name="simple-controlled"
        value={rating}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
    </>
  );
}

export default App;
