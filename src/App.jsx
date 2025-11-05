import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import MetaAds from './pages/MetaAds';
import GoogleAds from './pages/GoogleAds';
import WebsiteShop from './pages/WebsiteShop';
import SEO from './pages/SEO';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/meta-ads" element={<MetaAds />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route path="/website-shop" element={<WebsiteShop />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
