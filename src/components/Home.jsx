import React from 'react';
import { BookOpen, Award, FileText, Mail, Users, CheckCircle, ShieldAlert, Phone } from 'lucide-react';
import logo1 from '../assets/image1.png';
import logo2 from '../assets/image2.png';

export default function Home({ onViewArticles }) {
  // Editorial Board Data
  const associateEditors = [
    "Rev.Fr.Prof. D.I. Kajo",
    "Prof. C.I. Tyokyaa",
    "Prof. G. Ochai",
    "Prof. A.D.E. Obinne",
    "Prof. M.O. Aduloju",
    "Prof. P.O. James",
    "Dr. C. Agbulu",
    "Dr. F. Bua",
    "Dr. (Mrs.) O.H. Olatunde",
    "Dr. T. Guda",
    "Dr. P. Anyagh"
  ];

  const consultingEditors = [
    {
      name: "Prof. Nelson Ogbonnaya",
      dept: "Department of Educational Foundations",
      inst: "University of Nigeria, Nsukka"
    },
    {
      name: "Prof. Maicibi Alhas Nok",
      dept: "Department of Educational Foundations",
      inst: "Nasarawa State University, Keffi"
    },
    {
      name: "Prof. John A. Undie",
      dept: "Department of Educational Management",
      inst: "University of Calabar"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-content">
            <span className="hero-badge">
              <Award size={14} /> Vol. 7, No. 1, 2026 • ISSN: 2636-4514
            </span>
            <h1 className="hero-title">
              Journal of Educational Management and Supervision
            </h1>
            <p className="hero-desc">
              A peer-reviewed academic platform published by the Department of Educational Administration and Planning, 
              Joseph Sarwuan Tarka University, Makurdi (JOSTUM), Benue State, Nigeria.
            </p>
            <div className="hero-actions">
              <button onClick={onViewArticles} className="btn btn-primary">
                Browse Publications
              </button>
              <a href="#contributors" className="btn btn-secondary">
                Submit Manuscript
              </a>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-circle-bg"></div>
            <img src={logo1} alt="JEMAS Emblem Logo" className="hero-main-img" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <BookOpen size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">Peer-Reviewed</span>
              <span className="stat-label">Review Model</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Award size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">ISSN: 2636-4514</span>
              <span className="stat-label">Registration</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <Users size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">Departmental Journal</span>
              <span className="stat-label">Publisher</span>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-icon">
              <FileText size={24} />
            </div>
            <div className="stat-info">
              <span className="stat-value">15 Publications</span>
              <span className="stat-label">Current Issue</span>
            </div>
          </div>
        </div>
      </section>

      {/* About & Guidelines Grid */}
      <section className="section section-alt">
        <div className="container grid-2">
          <div className="about-text">
            <span className="section-subtitle">Overview</span>
            <h2 className="section-title">About JEMAS</h2>
            <div style={{ marginTop: '24px' }}>
              <p>
                The <strong>Journal of Educational Management and Supervision (JEMAS)</strong> publishes scholarly, well-researched articles focusing on educational management, administrative theories, policies, school plant design, personnel development, statistical moderation, and modern classroom dynamics.
              </p>
              <p>
                Based in the Department of Educational Administration and Planning at Joseph Sarwuan Tarka University Makurdi (formerly University of Agriculture, Makurdi), JEMAS bridges research and practice. We aim to support educational directors, academic researchers, and school planners with peer-reviewed empirical evidence.
              </p>
              <p>
                Our current Issue (Vol. 7, No. 1, 2026) offers insights into school plant management, technological integration readiness, the impacts of school plant maintenance on job execution, and institutional safety amid local insecurity.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '30px', background: 'rgba(212, 175, 55, 0.1)', padding: '16px', borderRadius: '12px', borderLeft: '4px solid var(--secondary)' }}>
                <img src={logo2} alt="Department Seal Logo" style={{ height: '64px', width: 'auto', borderRadius: '4px' }} />
                <div>
                  <h4 style={{ color: 'var(--primary-dark)', fontSize: '0.95rem', fontWeight: 700 }}>Department of Educational Administration and Planning</h4>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Joseph Sarwuan Tarka University Makurdi, Benue State, Nigeria</p>
                </div>
              </div>
            </div>
          </div>

          <div id="contributors" className="guidelines-card">
            <h3 className="guidelines-title">
              <FileText size={22} style={{ color: 'var(--primary)' }} />
              Notes for Contributors
            </h3>
            
            <div className="guideline-item">
              <div className="guideline-bullet">1</div>
              <div className="guideline-text">
                <strong>Format & Length:</strong> Articles must be typed in MS Word, 12-point Times New Roman font, double line spacing, on A-4 sheets. The total length should not exceed 15 pages (including references).
              </div>
            </div>

            <div className="guideline-item">
              <div className="guideline-bullet">2</div>
              <div className="guideline-text">
                <strong>Cover Page details:</strong> Include the article title, author(s) full names, academic affiliations, email addresses, and active WhatsApp phone numbers.
              </div>
            </div>

            <div className="guideline-item">
              <div className="guideline-bullet">3</div>
              <div className="guideline-text">
                <strong>Abstract & Keywords:</strong> Include a structured abstract containing 3 to 5 alphabetically organized keywords below it.
              </div>
            </div>

            <div className="guideline-item">
              <div className="guideline-bullet">4</div>
              <div className="guideline-text">
                <strong>Reference Style:</strong> Align your manuscript and references strictly to the latest APA referencing guidelines (6th or 7th edition).
              </div>
            </div>

            <div className="guideline-item">
              <div className="guideline-bullet">5</div>
              <div className="guideline-text">
                <strong>Plagiarism Policy:</strong> Manuscripts with more than <strong>24% plagiarism</strong> index will be immediately rejected. Originality is paramount.
              </div>
            </div>

            <div className="guideline-item" style={{ marginTop: '24px', padding: '16px', background: 'rgba(11, 79, 59, 0.04)', borderRadius: '8px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} /> Submission Channel
                </span>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--primary-dark)', wordBreak: 'break-all' }}>
                  eadmin.planningjournal@uam.edu.ng
                </span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Submit digital MS Word drafts directly to our editorial inbox.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Board Directory */}
      <section className="section editorial-section">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Scholarly Council</span>
            <h2 className="section-title">Editorial Board & Administration</h2>
          </div>
          
          <div className="board-container">
            {/* Editor In Chief */}
            <div className="board-group">
              <h3 className="board-group-title">Editor-in-Chief</h3>
              <div className="board-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="member-card" style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                  <div className="member-avatar">RO</div>
                  <div className="member-info">
                    <span className="member-role">Editor-in-Chief</span>
                    <span className="member-name">Prof. (Mrs.) R.C. Odeh</span>
                    <span className="member-dept">Department of Educational Administration and Planning</span>
                    <span className="member-inst">Joseph Sarwuan Tarka University, Makurdi, Benue State, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Associate Editors */}
            <div className="board-group">
              <h3 className="board-group-title">Associate Editors</h3>
              <div className="board-grid">
                {associateEditors.map((name, index) => {
                  // Get initials
                  const initials = name.replace(/Dr\.|Prof\.|Rev\.|Fr\.|(Mrs\.)/g, '').trim().substring(0, 2);
                  return (
                    <div className="member-card" key={index}>
                      <div className="member-avatar" style={{ background: 'linear-gradient(135deg, var(--secondary), var(--secondary-dark))', color: 'var(--primary-dark)' }}>
                        {initials}
                      </div>
                      <div className="member-info">
                        <span className="member-role">Associate Editor</span>
                        <span className="member-name">{name}</span>
                        <span className="member-dept">Department of Educational Admin & Planning</span>
                        <span className="member-inst">Joseph Sarwuan Tarka University, Makurdi</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Consulting Editors */}
            <div className="board-group">
              <h3 className="board-group-title">Consulting Editors</h3>
              <div className="board-grid">
                {consultingEditors.map((editor, index) => {
                  const initials = editor.name.replace(/Dr\.|Prof\.|Rev\.|Fr\./g, '').trim().substring(0, 2);
                  return (
                    <div className="member-card" key={index}>
                      <div className="member-avatar">{initials}</div>
                      <div className="member-info">
                        <span className="member-role">Consulting Editor</span>
                        <span className="member-name">{editor.name}</span>
                        <span className="member-dept">{editor.dept}</span>
                        <span className="member-inst">{editor.inst}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Secretary / Circulation Manager */}
            <div className="board-group">
              <h3 className="board-group-title">Journal Administration</h3>
              <div className="board-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="member-card" style={{ maxWidth: '600px', margin: '0 auto', width: '100%' }}>
                  <div className="member-avatar" style={{ backgroundColor: 'var(--primary-dark)' }}>HO</div>
                  <div className="member-info">
                    <span className="member-role">Circulating Manager / Secretary</span>
                    <span className="member-name">Dr. (Mrs.) Olubunmi Helen Olatunde</span>
                    <span className="member-dept">Department of Educational Administration and Planning</span>
                    <span className="member-inst">Joseph Sarwuan Tarka University, Makurdi, Benue State, Nigeria</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
