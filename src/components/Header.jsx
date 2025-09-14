import React, { useState } from "react";
import logo from "../assets/Logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="header-blur border-bottom border-2 border-primary fixed-top">
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <a
            className="navbar-brand fw-bold text-primary fs-4 d-flex align-items-center gap-2"
            href="#"
          >
            <img src={logo} alt="Logo" height={70} width={70} />
          </a>

          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="bi bi-list text-primary fs-3"></i>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          >
            <ul className="navbar-nav ms-auto gap-3">
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-decoration-none fw-medium"
                  onClick={() => scrollToSection("home")}
                >
                  Home
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-decoration-none fw-medium"
                  onClick={() => scrollToSection("sobre-nos")}
                >
                  Sobre Nós
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-decoration-none fw-medium"
                  onClick={() => scrollToSection("produtos")}
                >
                  Produtos
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link btn btn-link text-decoration-none fw-medium"
                  onClick={() => scrollToSection("contato")}
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
