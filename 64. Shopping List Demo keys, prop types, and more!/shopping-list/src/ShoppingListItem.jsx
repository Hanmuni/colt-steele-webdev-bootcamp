function ShoppingListItem({ item, number, completed }) {
  return (
    <li
      style={{
        color: completed ? "crimson" : "greenyellow",
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {item} - {number}
    </li>
  );
}

export default ShoppingListItem;
