import { useOutletContext } from "react-router-dom";
import "./Contact.css";

export default function Contact() {
  const [lightMode] = useOutletContext();

  const red = lightMode ? "#B71C1C" : "#FF1744";

  return (
    <section className="contact-page">

      <div
        className="contact-card"
        style={{
          background: lightMode
            ? "#fff"
            : "rgba(30,32,40,.98)",

          color: lightMode
            ? "#111"
            : "#fff",

          borderColor: lightMode
            ? "#eee"
            : "#333",
        }}
      >

        <h1
          className="contact-title"
          style={{ color: red }}
        >
          Contact Me
        </h1>

        <p
          className="contact-subtitle"
          style={{
            color: lightMode ? "#555" : "#ccc",
          }}
        >
          Feel free to reach out or just connect with me.
        </p>

        <div className="contact-list">

          <div className="contact-item">

            <div
              className="contact-icon"
              style={{
                color: red,
                background: lightMode
                  ? "#fbe9e7"
                  : "#2d2323",
              }}
            >
              📧
            </div>

            <div>

              <h3>Email</h3>

              <a
                href="mailto:amalraj.s251@gmail.com"
                style={{ color: red }}
              >
                amalraj.s251@gmail.com
              </a>

            </div>

          </div>

          <div className="contact-item">

            <div
              className="contact-icon"
              style={{
                color: red,
                background: lightMode
                  ? "#fbe9e7"
                  : "#2d2323",
              }}
            >
              📱
            </div>

            <div>

              <h3>Phone</h3>

              <a
                href="tel:+919745694247"
                style={{ color: red }}
              >
                +91 9745694247
              </a>

            </div>

          </div>

          <div className="contact-item">

            <div
              className="contact-icon"
              style={{
                color: red,
                background: lightMode
                  ? "#fbe9e7"
                  : "#2d2323",
              }}
            >
              📍
            </div>

            <div>

              <h3>Address</h3>

              <p>Kozhikode, Kerala, India</p>

            </div>

          </div>

          <div className="contact-item">

            <div
              className="contact-icon"
              style={{
                color: red,
                background: lightMode
                  ? "#fbe9e7"
                  : "#2d2323",
              }}
            >
              🔗
            </div>

            <div>

              <h3>LinkedIn</h3>

              <a
                href="https://www.linkedin.com/in/amal-raj-praseena-sajeeve-280645251/"
                target="_blank"
                rel="noreferrer"
                style={{ color: red }}
              >
                linkedin.com/in/amal
              </a>

            </div>

          </div>

          <div className="contact-item">

            <div
              className="contact-icon"
              style={{
                color: red,
                background: lightMode
                  ? "#fbe9e7"
                  : "#2d2323",
              }}
            >
              💻
            </div>

            <div>

              <h3>GitHub</h3>

              <a
                href="https://github.com/aamalrxj"
                target="_blank"
                rel="noreferrer"
                style={{ color: red }}
              >
                github.com/aamalrxj
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}