import { portfolioData } from "../data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon, ArrowUpIcon } from "./Icons";
import "../styles/footer.css";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top-row">
          <div className="footer-brand">
            <span className="footer-bracket">&lt;</span>
            <span className="footer-logo">TD</span>
            <span className="footer-bracket">/&gt;</span>
            <span className="footer-title">Tushar Dileep</span>
          </div>

          <div className="footer-social-row">
            <a 
              href={personal.social.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="GitHub Profile"
              className="footer-social-link"
            >
              <GitHubIcon size={18} />
            </a>
            <a 
              href={personal.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="LinkedIn Profile"
              className="footer-social-link"
            >
              <LinkedInIcon size={18} />
            </a>
            <a 
              href={`mailto:${personal.email}`} 
              aria-label="Email Me"
              className="footer-social-link"
            >
              <MailIcon size={18} />
            </a>
          </div>

          <button 
            className="footer-back-to-top" 
            onClick={scrollToTop}
            aria-label="Scroll back to top"
          >
            <span>Back to Top</span>
            <ArrowUpIcon size={14} className="top-arrow" />
          </button>
        </div>

        <div className="footer-bottom-row">
          <p className="footer-copy">
            © {currentYear} {personal.name}. All rights reserved.
          </p>
          <div className="footer-tech-tag">
            <span>Built with React, TypeScript & CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
