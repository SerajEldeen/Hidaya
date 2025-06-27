"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function TopUpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 px-3 py-3 border transition-all duration-300
        border-[#FF9898] bg-white text-[#FF9898] shadow-md
        hover:bg-[#FF9898] hover:text-white cursor-pointer
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
