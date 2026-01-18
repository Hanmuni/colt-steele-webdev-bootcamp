import { useState } from "react";
import ShoppingList from "./ShoppingList";

import "./App.css";

function App() {
  const data = [
    { id: 1, item: "eggs", number: 12, completed: false },
    { id: 2, item: "tomatoes", number: 6, completed: true },
    { id: 3, item: "bread", number: 1, completed: false },
    { id: 4, item: "sugar", number: 5, completed: false },
  ];

  return (
    <>
      <ShoppingList items={data} />
    </>
  );
}

export default App;
