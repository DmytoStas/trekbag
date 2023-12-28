import { AddItemForm, BtnGroup } from "@/components";

export default function Sidebar({
  handleAddItem,
  handleRomoveAllItmes,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <BtnGroup
        handleRomoveAllItmes={handleRomoveAllItmes}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      />
    </div>
  );
}
