import Button from "./Button";

export default function BtnGroup({
  handleRomoveAllItmes,
  handleResetToInitial,
  handleMarkAllAsComplete,
  handleMarkAllAsIncomplete,
}) {
  return (
    <section className="button-group">
      <Button
        onClick={handleMarkAllAsComplete}
        buttonType="secondary"
        type="secondary"
      >
        Mark all as complete
      </Button>

      <Button
        onClick={handleMarkAllAsIncomplete}
        buttonType="secondary"
        type="secondary"
      >
        Mark all as incomplete
      </Button>

      <Button
        onClick={handleResetToInitial}
        buttonType="secondary"
        type="secondary"
      >
        Reset to initial
      </Button>

      <Button
        onClick={handleRomoveAllItmes}
        buttonType="secondary"
        type="secondary"
      >
        Remove all items
      </Button>
    </section>
  );
}
