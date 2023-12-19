"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./LikeButton.module.css";
import LikeButtonScene from "./LikeButtonScene";

export default function LikeButton() {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  return (
    <>
      <motion.button
        className={styles.button}
        animate={[isHover ? "hover" : "", isLiked ? "liked" : ""]}
        variants={{
          hover: { scale: 1.2 },
          liked: { backgroundColor: "#fa377b", borderColor: "#ed246a" },
        }}
        onHoverStart={() => setIsHover(true)}
        onHoverEnd={() => setIsHover(false)}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsLiked(!isLiked)}
      >
        <div className={styles.scene}>
          <LikeButtonScene isHover={isHover} isLiked={isLiked} />
        </div>
        <motion.p
          className={styles.text}
          animate={[isLiked ? "liked" : ""]}
          variants={{
            liked: { color: "#fff" },
          }}
        >
          {isLiked ? "Liked" : "Like"}
        </motion.p>
      </motion.button>
    </>
  );
}
