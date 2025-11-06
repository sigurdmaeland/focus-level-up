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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meta-ads" element={<MetaAds />} />
          <Route path="/tiktok-ads" element={<TikTokAds />} />
          <Route path="/snapchat-ads" element={<SnapchatAds />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
