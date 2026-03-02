import { useState } from 'react';
import './Portfolio.css';
import ecommerce from '../assets/ecommerce.jpg';
import taskmanagement from '../assets/taskmanagement.jpg';
import aichatapp from '../assets/aichatapp.jpg';
import financialanalytic from '../assets/financialanalytic.jpg';
import cloudcomputing1 from '../assets/cloudcomputing1.jpg';
import socialmediaana from '../assets/socialmediaana.jpg';

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Full Stack Development",
      image: ecommerce,
      description: "A scalable e-commerce platform with real-time inventory management",
      tech: ["React", "Node.js", "MongoDB", "Redis", "AWS"],
      fullDescription: `
        This E-Commerce Platform is a comprehensive solution for online retail businesses. 
        Key features include:
        - Real-time inventory tracking
        - Secure payment integration
        - User authentication and authorization
        - Responsive design for mobile and desktop
        - Advanced search and filtering capabilities
        
        The project demonstrates expertise in full-stack development, 
        combining modern front-end technologies with robust back-end infrastructure.
      `
    },
    {
      id: 2,
      title: "Task Management System",
      category: "Web Application",
      image: taskmanagement,
      description: "Enterprise task management system with real-time collaboration",
      tech: ["Vue.js", "Express", "PostgreSQL", "Socket.io"],
      fullDescription: `
        An advanced task management platform designed for enterprise collaboration. 
        Features include:
        - Real-time task updates
        - Team and individual task tracking
        - Kanban board interface
        - Time tracking and productivity analytics
        - Seamless team communication tools
        
        Utilizes modern web technologies to create an intuitive and efficient 
        project management experience.
      `
    },
    {
      id: 3,
      title: "AI Chat Application",
      category: "Machine Learning",
      image: aichatapp,
      description: "Smart chatbot powered by natural language processing",
      tech: ["Python", "TensorFlow", "Flask", "React", "Docker"],
      fullDescription: `
        An intelligent chatbot application leveraging advanced machine learning techniques. 
        Key capabilities:
        - Natural language processing
        - Context-aware responses
        - Multi-language support
        - Continuous learning algorithms
        - Dockerized deployment
        
        Demonstrates cutting-edge AI and machine learning technologies 
        in a user-friendly web application.
      `
    },
    {
      id: 4,
      title: "Financial Analytics Dashboard",
      category: "Data Visualization",
      image: financialanalytic,
      description: "Real-time financial data visualization and analysis platform",
      tech: ["D3.js", "React", "Node.js", "MongoDB", "WebSocket"],
      fullDescription: `
        A comprehensive financial analytics platform with advanced visualization tools. 
        Features include:
        - Real-time market data tracking
        - Interactive financial charts and graphs
        - Portfolio performance analysis
        - Predictive financial modeling
        - Customizable dashboard
        
        Combines data visualization techniques with financial insights 
        to provide actionable intelligence.
      `
    },
    {
      id: 5,
      title: "Cloud Storage Service",
      category: "Cloud Computing",
      image: cloudcomputing1,
      description: "Secure cloud storage solution with file sharing capabilities",
      tech: ["AWS S3", "Node.js", "React", "PostgreSQL", "Redis"],
      fullDescription: `
        A robust cloud storage platform with advanced security and sharing features. 
        Key capabilities:
        - Secure file storage and encryption
        - Advanced file sharing mechanisms
        - User access management
        - Cross-platform compatibility
        - High-performance caching
        
        Demonstrates expertise in cloud computing and secure file management solutions.
      `
    },
    {
      id: 6,
      title: "Social Media Analytics",
      category: "Big Data",
      image: socialmediaana,
      description: "Social media data analysis and visualization platform",
      tech: ["Python", "Apache Spark", "React", "MongoDB", "Docker"],
      fullDescription: `
        An advanced social media analytics platform for comprehensive data insights. 
        Features include:
        - Real-time social media trend tracking
        - Sentiment analysis
        - Influencer identification
        - Engagement metrics visualization
        - Cross-platform data aggregation
        
        Leverages big data technologies to provide deep social media insights.
      `
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio-container">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p>Showcasing my expertise in full-stack development, cloud computing, and data engineering</p>
        </div>
        
        <div className="projects-wrapper">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-details">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tech-stack">
                      {project.tech.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal" onClick={closeModal}>
          <div 
            className="project-modal-content" 
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={closeModal}>×</button>
            <div className="modal-header">
              <img src={selectedProject.image} alt={selectedProject.title} />
              <div className="modal-title">
                <h2>{selectedProject.title}</h2>
                <p>{selectedProject.category}</p>
              </div>
            </div>
            <div className="modal-body">
              <h3>Project Overview</h3>
              <p>{selectedProject.fullDescription}</p>
              <div className="modal-tech-stack">
                <h3>Technologies Used</h3>
                <div className="tech-tags">
                  {selectedProject.tech.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;