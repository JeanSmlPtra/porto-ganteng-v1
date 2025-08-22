"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroTitle() {
  const [isTop, setIsTop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const heroSection = document.querySelector("#hero-section");
    if (!heroSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsTop(entry.isIntersecting);
      },
      { threshold: 0.8 }
    );

    observer.observe(heroSection);

    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{
        top: "50%",
        left: "50%",
        x: "-50%",
        y: "-50%",
        scale: 1,
      }}
      animate={
        isTop
          ? { top: "50%", left: "50%", x: "-50%", y: "-50%", scale: 1 }
          : isMobile
          ? { top: "10px", right: "10px", x: 0, y: 0, scale: 0.35 }
          : { top: "-50px", right: "-600px", x: 0, y: 0, scale: 0.1 }
      }
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      style={{
        position: "fixed",
        padding: isMobile ? "12px 20px" : "18px 30px",
        borderRadius: "12px",
        backgroundColor: "transparent",
        zIndex: 50,
      }}
      className={`${isMobile ? "text-5xl" : "text-9xl"} font-light text-gray-900`}
    >
      <span
        className="inset-0 text-white"
      >
        JEANN
      </span>
    </motion.div>
  );
}
