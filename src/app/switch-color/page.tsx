"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useState } from "react";

type Color = "pink" | "cyan";

export default function SwitchColorPage() {
  const [color, setColor] = useState<Color>("pink");

  const changeColor = () => {
    if (color == "pink") {
      setColor("cyan");
    } else {
      setColor("pink");
    }
  };

  return (
    <main className="w-full h-screen">
      <Canvas>
        <motion.mesh onClick={() => changeColor()}>
          <sphereGeometry />
          <motion.meshPhongMaterial
            animate={[color]}
            variants={{
              pink: { color: "#ff99dd" },
              cyan: { color: "#55ccff" },
            }}
            transition={{ duration: 1.0 }}
          />
        </motion.mesh>
        <pointLight position={[3, 2, 5]} intensity={50} />
        <ambientLight />
      </Canvas>
    </main>
  );
}
