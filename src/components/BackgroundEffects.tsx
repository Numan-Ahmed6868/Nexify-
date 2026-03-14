import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

export default function BackgroundEffects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const { theme } = useTheme();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);

  const isDark = theme === "dark";

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden transition-colors duration-700">
      {/* Grid Pattern with 3D Perspective */}
      <div 
        className="absolute inset-0 opacity-[0.05]" 
        style={{ 
          backgroundImage: `linear-gradient(${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px), 
                          linear-gradient(90deg, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
          transformOrigin: 'top'
        }}
      />
      
      {/* Floating 3D Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            z: Math.random() * -500,
            opacity: Math.random() * 0.5
          }}
          animate={{
            y: [null, Math.random() * 100 + "%"],
            z: [null, Math.random() * 500],
            rotateX: [0, 360],
            rotateY: [0, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className={`absolute w-1 h-1 rounded-full blur-[1px] ${isDark ? 'bg-brand-primary' : 'bg-brand-primary/40'}`}
        />
      ))}

      {/* Parallax Glowing Orbs */}
      <motion.div
        style={{ y: y1, rotate }}
        className={`absolute top-[-20%] left-[-10%] w-[70%] h-[70%] rounded-full blur-[150px] transition-colors duration-700 ${isDark ? 'bg-brand-primary/10' : 'bg-brand-primary/5'}`}
      />
      <motion.div
        style={{ y: y2, rotate: -rotate }}
        className={`absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[150px] transition-colors duration-700 ${isDark ? 'bg-brand-secondary/10' : 'bg-brand-secondary/5'}`}
      />

      {/* Scanning Line Effect */}
      <motion.div
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className={`absolute left-0 right-0 h-[2px] z-10 transition-colors duration-700 ${isDark ? 'bg-linear-to-r from-transparent via-brand-primary/20 to-transparent' : 'bg-linear-to-r from-transparent via-brand-primary/10 to-transparent'}`}
      />
    </div>
  );
}
