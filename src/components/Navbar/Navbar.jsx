import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/gallery", label: "Gallery" },
  { to: "/class", label: "Class" },
  { to: "/awards", label: "Awards" },
  { to: "/tips", label: "Tips" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogoClick = () => {
    setIsOpen(false);          
    window.location.href = "/"; 
  };

  return (
    <>
      <nav>
        <div className="container">
          <h1 onClick={handleLogoClick} style={{ cursor: "pointer" }}>
            My College Life
          </h1>

          <ul>
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            className={`hamburger ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <ul>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) => (isActive ? "active" : "")}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            zIndex: 998,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}