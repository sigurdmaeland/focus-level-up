import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import MetaAds from './pages/MetaAds';
import TikTokAds from './pages/TikTokAds';
import SnapchatAds from './pages/SnapchatAds';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meta-ads" element={<MetaAds />} />
          <Route path="/tiktok-ads" element={<TikTokAds />} />
          <Route path="/snapchat-ads" element={<SnapchatAds />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} /> 
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
