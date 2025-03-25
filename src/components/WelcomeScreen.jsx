import { motion } from "framer-motion";
import "../styles/AnimatedBackground.css";

const WelcomeScreen = ({ startGame }) => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-gray-200 text-center overflow-hidden">
      <div className="animated-bg"></div>
      <motion.h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg font-[Poppins]">
  I made something for you. Ready?
</motion.h1>
      <motion.button 
  onClick={startGame} 
  className="px-8 py-4 rounded-xl shadow-lg transition-all duration-300 bg-white/20 backdrop-blur-lg border border-white/30 text-white text-lg font-semibold hover:bg-white/30 hover:scale-105 active:scale-95"
  whileHover={{ scale: 1.1 }}
>
  Start
</motion.button>
    </div>
  );
};
export default WelcomeScreen;