import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolio";
import { DownloadIcon } from "./Icons";
import "../styles/navbar.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(currentProgress);
      setScrolled(window.scrollY > 30);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="nav-scroll-progress" 
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true"
      />

      <header className={`navbar-wrapper ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar">
          {/* Brand Logo */}
          <button 
            className="navbar-brand" 
            onClick={scrollToTop} 
            aria-label="Scroll to top"
          >
            <span className="brand-bracket">&lt;</span>
            <span className="brand-name">TD</span>
            <span className="brand-bracket">/&gt;</span>
          </button>

          {/* Desktop Navigation Links */}
          <div className="navbar-links">
            {navItems.map((item, i) => {
              const sectionId = item.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.href}
                  className={`navbar-link ${isActive ? "active" : ""}`}
                  onClick={() => handleNavClick(item.href)}
                >
                  <span className="link-number">0{i + 1}</span>
                  <span className="link-text">{item.label}</span>
                  {isActive && <span className="active-pill" />}
                </button>
              );
            })}
          </div>

          {/* Action CTA */}
          <div className="navbar-actions">
            <a
              href={portfolioData.personal.resumeLink}
              download="Tushar_Dileep_Resume.pdf"
              className="navbar-resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume PDF"
            >
              <span>Resume</span>
              <DownloadIcon size={14} className="resume-icon" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              className={`hamburger ${mobileOpen ? "open" : ""}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileOpen}
            >
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-overlay ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside className={`mobile-menu ${mobileOpen ? "open" : ""}`} aria-label="Mobile menu">
        <div className="mobile-menu-header">
          <div className="navbar-brand">
            <span className="brand-bracket">&lt;</span>
            <span className="brand-name">TD</span>
            <span className="brand-bracket">/&gt;</span>
          </div>
          <button 
            className="mobile-close-btn" 
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-links">
          {navItems.map((item, i) => (
            <button
              key={item.href}
              className={`mobile-link ${activeSection === item.href.slice(1) ? "active" : ""}`}
              onClick={() => handleNavClick(item.href)}
            >
              <span className="mobile-link-num">0{i + 1}.</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        <div className="mobile-menu-footer">
          <a
            href={portfolioData.personal.resumeLink}
            download="Tushar_Dileep_Resume.pdf"
            className="mobile-resume-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Download Resume</span>
            <DownloadIcon size={16} />
          </a>
          <p className="mobile-contact-hint">{portfolioData.personal.email}</p>
        </div>
      </aside>
    </>
  );
}
