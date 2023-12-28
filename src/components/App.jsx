import { useState } from "react";

import { Toaster } from "react-hot-toast";

import {
  BackgroundHeading,
  Header,
  ItemList,
  Sidebar,
  Footer,
} from "@/components";
import { initialItems } from "../lib/constants";

function App() {
  const [items, setItems] = useState(initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };

    const newItemsArr = [...items, newItem];
    setItems(newItemsArr);
  };

  const handleDeleteIteme = (id) => {
    const newItem = items.filter((item) => item.id !== id);
    setItems(newItem);
  };

  const handleToggleItem = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }

      return item;
    });

    setItems(newItems);
  };

  const handleRomoveAllItmes = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));

    setItems(newItems);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));

    setItems(newItems);
  };

  return (
    <>
      <BackgroundHeading />

      <main>
        <Header
          totalPacked={items.filter((item) => item.packed).length}
          totalItems={items.length}
        />
        <ItemList
          items={items}
          handleDeleteIteme={handleDeleteIteme}
          handleToggleItem={handleToggleItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleRomoveAllItmes={handleRomoveAllItmes}
          handleResetToInitial={handleResetToInitial}
          handleMarkAllAsComplete={handleMarkAllAsComplete}
          handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        />
      </main>

      <Footer />
      <Toaster />
    </>
  );
}

export default App;
