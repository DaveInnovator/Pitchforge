import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white w-full shadow-sm z-50 border-t border-gray-800 py-6 mt-10 w-full text-center text-sm">
      <div className="container mx-auto px-4">
        <p>
          © {new Date().getFullYear()} <span className="text-blue-400 font-semibold">PitchForgeAI</span>. All rights reserved.
        </p>
        <p className="mt-2">
          Built with ❤️ by{" "}
          <a
            href="https://davidolarinde.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            David Olarinde
          </a>
        </p>
      </div>
    </footer>
  );
}
