import React from "react";
import { motion } from "framer-motion";

function MotionCard({ children }) {
  return (
    <motion.div
      role="listitem"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default MotionCard;