import { portfolioData } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { TrophyIcon, ShieldCheckIcon, CheckIcon, UserCheckIcon } from "./Icons";
import "../styles/experience.css";

export default function Experience() {
  const { experience, achievements } = portfolioData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section" id="experience">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="section-header">
            <span className="section-number">04</span>
            <h2 className="section-title">Leadership & Experience</h2>
            <div className="section-line" />
          </div>

          <p className="experience-subtitle">
            Organizational leadership, compliance administration, and competitive achievements.
          </p>

          <div className="experience-layout">
            {/* Timeline Column */}
            <div className="timeline-container">
              {experience.map((exp, i) => (
                <div className="timeline-node" key={i}>
                  <div className="timeline-marker">
                    <span className="marker-dot" />
                    <span className="marker-line" />
                  </div>

                  <div className="timeline-card">
                    <div className="timeline-card-header">
                      <div>
                        <div className="role-badge-row">
                          <span className="role-type-pill">
                            <ShieldCheckIcon size={13} />
                            <span>{exp.type}</span>
                          </span>
                          <span className="duration-pill">{exp.duration}</span>
                        </div>
                        <h3 className="experience-role-title">{exp.role}</h3>
                        <p className="experience-org-title">
                          {exp.organization} • <span className="inst-sub">{exp.institution}</span>
                        </p>
                      </div>
                    </div>

                    <div className="experience-points">
                      {exp.highlights.map((highlight, j) => (
                        <div className="point-item" key={j}>
                          <div className="point-check">
                            <CheckIcon size={12} />
                          </div>
                          <span className="point-text">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements Spotlight Card */}
            <div className="achievements-spotlight-wrapper">
              <div className="spotlight-header">
                <TrophyIcon size={20} className="trophy-icon" />
                <h3 className="spotlight-title">Honors & Awards</h3>
              </div>

              {achievements.map((achievement, i) => (
                <div className="award-spotlight-card" key={i}>
                  <div className="award-badge-ribbon">Competition Prize</div>
                  <div className="award-icon-box">
                    <TrophyIcon size={28} />
                  </div>
                  <div className="award-details">
                    <h4 className="award-title">{achievement.title}</h4>
                    <p className="award-event">{achievement.event}</p>
                    <p className="award-desc">{achievement.description}</p>
                    <div className="award-date-tag">
                      <span>{achievement.date}</span>
                    </div>
                  </div>
                </div>
              ))}

              <div className="leadership-stat-card">
                <div className="stat-card-header">
                  <UserCheckIcon size={18} className="stat-icon" />
                  <span className="stat-card-title">Leadership Impact</span>
                </div>
                <p className="stat-card-text">
                  Demonstrated accountability by progressing from Associate to Co-Head, managing student-led operations, compliance workflows, and institutional standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
