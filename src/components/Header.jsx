import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const linkVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { delay: 0.1 } },
  };

  return (
    <header className="bg-[#0e0e10] text-white w-full shadow-sm z-50 fixed top-0 left-0">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-xl font-bold tracking-tight text-white"
        >
          PitchForge<span className="text-indigo-500">.AI</span>
        </motion.div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {["Home", "Features", "Pricing", "About"].map((item, index) => (
            <motion.a
              key={item}
              href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
              variants={linkVariants}
              initial="hidden"
              animate="visible"
              className="hover:text-indigo-400 transition"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        {/* Hamburger Toggle */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9, rotate: 90 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0e0e10] px-4 pb-4 pt-2 space-y-3"
          >
            {["Home", "Features", "Pricing", "About"].map((item) => (
              <motion.a
                key={item}
                href={item === "Home" ? "/" : `#${item.toLowerCase()}`}
                className="block hover:text-indigo-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
