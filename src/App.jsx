import React, { useState, useEffect } from 'react';
import Home from './components/Home';
import Publications from './components/Publications';
import logo from './assets/image1.png';
import { Phone, Mail, Menu, X } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navigate = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-layout">
      {/* Navigation Header */}
      <header className="header">
        <div className="container header-container">
          <button onClick={() => navigate('home')} className="logo-link" style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', textAlign: 'left' }}>
            <img src={logo} alt="JEMAS Logo" className="logo-img" />
            <div className="brand-text">
              <span className="brand-title">JEMAS</span>
              <span className="brand-subtitle">Educational Management &amp; Supervision</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="nav-menu nav-desktop">
            <button onClick={() => navigate('home')} className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}>
              Home
            </button>
            <button onClick={() => navigate('publications')} className={`nav-item ${activeTab === 'publications' ? 'active' : ''}`}>
              View &amp; Download
            </button>
          </nav>

          {/* Hamburger Button (mobile only) */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="mobile-nav">
            <button onClick={() => navigate('home')} className={`mobile-nav-item ${activeTab === 'home' ? 'active' : ''}`}>
              Home
            </button>
            <button onClick={() => navigate('publications')} className={`mobile-nav-item ${activeTab === 'publications' ? 'active' : ''}`}>
              View &amp; Download
            </button>
          </div>
        )}
      </header>

      {/* Main View Router */}
      <main style={{ flexGrow: 1 }}>
        {activeTab === 'home' ? (
          <Home onViewArticles={() => navigate('publications')} />
        ) : (
          <Publications />
        )}
      </main>

      {/* Academic Footer */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src={logo} alt="JEMAS Emblem" className="footer-logo-img" />
              <span className="footer-brand-title">JEMAS</span>
            </div>
            <p className="footer-brand-desc">
              The Journal of Educational Management and Supervision is a peer-reviewed academic journal published under the auspices of the Department of Educational Administration and Planning, Joseph Sarwuan Tarka University, Makurdi (JOSTUM), Nigeria.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Editorial Contact</h4>
            <ul className="footer-links">
              <li className="footer-link-item" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={16} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <span style={{ wordBreak: 'break-all' }}>eadmin.planningjournal@uam.edu.ng</span>
              </li>
              <li className="footer-link-item" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.9rem', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={16} style={{ color: 'var(--secondary)', flexShrink: 0 }} />
                <span>Online Access: jostumservices.com/jemas</span>
              </li>
              <li className="footer-link-item" style={{ display: 'flex', gap: '12px', marginTop: '16px', flexWrap: 'wrap' }}>
                <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', fontSize: '0.85rem', padding: 0 }}>Home</button>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                <button onClick={() => navigate('publications')} style={{ background: 'none', border: 'none', color: 'rgba(255, 255, 255, 0.7)', cursor: 'pointer', fontSize: '0.85rem', padding: 0 }}>View &amp; Download Articles</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>&copy; {new Date().getFullYear()} JEMAS. All Rights Reserved.</span>
          <span className="footer-bottom-right">Department of Educational Administration and Planning, JOSTUM, Makurdi, Nigeria.</span>
        </div>
      </footer>
    </div>
  );
}
