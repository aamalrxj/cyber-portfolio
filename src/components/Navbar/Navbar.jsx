import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "Credentials", path: "/credentials" },
];

export default function Navbar({ lightMode, setLightMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="navbar-logo">

        <span className="logo">
          &lt;&gt; DEV<span>eloper</span>
        </span>

        <button
          className={`theme-toggle ${lightMode ? "light" : "dark"}`}
          onClick={() => setLightMode(!lightMode)}
        >
          <div className="toggle-circle"></div>
          <span className="moon">🌙</span>
          <span className="sun">☀️</span>
        </button>

      </div>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>

        {navItems.map((item) => (

          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={() => setMenuOpen(false)}
          >
            {item.name}
          </NavLink>

        ))}

      </nav>

    </header>
  );
}