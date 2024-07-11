import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../../public/images/Untitled2.png";
import Image from "next/image";
import "../../public/css/HowItWorks.css";

const mode1 = [
  {
    name: " Mode 1 (Distance)",
    info: "Utilizes ultrasonic and infrared sensors to measure distances to nearby obstacles, providing immediate haptic feedback to alert users.",
  },
];

const mode2 = [
  {
    name: " Mode 2 (Camera)",
    info: "Employs a portable camera to capture images and process them for object recognition, delivering auditory feedback to describe the surroundings.",
  },
];

const mode3 = [
  {
    name: "Mode 3 (Combined)",
    info: "Combines both distance measurement and image processing to offer a comprehensive perception of the environment, enhancing safety and awareness.",
  },
];

const HowItWorks = () => {
  const [hoveredMode, setHoveredMode] = React.useState(null);
  return (
    <motion.div className="h-[100vh] container3 ">
      <Image className="w-full h-full prod-img2 object-cover z-0" src={img} alt="" />
      <div className="modeList1">
        {mode1.map((mode, index) => (
          <div
            className="mode"
            key={index}
            onMouseEnter={() => setHoveredMode(index)}
            onMouseLeave={() => setHoveredMode(null)}
          >
            <ion-icon name="arrow-forward-sharp"></ion-icon> {mode.name}
            <AnimatePresence>
              {hoveredMode === index && (
                <motion.div
                  className="infoBox"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 24 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p>{mode.info}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="modeList2">
        {mode2.map((mode, index) => (
          <div
            className="mode"
            key={index}
            onMouseEnter={() => setHoveredMode(index)}
            onMouseLeave={() => setHoveredMode(null)}
          >
            <ion-icon name="arrow-forward-sharp"></ion-icon>
            {mode.name}
            <AnimatePresence>
              {hoveredMode === index && (
                <motion.div
                  className="infoBox"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 24 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p>{mode.info}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      <div className="modeList3">
        {mode3.map((mode, index) => (
          <div
            className="mode"
            key={index}
            onMouseEnter={() => setHoveredMode(index)}
            onMouseLeave={() => setHoveredMode(null)}
          >
            <ion-icon name="arrow-forward-sharp"></ion-icon>
            {mode.name}
            <AnimatePresence>
              {hoveredMode === index && (
                <motion.div
                  className="infoBox"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 24 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <p>{mode.info}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HowItWorks;
