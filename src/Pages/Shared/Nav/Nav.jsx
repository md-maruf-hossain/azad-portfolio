import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <div className="navbar font-semibold bg-green-600">
          {/* Hamburger Icon for Mobile */}
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </label>
          </div>

          {/* Brand Name */}
          <div className="flex-1 text-white p-5">
            <Link to="/" className="text-xl font-bold">
              A M Almas Shahriyar Azad
            </Link>
          </div>

          {/* Horizontal Menu for larger screens */}
          <div className="flex-none hidden lg:block text-white">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li ref={dropdownRef} onClick={() => setDropdownOpen(!dropdownOpen)} className="relative">
                <span className="cursor-pointer">
                  Research{" "}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                {dropdownOpen && (
                  <ul className="absolute left-0 top-full mt-2 bg--600 shadow-lg p-2">
                    <li>
                      <Link to="/research-profile-and-publications">Research Profile & Publications</Link>
                    </li>
                    <li>
                      <Link to="/current-research-initiatives">Current Research Initiatives</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/achievements">Achievements</Link>
              </li>
              <li>
                <Link to="/academic-projects">Academic Projects</Link>
              </li>
              <li>
                <Link to="/peer-review-experience">Peer Review Experience</Link>
              </li>
              <li>
                <Link to="/others">Others</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Drawer Sidebar for Mobile */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full bg-base-100 text-lg text-green-600">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/education">Education</Link>
          </li>
          <li>
            <details close>
              <summary>Research</summary>
              <ul className="p-2">
                <li>
                  <Link to="/research-profile-and-publications">Research Profile & Publications</Link>
                </li>
                <li>
                  <Link to="/current-research-initiatives">Current Research Initiatives</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to="/achievements">Achievements</Link>
          </li>
          <li>
            <Link to="/academic-projects">Academic Projects</Link>
          </li>
          <li>
            <Link to="/peer-review-experience">Peer Review Experience</Link>
          </li>
          <li>
            <Link to="/others">Others</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
