import { motion } from "framer-motion-3d";
type Props = {
  isLiked: boolean;
  isHover: boolean;
};

export default function LikeButtonHeartMaterial({ isLiked, isHover }: Props) {
  return (
    <motion.meshPhysicalMaterial
      animate={[isLiked ? "liked" : isHover ? "hover" : "notHover"]}
      variants={{
        liked: { color: "#ffffff" },
        notHover: { color: "#aaaaaa" },
        hover: { color: "#ff1f6d" },
      }}
      roughness={0.3}
      reflectivity={0.6}
    />
  );
}
