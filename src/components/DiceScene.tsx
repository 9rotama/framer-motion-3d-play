"use client";

import { Environment, OrbitControls, useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export default function DiceScene() {
  const fbx = useFBX("/models/dice.fbx");
  return (
    <Canvas>
      <motion.group>
        <primitive object={fbx} />
        <OrbitControls />
        <Environment preset="sunset" background />
      </motion.group>
    </Canvas>
  );
}
