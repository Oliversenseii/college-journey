import { useState, useEffect, useRef } from "react";
import { tipYears } from "./TipsData";
import "./Tips.css";
import { FiMenu, FiX } from "react-icons/fi";

export default function Tips() {
  const [activeYear, setActiveYear] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [activeYear]);

  const handleTabClick = (e, yearId) => {
    e.preventDefault();
    setActiveYear(yearId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="newspaper-header">
        <h1>College Survival Kit</h1>
        <p>Tips • Strategies • Real Talk</p>
      </header>

      <div className="grades-container">
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle tip sections"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
          <span>Tip Sections</span>
        </button>

        <div className={`tabs ${mobileMenuOpen ? "open" : ""}`}>
          <h2>Sections</h2>
          <ul className="tab-list">
            {tipYears.map((year) => (
              <li key={year.id} className="tab-item">
                <a
                  href="#"
                  className={`tab-link ${activeYear === year.id ? "active" : ""}`}
                  onClick={(e) => handleTabClick(e, year.id)}
                >
                  {year.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="content" ref={contentRef}>
          {tipYears
            .filter((y) => y.id === activeYear)
            .map((year) => (
              <div key={year.id} className="year-content">
                {year.content}
              </div>
            ))}
        </div>
      </div>
    </>
  );
}