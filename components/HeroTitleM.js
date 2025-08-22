"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroTitle() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{
        padding: isMobile ? "12px 20px" : "18px 30px",
        borderRadius: "12px",
        backgroundColor: "transparent",
      }}
      className={`${isMobile ? "text-5xl" : "text-9xl"} font-light text-white`}
    >
      JEANN
    </motion.div>
  );
}
