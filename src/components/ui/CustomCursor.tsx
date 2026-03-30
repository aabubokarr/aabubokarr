"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => setClicked(false);
    const handleMouseDown = () => setClicked(true);
    
    // Setup event listeners for links and buttons to expand the cursor
    const handleLinkHoverEvents = () => {
      document.querySelectorAll("a, button").forEach(el => {
        el.addEventListener("mouseenter", () => setLinkHovered(true));
        el.addEventListener("mouseleave", () => setLinkHovered(false));
      });
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    
    // We observe mutations or just run once since a lot is static, but MutationObserver is safer
    const observer = new MutationObserver(handleLinkHoverEvents);
    observer.observe(document.body, { childList: true, subtree: true });
    handleLinkHoverEvents();

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[100]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: clicked ? 0.8 : 1,
          opacity: linkHovered ? 0 : 1
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-accent pointer-events-none z-[99]"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          scale: linkHovered ? 1.5 : (clicked ? 0.9 : 1),
          backgroundColor: linkHovered ? "var(--color-accent-glow)" : "transparent",
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      />
    </>
  );
}
