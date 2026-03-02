import { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCode, 
  faRobot, 
  faCloud, 
  faBrain, 
  faChartLine, 
  faDesktop 
} from '@fortawesome/free-solid-svg-icons';
import './Blog.css';

const blogPosts = [
  {
    id: 1,
    title: "The Rise of AI in Web Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing web development workflows and creating smarter, more adaptive applications.",
    date: "January 15, 2024",
    icon: faRobot,
    category: "AI & Technology",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Cloud Native Architecture: A Deep Dive",
    excerpt: "Understanding the principles of cloud-native development and how microservices are transforming modern software infrastructure.",
    date: "February 3, 2024",
    icon: faCloud,
    category: "Cloud Computing",
    readTime: "7 min read"
  },
  {
    id: 3,
    title: "Machine Learning Demystified",
    excerpt: "Breaking down complex machine learning concepts into digestible insights for developers and tech enthusiasts.",
    date: "March 22, 2024",
    icon: faBrain,
    category: "Machine Learning",
    readTime: "6 min read"
  },
  {
    id: 4,
    title: "Frontend Performance Optimization",
    excerpt: "Advanced techniques to improve web application speed, reduce load times, and enhance user experience.",
    date: "April 10, 2024",
    icon: faDesktop,
    category: "Web Development",
    readTime: "4 min read"
  },
  {
    id: 5,
    title: "Data Visualization Techniques",
    excerpt: "Creating compelling and interactive data visualizations that tell powerful stories through design and technology.",
    date: "May 5, 2024",
    icon: faChartLine,
    category: "Data Science",
    readTime: "5 min read"
  },
  {
    id: 6,
    title: "Next-Gen Programming Paradigms",
    excerpt: "Exploring emerging programming paradigms and how they're reshaping software development methodologies.",
    date: "June 18, 2024",
    icon: faCode,
    category: "Software Engineering",
    readTime: "6 min read"
  }
];

function BlogPost({ post, index }) {
  const postRef = useRef(null);

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

    if (postRef.current) {
      observer.observe(postRef.current);
    }

    return () => {
      if (postRef.current) {
        observer.unobserve(postRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={postRef} 
      className={`blog-timeline-post ${index % 2 === 0 ? 'left' : 'right'}`}
      style={{ 
        transitionDelay: `${index * 0.1}s`
      }}
    >
      <div className="blog-timeline-content">
        <div className="blog-timeline-icon">
          <FontAwesomeIcon icon={post.icon} />
        </div>
        <div className="blog-timeline-text">
          <div className="blog-timeline-header">
            <span className="blog-timeline-category">{post.category}</span>
            <span className="blog-timeline-date">{post.date}</span>
          </div>
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
          <div className="blog-timeline-footer">
            <span className="blog-timeline-read-time">{post.readTime}</span>
            <button className="blog-timeline-read-more">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Blog() {
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

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <div ref={headerRef} className="blog-header">
          <h2>Tech Insights</h2>
          <p>Exploring the Frontiers of Technology and Innovation</p>
        </div>
        <div className="blog-timeline">
          {blogPosts.map((post, index) => (
            <BlogPost 
              key={post.id} 
              post={post} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;