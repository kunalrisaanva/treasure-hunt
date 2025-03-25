import { useState } from "react";
import { motion } from "framer-motion";
import TextTransition, { presets } from "react-text-transition"; // Import Text Transition
import "../styles/AnimatedBackground.css";
import clues from "../ClueData";

const MessageReveal = ({ onReveal }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep === clues.length - 1) {
      onReveal();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-gray-200 text-center overflow-hidden">
      <div className="animated-bg"></div>
      
      {/* Animated Text Reveal */}
      <motion.h2 className="text-3xl font-semibold mb-6 font-[Poppins]">
  <TextTransition springConfig={presets.wobbly}>{clues[currentStep].message}</TextTransition>
</motion.h2>
      
      {/* Next Button */}
      <motion.button 
        onClick={handleNext} 
        className="px-8 py-4 rounded-xl shadow-lg transition-all duration-300 bg-white/20 backdrop-blur-lg border border-white/30 text-white text-lg font-semibold hover:bg-white/30 hover:scale-105 active:scale-95"
        whileHover={{ scale: 1.1 }}
      >
        {clues[currentStep].button}
      </motion.button>
    </div>
  );
};

export default MessageReveal;
