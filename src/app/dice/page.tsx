"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import DiceScene from "./_components/DiceScene";

export type AnimateState = "rest" | "rolling" | "drop";

export default function LikePage() {
  const [sum, setSum] = useState<number>(0);
  const [diceValue, setDiceValue] = useState<number>(1);
  const [animateState, setAnimateState] = useState<AnimateState>("rest");

  const animate = async (newSum: number) => {
    setAnimateState("rolling");
    await sleep(1000);
    setAnimateState("drop");
    await sleep(500);
    setAnimateState("rest");

    setSum(newSum);
  };

  const onClickDice = () => {
    const newDiceValue = Math.floor(Math.random() * 6) + 1;
    const newSum = sum + newDiceValue;

    setDiceValue(newDiceValue);

    return { newDiceValue, newSum };
  };

  return (
    <main className="w-full h-screen grid place-items-center bg-emerald-500">
      <div className="w-96 h-[500px] flex flex-col justify-center">
        <motion.div
          className="h-20 text-6xl text-white font-black text-center drop-shadow-xl"
          animate={animateState}
          variants={{
            rolling: { scale: 1 },
            drop: { scale: 1 },
            rest: { scale: [2, 1] },
          }}
        >
          {sum}
        </motion.div>
        <DiceScene
          diceValue={diceValue}
          onClick={onClickDice}
          animateState={animateState}
          animate={animate}
        />
      </div>
    </main>
  );
}

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
