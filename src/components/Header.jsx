import { Counter, Logo } from "@/components";

export default function Header({ totalPacked, totalItems }) {
  return (
    <header>
      <Logo />
      <Counter totalPacked={totalPacked} totalItems={totalItems} />
    </header>
  );
}
