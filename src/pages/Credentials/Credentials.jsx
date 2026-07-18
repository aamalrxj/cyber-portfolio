import { useOutletContext } from "react-router-dom";
import "./Credentials.css";

export default function Credentials() {
  const [lightMode] = useOutletContext();

  const accent = lightMode ? "#B71C1C" : "#FF1744";

  return (
    <section
      className="credentials-page"
      style={{
        color: lightMode ? "#111" : "#fff",
      }}
    >
      {/* Experience */}

      <div className="credential-section">

        <h1
          className="credential-title"
          style={{ color: accent }}
        >
          Experience
        </h1>

        <div className="credential-content">

          <strong>
            Artificial Intelligence & Web Development Intern
          </strong>

          <p>
            Helper Hub India
            <br />
            January 2025 – May 2025
            <br />
            Bengaluru, India
          </p>

          <ul>

            <li>
              Designed and developed a robust web application with integrated CI/CD pipelines, streamlining deployment and maintenance processes.
            </li>

            <li>
              Implemented AI-driven algorithms to intelligently match customers with the most suitable service providers, enhancing user satisfaction.            </li>

            <li>
              Integrated a customer rating system to identify and promote trusted workers, improving overall platform reliability and trust.            </li>

          </ul>

        </div>

      </div>

      <div
        className="credentials-divider"
        style={{
          background: accent,
        }}
      ></div>

      {/* Certifications */}

      <div className="credential-section">

        <h1
          className="credential-title"
          style={{ color: accent }}
        >
          Certifications
        </h1>

        <div className="credential-content">
          <ul>
            <li><strong>Cyber Job Simulation:</strong> Deloitte x Forage — Practical tasks in cybersecurity</li>
            <li><strong>Cybersecurity Job Simulation:</strong> Forage — Phishing simulation design and results interpretation</li>
            <li><strong>Cybersecurity:</strong> Introduction to Cyber Security (Cisco Networking Academy)</li>
            <li>
              <strong>Technical Training:</strong> TCS Youth Employment Program (Tata Consultancy Services)
            </li>
            <li>
              <strong>Python & Data Analytics:</strong> Introduction to Data Science (Cisco Network Academy)
            </li>
            <li>
              <strong>Soft Skills:</strong> Presentation Skills, Communication Skills (TCS ION)
            </li>
          </ul>
        </div>

      </div>

      <div
        className="credentials-divider"
        style={{
          background: accent,
        }}
      ></div>

      {/* Education */}

      <div className="credential-section">

        <h1
          className="credential-title"
          style={{ color: accent }}
        >
          Education
        </h1>

        <div className="credential-content">

          <div className="education-item">

            <strong>
              SRM Institute of Science and Technology
            </strong>

            <p>
              Master of Computer Applications (MCA)
              <br />
              Chennai
              <br />
              2024 – 2026
            </p>

          </div>

          <div className="education-item">

            <strong>
              College of Applied Science, IHRD
            </strong>

            <p>
              Bachelor of Computer Applications (BCA)
              <br />
              Kozhikode
              <br />
              2020 – 2023
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}