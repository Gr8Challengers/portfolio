import { useEffect, useState } from "react";
import { ArrowUpIcon } from "./Icons";

export default function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
        setIsVisible(window.scrollY > 160);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // SVG circle calculation
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <button
      className={`floating-scroll-indicator ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label={`Scroll to top - ${Math.round(scrollProgress)}% scrolled`}
      title="Scroll to top"
    >
      <svg className="progress-ring" width="46" height="46" viewBox="0 0 46 46">
        <circle
          className="progress-ring-bg"
          stroke="rgba(255, 255, 255, 0.08)"
          strokeWidth="3"
          fill="transparent"
          r={radius}
          cx="23"
          cy="23"
        />
        <circle
          className="progress-ring-circle"
          stroke="url(#progressGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="23"
          cy="23"
          style={{
            strokeDasharray: circumference,
            strokeDashoffset,
          }}
        />
        <defs>
          <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#818cf8" />
          </linearGradient>
        </defs>
      </svg>
      <div className="scroll-btn-inner">
        <ArrowUpIcon size={16} className="scroll-arrow-icon" />
      </div>
      <span className="scroll-tooltip">{Math.round(scrollProgress)}%</span>
    </button>
  );
}

