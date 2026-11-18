import { portfolioData } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { SkillIcon, CodeIcon, TerminalIcon, ReactIcon, DsaIcon } from "./Icons";
import "../styles/skills.css";

const categoryIcons: Record<string, React.ReactElement> = {
  "Programming Languages": <TerminalIcon size={18} />,
  "Web Technologies": <CodeIcon size={18} />,
  "Frameworks & Runtime": <ReactIcon size={18} />,
  "CS Fundamentals": <DsaIcon size={18} />,
};

export default function Skills() {
  const { skills } = portfolioData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section" id="skills">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="section-header">
            <span className="section-number">02</span>
            <h2 className="section-title">Technical Expertise</h2>
            <div className="section-line" />
          </div>

          <p className="skills-subtitle">
            Core technologies and computer science principles I leverage to build scalable, reliable software.
          </p>

          <div className="skills-grid">
            {skills.map((category, idx) => (
              <div className={`skill-card stagger-${idx + 1}`} key={category.category}>
                <div className="skill-card-top">
                  <div className="category-icon-box">
                    {categoryIcons[category.category] || <CodeIcon size={18} />}
                  </div>
                  <h3 className="skill-card-title">{category.category}</h3>
                </div>

                <div className="skill-items">
                  {category.items.map((skill) => (
                    <div className="skill-chip" key={skill.name}>
                      <span className="skill-chip-icon">
                        <SkillIcon name={skill.name} size={17} />
                      </span>
                      <span className="skill-chip-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
