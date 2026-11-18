import { portfolioData } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  GraduationCapIcon, 
  ShieldCheckIcon, 
  LocationIcon, 
  CodeIcon, 
  TrophyIcon,
  SparklesIcon
} from "./Icons";
import "../styles/about.css";

export default function About() {
  const { personal } = portfolioData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section" id="about">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="section-header">
            <span className="section-number">01</span>
            <h2 className="section-title">About Me</h2>
            <div className="section-line" />
          </div>

          <div className="about-grid">
            {/* Left: Narrative Story */}
            <div className="about-text-content">
              <div className="about-lead-card">
                <p className="about-lead">
                  I'm an Information Technology undergraduate at <strong className="text-highlight">SIES College of Arts, Science and Commerce (University of Mumbai)</strong> with a strong passion for software engineering, algorithmic problem solving, and modern web applications.
                </p>
              </div>

              <div className="about-paragraphs">
                <p>
                  Throughout my academic journey, I have cultivated a rigorous foundation in <span className="text-pill">Object-Oriented Programming (OOP)</span>, <span className="text-pill">Data Structures & Algorithms</span>, and full-stack development across <span className="text-pill">Java</span>, <span className="text-pill">Python</span>, <span className="text-pill">C++</span>, and <span className="text-pill">TypeScript</span>.
                </p>
                <p>
                  I enjoy turning concepts into practical, clean software solutions — such as developing <strong className="text-highlight">FilmBox</strong>, an interactive movie diary platform integrating the TMDb API with TypeScript JSX and Node.js.
                </p>
                <p>
                  In addition to technical pursuits, I served as <strong className="text-highlight">Co-Head of Compliance Avenue</strong> at my college's Entrepreneurship Cell & Skill Hub (Nirmitee Kendra), where I managed operational compliance, cross-team coordination, and administrative workflows for student-led initiatives.
                </p>
              </div>

              {/* Personal Info Quick Chips */}
              <div className="about-info-chips-row">
                <div className="info-chip">
                  <LocationIcon size={14} className="chip-icon" />
                  <span>{personal.location}</span>
                </div>
                <div className="info-chip">
                  <GraduationCapIcon size={14} className="chip-icon" />
                  <span>B.Sc. IT (Graduating 2027)</span>
                </div>
                <div className="info-chip chip-status">
                  <span className="live-status-dot" />
                  <span>Open to Internships</span>
                </div>
              </div>
            </div>

            {/* Right: Key Credentials & Impact Dashboard */}
            <div className="about-credentials-col">
              <div className="credentials-card">
                <div className="credentials-header">
                  <SparklesIcon size={18} className="cred-sparkle-icon" />
                  <h3 className="credentials-title">Academic & Leadership Standing</h3>
                </div>

                <div className="about-metrics-grid">
                  <div className="metric-box">
                    <div className="metric-icon-wrap">
                      <GraduationCapIcon size={20} className="metric-icon" />
                    </div>
                    <div>
                      <h4 className="metric-heading">9.09 CGPA</h4>
                      <p className="metric-sub">Academic Standing • B.Sc. IT</p>
                    </div>
                  </div>

                  <div className="metric-box">
                    <div className="metric-icon-wrap">
                      <ShieldCheckIcon size={20} className="metric-icon" />
                    </div>
                    <div>
                      <h4 className="metric-heading">Co-Head</h4>
                      <p className="metric-sub">E-Cell Compliance Avenue</p>
                    </div>
                  </div>

                  <div className="metric-box">
                    <div className="metric-icon-wrap">
                      <TrophyIcon size={20} className="metric-icon" />
                    </div>
                    <div>
                      <h4 className="metric-heading">Award Winner</h4>
                      <p className="metric-sub">2nd Prize • Diplomacy & Strategy</p>
                    </div>
                  </div>

                  <div className="metric-box">
                    <div className="metric-icon-wrap">
                      <CodeIcon size={20} className="metric-icon" />
                    </div>
                    <div>
                      <h4 className="metric-heading">Internship Ready</h4>
                      <p className="metric-sub">Summer & Ongoing Roles</p>
                    </div>
                  </div>
                </div>

                {/* Candidate Summary Banner */}
                <div className="candidate-focus-box">
                  <h4 className="focus-box-title">Core Objective</h4>
                  <p className="focus-box-desc">
                    Seeking a Software Developer Internship to contribute to practical, production-level software while strengthening engineering skills, collaborative workflows, and systems design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
