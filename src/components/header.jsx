import { useState, useEffect } from "react";
import { Menu, X, Search, Heart } from "lucide-react";

export default function Header({ onDonateClick }) {
  const [isNavActive, setIsNavActive] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  return (
    <header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
      <div className="container">
        <h1>
          <a href="#" className="logo">
            Wildvine
          </a>
        </h1>

        <select name="language" className="lang-switch">
          <option value="english">English</option>
          <option value="french">French</option>
          <option value="spanish">Spanish</option>
        </select>

        <button
          className="nav-open-btn"
          aria-label="Open Menu"
          onClick={toggleNav}
        >
          <Menu />
        </button>

        <nav className={`navbar ${isNavActive ? "active" : ""}`} data-navbar>
          <button
            className="nav-close-btn"
            aria-label="Close Menu"
            onClick={toggleNav}
          >
            <X />
          </button>

          <a href="#" className="logo">
            Wildvine
          </a>

          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link" onClick={toggleNav}>
                <span>Home</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#about" className="navbar-link" onClick={toggleNav}>
                <span>About</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#service" className="navbar-link" onClick={toggleNav}>
                <span>Service</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#donate" className="navbar-link" onClick={toggleNav}>
                <span>Donate</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#event" className="navbar-link" onClick={toggleNav}>
                <span>Event</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-action">
          <button className="search-btn" aria-label="Search">
            <Search />
          </button>

          <button className="btn btn-primary" onClick={onDonateClick}>
            <span>Donation</span>
            <Heart />
          </button>
        </div>
      </div>
    </header>
  );
}
