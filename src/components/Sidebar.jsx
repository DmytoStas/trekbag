import { AddItemForm, BtnGroup } from "@/components";
import { useItemsStore } from "../stores/itemsStore";

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);

  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <BtnGroup />
    </div>
  );
}
