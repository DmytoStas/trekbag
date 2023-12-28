import { Counter, Logo } from "@/components";
import { useItemsStore } from "../stores/itemsStore";

export default function Header() {
  const items = useItemsStore((state) => state.items);

  return (
    <header>
      <Logo />
      <Counter
        totalPacked={items.filter((item) => item.packed).length}
        totalItems={items.length}
      />
    </header>
  );
}
