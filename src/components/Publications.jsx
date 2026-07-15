import React, { useState } from 'react';
import { Search, Eye, Download, FileText, Frown } from 'lucide-react';

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');

  // Base URL from Vite — resolves to '/jemas/' in prod, '/' in dev
  const BASE = import.meta.env.BASE_URL;

  // 15 Publications details mapping to actual PDF filenames in public/publications/
  const articles = [
    {
      sNo: 1,
      title: "Assessment Alignment and Statistical Moderation of the 2021–2023 WASSCE Chemistry Multiple-Choice Examination in Akwa Ibom State, Nigeria",
      authors: "Uko, Idorenyin Akaninyene & Prof. Jeremiah G. Adewale",
      file: `${BASE}publications/Assessment Alignment and Statistical Moderation of the 2021.pdf`,
      pages: "1 – 10"
    },
    {
      sNo: 2,
      title: "Influence of Teachers’ Demographic Characteristics on Technology Integration Readiness in Secondary Schools in Olorunda Local Government Area, Osun State",
      authors: "Adebola Oladiji Alaba. PhD, Abosede Boladale Olukayode & Oseni Olayinka Azeez",
      file: `${BASE}publications/Influence of Teachers’ Demographic Characteristics on Technology Integration Readiness in Secondary Schools in Olorunda Local Government Area, Osun State.pdf`,
      pages: "11 - 28"
    },
    {
      sNo: 3,
      title: "Harnessing Signal Intelligence for Effective School Administration: Implications for the Administration of Public Primary Schools in Benue State, Nigeria",
      authors: "OKINO Momoh Hajara",
      file: `${BASE}publications/HARNESSING SIGNAL INTELLIGENCE FOR EFFECTIVE SCHOOL ADMINISTRATION.pdf`,
      pages: "29 – 43"
    },
    {
      sNo: 4,
      title: "Teachers’ Perception of Influence of Insecurity on Public Primary School Pupils’ Enrollment in Conflict-Affected Communities of Benue State, Nigeria",
      authors: "Anundu, Samson, Olatunde, Olubunmi Helen, PhD & Kwende, Doosuur, PhD",
      file: `${BASE}publications/TEACHERS’ PERCEPTION OF INFLUENCE OF INSECURITY ON PUBLIC PRIMARY SCHOOL PUPILS’ ENROLLMENT IN CONFLICT-AFFECTED COMMUNITIES OF BENUE STATE, NIGERIA.pdf`,
      pages: "44 - 56"
    },
    {
      sNo: 5,
      title: "Teacher’s Participation in Management Decision Making and Job Performance in Public Secondary Schools in Edo North Senatorial District.",
      authors: "DR. MRS. OKOSUN MERCY & DR. IMOROA, OLADELE VICTOR",
      file: `${BASE}publications/TEACHER’S PARTICIPATION IN MANAGEMENT DECISION MAKING AND JOB PERFORMANCE IN PUBLIC SECONDARY SCHOOLS IN EDO NORTH SENATORIAL DISTRICT.pdf`,
      pages: "57 – 69"
    },
    {
      sNo: 6,
      title: "Redefining University Education in the Age of Artificial Intelligence: Implications for Teaching, Curriculum, and Postgraduate Supervision in Nigeria",
      authors: "IORHEMEN, Benjamin Terzungwe, GEGGE, Michael Ternenge, UKORO, Frank Onyeka, ORKER, Emmanuel Terseer & JOSHUA, Manasseh Afyenaku",
      file: `${BASE}publications/Redefining University Education in the Age of Artificial Intelligence.pdf`,
      pages: "70 – 80"
    },
    {
      sNo: 7,
      title: "Repositioning Business Education in the Digital Age: Strategies for Curriculum and Skill Development at Tertiary Level",
      authors: "Abayomi Victor FAROTIMI, Jamiu Eniola RAMONI & Waliyulahi Opeyemi ALABI",
      file: `${BASE}publications/REPOSITIONING BUSINESS EDUCATION IN THE DIGITAL AGE STRATEGIES FOR CURRICULUM AND SKILL DEVELOPMENT AT TERTIARY LEVEL.pdf`,
      pages: "81 – 92"
    },
    {
      sNo: 8,
      title: "Perceived Impact of School Plant Management on Academic Staff Job Performance in Public Universities in South-East, Nigeria",
      authors: "Victor Chika Nwachukwu, Dr. Philomena Ibuh Adzongo & Dr. Esther Akinde",
      file: `${BASE}publications/Perceived Impact of School Plant Management on Academic Staff Job Performance in Public Universities in South.pdf`,
      pages: "93 – 104"
    },
    {
      sNo: 9,
      title: "Economic Implications of Fuel Subsidy Removal in Nigeria",
      authors: "Dr Okochi Emmanuel Oche, Engr. Oinu Timothy & Mr Ameh Christopher Odumu",
      file: `${BASE}publications/Economic Implications of Fuel Subsidy Removal in Nigeria.pdf`,
      pages: "105 - 112"
    },
    {
      sNo: 10,
      title: "Influence of Classroom and Play Facilities Provisions on Pupils’ Academic Performance in Primary Schools in Makurdi Metropolis in Benue State, Nigeria",
      authors: "Dr. Christiana Amichi Agbulu & Amina Muhammed",
      file: `${BASE}publications/Influence of Classroom and Play Facilities Provisions on Pupils’ Academic Performance in Primary Schools in Makurdi Metropolis in Benue State, Nigeria.pdf`,
      pages: "113 – 120"
    },
    {
      sNo: 11,
      title: "Stakeholders’ Involvement in the Management of Secondary Schools: Implications for Teachers’ Effectiveness and Cooperative Governance in Cross River State, Nigeria",
      authors: "Ategwu Patrick Ogar",
      file: `${BASE}publications/Stakeholders’ Involvement in the Management of Secondary Schools Implications for Teachers’ Effectiveness and Cooperative Governance in Cross River State, Nigeria.pdf`,
      pages: "121 – 136"
    },
    {
      sNo: 12,
      title: "Herders-Farmers Conflict, Implications for the Safety of Learners and Members of Staff in Nigerian Schools",
      authors: "Aba Archibong Emmanuel A. Ph.D A’EMAPP, NAEAP",
      file: `${BASE}publications/HERDERS-FARMERS CONFLICT, IMPLICATIONS FOR THE SAFETY OF LEARNERS AND MEMBERS OF STAFF IN NIGERIAN SCHOOLS.pdf`,
      pages: "137 – 147"
    },
    {
      sNo: 13,
      title: "Functional Education for Value Re-Orientation and National Development in Nigeria",
      authors: "Dr Okochi Emmanuel Oche",
      file: `${BASE}publications/FUNCTIONAL EDUCATION FOR VALUE RE-ORIENTATION AND NATIONAL DEVELOPMENT IN NIGERIA.pdf`,
      pages: "148 – 156"
    },
    {
      sNo: 14,
      title: "Influence of Leading Functions of Principals on Teachers’ Job Performance in Senior Secondary Schools of North West Geo-Political Zone, Nigeria",
      authors: "Zainab Musa Iliasu & Dr. Zainab Sani K/Mata",
      file: `${BASE}publications/PRINCIPALS’ LEADING FUNCTIONS AND TEACHERS’ JOB PERFORMANCE IN SENIOR SECONDARY SCHOOLS OF NORTH WEST GEO-POLITICAL ZONE, NIGERIA.pdf`,
      pages: "157 – 165"
    },
    {
      sNo: 15,
      title: "Relationship Between Students’ Engagement in Religious Activities and Academic Achievement in Esan West Local Government Area of Edo State, Nigeria",
      authors: "Mercy OKOSUN, Ph.D., ASEMHE, S. A. & OJIEMHENKELE, Andrew. E., Ph.D.",
      file: `${BASE}publications/RELATIONSHIP BETWEEN STUDENTS’ ENGAGEMENT IN RELIGIOUS ACTIVITIES AND ACADEMIC ACHIEVEMENT IN ESAN WEST LOCAL GOVERNMENT AREA OF EDO STATE, NIGERIA.pdf`,
      pages: "166 - 178"
    }
  ];

  // Filtering based on Search Query
  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.authors.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [downloading, setDownloading] = React.useState(null);

  const handleView = (filePath) => {
    window.open(filePath, '_blank', 'noopener,noreferrer');
  };

  const handleDownload = async (filePath, title) => {
    setDownloading(filePath);
    try {
      const response = await fetch(filePath);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const contentType = response.headers.get('content-type') || '';
      // If server returned HTML instead of PDF (SPA catch), warn user
      if (contentType.includes('text/html')) {
        alert('Could not reach the PDF file. Please contact the administrator.');
        setDownloading(null);
        return;
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = title + '.pdf';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Download error:', err);
      // Fallback: open in new tab
      window.open(filePath, '_blank', 'noopener,noreferrer');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <div className="pub-container">
      <div className="container">
        <div className="section-header" style={{ textAlign: 'left', marginBottom: '30px' }}>
          <span className="section-subtitle">Vol. 7, No. 1, 2026 Issue</span>
          <h2 className="section-title" style={{ display: 'block', paddingBottom: '12px' }}>
            Browse Journal Publications
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '8px', maxWidth: '800px' }}>
            Access peer-reviewed research papers. Use the filters below to search by key terms, topics, or author names. You can read individual papers in the browser or download them for offline reference.
          </p>
        </div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <Search size={20} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search by article title or author name..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Publications Table Card */}
        <div className="table-card">
          {filteredArticles.length > 0 ? (
            <div className="table-wrapper">
              <table className="publications-table">
                <thead>
                  <tr>
                    <th style={{ width: '80px', textAlign: 'center' }}>S/No</th>
                    <th>Publication Title</th>
                    <th>Author(s) Name</th>
                    <th style={{ width: '240px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredArticles.map((article) => (
                    <tr key={article.sNo}>
                      <td className="col-sno">
                        <div className="sno-badge">{article.sNo}</div>
                      </td>
                      <td className="col-title">
                        <div className="title-text">{article.title}</div>
                        <div className="title-meta">
                          <span className="tag-badge">Research Paper</span>
                          <span>Pages: {article.pages}</span>
                        </div>
                      </td>
                      <td className="col-author">
                        <div className="author-list">
                          {article.authors.split('&').map((name, i) => (
                            <div key={i} className="author-line">
                              <span className="author-bullet">▸</span>
                              <span>{name.trim()}</span>
                            </div>
                          ))}
                        </div>
                      </td>
                      <td className="col-actions">
                        <div className="actions-container">
                          <button 
                            onClick={() => handleView(article.file)} 
                            className="btn-sm btn-sm-view"
                            title="View PDF online"
                          >
                            <Eye size={15} /> View
                          </button>
                          <button
                            onClick={() => handleDownload(article.file, article.title)}
                            className="btn-sm btn-sm-download"
                            title="Download PDF to device"
                            disabled={downloading === article.file}
                          >
                            <Download size={15} />
                            {downloading === article.file ? 'Saving...' : 'Download'}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="no-results">
              <Frown size={48} className="no-results-icon" />
              <h3 className="no-results-title">No matching publications found</h3>
              <p>We couldn't find any articles matching "{searchQuery}". Try refining your search query.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
