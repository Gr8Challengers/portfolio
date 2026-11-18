import { useEffect, useState } from "react";
import { portfolioData } from "../data/portfolio";
import { 
  GitHubIcon, 
  LinkedInIcon, 
  MailIcon, 
  ArrowRightIcon, 
  DownloadIcon, 
  TerminalIcon, 
  SparklesIcon,
  ShieldCheckIcon,
  LocationIcon,
  GraduationCapIcon
} from "./Icons";
import "../styles/hero.css";

const roles = [
  "Software Developer Intern",
  "B.Sc. IT Student @ University of Mumbai",
  "Problem Solver & Java/Python Developer",
  "Full-Stack Web Enthusiast",
];

export default function Hero() {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState<"photo" | "code">("photo");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }, 70);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      }, 35);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 50);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="hero">
      {/* Ambient background glow orbs with subtle scroll parallax */}
      <div 
        className="hero-ambient-orb orb-primary" 
        style={{ transform: `translateY(${scrollY * 0.15}px)` }} 
        aria-hidden="true" 
      />
      <div 
        className="hero-ambient-orb orb-secondary" 
        style={{ transform: `translateY(-${scrollY * 0.12}px)` }} 
        aria-hidden="true" 
      />

      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Hero Narrative */}
          <div className="hero-text-col">
            {/* Live Availability Pill */}
            <div className="hero-badge">
              <span className="badge-pulse-dot">
                <span className="pulse-ring" />
                <span className="pulse-core" />
              </span>
              <span className="badge-text">Available for Software Developer Internships</span>
            </div>

            {/* Title & Name */}
            <div className="hero-heading-group">
              <p className="hero-greeting">Hi, my name is</p>
              <h1 className="hero-name">{personal.name}</h1>
              <h2 className="hero-title">I build robust software and interactive web experiences.</h2>
            </div>

            {/* Typing Command Line */}
            <div className="hero-terminal-pill">
              <TerminalIcon size={16} className="terminal-icon" />
              <span className="terminal-prompt">$</span>
              <span className="terminal-text">{displayText}</span>
              <span className="terminal-cursor" />
            </div>

            {/* Bio Description */}
            <p className="hero-description">
              Information Technology undergraduate pursuing a <strong className="hero-highlight">B.Sc. in IT</strong> at SIES College (University of Mumbai). 
              Passionate about software architecture, algorithms, and full-stack development, seeking to create tangible impact through high-quality engineering.
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <a 
                href="#contact" 
                className="btn-hero btn-hero-primary" 
                onClick={scrollToContact}
              >
                <span>Get In Touch</span>
                <ArrowRightIcon size={16} className="btn-arrow" />
              </a>

              <a
                href={personal.resumeLink}
                download="Tushar_Dileep_Resume.pdf"
                className="btn-hero btn-hero-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <DownloadIcon size={16} />
                <span>Download Resume</span>
              </a>

              <a
                href={personal.social.github}
                className="btn-hero btn-hero-ghost"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub Profile"
              >
                <GitHubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Quick Hero Stat Chips */}
            <div className="hero-metrics">
              <div className="metric-chip">
                <span className="metric-val">9.09</span>
                <span className="metric-lbl">CGPA (Mumbai Univ)</span>
              </div>
              <div className="metric-separator" />
              <div className="metric-chip">
                <span className="metric-val">B.Sc. IT</span>
                <span className="metric-lbl">Class of 2027</span>
              </div>
              <div className="metric-separator" />
              <div className="metric-chip">
                <span className="metric-val">Co-Head</span>
                <span className="metric-lbl">E-Cell Leadership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase with Photo Loaded Immediately */}
          <div className="hero-card-col">
            <div className="hero-showcase-container">
              {/* Card View Switcher Tabs */}
              <div className="hero-tab-bar">
                <button
                  className={`hero-tab-btn ${activeTab === "photo" ? "active" : ""}`}
                  onClick={() => setActiveTab("photo")}
                  aria-label="Show Profile Portrait"
                >
                  <span className="tab-indicator" />
                  <span>Profile Photo</span>
                </button>
                <button
                  className={`hero-tab-btn ${activeTab === "code" ? "active" : ""}`}
                  onClick={() => setActiveTab("code")}
                  aria-label="Show Code Spec"
                >
                  <TerminalIcon size={13} />
                  <span>developer_spec.ts</span>
                </button>
              </div>

              {/* View 1: Profile Photo Showcase (Displayed by default on page load) */}
              {activeTab === "photo" && (
                <div className="hero-profile-card">
                  <div className="profile-img-container">
                    <img
                      src={`${import.meta.env.BASE_URL}profile.jpg`}
                      alt={personal.name}
                      className="hero-avatar-img"
                      loading="eager"
                    />
                    <div className="hero-photo-gradient-overlay" />

                    {/* Floating Badges on Photo */}
                    <div className="photo-pill-badge badge-top-left">
                      <GraduationCapIcon size={14} className="pill-icon" />
                      <span>9.09 CGPA • SIES College</span>
                    </div>

                    <div className="photo-pill-badge badge-top-right">
                      <LocationIcon size={14} className="pill-icon" />
                      <span>Mumbai, India</span>
                    </div>

                    <div className="photo-pill-badge badge-bottom">
                      <span className="live-status-dot" />
                      <span>Open to Software Developer Internships</span>
                    </div>
                  </div>

                  {/* Card Bottom Bio Bar */}
                  <div className="hero-profile-bottom">
                    <div className="profile-identity">
                      <h3 className="profile-name">{personal.name}</h3>
                      <p className="profile-sub">B.Sc. IT • University of Mumbai</p>
                    </div>
                    <div className="hero-tech-quick-tags">
                      <span className="quick-tag">Java</span>
                      <span className="quick-tag">Python</span>
                      <span className="quick-tag">TypeScript</span>
                      <span className="quick-tag">React</span>
                      <span className="quick-tag">Node.js</span>
                    </div>
                  </div>
                </div>
              )}

              {/* View 2: Developer Spec Card */}
              {activeTab === "code" && (
                <div className="hero-spec-card">
                  {/* Window Bar */}
                  <div className="spec-window-bar">
                    <div className="window-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="window-title">
                      <span>developer_spec.ts</span>
                    </div>
                    <div className="window-action">
                      <SparklesIcon size={14} className="window-sparkle" />
                    </div>
                  </div>

                  {/* Code Snippet Container */}
                  <div className="spec-code-body">
                    <div className="code-line">
                      <span className="token-keyword">const</span>{" "}
                      <span className="token-variable">intern</span> = &#123;
                    </div>
                    <div className="code-line indent-1">
                      <span className="token-property">name</span>:{" "}
                      <span className="token-string">"{personal.name}"</span>,
                    </div>
                    <div className="code-line indent-1">
                      <span className="token-property">degree</span>:{" "}
                      <span className="token-string">"B.Sc. Information Technology"</span>,
                    </div>
                    <div className="code-line indent-1">
                      <span className="token-property">college</span>:{" "}
                      <span className="token-string">"SIES College, Univ of Mumbai"</span>,
                    </div>
                    <div className="code-line indent-1">
                      <span className="token-property">academicScore</span>:{" "}
                      <span className="token-accent">"CGPA 9.09"</span>,
                    </div>
                    <div className="code-line indent-1">
                      <span className="token-property">graduation</span>:{" "}
                      <span className="token-number">2027</span>,
                    </div>
                    <div className="code-line indent-1">
                      <span className="token-property">coreLanguages</span>: [
                    </div>
                    <div className="code-line indent-2">
                      <span className="token-string">"Java"</span>,{" "}
                      <span className="token-string">"Python"</span>,{" "}
                      <span className="token-string">"C++"</span>,{" "}
                      <span className="token-string">"TypeScript"</span>
                    </div>
                    <div className="code-line indent-1">
                      ],
                    </div>
                    <div className="code-line indent-1">
                      <span className="token-property">flagshipProject</span>:{" "}
                      <span className="token-string">"FilmBox (TMDb API Diary)"</span>,
                    </div>
                    <div className="code-line indent-1">
                      <span className="token-property">leadership</span>:{" "}
                      <span className="token-string">"Co-Head, Compliance Avenue (E-Cell)"</span>,
                    </div>
                    <div className="code-line indent-1">
                      <span className="token-property">internshipReady</span>:{" "}
                      <span className="token-boolean">true</span>
                    </div>
                    <div className="code-line">
                      &#125;;
                    </div>
                  </div>

                  {/* Card Footer Status */}
                  <div className="spec-card-footer">
                    <div className="footer-status">
                      <ShieldCheckIcon size={14} className="status-icon" />
                      <span>Verified Credentials & Academic Standing</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Left Social Floating Sidebar */}
      <aside className="hero-social-sidebar" aria-label="Social profiles">
        <a 
          href={personal.social.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub Profile"
          className="social-icon-link"
        >
          <GitHubIcon size={19} />
        </a>
        <a 
          href={personal.social.linkedin} 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn Profile"
          className="social-icon-link"
        >
          <LinkedInIcon size={19} />
        </a>
        <a 
          href={`mailto:${personal.email}`} 
          aria-label="Email Me"
          className="social-icon-link"
        >
          <MailIcon size={19} />
        </a>
        <div className="social-line" />
      </aside>

      {/* Fixed Right Email Floating Sidebar */}
      <aside className="hero-email-sidebar" aria-label="Direct email">
        <a href={`mailto:${personal.email}`} className="email-link">
          {personal.email}
        </a>
        <div className="email-line" />
      </aside>
    </section>
  );
}
