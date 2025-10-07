import { useOutletContext } from 'react-router-dom';

export default function ContactPage() {
  const [lightMode] = useOutletContext();
  const red = lightMode ? '#B71C1C' : '#FF1744';
  const cardBg = lightMode ? '#fff' : 'rgba(30,32,40,0.98)';
  const cardShadow = lightMode
    ? '0 4px 24px rgba(183,28,28,0.07)'
    : '0 4px 24px rgba(255,23,68,0.10)';
  const textColor = lightMode ? '#000' : '#fff';
  const subText = lightMode ? '#333' : '#ccc';

  return (
    <div
      style={{
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        background: 'transparent',
        padding: '3.5rem 0',
        fontFamily: "'Quicksand', 'Patua One', 'Bellota Text', sans-serif",
      }}
    >
      <div
        style={{
          background: cardBg,
          boxShadow: cardShadow,
          borderRadius: '1.2em',
          padding: '2.8rem 2.5rem 2.5rem 2.5rem',
          minWidth: 350,
          maxWidth: 500,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          border: `1.5px solid ${lightMode ? '#eee' : '#333'}`,
        }}
      >
        <h1 style={{
          fontSize: '2.3rem',
          marginBottom: '1.1rem',
          color: red,
          fontFamily: "'Patua One', 'Quicksand', sans-serif",
          letterSpacing: '1px',
        }}>
          Contact Me
        </h1>
        <p style={{
          fontSize: '1.13rem',
          lineHeight: 1.7,
          color: subText,
          marginBottom: '2.2rem',
        }}>
          Feel free to reach out or just to connect!
        </p>
        <div style={{ width: '100%' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.1rem',
            marginBottom: '1.2rem',
          }}>
            <span style={{
              fontSize: '1.3rem',
              color: red,
              background: lightMode ? '#fbe9e7' : '#2d2323',
              borderRadius: '50%',
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>📧</span>
            <div>
              <div style={{ fontWeight: 600, color: textColor }}>Email</div>
              <a
                href="mailto:amalraj.s251@gmail.com"
                style={{
                  color: red,
                  textDecoration: 'underline',
                  fontWeight: 500,
                  fontSize: '1.08rem',
                }}
              >
                amalraj.s251@gmail.com
              </a>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.1rem',
            marginBottom: '1.2rem',
          }}>
            <span style={{
              fontSize: '1.3rem',
              color: red,
              background: lightMode ? '#fbe9e7' : '#2d2323',
              borderRadius: '50%',
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>📱</span>
            <div>
              <div style={{ fontWeight: 600, color: textColor }}>Phone</div>
              <a
                href="tel:+9745694247"
                style={{
                  color: red,
                  textDecoration: 'underline',
                  fontWeight: 500,
                  fontSize: '1.08rem',
                }}
              >
                +91-9745694247
              </a>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.1rem',
            marginBottom: '1.2rem',
          }}>
            <span style={{
              fontSize: '1.3rem',
              color: red,
              background: lightMode ? '#fbe9e7' : '#2d2323',
              borderRadius: '50%',
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>📍</span>
            <div>
              <div style={{ fontWeight: 600, color: textColor }}>Address</div>
              <div style={{
                color: subText,
                fontSize: '1.06rem',
                fontWeight: 500,
              }}>
                Kozhikode, Kerala, India
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.1rem',
            marginBottom: '1.2rem',
          }}>
            <span style={{
              fontSize: '1.3rem',
              color: red,
              background: lightMode ? '#fbe9e7' : '#2d2323',
              borderRadius: '50%',
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>🔗</span>
            <div>
              <div style={{ fontWeight: 600, color: textColor }}>LinkedIn</div>
              <a
                href="https://www.linkedin.com/in/amal-raj-praseena-sajeeve-280645251/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: red,
                  textDecoration: 'underline',
                  fontWeight: 500,
                  fontSize: '1.08rem',
                }}
              >
                linkedin.com/in/Amal
              </a>
            </div>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.1rem',
            marginBottom: '0.2rem',
          }}>
            <span style={{
              fontSize: '1.3rem',
              color: red,
              background: lightMode ? '#fbe9e7' : '#2d2323',
              borderRadius: '50%',
              width: 38,
              height: 38,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>💻</span>
            <div>
              <div style={{ fontWeight: 600, color: textColor }}>GitHub</div>
              <a
                href="https://github.com/aamalrxj"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: red,
                  textDecoration: 'underline',
                  fontWeight: 500,
                  fontSize: '1.08rem',
                }}
              >
                github.com/Amal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
