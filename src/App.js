import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './Component/navbar/Header'
import Homepage from './Component/homepage/Homepage'
import About from './Component/aboutpage/About'
import Portfolio from './Component/portfolio/Portfolio'
import Services from './Component/servicepage/Services'
import Contactus from './Component/contactuspage/Contactus'
import Blog from './Component/blogpage/Blog'
import Footer from './Component/footer/Footer'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
