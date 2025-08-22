"use client";
import { useState, useEffect } from "react";
import { FaUser, FaProjectDiagram, FaEnvelope, FaHome } from "react-icons/fa";
import Link from "next/link";

const navItems = [
  { href: "#hero-section", label: "Home", icon: <FaHome size={20} /> },
  { href: "#about", label: "About", icon: <FaUser size={20} /> },
  { href: "#projects", label: "Projects", icon: <FaProjectDiagram size={20} /> },
  { href: "#contact", label: "Contact", icon: <FaEnvelope size={20} /> },
];

export default function Navigation() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

// DESKTOP SIDEBAR
if (!isMobile) {
  return (
    <div
      className="group fixed right-5 bottom-[30px]
                 h-auto w-16 hover:w-50 transition-all duration-300 
                 flex flex-col items-center justify-center 
                 bg-white/30 backdrop-blur-sm shadow-lg 
                 rounded-2xl p-4 pl-3 overflow-hidden z-99"
    >
      {navItems.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="flex flex-row-reverse items-center text-black-700 hover:text-black-600 w-full px-2 py-3 rounded-lg hover:bg-blue-50 transition"
        >
          <div className="pl-3 flex-shrink-0">{item.icon}</div>
          <span className="mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-right">
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}


  // MOBILE BOTTOM NAV
  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 shadow-lg rounded-t-2xl flex justify-around w-full max-w-xs py-2 bg-white/30 backdrop-blur-sm">
      {navItems.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="flex flex-col items-center text-gray-700 hover:text-blue-600"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
