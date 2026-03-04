import React, { useState, useEffect } from "react";
import BG from "./assets/bg.png";

const App = () => {

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("counter");
    return saved !== null ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("counter", JSON.stringify(count));
  }, [count]);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);


  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div
        className="w-130 p-12 rounded-[40px] 
                   bg-white/10 backdrop-blur-2xl 
                   border border-white/20 
                   shadow-[0_0_60px_rgba(255,255,255,0.15)]
                   text-center transition-all duration-500"
      >
        {/* Title */}
        <h1
          className="text-5xl font-extrabold mb-12
                     bg-linear-to-r from-purple-400 via-pink-500 to-cyan-400
                     bg-clip-text text-transparent
                     animate-pulse"
        >
          Counter App
        </h1>

        {/* Counter Number with smooth animation */}
        <div
          key={count}
          className="text-8xl font-bold text-white mb-10 
                     drop-shadow-[0_0_25px_rgba(255,255,255,0.6)]
                     transition-all duration-300 ease-in-out
                     scale-100 animate-bounce"
        >
          {count}
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-8 mb-8">
          {/* Decrease */}
          <button
            onClick={handleDecrease}
            className="w-20 h-20 rounded-full
                       bg-white/10 backdrop-blur-xl
                       border border-white/30
                       text-white text-4xl font-bold
                       flex items-center justify-center
                       hover:scale-125 hover:bg-white/20
                       transition duration-300
                       shadow-[0_0_25px_rgba(255,255,255,0.25)]"
          >
            −
          </button>

          {/* Increase */}
          <button
            onClick={handleIncrease}
            className="w-20 h-20 rounded-full
                       bg-white/10 backdrop-blur-xl
                       border border-white/30
                       text-white text-4xl font-bold
                       flex items-center justify-center
                       hover:scale-125 hover:bg-white/20
                       transition duration-300
                       shadow-[0_0_25px_rgba(255,255,255,0.25)]"
          >
            +
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={handleReset}
          className="px-8 py-3 rounded-full
                     bg-linear-to-r from-purple-500 to-pink-500
                     text-white font-semibold
                     hover:scale-110 transition duration-300
                     shadow-[0_0_25px_rgba(168,85,247,0.5)]"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;