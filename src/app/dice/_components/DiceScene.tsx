import { useFBX } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useState } from "react";
import { Mesh, TextureLoader } from "three";
import { AnimateState } from "../page";

type Props = {
  diceValue: number;
  onClick: () => { newDiceValue: number; newSum: number };
  animateState: AnimateState;
  animate: (newSum: number) => void;
};

export default function DiceScene({
  diceValue,
  onClick,
  animateState,
  animate,
}: Props) {
  const group = useFBX("/models/dice/dice.fbx");
  const mesh = group.children[0] as Mesh;
  const geometry = mesh.geometry;
  const texture = useLoader(TextureLoader, "/models/dice/dice.png");

  const [prevDiceValue, setPrevDiceValue] = useState<number>(1);

  const updatePrevDiceValue = (newDiceValue: number) => {
    setPrevDiceValue(newDiceValue);
  };

  return (
    <Canvas>
      <motion.mesh
        scale={[0.5, 0.5, 0.5]}
        geometry={geometry}
        onClick={() => {
          if (animateState === "rolling") return;
          const { newDiceValue, newSum } = onClick();
          animate(newSum);
          updatePrevDiceValue(newDiceValue);
        }}
        rotation={[
          diceRotations[prevDiceValue - 1].x,
          diceRotations[prevDiceValue - 1].y,
          diceRotations[prevDiceValue - 1].z,
        ]}
        position={[0, -2, 0]}
        animate={[animateState]}
        variants={{
          rest: {
            y: -2,
            rotateX: diceRotations[diceValue - 1].x,
            rotateY: diceRotations[diceValue - 1].y,
            rotateZ: diceRotations[diceValue - 1].z,
          },
          rolling: {
            y: 2,
            rotateX: diceRotations[prevDiceValue - 1].x + 2 * Math.PI,
            rotateY: diceRotations[prevDiceValue - 1].y + 2 * Math.PI,
            rotateZ: diceRotations[prevDiceValue - 1].z + 2 * Math.PI,
            transition: {
              y: {
                ease: "circOut",
              },
              rotateX: {
                duration: 0.2,
                ease: "linear",
                repeat: Infinity,
              },
              rotateY: {
                duration: 0.1,
                ease: "linear",
                repeat: Infinity,
              },
              rotateZ: {
                duration: 0.3,
                ease: "linear",
                repeat: Infinity,
              },
            },
          },
          drop: {
            y: -2,
            rotateX: diceRotations[diceValue - 1].x,
            rotateY: diceRotations[diceValue - 1].y,
            rotateZ: diceRotations[diceValue - 1].z,
            transition: {
              rotation: {
                duration: 0.1,
              },
              y: {
                duration: 0.5,
                ease: "circIn",
              },
            },
          },
        }}
        whileHover={{ scale: 0.6 }}
      >
        <meshPhysicalMaterial map={texture}></meshPhysicalMaterial>
      </motion.mesh>

      <ambientLight intensity={0.5} color="#def" />
      <hemisphereLight intensity={0.8} color="#def" />
      <pointLight
        position={[0, 10, 0]}
        intensity={50}
        scale={10}
        color="#def"
      ></pointLight>
      <pointLight
        position={[0, 0, 10]}
        intensity={100}
        scale={10}
        color="#def"
      ></pointLight>
    </Canvas>
  );
}

const diceRotations = [
  { x: 0, y: -0.5 * Math.PI, z: 0 },
  { x: -0.5 * Math.PI, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 },
  { x: 0, y: Math.PI, z: 0 },
  { x: 0.5 * Math.PI, y: 0, z: 0 },
  { x: 0, y: 0.5 * Math.PI, z: 0 },
];
