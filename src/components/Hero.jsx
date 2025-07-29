import React from 'react';
import { Rocket } from 'lucide-react';
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-5xl text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          AI-Powered Startup Pitches  
          <span className="block text-indigo-500">Crafted in 60 Seconds</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Pitchforge helps SaaS founders auto-generate fundable, investor-ready pitch scripts, powered by AI and startup insight.
        </p>
  <Link to="/generate">
        <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-semibold px-6 py-3 rounded-2xl shadow-lg transition-all">
          <Rocket className="w-5 h-5" />
          Generate My Pitch
        </button>   </Link>
      </div>
    </section>
  );
};

export default Hero;
