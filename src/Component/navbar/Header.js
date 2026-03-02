import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.css";
import anime3 from '../assets/anime3.jpg'
// import logo from "../assets/logo.png";


function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Check for hash in URL and scroll to section
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    // Close mobile menu when navigating
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleNavigation = (sectionId) => {
    // If not on homepage, navigate to homepage first
    if (location.pathname !== '/') {
      navigate('/');
    }

    // Use timeout to ensure navigation completes before scrolling
    setTimeout(() => {
      window.location.hash = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);

    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="header">
      {/* Hamburger Menu */}
      <div 
        className={`hamburger-menu ${isMobileMenuOpen ? 'active' : ''}`} 
        onClick={toggleMobileMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <nav className={`navbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="nav-brand">
          <NavLink to="/" className="logo">
            CHYZEE
            {/* <img src={logo} alt="Logo" /> */}
          </NavLink>
        </div>
        
        <ul className="nav-items">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => handleNavigation('home')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => handleNavigation('about')}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => handleNavigation('services')}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/portfolio" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => handleNavigation('portfolio')}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => handleNavigation('blog')}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contactus" 
              className={({ isActive }) => 
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={() => handleNavigation('contact')}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="image-container">
        <img src={anime3} alt="Image" />
        <div className="text-overlay">
          <h1>Welcome to My Portfolio</h1>
          <p>Bringing Your Ideas to Life</p>
        </div>
      </div>
    </div>
    
  );
}

export default Header;
