import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-[#0e0e10] text-white w-full shadow-sm z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight text-white">
          PitchForge<span className="text-indigo-500">.AI</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
              <Link to="/">Home</Link>
          <a href="#features" className="hover:text-indigo-400 transition">Features</a>
          <a href="#pricing" className="hover:text-indigo-400 transition">Pricing</a>
          <a href="#about" className="hover:text-indigo-400 transition">About</a>
        </nav>

        {/* CTA Buttons */}
        {/* <div className="hidden md:flex gap-4">
          <button className="text-sm text-white border border-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-500 transition">
            Login
          </button>
          <button className="text-sm bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
            Get Started
          </button>
        </div> */}

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[#0e0e10] px-4 pb-4 pt-2 space-y-3">
          <a href="#features" className="block hover:text-indigo-400">Features</a>
          <a href="#pricing" className="block hover:text-indigo-400">Pricing</a>
          <a href="#about" className="block hover:text-indigo-400">About</a>
          {/* <button className="block w-full text-left text-sm text-white border border-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-500 transition mt-2">
            Login
          </button>
          <button className="block w-full text-left text-sm bg-indigo-500 px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
            Get Started
          </button> */}
        </div>
      )}
    </header>
  );
};

export default Header;
