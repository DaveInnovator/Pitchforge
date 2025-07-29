import { useState } from "react";

const PitchForm = ({ setPitch, setLoading }) => {
  const [formData, setFormData] = useState({
    product: "",
    targetAudience: "",
    keyBenefits: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const { product, targetAudience, keyBenefits } = formData;

  if (!product || !targetAudience || !keyBenefits) return;

  setLoading(true);
  setPitch("");

  try {
    const prompt = `Generate a persuasive startup pitch for a product called "${product}" targeted at "${targetAudience}". Highlight the following key benefits: ${keyBenefits}. Keep it concise, compelling, and investor-ready.`;

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`, 
      },
      body: JSON.stringify({
        model: "llama3-8b-8192",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("API error:", data);
      throw new Error(data?.error?.message || "Something went wrong.");
    }

    const output = data.choices?.[0]?.message?.content;
    setPitch(output || "AI returned no content.");
  } catch (err) {
    console.error("Error:", err);
    setPitch("Something went wrong. Try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#0e0e10] border border-[#1a1a1a] mt-20 rounded-2xl px-6 py-8 space-y-5 shadow-lg text-sm text-white max-w-2xl mx-auto"
    >
      <h2 className="text-indigo-500 text-xs uppercase tracking-wider font-medium mb-1">
        Build Your Pitch
      </h2>

      <input
        type="text"
        name="product"
        placeholder="Product Name"
        value={formData.product}
        onChange={handleChange}
        className="w-full bg-[#16181c] text-white placeholder:text-gray-500 border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
      />

      <input
        type="text"
        name="targetAudience"
        placeholder="Target Audience"
        value={formData.targetAudience}
        onChange={handleChange}
        className="w-full bg-[#16181c] text-white placeholder:text-gray-500 border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition"
      />

      <textarea
        name="keyBenefits"
        placeholder="Key Benefits (comma-separated)"
        value={formData.keyBenefits}
        onChange={handleChange}
        rows={4}
        className="w-full bg-[#16181c] text-white placeholder:text-gray-500 border border-[#2a2a2a] rounded-lg px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none transition resize-none"
      ></textarea>

      <button
        type="submit"
        className="w-full py-3 bg-indigo-500 text-black font-semibold text-sm rounded-xl hover:opacity-90 transition-all tracking-wide"
      >
        Generate My Pitch
      </button>
    </form>
  );
};

export default PitchForm;
