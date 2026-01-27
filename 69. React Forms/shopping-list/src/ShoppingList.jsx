import { useState } from "react";
import { v4 as uuid } from "uuid";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((currentItems) => {
      return [...currentItems, { ...item, id: uuid() }];
    });
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            Product Name: {item.product} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
      <ShoppingListForm onFormSubmit={addItem} />
    </div>
  );
}
