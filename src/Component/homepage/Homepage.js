import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Homepage.css';

// Project images
import projectImage1 from '../assets/homepageaboutme.jpg';
import projectImage2 from '../assets/homepageblog.jpg';
import projectImage3 from '../assets/homepagecontact.jpg';
import projectImage4 from '../assets/homepageservices.jpg';
import projectImage5 from '../assets/homepageportfolio.jpg';

const carouselItems = [
  {
    image: projectImage1,
    text: "Transforming e-commerce experiences with innovative digital solutions."
  },
  {
    image: projectImage2,
    text: "Empowering productivity through intelligent task management platforms."
  },
  {
    image: projectImage3,
    text: "Revolutionizing financial analytics with data-driven insights and visualization."
  },
  {
    image: projectImage4,
    text: "Architecting scalable cloud computing solutions for modern enterprises."
  },
  {
    image: projectImage5,
    text: "Analyzing social media trends with advanced machine learning algorithms."
  }
];

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true
  };

  return (
    <section id="home" className="homepage-section">
      <div className="homepage-container">
        <Slider {...settings} className="homepage-carousel">
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-slide">
              <div 
                className="carousel-background" 
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              >
                <div className="carousel-overlay">
                  <div className="carousel-text">
                    {item.text}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Homepage;
