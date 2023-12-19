"use client";

import { useFBX } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Variant } from "framer-motion";
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
        animate={[isLiked ? "liked" : "", isHover ? "hover" : ""]}
        variants={{
          liked: {
            y: 7,
          },
          hover: {
            scale: 1.2,
          },
        }}
        transition={{ ease: "easeOut" }}
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
      </motion.group>

      <motion.group
        position={[0, -7, 0]}
        animate={[isLiked ? "liked" : ""]}
        variants={{
          liked: {
            y: 0,
          },
        }}
        transition={{ ease: "easeOut" }}
      >
        <motion.mesh
          geometry={geometry}
          position={[-1.45, 1.5, 0]}
          scale={0.03}
          rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
        >
          <LikeButtonHeartMaterial isLiked={isLiked} isHover={isHover} />
        </motion.mesh>
        <motion.mesh
          geometry={geometry}
          position={[1.45, 0, 0]}
          scale={0.03}
          rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
        >
          <LikeButtonHeartMaterial isLiked={isLiked} isHover={isHover} />
        </motion.mesh>
        <motion.mesh
          geometry={geometry}
          position={[-1.45, -1.5, 0]}
          scale={0.03}
          rotation={[initialRotation.x, initialRotation.y, initialRotation.z]}
        >
          <LikeButtonHeartMaterial isLiked={isLiked} isHover={isHover} />
        </motion.mesh>
      </motion.group>

      <pointLight intensity={10.0} position={[0, 0.2, 4]} />
      <pointLight intensity={10.0} position={[3, 0, 4]} />

      <motion.ambientLight
        animate={[isLiked ? "liked" : ""]}
        intensity={2.0}
        variants={{
          liked: {
            intensity: 10,
          } as Variant,
        }}
      />
      <hemisphereLight intensity={2.0} />
    </Canvas>
  );
}
