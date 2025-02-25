import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="font-pepsi font-bold">
      <span className="text-red">FANS</span>
      <span>Clash</span>
    </Link>
  );
}
