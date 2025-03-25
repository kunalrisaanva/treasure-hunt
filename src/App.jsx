import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import WelcomeScreen from "./components/WelcomeScreen";
import MessageReveal from "./components/MessageReveal";
import FinalSurprise from "./components/FinalSurprise";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
};

function App() {
  const [gameState, setGameState] = useState("welcome");

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {gameState === "welcome" && (
          <motion.div
            key="welcome"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <WelcomeScreen startGame={() => setGameState("message")} />
          </motion.div>
        )}
        {gameState === "message" && (
          <motion.div
            key="message"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <MessageReveal onReveal={() => setGameState("final")} />
          </motion.div>
        )}
        {gameState === "final" && (
          <motion.div
            key="final"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
          >
            <FinalSurprise />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
