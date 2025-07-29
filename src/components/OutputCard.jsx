import { useState } from "react";

const OutputCard = ({ content }) => {
  const [copied, setCopied] = useState(false);

  if (!content) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <div className="bg-[#0e0e10] border border-[#1a1a1a] rounded-2xl px-6 py-8 mt-10 shadow-lg text-sm text-white max-w-2xl mx-auto animate-fade-in relative">
      <h2 className="text-indigo-500 text-xs uppercase tracking-wider font-medium mb-4">
        Your AI-Generated Pitch
      </h2>

      <p className="text-gray-300 leading-relaxed whitespace-pre-wrap mb-6">
        {content}
      </p>

      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1 rounded transition duration-150"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
};

export default OutputCard;
