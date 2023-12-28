import { useRef, useState } from "react";

import toast from "react-hot-toast";

import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const inputRef = useRef();
  const [itemText, setItemText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      toast.error("Item can't be empty");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        name=""
        value={itemText}
        autoFocus
        onChange={(e) => {
          setItemText(e.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
