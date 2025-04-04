import { useEffect } from "react";
import { motion } from "framer-motion";
import "../styles/AnimatedBackground.css";

const FinalSurprise = () => {
  useEffect(() => {
    const audio = new Audio(
      "https://p.scdn.co/mp3-preview/650631a77c57037fa7ff5948f481cd9f67a32b52?cid=774b29d4f13844c495f206cafdad9c86"
    );
    audio.loop = true;
    audio.play().catch((error) => console.log("Autoplay blocked:", error));
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center overflow-hidden">
      <div className="animated-bg"></div>
      <motion.h1 className="text-4xl font-bold text-gray-200 font-[Poppins] mt-1">
        🎁 Here's Your Surprise! 🎁
      </motion.h1>
      <motion.p
  className="mt-6 text-2xl italic font-semibold text-gray-300 relative"
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5 }}
>
  <span className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 bg-clip-text text-transparent">
    "A little something just for you...
  </span>

  <motion.span
    className="relative px-3 py-1 ml-2 text-white rounded-lg shadow-lg bg-gradient-to-r from-pink-500 to-red-500 animate-glow"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1.1, opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
  >
    Anjali Saini
    <span className="absolute top-0 left-0 w-full h-full rounded-lg bg-pink-400 blur-xl opacity-50"></span>
  </motion.span>
  "
</motion.p>


      <motion.img
        src="https://i.pinimg.com/736x/32/f9/eb/32f9eb757d034d3b545f9715bde44894.jpg"
        alt="Handwritten Note"
        className="w-80 my-6 shadow-lg rounded-lg"
        initial={{ opacity: 0, rotateY: 180 }}
        animate={{ opacity: 1, rotateY: 0 }}
        transition={{ duration: 1.5 }}
      />
      <iframe
        src="https://open.spotify.com/embed/track/2nGFzvICaeEWjIrBrL2RAx"
        width="300"
        height="80"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        className="rounded-lg shadow-xl my-3"
      ></iframe>
      <motion.button
        onClick={() =>
          (window.location.href =
            "https://wa.me/+918307339859?text=Hey!%20I%20just%20saw%20your%20surprise%20and%20I%20loved%20it!%20❤️")
        }
        className="px-6 py-2 rounded-xl shadow-lg transition-all duration-300 bg-pink-500 text-white text-lg font-semibold hover:bg-green-600 hover:scale-105 active:scale-95 my-4"
        whileHover={{ scale: 1.1 }}
      >
        Was this special or should I try harder? 😉 click me
      </motion.button>
    </div>
  );
};

export default FinalSurprise;
