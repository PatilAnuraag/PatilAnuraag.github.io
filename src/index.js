import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const projects = [
  {
    title: "Career Counselling Platform",
    description: "A comprehensive career counselling platform that helps students make informed career decisions.",
    liveUrl: "https://www.naviksha.co.in/",
    githubUrl: "https://github.com/vikrantshome/acadspace-pathfinder",
    tags: ["React", "Node.js", "Career Guidance"]
  },
  {
    title: "EduPath India",
    description: "College and education stream recommendation system helping students find their perfect educational path.",
    liveUrl: "https://edu-path-india.vercel.app/",
    githubUrl: "https://github.com/PatilAnuraag/EduPathIndia",
    tags: ["React", "Machine Learning", "Education"]
  },
  {
    title: "Campus Compass",
    description: "Smart college recommendation system with personalized suggestions based on student preferences.",
    liveUrl: "https://campus-compass-mu.vercel.app/",
    githubUrl: "https://github.com/vikrantshome/Applichoice",
    tags: ["React", "AI/ML", "Recommendation System"]
  },
  {
    title: "Scaler Future Fit",
    description: "Educational platform for skill development and career preparation.",
    liveUrl: "https://scaler-future-fit-roan.vercel.app/",
    githubUrl: "https://github.com/vikrantshome/Scaler-Future-Fit",
    tags: ["React", "Education Tech", "Skill Development"]
  },
  {
    title: "Shiksha Sathi",
    description: "AI-based smart assignments and auto-grading system for efficient education management.",
    liveUrl: "https://shiksha-sathi-taupe.vercel.app/",
    githubUrl: "#",
    tags: ["AI", "Auto-grading", "EdTech"]
  }
];

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <header className="hero">
        <nav className="navbar">
          <div className="logo">Portfolio</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Anuraag Patil</span></h1>
          <p className="tagline">Full Stack Developer | AI Enthusiast | EdTech Innovator</p>
          <p className="hero-description">
            Passionate about building intelligent solutions that make education accessible and personalized.
            Specializing in React, Node.js, and Machine Learning applications.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Get In Touch</a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <p>
              I'm a passionate developer focused on creating innovative solutions in the Education Technology space.
              With expertise in full-stack development and AI/ML, I build platforms that help students make informed
              decisions about their careers and education.
            </p>
            <p>
              My work spans across career counselling platforms, recommendation systems, and AI-powered educational tools
              that are making a real impact in students' lives across India.
            </p>
            <div className="skills">
              <h3>Technologies & Skills</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>JavaScript</span>
                <span>Python</span>
                <span>Machine Learning</span>
                <span>MongoDB</span>
                <span>Express</span>
                <span>Git</span>
                <span>Vercel</span>
                <span>REST APIs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Explore my work in EdTech and AI-powered solutions</p>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <div className="project-links">
                    {project.githubUrl !== '#' && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="link-icon" title="View Code">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="link-icon" title="Live Demo">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <p className="section-subtitle">Let's collaborate on your next project</p>
          <div className="contact-content">
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out!
            </p>
            <div className="social-links">
              <a href="https://github.com/PatilAnuraag" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </a>
              <a href="mailto:your.email@example.com" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                Email
              </a>
              <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Anuraag Patil. All rights reserved.</p>
        <p>Built with React & ❤️</p>
      </footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
