"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gachaPool, GachaCard } from "../gachaData";

const MAX_ENERGY = 71;
const ENERGY_REGEN_MINUTES = 1;

export default function GachaSystem() {
  const [energy, setEnergy] = useState<number>(MAX_ENERGY);
  const [ownedCards, setOwnedCards] = useState<number[]>([]);
  const [currentCard, setCurrentCard] = useState<GachaCard | null>(null);
  const [isFlipping, setIsFlipping] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [rollCount, setRollCount] = useState(0);

  const [activeTab, setActiveTab] = useState<"gacha" | "collection">("gacha");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [detailCard, setDetailCard] = useState<GachaCard | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedEnergy = localStorage.getItem("gachaEnergy");
      const savedTime = localStorage.getItem("gachaLastTime");
      const savedCards = localStorage.getItem("gachaOwnedCards");

      setTimeout(() => {
        if (savedCards) setOwnedCards(JSON.parse(savedCards) as number[]);

        if (savedEnergy && savedTime) {
          const lastTime = new Date(savedTime).getTime();
          const now = new Date().getTime();
          const diffInMinutes = (now - lastTime) / 1000 / 60;
          
          const energyGained = Math.floor(diffInMinutes / ENERGY_REGEN_MINUTES);
          const newEnergy = Math.min(MAX_ENERGY, parseInt(savedEnergy) + energyGained);
          
          setEnergy(newEnergy);
          
          const remainder = diffInMinutes % ENERGY_REGEN_MINUTES;
          setTimeLeft(Math.floor((ENERGY_REGEN_MINUTES - remainder) * 60));
        }
      }, 0);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (energy < MAX_ENERGY) {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            const newEnergy = Math.min(MAX_ENERGY, energy + 1);
            setEnergy(newEnergy);
            localStorage.setItem("gachaEnergy", newEnergy.toString());
            localStorage.setItem("gachaLastTime", new Date().toISOString());
            return ENERGY_REGEN_MINUTES * 60;
          }
          return prev - 1;
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [energy]);

  const rollGacha = () => {
    if (energy <= 0 || isFlipping) return;

    const newEnergy = energy - 1;
    setEnergy(newEnergy);
    localStorage.setItem("gachaEnergy", newEnergy.toString());
    localStorage.setItem("gachaLastTime", new Date().toISOString());

    const roll = Math.random() * 100;
    let targetRarity: "SSR" | "SR" | "R" = "R";
    if (roll <= 4) targetRarity = "SSR";
    else if (roll <= 25) targetRarity = "SR";

    const possibleCards = gachaPool.filter((c: GachaCard) => c.rarity === targetRarity);
    const selectedCard = possibleCards[Math.floor(Math.random() * possibleCards.length)];

    if (!selectedCard) return;

    if (!ownedCards.includes(selectedCard.id)) {
      const newOwned = [...ownedCards, selectedCard.id];
      setOwnedCards(newOwned);
      localStorage.setItem("gachaOwnedCards", JSON.stringify(newOwned));
    }

    setIsFlipping(true);
    setCurrentCard(selectedCard);
    setRollCount(prev => prev + 1);
    
    setTimeout(() => setIsFlipping(false), 600);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const displayCards = gachaPool.filter((c: GachaCard) => selectedTag === "all" || c.tag === selectedTag);
  const tags = ["all", "food", "job", "project", "gear", "software", "studio"];

  return (
    <div className="relative flex flex-col p-6 md:p-8 bg-[#0a0a0a] border-2 border-gray-600 max-w-2xl mx-auto w-full min-h-[500px]"
      style={{
        backgroundImage: "radial-gradient(rgba(156, 163, 175, 0.2) 1px, transparent 1px)",
        backgroundSize: "6px 6px",
      }}
    >
      <div className="w-full flex justify-between items-end mb-3">
        {activeTab === "gacha" ? (
           <div className="text-2xl md:text-3xl font-black text-gray-200 tracking-widest uppercase font-mono">
             COIN {energy.toString().padStart(2, '0')}/{MAX_ENERGY}
           </div>
        ) : (
           <div className="text-xl md:text-2xl font-black text-gray-200 tracking-widest uppercase">
             DANH SÁCH THẺ
           </div>
        )}
        
        {activeTab === "gacha" ? (
           <div className="text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-widest">
             {energy < MAX_ENERGY ? `HỒI SAU: ${formatTime(timeLeft)}` : "MAX COIN"}
           </div>
        ) : (
           <button onClick={() => setActiveTab("gacha")} className="text-gray-400 hover:text-white text-xs font-bold tracking-widest uppercase underline underline-offset-4">
             ← QUAY LẠI GACHA
           </button>
        )}
      </div>
      
      <div className="w-full h-px bg-gray-600 mb-6"></div>

      <AnimatePresence mode="wait">
        {activeTab === "gacha" ? (
          <motion.div 
            key="gacha-tab"
            initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -10 }}
            className="flex flex-col flex-grow"
          >
            <div className="flex-grow flex items-center justify-center mb-8">
              <AnimatePresence mode="wait">
                {currentCard ? (
                  <motion.div
                    key={`${currentCard.id}-${rollCount}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-full flex flex-row items-center gap-6 md:gap-8 px-2"
                  >
                    {/* KHUNG POSTER CHỮ ĐEN NỀN TRẮNG CHÍNH */}
                    <div className="w-1/2 aspect-square relative bg-white border-2 border-gray-300 p-2 shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
                       <div className="w-full h-full relative border border-gray-300 border-dashed bg-gray-100 flex flex-col items-center justify-center p-3">
                         <span className="text-gray-400 font-mono text-[10px] md:text-xs mb-4 font-bold uppercase tracking-widest">
                           NO. {currentCard.id.toString().padStart(3, '0')}
                         </span>
                         {/* 🔎 ĐÃ PHÓNG TO CHỮ ĐEN Ở ĐÂY (Nâng từ text-2xl lên text-4xl/6xl) */}
                         <span className="font-black text-3xl md:text-5xl text-black uppercase text-center leading-tight tracking-tighter line-clamp-4 break-words">
                           {currentCard.name}
                         </span>
                       </div>
                    </div>
                    
                    <div className="w-1/2 flex flex-col justify-center text-left">
                      <span className={`font-bold text-[10px] md:text-xs uppercase tracking-widest mb-4 border px-2 py-1 w-max ${
                        currentCard.rarity === "SSR" ? "border-yellow-500 text-yellow-400" : 
                        currentCard.rarity === "SR"  ? "border-purple-500 text-purple-400" : 
                        "border-blue-500 text-blue-400"
                      }`}>
                        ĐỘ HIẾM: {currentCard.rarity}
                      </span>

                      {/* ❌ ĐÃ XÓA thẻ h3 chữ trắng hiển thị tên bài ở đây để tránh trùng lặp */}
                      
                      <p className="text-xs md:text-sm font-bold text-gray-300 mb-2">
                        <span className="text-red-500">BUFF:</span> {currentCard.stats}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-500 leading-relaxed uppercase tracking-wider">
                        {currentCard.description}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <div className="w-full h-48 flex items-center justify-center">
                    <span className="text-gray-600 font-bold uppercase tracking-[0.3em] text-sm md:text-base border-2 border-dashed border-gray-700 px-6 py-4">
                      PRESS GACHA TO START
                    </span>
                  </div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex flex-col mt-auto">
              <button 
                onClick={rollGacha}
                disabled={energy <= 0 || isFlipping}
                className={`w-full py-4 border-2 font-black text-2xl md:text-3xl uppercase tracking-[0.2em] transition-colors mb-6 ${
                  energy > 0 
                    ? "border-gray-400 text-gray-300 hover:bg-gray-200 hover:text-black hover:border-gray-200 cursor-pointer shadow-[4px_4px_0px_rgba(255,255,255,0.1)] hover:shadow-[4px_4px_0px_rgba(255,255,255,0.5)]" 
                    : "border-gray-800 text-gray-700 bg-[#0d0d0d] cursor-not-allowed"
                }`}
              >
                {energy > 0 ? "GACHA" : "NO COIN"}
              </button>

              <div className="flex justify-between items-end">
                <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest pb-1">
                  SỞ HỮU {ownedCards.length.toString().padStart(2, '0')}/{gachaPool.length.toString().padStart(2, '0')}
                </span>
                
                <button 
                  onClick={() => setActiveTab("collection")}
                  className="px-6 py-2 border-2 border-gray-500 text-gray-400 hover:bg-gray-400 hover:text-black font-bold text-[10px] md:text-xs uppercase tracking-widest transition-colors"
                >
                  COLLECTION
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="collection-tab"
            initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }}
            className="flex flex-col flex-grow h-full"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {tags.map(tag => (
                <button 
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors border-2 ${
                    selectedTag === tag 
                      ? "bg-white text-black border-white" 
                      : "bg-transparent text-gray-500 border-transparent hover:border-gray-600"
                  }`}
                >
                  {tag === "all" ? "TẤT CẢ" : tag}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 md:grid-cols-5 gap-3 md:gap-4 overflow-y-auto max-h-[350px] pr-2 custom-scrollbar pb-4">
              {displayCards.map((card: GachaCard) => {
                const isOwned = ownedCards.includes(card.id);
                return (
                  <div 
                    key={card.id} 
                    onClick={() => isOwned && setDetailCard(card)}
                    className={`aspect-square relative flex items-center justify-center border-2 transition-all ${
                      isOwned 
                        ? "border-gray-400 hover:border-white bg-white p-1 cursor-pointer" 
                        : "border-gray-800 bg-[#111] cursor-not-allowed"
                    }`}
                  >
                    {isOwned ? (
                      <div className="w-full h-full relative border border-gray-200 border-dashed bg-gray-100 flex items-center justify-center p-1 text-center overflow-hidden">
                        <span className="font-black text-[9px] md:text-[10px] text-black uppercase leading-tight line-clamp-3 break-words">
                          {card.name}
                        </span>
                      </div>
                    ) : (
                      <span className="text-3xl font-black text-gray-800">?</span>
                    )}
                  </div>
                )
              })}
            </div>
            
            <div className="mt-auto pt-6 flex justify-start">
               <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">
                  SỞ HỮU {ownedCards.length.toString().padStart(2, '0')}/{gachaPool.length.toString().padStart(2, '0')}
               </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* POPUP OVERLAY XEM CHI TIẾT */}
      <AnimatePresence>
        {detailCard && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6 backdrop-blur-sm"
            onClick={() => setDetailCard(null)}
          >
            <motion.div 
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()} 
              className="w-full max-w-xl bg-[#0a0a0a] border-2 border-gray-400 flex flex-col md:flex-row p-6 gap-8 relative"
              style={{
                backgroundImage: "radial-gradient(rgba(156, 163, 175, 0.2) 1px, transparent 1px)",
                backgroundSize: "6px 6px",
              }}
            >
              <button 
                onClick={() => setDetailCard(null)} 
                className="absolute top-4 right-4 w-8 h-8 border-2 border-gray-500 text-gray-400 hover:text-black hover:bg-white hover:border-white font-black text-sm flex items-center justify-center transition-colors"
              >
                ✕
              </button>

              <div className="w-full md:w-1/2 aspect-square relative bg-white border-2 border-gray-300 p-2 shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
                 <div className="w-full h-full relative border border-gray-300 border-dashed bg-gray-100 flex flex-col items-center justify-center p-3">
                    <span className="text-gray-400 font-mono text-[10px] md:text-xs mb-1 font-bold uppercase tracking-widest">
                      NO. {detailCard.id.toString().padStart(3, '0')}
                    </span>
                    {/* 🔎 PHÓNG TO CHỮ ĐEN TRONG POPUP CHI TIẾT */}
                    <span className="font-black text-3xl md:text-5xl text-black uppercase text-center leading-none tracking-tighter line-clamp-4 break-words">
                      {detailCard.name}
                    </span>
                 </div>
              </div>
              
              <div className="w-full md:w-1/2 flex flex-col justify-center text-left py-2">
                <span className={`font-bold text-[10px] uppercase tracking-widest mb-4 border px-2 py-1 w-max ${
                  detailCard.rarity === "SSR" ? "border-yellow-500 text-yellow-400" : 
                  detailCard.rarity === "SR"  ? "border-purple-500 text-purple-400" : 
                  "border-blue-500 text-blue-400"
                }`}>
                  ĐỘ HIẾM: {detailCard.rarity}
                </span>

                {/* ❌ ĐÃ XÓA thẻ h3 chữ trắng trong popup chi tiết */}
                
                <div className="border-t border-b border-gray-800 py-3 mb-4">
                  <p className="text-xs font-bold text-gray-300 mb-1"><span className="text-red-500">BUFF:</span> {detailCard.stats}</p>
                </div>
                
                <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-widest">{detailCard.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}