import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const toggleMode = () => {
  return localStorage.getItem("darkMode") || "light";
};

function Navbar() {
  const { title } = useParams();
  const [theme, setTheme] = useState(() => toggleMode());

  const handleThemeToggle = (e) => {
    e.preventDefault();
    const newTheme = theme === "dark-mode" ? "light" : "dark-mode";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(theme);
    localStorage.setItem("darkMode", theme);
  }, [theme]);

  return (
    <header className="header">
      <div className="header-container container">
        {title ? (
          <Link className="header-logo" to="/">
            <figure>
              <img
                src={`../assets/icon-${title.toLowerCase()}.svg`}
                alt="icon"
              />
            </figure>
            <span>{title}</span>
          </Link>
        ) : (
          <span></span>
        )}

        {/* NAVBAR TOGGLE */}
        <div>
          <label
            htmlFor="dark"
            className="dark-btn"
            onClick={handleThemeToggle}
          >
            <input
              type="checkbox"
              id="dark"
              checked={theme === "dark-mode"}
              readOnly
            />
            <span>
              <span></span>
              <span></span>
            </span>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
