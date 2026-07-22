import { Link, useOutletContext } from "react-router-dom";
import TypingText from "../../components/TypingText/TypingText";

import "./Home.css";

export default function Home() {
  const [lightMode] = useOutletContext();

  return (
    <section className="home">

      <TypingText
        text="Hello, I'm Amal"
        speed={80}
        style={{
          color: lightMode ? "#111" : "#fff",
          fontFamily: "'Quicksand', sans-serif",
        }}
      />

      <div className="home-buttons">

        <div className="button-row">

          <Link
            to="/about"
            className={`home-btn ${lightMode ? "light" : "dark"}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 12c2.7 0 5-2.3 5-5s-2.3-5-5-5-5 2.3-5 5 2.3 5 5 5zm0 2c-3.3 0-10 1.7-10 5v3h20v-3c0-3.3-6.7-5-10-5z"
                fill="currentColor"
              />
            </svg>

            About Me

          </Link>

          <a
            href="https://drive.google.com/file/d/132vOVYe-ma0vna-uae83Zq9K87mYQrrP/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className={`home-btn ${lightMode ? "light" : "dark"}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path
                d="M8 5V19L19 12L8 5Z"
                fill="currentColor"
              />
            </svg>

            View Resume

          </a>

        </div>

        <Link
          to="/contact"
          className={`home-btn full ${lightMode ? "light" : "dark"}`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24">

            <path
              d="M21 8V7l-3 2-2-1-7 5-3-2v1l8 5 8-5z"
              fill="currentColor"
            />

          </svg>

          Contact Me

        </Link>

      </div>

    </section>
  );
}