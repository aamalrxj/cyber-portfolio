import TypingText from './TypingText';
import { useOutletContext, Link } from 'react-router-dom';

export default function HomePage() {
  const [lightMode] = useOutletContext();

  // Button style for reuse
  const buttonBase = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.8rem',
    background: 'transparent',
    borderRadius: '2em',
    padding: '0.8em 1.8em',
    fontSize: '1.1rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    zIndex: 10,
    position: 'relative',
    fontFamily: "'Quicksand', sans-serif",
    border: `2px solid ${lightMode ? '#111' : '#fff'}`,
    color: lightMode ? '#111' : '#fff',
  };

  // Hover handlers for all buttons
  const handleHover = (e) => {
    e.currentTarget.style.background = '#B71C1C';
    e.currentTarget.style.borderColor = '#B71C1C';
    e.currentTarget.style.color = '#fff';
  };
  const handleLeave = (e) => {
    e.currentTarget.style.background = 'transparent';
    e.currentTarget.style.borderColor = lightMode ? '#111' : '#fff';
    e.currentTarget.style.color = lightMode ? '#111' : '#fff';
  };

  return (
    <>
      <TypingText
        text="Hello, I'm Amal"
        speed={80}
        style={{
          color: lightMode ? '#000' : '#fff',
          transition: 'color 0.3s',
          fontFamily: "'Quicksand', sans-serif",
        }}
      />

      {/* Action buttons section */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginTop: '2.5rem',
        gap: '1.1rem',
      }}>
        {/* Top row: About Me and View Resume */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1.1rem',
        }}>
          <Link
            to="/about"
            style={buttonBase}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z" fill="currentColor"/>
            </svg>
            About Me
          </Link>
          <a
            href="https://drive.google.com/file/d/1h5wc0cGHJM7MxfSSjULVxsFYmIcCa81B/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonBase}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
            </svg>
            View Resume
          </a>
        </div>
        {/* Bottom row: Contact Me */}
        <Link
          to="/contact"
          style={{
            ...buttonBase,
            width: '100%',
            justifyContent: 'center',
          }}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M21 8V7l-3 2-2-1-7 5-3-2v1l8 5 8-5z" fill="currentColor" />
          </svg>
          Contact Me
        </Link>
      </div>
    </>
  );
}
