import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/AnimatedBackground.css";

const FinalSurprise = () => {

    useEffect(() => {
        const audio = new Audio("https://p.scdn.co/mp3-preview/650631a77c57037fa7ff5948f481cd9f67a32b52?cid=774b29d4f13844c495f206cafdad9c86"); 
        audio.loop = true;
        audio.play().catch((error) => console.log("Autoplay blocked:", error));
      }, []);
      


  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
      <div className="animated-bg"></div>
      <motion.h1 className="text-4xl font-bold text-gray-200 font-[Poppins]">
        🎁 Here's Your Surprise! 🎁
      </motion.h1>
      <motion.p className="mt-6 text-xl italic text-gray-300" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
        "A little something just for you... Ekta"
      </motion.p>
      <motion.img src="https://i.pinimg.com/736x/38/8f/f2/388ff2a055d53ede2537869ba18cc58b.jpg" 
        alt="Handwritten Note" className="w-80 my-6 shadow-lg rounded-lg" 
        initial={{ opacity: 0, rotateY: 180 }} 
        animate={{ opacity: 1, rotateY: 0 }} transition={{ duration: 1.5 }} 
      />
      <iframe 
        src="https://open.spotify.com/embed/track/2nGFzvICaeEWjIrBrL2RAx" 
        width="300" height="80" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        className="rounded-lg shadow-xl my-3">
      </iframe>
      <motion.button 
        onClick={() => window.location.href = "https://wa.me/+918221007289?text=Hey!%20I%20just%20saw%20your%20surprise%20and%20I%20loved%20it!%20❤️"} 
        className="px-8 py-4 rounded-xl shadow-lg transition-all duration-300 bg-green-500 text-white text-lg font-semibold hover:bg-green-600 hover:scale-105 active:scale-95 my-4"
        whileHover={{ scale: 1.1 }}
      >
        Was this special or should I try harder? 😉
      </motion.button>
    </div>
  );
};

export default FinalSurprise;
