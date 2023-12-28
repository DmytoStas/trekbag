import EmptyView from "./EmptyView";

export default function ItemList({
  items,
  handleDeleteIteme,
  handleToggleItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.map((item) => (
        <li key={item.id} className="item">
          <Item
            item={item}
            onDeleteIteme={handleDeleteIteme}
            onToggleItem={handleToggleItem}
          />
        </li>
      ))}
    </ul>
  );
}

function Item({ item, onDeleteIteme, onToggleItem }) {
  const { packed, name, id } = item;

  return (
    <>
      <label>
        <input
          onChange={() => onToggleItem(id)}
          type="checkbox"
          checked={packed}
        />
        {name}
      </label>

      <button onClick={() => onDeleteIteme(id)}>❌</button>
    </>
  );
}
