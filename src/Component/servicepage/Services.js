import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faBrain, 
  faCloud, 
  faLaptopCode, 
  faDatabase, 
  faMobileAlt 
} from '@fortawesome/free-solid-svg-icons';
import './Services.css';

function ServiceCard({ icon, title, description }) {
  const cardRef = useRef(null);

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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div ref={cardRef} className="service-card">
      <div className="service-icon">
        <FontAwesomeIcon icon={icon} size="3x"/>
      </div>
      <div className="service-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function Services() {
  const headerRef = useRef(null);

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

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  const servicesData = [
    {
      icon: faCode,
      title: "Web Development",
      description: "Crafting responsive, high-performance web applications with modern frameworks and cutting-edge technologies."
    },
    {
      icon: faBrain,
      title: "AI & Machine Learning",
      description: "Developing intelligent solutions that leverage machine learning and deep learning to solve complex problems."
    },
    {
      icon: faCloud,
      title: "Cloud Solutions",
      description: "Designing scalable, secure cloud architectures and implementing robust DevOps practices."
    },
    {
      icon: faLaptopCode,
      title: "Tech Consulting",
      description: "Providing strategic technology guidance to help businesses innovate and transform digitally."
    },
    {
      icon: faDatabase,
      title: "Data Engineering",
      description: "Building data pipelines, analytics platforms, and deriving actionable insights from complex datasets."
    },
    {
      icon: faMobileAlt,
      title: "Mobile Development",
      description: "Creating cross-platform mobile applications with smooth performance and intuitive user experiences."
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div ref={headerRef} className="services-header">
          <h2>Services</h2>
          <p>Transforming ideas into powerful, elegant technological solutions</p>
        </div>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;