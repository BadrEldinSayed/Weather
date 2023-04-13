import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from '../Images/logo.png';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-4">
        <div className="container">
          <Link className="navbar-brand" to='/'>
            <div className="d-flex align-items-center">
              <img
                src={Logo}
                alt="logo"
              />
              <div className="d-flex flex-column">
                <span className="logo-spa"> Weather</span>
                <span className="logo-par">tagline goes here</span>
              </div>{" "}
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item px-4">
                <NavLink className="nav-link" aria-current="page"  to='/'>
                  Home
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink className="nav-link" aria-current='page'  to='/news'>
                  News
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink className="nav-link" aria-current='page'  to='/live-cameras'>
                  Live Cameras
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink className="nav-link" aria-current='page'  to='/photos'>
                  Photos
                </NavLink>
              </li>
              <li className="nav-item px-4">
                <NavLink className="nav-link" aria-current='page'  to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
