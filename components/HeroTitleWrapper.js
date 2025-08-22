"use client";

import { useEffect, useState } from "react";
import HeroTitle from "./HeroTitle";
import HeroTitleM from "./HeroTitleM";

export default function HeroTitleWrapper() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768); // breakpoint tablet ke bawah
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return isMobile ? <HeroTitleM /> : <HeroTitle />;
}
