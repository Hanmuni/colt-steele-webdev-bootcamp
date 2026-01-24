function ShoppingListItem({ item, number, completed }) {
  return (
    <li
      style={{
        color: completed ? "crimson" : "#080e76",
        textDecoration: completed ? "line-through" : "none",
      }}
    >
      {item} - {number}
    </li>
  );
}

export default ShoppingListItem;
