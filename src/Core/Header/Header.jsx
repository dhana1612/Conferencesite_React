import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  // Function to close the dropdown menu
  const closeDropdown = () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  return (
    <>
      <header className="bg-black">
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-dark w-100">
          <div className="container-fluid">
            <a className="navbar-brand text-white fs-5 ps-4" href="/">
              <img
                src="\images\artboard.png"
                alt="ICCNDS Logo"
                height="58"
                width="130"
                className="me-2"
              />
            </a>
            <button
              className="navbar-toggler me-3"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target=".navbar-collapse"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse d-sm-inline-flex justify-content-end">
              <ul className="navbar-nav fs-5 align-items-start ps-5">
                <li className="nav-item pe-4">
                  <Link
                    className={`nav-link text-white ${location.pathname === "/" ? "active" : ""}`}
                    to="/"
                    onClick={closeDropdown}
                  >
                    Home
                  </Link>
                </li>

                <li className="nav-item dropdown pe-4">
                  <Link
                    className={`nav-link dropdown-toggle text-white ${location.pathname.includes("about") ? "active" : ""}`}
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    About Us
                  </Link>
                  <ul className="dropdown-menu fs-5">
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/about" ? "active" : ""}`}
                        to="/about"
                        onClick={closeDropdown}
                      >
                        About the Conference
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/about/scope" ? "active" : ""}`}
                        to="/about/scope"
                        onClick={closeDropdown}
                      >
                        Scope of Conference
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/about/organizing_Committee" ? "active" : ""}`}
                        to="/about/organizing_Committee"
                        onClick={closeDropdown}
                      >
                        Technical Committee
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/about/editorial_Board" ? "active" : ""}`}
                        to="/about/editorial_Board"
                        onClick={closeDropdown}
                      >
                        Editorial Board
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown pe-4">
                  <Link
                    className={`nav-link dropdown-toggle text-white ${location.pathname.includes("author") ? "active" : ""}`}
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Author's Desk
                  </Link>
                  <ul className="dropdown-menu fs-5">
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/authors/key-dates" ? "active" : ""}`}
                        to="/authors/key-dates"
                        onClick={closeDropdown}
                      >
                        Key Dates
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/authors/registration-details" ? "active" : ""}`}
                        to="/authors/registration-details"
                        onClick={closeDropdown}
                      >
                        Registration Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`dropdown-item ${location.pathname === "/authors/new-paper-submissions" ? "active" : ""}`}
                        to="/authors/new-paper-submissions"
                        onClick={closeDropdown}
                      >
                        New Paper Submission
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item pe-4">
                  <Link
                    className={`nav-link text-white ${location.pathname === "/contact" ? "active" : ""}`}
                    to="/contact"
                    onClick={closeDropdown}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
