import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPaperPlane, 
  faUser, 
  faEnvelope, 
  faComment, 
  faRobot 
} from '@fortawesome/free-solid-svg-icons';
import './Contactus.css';

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('idle');
  const headerRef = useRef(null);
  const formRef = useRef(null);

  // Intersection observers for animations
  useEffect(() => {
    const observerHeader = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    const observerForm = new IntersectionObserver(
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
      observerHeader.observe(headerRef.current);
    }

    if (formRef.current) {
      observerForm.observe(formRef.current);
    }

    return () => {
      if (headerRef.current) {
        observerHeader.unobserve(headerRef.current);
      }
      if (formRef.current) {
        observerForm.unobserve(formRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Simulate form submission with backend
    setTimeout(() => {
      // Create submission object with timestamp
      const newSubmission = {
        ...formData,
        id: Date.now(),
        timestamp: new Date().toISOString()
      };

      // Store submission in localStorage
      localStorage.setItem('lastContactSubmission', JSON.stringify(newSubmission));
      
      setFormStatus('success');
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

  return (
    <div id="contact" className="contact-container">
      <div ref={headerRef} className="contact-header">
        <h2>Contact Me</h2>
        <p>Let's work together to bring your ideas to life</p>
      </div>
      
      <div ref={formRef} className="contact-content">
        <div className="contact-illustration">
          <div className="contact-robot">
            <FontAwesomeIcon icon={faRobot} />
            <div className={`contact-robot-status ${formStatus}`}></div>
          </div>
          <div className="contact-transmission-lines">
            <div className="transmission-line"></div>
            <div className="transmission-line"></div>
            <div className="transmission-line"></div>
          </div>
        </div>
        
        <form 
          className={`contact-form ${formStatus}`} 
          onSubmit={handleSubmit}
        >
          <div className="form-group">
            <FontAwesomeIcon icon={faUser} className="form-icon" />
            <input 
              type="text" 
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <FontAwesomeIcon icon={faEnvelope} className="form-icon" />
            <input 
              type="email" 
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="form-group">
            <FontAwesomeIcon icon={faComment} className="form-icon" />
            <textarea 
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="submit-button"
            disabled={formStatus !== 'idle'}
          >
            {formStatus === 'idle' && (
              <>
                <FontAwesomeIcon icon={faPaperPlane} />
                Send Message
              </>
            )}
            {formStatus === 'sending' && 'Sending...'}
            {formStatus === 'success' && 'Message Sent!'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;