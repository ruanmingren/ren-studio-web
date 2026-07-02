"use client";
import { useState } from "react";

export default function LanguageSwitcher() {
  const [lang, setLang] = useState("EN");

  const toggleLang = () => {
    // Logic: Nếu đang là EN thì chuyển sang VN, rồi JP...
    const next = lang === "EN" ? "VN" : lang === "VN" ? "JP" : "EN";
    setLang(next);
    // Ở đây ông sẽ lưu vào localStorage để web nhớ lựa chọn của khách
    localStorage.setItem("lang", next);
  };

  return (
    <button 
      onClick={toggleLang}
      className="fixed top-6 right-6 z-50 bg-white/10 backdrop-blur-md px-4 py-2 border border-white/20 rounded-full text-white font-bold tracking-widest text-xs hover:bg-white hover:text-black transition-all"
    >
      {lang}
    </button>
  );
}