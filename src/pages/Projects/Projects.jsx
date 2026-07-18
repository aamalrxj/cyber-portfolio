import { useOutletContext } from "react-router-dom";
import "./Projects.css";

export default function Projects() {
  const [lightMode] = useOutletContext();

  const red = lightMode ? "#B71C1C" : "#FF1744";

  const projects = [
 {
      title: 'Hash Identifier and Decoder',
      stack: 'Python, hashlib, Regex',
      link: 'https://github.com/aamalrxj/Password-Encrypt',
      images: 'https://drive.google.com/file/d/1vnUs4vLRmY2TrqVtmkfG6gBx76XK9jQB/view?usp=sharing',
      bullets: [
        'Implemented detection of common hash formats (e.g., MD5/SHA variants) and optional cracking/lookup to recover plaintext when feasible.',
      ],
    },
    {
      title: 'Python File Integrity Manager',
      stack: 'Python, SHA-256, JSON',
      link: 'https://github.com/aamalrxj/File-Integrity-Monitor',
      images: 'https://drive.google.com/file/d/1vnUs4vLRmY2TrqVtmkfG6gBx76XK9jQB/view?usp=sharing',
      bullets: [
        'Created a baseline-and-verify system that hashes files, detects unauthorized changes, and exports audit-ready reports.',
      ],
    },
    {
      title: 'Website Scraper',
      stack: 'Python, Requests, BeautifulSoup',
      link: 'https://github.com/aamalrxj/Web_Scrapper',
      images: 'https://drive.google.com/file/d/1vnUs4vLRmY2TrqVtmkfG6gBx76XK9jQB/view?usp=sharing',
      bullets: [
        'Developed a robust scraper with pagination, rate limiting, and structured data export for downstream analysis.',
      ],
    },
    {
      title: 'Encrypting Images',
      stack: 'Python, PyCryptodome, PIL',
      link: 'https://github.com/aamalrxj/Image-Decypher',
      images: 'https://drive.google.com/drive/folders/1T_6ETLCyQG1Yo65gt035QVWviEv_lz13?usp=drive_link',
      bullets: [
        'Implemented AES-based image encryption/decryption with secure key handling and format-preserving I/O.',
      ],
    },
    {
      title: 'Key Logger Program',
      stack: 'Python, pynput',
      link: 'https://github.com/aamalrxj/Key-Loggers',
      images: 'https://drive.google.com/drive/folders/1T_6ETLCyQG1Yo65gt035QVWviEv_lz13?usp=drive_link',
      bullets: [
        'Engineered a configurable keystroke logger for lab use with controlled storage, timestamps, and optional stealth modes.',
      ],
    },
  ];
    return (
    <section
      className="projects-page"
      style={{
        color: lightMode ? "#111" : "#fff",
      }}
    >
      <h1
        className="projects-title"
        style={{ color: red }}
      >
        Projects
      </h1>

      <div className="projects-container">

        {projects.map((project) => (

          <article
            key={project.title}
            className="project-card"
            style={{
              background: lightMode
                ? "rgba(0,0,0,.03)"
                : "rgba(255,255,255,.04)",

              borderColor: lightMode
                ? "#eee"
                : "#333",
            }}
          >

            <div className="project-header">

              <h2
                className="project-name"
                style={{ color: red }}
              >
                {project.title}
              </h2>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="github-link"
                style={{ color: red }}
              >
                GitHub
              </a>

            </div>

            <div
              className="project-stack"
              style={{
                color: lightMode ? "#222" : "#ddd",
                borderColor: red,
                background: lightMode ? "#fff" : "#222",
              }}
            >
              {project.stack}
            </div>

            <ul className="project-list">

              {project.bullets.map((bullet, index) => (

                <li key={index}>
                  {bullet}
                </li>

              ))}

            </ul>

            <a
              href={project.images}
              target="_blank"
              rel="noreferrer"
              className="image-btn"
              style={{
                color: red,
                borderColor: red,
              }}
            >
              View Project Images
            </a>

          </article>

        ))}

      </div>

    </section>
  );
}