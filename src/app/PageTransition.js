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
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // exit={{ opacity: 1 }}
          // transition={transition}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`background-${pathname}`}
          className="slide-in"
          initial={{ x: "0vw" }}
          animate={{ x: "100vw" }}
          exit={{ x: "100vw" }}
          transition={{ duration: 3.2, ease: "anticipate" }}
        ></motion.div>
      </AnimatePresence>
      {/* <AnimatePresence mode="wait" >
        <motion.div
          key={`foreground-${pathname}`}
          className="slide-out"
          initial={{ x: "0vw" }}
          animate={{ x: "100vw" }}
          exit={{ x: "200vw" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        ></motion.div>
      </AnimatePresence> */}
    </div>
  );
};

export default PageTransition;
