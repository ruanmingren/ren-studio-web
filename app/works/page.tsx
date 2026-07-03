"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "../components/FadeUp";

const projects = [
  { id: 1, title: "7.1.111 (TIM)", category: "ORIGINAL IP", type: "ANIME SERIES | UPCOMING", image: "/71111.png", link: "/works/71111" },
  { id: 2, title: "SƠN HÀ XÍCH QUỶ", category: "ORIGINAL IP", type: "VISUAL NOVEL", image: "/sonha.png", link: "/works/son-ha-xich-quy" },
  { id: 3, title: "DỰ ÁN MANGA BÍ MẬT", category: "ADAPTATION", type: "MANGA | UPCOMING", image: "/manga.png", link: "/works/manga" },
  { id: 4, title: "KRONUS - MV PROJECT", category: "CO-PRODUCTION", type: "ANIME MV | UPCOMING", image: "/kronus.png", link: "/works/kronus" },
  
  // CHIÊU TRỊ CACHE ĐÂY: Tui chêm thêm "" vào đuôi 3 cái hình bị lỗi để ép trình duyệt phải hiện hình ra!
  { id: 5, title: "GAWRGURA - SHARK'D", category: "CO-PRODUCTION", type: "ANIME MV", image: "/gawr_gura.png", link: "/works/gawr-gura-1" },
  { id: 6, title: "GAWRGURA - BLUE HORIZON", category: "CO-PRODUCTION", type: "ANIME MV", image: "/gawr_gura2.png", link: "/works/gawr-gura-2" },
  { id: 7, title: "IRONMOUSE - UNLEASHED", category: "CO-PRODUCTION", type: "ANIME MV", image: "/ironmouse.png", link: "/works/ironmouse" }
];

const tabs = ["ALL", "ORIGINAL IP", "CO-PRODUCTION", "ADAPTATION"];

type ProjectCardProps = {
  project: {
    id: number;
    title: string;
    category: string;
    type: string;
    image: string;
    link: string;
  };
  index: number;
  setHoveredBg: (bg: string | null) => void;
};

const ProjectCard = ({ project, index, setHoveredBg }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isHovered) {
      timer = setTimeout(() => {
        setHoveredBg(project.image);
      }, 600);
    } else {
      setHoveredBg(null); 
    }
    return () => clearTimeout(timer);
  }, [isHovered, project.image, setHoveredBg]);

  return (
    <FadeUp delay={index * 0.15}>
      <Link 
        href={project.link} 
        className="group cursor-pointer block relative"
        data-cursor="view" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full aspect-video bg-zinc-900 mb-6">
          <Image
            src={project.image}
            alt={project.title}
            fill
            // ĐÃ THÊM SIZES: Để Terminal hết báo vàng
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <motion.rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="none"
              stroke="#ffffff" 
              strokeWidth="6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: isHovered ? 1 : 0 }} 
              transition={{ duration: 0.6, ease: "easeInOut" }} 
            />
          </svg>
        </div>

        <div className="flex flex-col relative z-10">
          <div className="flex gap-4 mb-2">
            <span className="text-xs font-bold text-zinc-500 tracking-widest border border-zinc-700 px-2 py-1">
              {project.category}
            </span>
            <span className="text-xs font-bold text-zinc-500 tracking-widest py-1">
              {project.type}
            </span>
          </div>
          <h3 className="text-2xl font-black text-white tracking-wider group-hover:text-zinc-400 transition-colors">
            {project.title}
          </h3>
        </div>
      </Link>
    </FadeUp>
  );
};

export default function WorksPage() {
  const [activeTab, setActiveTab] = useState("ALL");
  const [hoveredBg, setHoveredBg] = useState<string | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "ALL") return true;
    return project.category === activeTab;
  });

  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-black" />

      <AnimatePresence>
        {hoveredBg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }} 
            className="fixed inset-0 z-[-1] pointer-events-none"
          >
            <Image
              src={hoveredBg}
              alt="Background Overlay"
              fill
              className="object-cover blur-sm" 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 w-full relative z-10">
        
        <FadeUp>
          <div className="max-w-7xl mx-auto mb-16 border-b border-zinc-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-widest uppercase">
                Works
              </h1>
              <p className="text-zinc-500 tracking-[0.2em] mt-2 text-sm uppercase">
                Selected Projects & Collaborations
              </p>
            </div>

            <div className="flex flex-wrap gap-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tracking-widest text-sm font-bold uppercase transition-colors duration-300 pb-2 border-b-2 ${
                    activeTab === tab ? "text-white border-white" : "text-zinc-600 border-transparent hover:text-zinc-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </FadeUp>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} setHoveredBg={setHoveredBg} />
          ))}
        </div>
      </main>
    </>
  );
}