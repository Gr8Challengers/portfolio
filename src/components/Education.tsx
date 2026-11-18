import { portfolioData } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { GraduationCapIcon, BookOpenIcon, SparklesIcon } from "./Icons";
import "../styles/education.css";

export default function Education() {
  const { education } = portfolioData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section" id="education">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="section-header">
            <span className="section-number">05</span>
            <h2 className="section-title">Academic Background</h2>
            <div className="section-line" />
          </div>

          <p className="education-subtitle">
            Formal educational background in Information Technology and Science.
          </p>

          <div className="education-grid">
            {education.map((edu, i) => (
              <div className={`education-card ${i === 0 ? "card-primary" : ""} stagger-${i + 1}`} key={i}>
                <div className="edu-card-top">
                  <div className="edu-icon-wrap">
                    {i === 0 ? <GraduationCapIcon size={24} /> : <BookOpenIcon size={24} />}
                  </div>
                  <div className="edu-duration-pill">{edu.duration}</div>
                </div>

                <h3 className="edu-degree-title">{edu.degree}</h3>

                <p className="edu-institution-line">
                  {edu.institution}
                  {edu.university && (
                    <span className="edu-univ"> • {edu.university}</span>
                  )}
                </p>

                <div className="edu-badges-row">
                  {edu.expected && (
                    <span className="edu-badge edu-badge-expected">
                      <SparklesIcon size={12} />
                      <span>{edu.expected}</span>
                    </span>
                  )}
                  <span className="edu-badge edu-badge-score">
                    <strong>{edu.score}</strong>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
