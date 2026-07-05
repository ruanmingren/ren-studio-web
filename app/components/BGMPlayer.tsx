"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const playlist = [
    { title: "Ngày Mai - Masaharu", src: "/bgm-1.mp3" },
    { title: "Tìm - HSY", src: "/bgm-2.mp3" },
  ];

export default function BGMPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener('click', handleFirstInteraction);
    };
    window.addEventListener('click', handleFirstInteraction);
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, []);

  // Đã fix chuẩn Type của React cho nút bấm, hết báo lỗi "any"
  const togglePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); 
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Đã fix chuẩn Type cho sự kiện click hoặc audio tự chạy hết
  const nextTrack = (e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    const next = (currentTrack + 1) % playlist.length;
    setCurrentTrack(next);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current && hasInteracted) {
      audioRef.current.play();
    }
  }, [currentTrack, isPlaying, hasInteracted]);

  return (
    <motion.div 
      className="fixed bottom-24 right-6 z-[9000] flex items-center bg-black/60 rounded-full border border-zinc-800 backdrop-blur-md shadow-2xl overflow-hidden cursor-pointer hover:border-[#2563eb] transition-colors"
      layout 
      onMouseEnter={() => setIsExpanded(true)} 
      onMouseLeave={() => setIsExpanded(false)} 
      onClick={() => setIsExpanded(!isExpanded)} 
      animate={{ padding: isExpanded ? "8px 16px 8px 8px" : "8px 8px" }} 
    >
      <audio ref={audioRef} src={playlist[currentTrack].src} onEnded={nextTrack} />
      
      {/* CỤM 1: Đĩa than xoay */}
      <motion.button 
        onClick={togglePlay}
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="w-10 h-10 shrink-0 bg-zinc-900 rounded-full flex items-center justify-center border-2 border-[#2563eb] relative overflow-hidden"
        layout
      >
        <div className="w-2 h-2 bg-[#2563eb] rounded-full absolute z-10" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity z-20">
          <span className="text-white text-[10px]">{isPlaying ? '⏸' : '▶'}</span>
        </div>
      </motion.button>

      {/* CỤM 2: Thông tin bài hát trượt ra */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ width: 0, opacity: 0, marginLeft: 0 }}
            animate={{ width: "auto", opacity: 1, marginLeft: 16 }}
            exit={{ width: 0, opacity: 0, marginLeft: 0 }}
            className="flex items-center gap-3 overflow-hidden whitespace-nowrap"
          >
            <div className="flex flex-col">
              <span className="text-[10px] text-[#2563eb] font-bold tracking-widest uppercase leading-none mb-1">
                Now Playing
              </span>
              <span className="text-xs text-white font-medium w-20 truncate">
                {playlist[currentTrack].title}
              </span>
            </div>
            
            <button 
              onClick={nextTrack} 
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer p-1 shrink-0"
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4l12 8-12 8z" />
                <path d="M18 4h2v16h-2z" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
    </motion.div>
  );
}