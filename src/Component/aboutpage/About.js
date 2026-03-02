import React, { useEffect, useRef } from 'react';
import './About.css';
import aboutme from '../assets/aboutme.mov';

function About() {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const textElement = textRef.current;
    const videoElement = videoRef.current;

    if (textElement) observer.observe(textElement);
    if (videoElement) observer.observe(videoElement);

    return () => {
      if (textElement) observer.unobserve(textElement);
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div ref={textRef} className="about-text">
            <h2>About Me</h2>
            <div className="text-reveal">
              <p>
                I'm a passionate software engineer with a deep love for creating innovative 
                digital solutions. My journey in technology is driven by curiosity and a 
                constant desire to push the boundaries of what's possible.
              </p>
              <p>
                Specializing in full-stack development, I blend cutting-edge technologies 
                with creative problem-solving. From complex web applications to intelligent 
                machine learning systems, I thrive on transforming abstract ideas into 
                functional, impactful solutions.
              </p>
              <p>
                My approach combines technical expertise with a user-centric design philosophy, 
                ensuring that every project not only works flawlessly but also provides an 
                exceptional user experience.
              </p>
            </div>
            <div className="skills-section">
              <h3>Core Technologies</h3>
              <div className="skills-grid">
                {[
                  'React', 'Node.js', 'Python', 
                  'MongoDB', 'Docker', 'AWS', 
                  'Machine Learning', 'Data Visualization'
                ].map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div ref={videoRef} className="about-video">
            <div className="video-wrapper">
              <video 
                src={aboutme} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="video-background"
              />
              <div className="video-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;