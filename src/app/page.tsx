import Link from "next/link";
export default function Home() {
  return (
    <main className="flex flex-col justify-center text-center">
      <h1 className="mb-3 text-2xl">framer-motion-3d demos</h1>
      <ul className="flex flex-col gap-1">
        <Link href="/like" className="bg-slate-600 text-slate-50 p-2">
          LikeButtonDemo
        </Link>
        <Link href="/dice" className="bg-slate-600 text-slate-50 p-2">
          DiceDemo
        </Link>
      </ul>
    </main>
  );
}
