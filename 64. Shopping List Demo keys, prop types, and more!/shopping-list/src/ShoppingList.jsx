import ShoppingListItem from "./ShoppingListItem";

function ShoppingList({ items }) {
  return (
    <ul>
      {items.map((i) => (
        <ShoppingListItem
          key={i.id}
          item={i.item}
          number={i.number}
          completed={i.completed}
        />
      ))}
    </ul>
  );
}

export default ShoppingList;
