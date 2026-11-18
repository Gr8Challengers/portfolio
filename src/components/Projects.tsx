import { portfolioData } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  GitHubIcon, 
  ExternalLinkIcon, 
  CheckIcon, 
  FilmIcon, 
  StarIcon, 
  SparklesIcon
} from "./Icons";
import "../styles/projects.css";

export default function Projects() {
  const { projects } = portfolioData;
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="section" id="projects">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="section-header">
            <span className="section-number">03</span>
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-line" />
          </div>

          <p className="projects-subtitle">
            Demonstrating practical software engineering, API integration, and component-driven web development. Click anywhere on the preview or buttons to test the live application.
          </p>

          <div className="projects-showcase">
            {projects.map((project) => (
              <div className="project-feature-card" key={project.title}>
                {/* Left: Narrative & Technical Specs */}
                <div className="project-info-pane">
                  <div className="project-badge-row">
                    <span className="project-featured-badge">
                      <SparklesIcon size={13} />
                      <span>{project.type}</span>
                    </span>
                    <span className="project-date-badge">{project.date}</span>
                  </div>

                  {/* Clickable Title */}
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-anchor"
                    title="Visit FilmBox - Movie Logging Platform"
                  >
                    <h3 className="project-display-title">
                      <span>{project.title}</span>
                      <ExternalLinkIcon size={20} className="title-arrow-icon" />
                    </h3>
                  </a>
                  <p className="project-display-sub">{project.subtitle}</p>

                  <p className="project-narrative">{project.description}</p>

                  {/* Highlights with Checkmarks */}
                  <div className="project-feature-list">
                    {project.highlights.map((highlight, i) => (
                      <div className="feature-item" key={i}>
                        <div className="feature-check-circle">
                          <CheckIcon size={12} />
                        </div>
                        <span className="feature-text">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="project-tech-row">
                    {project.techStack.map((tech) => (
                      <span className="project-tech-pill" key={tech}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links & CTA */}
                  <div className="project-links-row">
                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        className="project-cta-btn project-cta-primary"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Launch FilmBox - Movie Logging Platform"
                      >
                        <ExternalLinkIcon size={16} />
                        <span>Launch FilmBox Live ↗</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        className="project-cta-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View source on GitHub"
                      >
                        <GitHubIcon size={16} />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right: Architectural UI Mockup Preview (Clickable to FilmBox) */}
                <div className="project-visual-pane">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-mockup-link-wrapper"
                    title="Click to open FilmBox - Movie Logging Platform"
                  >
                    <div className="project-mockup-window">
                      {/* Window Header */}
                      <div className="mockup-window-header">
                        <div className="window-dots">
                          <span className="dot dot-red" />
                          <span className="dot dot-yellow" />
                          <span className="dot dot-green" />
                        </div>
                        <div className="mockup-url-bar">
                          <FilmIcon size={12} className="url-icon" />
                          <span>gr8challengers.github.io/FilmBox</span>
                        </div>
                        <div className="mockup-api-badge">Live App ↗</div>
                      </div>

                      {/* App Mock Body */}
                      <div className="mockup-app-body">
                        {/* Search Bar Preview */}
                        <div className="mock-search-bar">
                          <span className="mock-search-icon">🔍</span>
                          <span className="mock-search-placeholder">Search movies, ratings, reviews...</span>
                        </div>

                        {/* Mock Movie Cards Row */}
                        <div className="mock-movie-grid">
                          <div className="mock-movie-card card-featured">
                            <div className="mock-movie-poster poster-1">
                              <span className="mock-play-btn">▶</span>
                              <div className="mock-rating-badge">
                                <StarIcon size={12} />
                                <span>8.8</span>
                              </div>
                            </div>
                            <div className="mock-movie-details">
                              <div className="mock-title">Inception</div>
                              <div className="mock-meta">Sci-Fi • 2010</div>
                            </div>
                          </div>

                          <div className="mock-movie-card">
                            <div className="mock-movie-poster poster-2">
                              <div className="mock-rating-badge">
                                <StarIcon size={12} />
                                <span>8.6</span>
                              </div>
                            </div>
                            <div className="mock-movie-details">
                              <div className="mock-title">Interstellar</div>
                              <div className="mock-meta">Adventure • 2014</div>
                            </div>
                          </div>
                        </div>

                        {/* Diary Review Feature Strip */}
                        <div className="mock-diary-strip">
                          <div className="diary-strip-header">
                            <span className="diary-icon">📝</span>
                            <span className="diary-title">Private Movie Diary Entry</span>
                            <span className="diary-saved-badge">Saved</span>
                          </div>
                          <p className="diary-snippet">
                            "Brilliant narrative structure and sound design. Added to favorite sci-fi watchlist."
                          </p>
                        </div>

                        {/* Live Click CTA Overlay Bar */}
                        <div className="mockup-live-cta-bar">
                          <span className="cta-live-text">👉 Click anywhere to launch FilmBox Live</span>
                          <ExternalLinkIcon size={14} className="cta-live-icon" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
