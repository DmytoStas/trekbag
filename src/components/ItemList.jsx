import { useMemo, useState } from "react";

import Select from "react-select";

import EmptyView from "./EmptyView";
import { useItemsStore } from "../stores/itemsStore";

const sortingOptions = [
  { label: "Sort by default", value: "default" },
  { label: "Sort by packed", value: "packed" },
  { label: "Sort by unpacked", value: "unpacked" },
];

export default function ItemList() {
  const items = useItemsStore((state) => state.items);
  const deleteItem = useItemsStore((state) => state.deleteItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);

  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy]
  );

  return (
    <section className="items-section">
      {items.length > 0 ? (
        <Select
          className="sorting"
          options={sortingOptions}
          defaultValue={sortingOptions[0]}
          onChange={(option) => setSortBy(option.value)}
        />
      ) : null}
      {items.length === 0 && <EmptyView />}

      <ul className="items-list">
        {sortedItems.map((item) => (
          <li key={item.id} className="item">
            <Item
              item={item}
              onDeleteIteme={deleteItem}
              onToggleItem={toggleItem}
            />
          </li>
        ))}
      </ul>
    </section>
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
