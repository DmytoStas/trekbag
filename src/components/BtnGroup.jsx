import { useItemsStore } from "../stores/itemsStore";
import Button from "./Button";

export default function BtnGroup() {
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);

  const secondaryButtons = [
    {
      text: "All complete",
      onClick: markAllAsComplete,
    },
    {
      text: "All incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button.text + button.onClick.toString()}
          text={button.text}
          onClick={button.onClick}
          buttonType="secondary"
        />
      ))}
    </section>
  );
}
