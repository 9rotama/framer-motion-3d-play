import Link from "next/link";

export default function Home() {
  return (
    <main className="p-2">
      <Link href="/dice" className="p-2 rounded-md bg-slate-900 text-white">
        dice
      </Link>
    </main>
  );
}
