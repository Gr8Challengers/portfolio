import { useState } from "react";
import { portfolioData } from "../data/portfolio";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { 
  GitHubIcon, 
  LinkedInIcon, 
  MailIcon, 
  PhoneIcon, 
  LocationIcon, 
  CopyIcon, 
  CheckIcon, 
  ArrowRightIcon 
} from "./Icons";
import "../styles/contact.css";

export default function Contact() {
  const { personal } = portfolioData;
  const { ref, isVisible } = useScrollReveal();
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div ref={ref} className={`reveal ${isVisible ? "visible" : ""}`}>
          <div className="contact-showcase-card">
            {/* Ambient Radial Spotlight */}
            <div className="contact-spotlight" aria-hidden="true" />

            <div className="contact-content-wrap">
              <span className="contact-pill-tag">06 • What's Next?</span>
              <h2 className="contact-main-heading">Let's Connect & Build</h2>
              <p className="contact-lead-text">
                I'm actively seeking <strong className="contact-strong">Software Developer Internship</strong> opportunities where I can contribute to real software projects, learn from experienced teams, and strengthen core engineering practices. My inbox is always open.
              </p>

              {/* Action Buttons Hub */}
              <div className="contact-actions-row">
                <a 
                  href={`mailto:${personal.email}`} 
                  className="contact-primary-btn"
                  aria-label="Send email"
                >
                  <MailIcon size={17} />
                  <span>Send an Email</span>
                  <ArrowRightIcon size={16} className="btn-arrow" />
                </a>

                <button 
                  className="contact-copy-btn" 
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                >
                  {copied ? (
                    <>
                      <CheckIcon size={16} className="copy-check" />
                      <span>Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon size={16} />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Channels Grid */}
              <div className="contact-channels-grid">
                <a
                  href={personal.social.github}
                  className="channel-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <div className="channel-icon-wrap">
                    <GitHubIcon size={20} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">GitHub</span>
                    <span className="channel-val">@Gr8Challengers</span>
                  </div>
                  <ArrowRightIcon size={14} className="channel-arrow" />
                </a>

                <a
                  href={personal.social.linkedin}
                  className="channel-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <div className="channel-icon-wrap">
                    <LinkedInIcon size={20} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">LinkedIn</span>
                    <span className="channel-val">in/tushar-dileep</span>
                  </div>
                  <ArrowRightIcon size={14} className="channel-arrow" />
                </a>

                <a
                  href={`tel:${personal.phone}`}
                  className="channel-card"
                  aria-label="Phone Number"
                >
                  <div className="channel-icon-wrap">
                    <PhoneIcon size={20} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Phone</span>
                    <span className="channel-val">{personal.phone}</span>
                  </div>
                  <ArrowRightIcon size={14} className="channel-arrow" />
                </a>

                <div className="channel-card channel-card-static">
                  <div className="channel-icon-wrap">
                    <LocationIcon size={20} />
                  </div>
                  <div className="channel-info">
                    <span className="channel-label">Location</span>
                    <span className="channel-val">{personal.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
