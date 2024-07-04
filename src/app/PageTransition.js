"use client";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";
import { usePathname } from "next/navigation";
const PageTransition = ({ children }) => {
  const pathname = usePathname();
  const transition = {
    type: "tween",
    duration: 0.8,
    ease: "easeIn",
  };

  return (
    <div className="page-transition-container">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={`background-${pathname}`}
          className="slide-in"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
        <motion.div
          key={`foreground-${pathname}`}
          className="slide-out"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        ></motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageTransition;
