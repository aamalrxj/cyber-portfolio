import { useOutletContext } from 'react-router-dom';

export default function CredentialsPage() {
  const [lightMode] = useOutletContext();

  // Accent color for headings and dividers
  const accentColor = lightMode ? '#B71C1C' : '#FF1744';

  return (
    <div
      style={{
        minHeight: '100vh',
        color: lightMode ? '#000' : '#fff',
        fontFamily: "'Quicksand', 'Patua One', 'Bellota Text', 'Merienda', 'Alumni Sans SC', 'Gruppo', sans-serif",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'color 0.3s',
        background: 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          width: '95%',
          maxWidth: 1500,
          justifyContent: 'center',
        }}
      >
        {/* Experience Section */}
        <div style={{ flex: 1, textAlign: 'center', padding: '0 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{
            fontSize: '2.2rem',
            marginBottom: '1.2rem',
            color: accentColor,
            fontFamily: "'Patua One', 'Quicksand', sans-serif",
            letterSpacing: '1px',
          }}>
            Experience
          </h1>
          <div style={{ fontSize: '1.09rem', lineHeight: 1.7 }}>
            <strong>Artificial Intelligence and Web Development Intern</strong><br />
            Helper Hub India<br />
            January 2025– May 2025<br />
            Bengaluru, India
            <ul style={{
              marginTop: '1rem',
              paddingLeft: '1.3rem',
              textAlign: 'left',
              display: 'inline-block',
              fontFamily: "'Quicksand', sans-serif"
            }}>
              <li>Designed and developed a robust web application with integrated CI/CD pipelines, streamlining deployment and maintenance processes.</li>
              <li>Implemented AI-driven algorithms to intelligently match customers with the most suitable service providers, enhancing user satisfaction.</li>
              <li>Integrated a customer rating system to identify and promote trusted workers, improving overall platform reliability and trust.</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '3.5px',
            height: '480px',
            background: accentColor,
            borderRadius: '2px',
            margin: '0 1.7rem',
            alignSelf: 'center',
            transition: 'background 0.3s',
          }}
        />

        {/* Certifications Section (Updated) */}
        <div style={{ flex: 1, textAlign: 'center', padding: '0 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{
            fontSize: '2.2rem',
            marginBottom: '1.2rem',
            color: accentColor,
            fontFamily: "'Patua One', 'Quicksand', sans-serif",
            letterSpacing: '1px',
          }}>
            Certifications
          </h1>
          <ul style={{
            fontSize: '1.09rem',
            lineHeight: 1.7,
            paddingLeft: '1.3rem',
            textAlign: 'left',
            display: 'inline-block',
            fontFamily: "'Quicksand', sans-serif"
          }}>
            <li><strong>Cyber Job Simulation:</strong> Deloitte x Forage — Practical tasks in cybersecurity</li>
            <li><strong>Cybersecurity Job Simulation:</strong> Forage — Phishing simulation design and results interpretation</li>
            <li><strong>Cybersecurity:</strong> Introduction to Cyber Security (Cisco Networking Academy)</li>
            <li><strong>Technical Training:</strong> TCS Youth Employment Program (Tata Consultancy Services)</li>
          </ul>
        </div>

        {/* Divider */}
        <div
          style={{
            width: '3.5px',
            height: '480px',
            background: accentColor,
            borderRadius: '2px',
            margin: '0 1.7rem',
            alignSelf: 'center',
            transition: 'background 0.3s',
          }}
        />

        {/* Education Section */}
        <div style={{ flex: 1, textAlign: 'center', padding: '0 2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{
            fontSize: '2.2rem',
            marginBottom: '1.2rem',
            color: accentColor,
            fontFamily: "'Patua One', 'Quicksand', sans-serif",
            letterSpacing: '1px',
          }}>
            Education
          </h1>
          <div style={{
            fontSize: '1.09rem',
            lineHeight: 1.7,
            textAlign: 'left',
            display: 'inline-block',
            fontFamily: "'Quicksand', sans-serif"
          }}>
            <div style={{ marginBottom: '1.1rem' }}>
              <strong>SRM Institute of Science and Technology</strong><br />
              Master of Computer Applications (MCA)<br />
              Chennai, India<br />
              2024 – Present
            </div>
            <div>
              <strong>College of Applied Science, IHRD</strong><br />
              Bachelor of Computer Applications (BCA)<br />
              Kozhikode, India<br />
              2020 – 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
