"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export default function HoverScalePage() {
  return (
    <main className="w-full h-screen">
      <Canvas>
        <motion.mesh whileHover={{ scale: 2 }} rotation={[90, 0, 90]}>
          <boxGeometry />
          <meshNormalMaterial></meshNormalMaterial>
        </motion.mesh>
      </Canvas>
    </main>
  );
}
