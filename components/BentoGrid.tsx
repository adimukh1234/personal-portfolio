'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Skill tags data
const skillTags = [
  'React', 'TypeScript', 'Node.js', 'Next.js', 'Python', 
  'Tailwind CSS', 'MongoDB', 'Express'
];

// Project data (synced with Projects section)
const featuredProjects = [
  {
    id: 0,
    title: 'Tech Startup Website',
    description: 'Startup marketing site showcasing innovative solutions and services.',
    tags: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    image: 'https://res.cloudinary.com/dbpvl1rnb/image/upload/v1754820798/bb_u5yl1e.png',
    demoUrl: 'https://buzzbites-web.vercel.app/',
    githubUrl: 'https://github.com/adimukh1234/buzzbites_web'
  },
  {
    id: 1,
    title: 'AI Workout & Diet Assistant',
    description: 'Generates personalized workout + meal plans via AI voice interaction.',
    tags: ['Next.js', 'TypeScript', 'Convex','Clerk','Tailwind CSS'],
    image: 'https://res.cloudinary.com/dbpvl1rnb/image/upload/v1754820796/code-flex_ejiae8.png',
    demoUrl: 'https://code-flex-ai-seven.vercel.app/',
    githubUrl: 'https://github.com/adimukh1234/code-flex'
  },
  {
    id: 2,
    title: 'Functional NGO Website',
    description: 'Informational platform for an NGO – mission, vision & services.',
    tags: ['React', 'Next', 'Styled Components'],
    image: 'https://res.cloudinary.com/dbpvl1rnb/image/upload/v1754820795/soranova_qxs6yh.png',
    demoUrl: 'https://ngo-website-rust-omega.vercel.app/',
    githubUrl: 'https://github.com/adimukh1234/soranova-glow-web'
  }
];

export default function BentoGrid() {
  const [currentTime, setCurrentTime] = useState('');
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit'
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const projectInterval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % featuredProjects.length);
    }, 3000);
    return () => clearInterval(projectInterval);
  }, []);

  return (
    <section className="modern-bento-grid" id="bento-grid">
      {/* Hero Introduction */}
      <div className="bento-card hero-card">
        <div className="hero-content">
          <div className="status-indicator">
            <div className="status-dot"></div>
            <span>Available for work</span>
          </div>
          <h1 className="hero-title">
            Full-Stack
            <span className="gradient-text">Developer</span>
          </h1>
          <p className="hero-description">
            Crafting modern web experiences with cutting-edge technologies
          </p>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">Multi</span>
              <span className="stat-label">Frameworks</span>
            </div>
            <div className="stat">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years Learning</span>
            </div>
            <div className="stat">
              <span className="stat-number">Daily</span>
              <span className="stat-label">Coder</span>
            </div>
          </div>
        </div>
      </div>

      {/* Skills & Expertise */}
      <div className="bento-card skills-card">
        <div className="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3>Tech Stack</h3>
        </div>
        <div className="skills-container">
          {skillTags.map((skill, index) => (
            <span 
              key={skill} 
              className="skill-tag"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${2 + (index % 4) * 0.5}s`
              }}
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="skill-progress">
          <div className="progress-bar"></div>
        </div>
      </div>

      {/* Featured Projects */}
      <div className="bento-card projects-card">
        <div className="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
            <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor"/>
            <path d="M21 15L16 10L5 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <h3>Featured Work</h3>
        </div>
        <div className="project-showcase">
          <div className="project-preview">
            <Image 
              src={featuredProjects[activeProject].image}
              alt={featuredProjects[activeProject].title}
              width={260}
              height={150}
              className="project-image object-cover"
            />
            <div className="project-overlay flex flex-col justify-between">
              <div className="project-status text-xs font-mono tracking-wide px-2 py-1 rounded bg-[#ff4e42]/20 text-[#ff4e42] w-fit">
                {featuredProjects[activeProject].demoUrl ? 'LIVE' : 'CODE'}
              </div>
              <div className="flex gap-2 mt-auto">
                {featuredProjects[activeProject].demoUrl && (
                  <a
                    href={featuredProjects[activeProject].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono bg-[#ff4e42] text-white px-2 py-1 rounded hover:bg-[#ff654f] transition"
                  >
                    DEMO
                  </a>
                )}
                {featuredProjects[activeProject].githubUrl && (
                  <a
                    href={featuredProjects[activeProject].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] font-mono bg-white/10 text-white px-2 py-1 rounded hover:bg-white/20 transition"
                  >
                    CODE
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="project-info">
            <h4 className="project-title line-clamp-1">{featuredProjects[activeProject].title}</h4>
            <p className="text-xs text-gray-300 mt-1 line-clamp-2">
              {featuredProjects[activeProject].description}
            </p>
            <div className="project-tech mt-2">
              {featuredProjects[activeProject].tags.slice(0,4).map((tech) => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
          </div>
          <div className="project-indicators">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === activeProject ? 'active' : ''}`}
                onClick={() => setActiveProject(index)}
                aria-label={`Show project ${featuredProjects[index].title}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bento-card actions-card">
        <div className="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11H15M9 15H15M17 21L12 16L7 21H17ZM21 5H3C2.45 5 2 5.45 2 6V14C2 14.55 2.45 15 3 15H21C21.55 15 22 14.55 22 14V6C22 5.45 21.55 5 21 5Z" fill="currentColor"/>
          </svg>
          <h3>Quick Actions</h3>
        </div>
        <div className="action-buttons">
          <a href="#contact" className="action-btn primary">
            <span>Hire Me</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#projects" className="action-btn secondary">
            <span>View Work</span>
          </a>
        </div>
      </div>

      {/* Social Links */}
      <div className="bento-card social-card">
        <div className="card-header">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 8A6 6 0 1 1 4 8V16A2 2 0 0 0 6 18H16A2 2 0 0 0 18 16V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="18" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
          </svg>
          <h3>Connect</h3>
        </div>
        <div className="social-links">
          <a href="https://github.com/adimukh1234" className="social-link github" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/adityamukherjee100/" className="social-link linkedin" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="mailto:adimukherjee100@gmail.com" className="social-link email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="6" width="20" height="12" rx="2"/>
              <path d="M2 8l10 6 10-6"/>
            </svg>
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Status & Time */}
      <div className="bento-card status-card">
        <div className="status-info">
          <div className="time-display">
            <span className="time">{currentTime}</span>
            <span className="timezone">IST</span>
          </div>
          <div className="location">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 10c0 5-9 11-9 11S3 15 3 10a9 9 0 1 1 18 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Kolkata, India</span>
          </div>
          
        </div>
      </div>

      {/* Profile Image */}
      <div className="bento-card profile-card">
        <div className="profile-container">
          <div className="profile-image-wrapper">
            <Image 
              src="https://res.cloudinary.com/dbpvl1rnb/image/upload/v1754827587/WhatsApp_Image_2025-08-10_at_17.36.09_f30b71a6_xzjgsy.jpg" 
              alt="Aditya Mukherjee - Full-Stack Developer"
              width={300}
              height={400}
              className="profile-image"
            />
            <div className="profile-overlay">
              <div className="overlay-content">
                <h4>Aditya Mukherjee</h4>
                <p>Full-Stack Developer</p>
              </div>
            </div>
          </div>
          <div className="profile-metrics">
            <div className="metric">
              <span className="metric-value">98%</span>
              <span className="metric-label">Client Satisfaction</span>
            </div>
            <div className="metric">
              <span className="metric-value">150+</span>
              <span className="metric-label">Commits This Month</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
