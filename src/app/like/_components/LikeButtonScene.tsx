"use client";

import { useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { Mesh } from "three";
import LikeButtonHeartMaterial from "./LikeButtonHeartMaterial";

type Props = {
  isHover: boolean;
  isLiked: boolean;
};

export default function LikeButtonScene({ isHover, isLiked }: Props) {
  const group = useFBX("/models/heart/heart.fbx");
  const mesh = group.children[0] as Mesh;
  const geometry = mesh.geometry;
  const initialRotation = { x: -Math.PI / 2, y: 0, z: 0 };

  return (
    <Canvas>
      <motion.group
        animate={[isHover ? "hover" : ""]}
        variants={{
          hover: {
            scale: 1.2,
          },
        }}
      >
        <motion.mesh
          geometry={geometry}
          scale={0.05}
          rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
          animate={[isHover ? "hover" : ""]}
          variants={{
            hover: {
              rotateZ: initialRotation.z + 2 * Math.PI,
              transition: {
                rotateZ: { duration: 2, ease: "linear", repeat: Infinity },
              },
            },
          }}
        >
          <LikeButtonHeartMaterial isLiked={isLiked} isHover={isHover} />
        </motion.mesh>
        <pointLight intensity={10.0} position={[0, 0.2, 4]} />
        <pointLight intensity={10.0} position={[3, 0, 4]} />
      </motion.group>
      <ambientLight intensity={1.0} />
      <hemisphereLight intensity={2.0} />
    </Canvas>
  );
}
