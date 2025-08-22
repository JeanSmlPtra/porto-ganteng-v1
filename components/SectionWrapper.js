// components/SectionWrapper.jsx
"use client";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function SectionWrapper({ children, circleColor = "#2563eb", id }) {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.6 });

  useEffect(() => {
    if (inView) {
      controls.start({ x: 0, transition: { duration: 0.8, ease: "easeOut" } });
    } else {
      controls.start({ x: "-150%", transition: { duration: 0.8, ease: "easeIn" } });
    }
  }, [inView, controls]);

  return (
    <section
      id={id}
      ref={ref}
      className="relative min-h-screen flex items-center justify-center scroll-snap-align-start overflow-hidden"
    >
      {/* Lingkaran background */}
      <motion.div
        animate={controls}
        initial={{ x: 0 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
        style={{
          width: "100vh",
          height: "100vh",
          backgroundColor: circleColor,
          zIndex: 0,
        }}
      />

      {/* Konten */}
      <motion.div
        animate={controls}
        initial={{ x: 0 }}
        className="relative z-10 max-w-4xl px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}
