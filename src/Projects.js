import { useOutletContext } from 'react-router-dom';

export default function ProjectsPage() {
  const [lightMode] = useOutletContext();
  const red = lightMode ? '#B71C1C' : '#FF1744';

  const projects = [
    {
      title: 'Hash Identifier and Decoder',
      stack: 'Python, hashlib, Regex',
      link: '#',
      images: '#',
      bullets: [
        'Implemented detection of common hash formats (e.g., MD5/SHA variants) and optional cracking/lookup to recover plaintext when feasible.',
      ],
    },
    {
      title: 'Python File Integrity Manager',
      stack: 'Python, SHA-256, JSON',
      link: '#',
      images: '#',
      bullets: [
        'Created a baseline-and-verify system that hashes files, detects unauthorized changes, and exports audit-ready reports.',
      ],
    },
    {
      title: 'Website Scraper',
      stack: 'Python, Requests, BeautifulSoup',
      link: '#',
      images: '#',
      bullets: [
        'Developed a robust scraper with pagination, rate limiting, and structured data export for downstream analysis.',
      ],
    },
    {
      title: 'Encrypting Images',
      stack: 'Python, PyCryptodome, PIL',
      link: '#',
      images: '#',
      bullets: [
        'Implemented AES-based image encryption/decryption with secure key handling and format-preserving I/O.',
      ],
    },
    {
      title: 'Key Logger Program',
      stack: 'Python, pynput',
      link: '#',
      images: '#',
      bullets: [
        'Engineered a configurable keystroke logger for lab use with controlled storage, timestamps, and optional stealth modes.',
      ],
    },
  ];

  return (
    <div
      style={{
        color: lightMode ? '#000' : '#fff',
        fontFamily: "'Quicksand', sans-serif",
        padding: '2.5rem 0',
        maxWidth: 800,
        margin: '0 auto',
      }}
    >
      <h1 style={{ color: red, fontSize: '2.3rem', marginBottom: '2rem' }}>
        Projects
      </h1>
      {projects.map((proj) => (
        <div
          key={proj.title}
          style={{
            marginBottom: '2.2rem',
            padding: '1.5rem 1.5rem 1.5rem 1.2rem',
            background: lightMode ? 'rgba(0,0,0,0.03)' : 'rgba(255,255,255,0.04)',
            borderRadius: '1.1em',
            border: `1.5px solid ${lightMode ? '#eee' : '#333'}`,
            boxShadow: lightMode
              ? '0 2px 12px rgba(0,0,0,0.04)'
              : '0 2px 12px rgba(255,255,255,0.03)',
            transition: 'all 0.3s',
          }}
        >
          {/* Title row: Project name left, link right */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.2rem',
            flexWrap: 'wrap',
          }}>
            <h2 style={{ color: red, fontSize: '1.35rem', margin: 0 }}>
              {proj.title}
            </h2>
            {proj.link && proj.link !== '#' && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: red,
                  fontWeight: 600,
                  fontSize: '1rem',
                  textDecoration: 'underline',
                  marginLeft: 'auto',
                  whiteSpace: 'nowrap',
                }}
              >
                Link
              </a>
            )}
          </div>

          {/* Stack below project name */}
          <div
            style={{
              fontSize: '0.98rem',
              color: lightMode ? '#333' : '#ccc',
              fontWeight: 500,
              background: lightMode ? '#fff' : '#222',
              borderRadius: '1em',
              padding: '0.2em 0.9em',
              border: `1px solid ${red}`,
              margin: '0.7rem 0 0.2rem 0',
              display: 'inline-block',
            }}
          >
            {proj.stack}
          </div>

          <ul style={{ margin: '1.1rem 0 0 0', paddingLeft: '1.5rem', lineHeight: 1.7, fontSize: '1.08rem' }}>
            {proj.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>

          {/* View Images link at the end */}
          {proj.images && proj.images !== '#' && (
            <div style={{ marginTop: '1.1rem', display: 'flex', alignItems: 'center' }}>
              <a
                href={proj.images}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `2px solid ${red}`,
                  borderRadius: '2em',
                  padding: '0.45em 1.5em',
                  background: 'transparent',
                  color: red,
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  textDecoration: 'none',
                  transition: 'background 0.2s, color 0.2s, border 0.2s',
                  boxShadow: lightMode
                    ? '0 2px 8px rgba(183,28,28,0.08)'
                    : '0 2px 8px rgba(255,23,68,0.12)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = red;
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = red;
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = red;
                  e.currentTarget.style.borderColor = red;
                }}
                aria-label="View Project Images"
              >
                View Project Images
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
