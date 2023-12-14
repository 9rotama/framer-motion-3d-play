"use client";

import DiceScene from "@/components/DiceScene";
import { Suspense } from "react";

export default function DicePage() {
  return (
    <div className="w-screen h-screen">
      <Suspense fallback={null}>
        <DiceScene />
      </Suspense>
    </div>
  );
}
