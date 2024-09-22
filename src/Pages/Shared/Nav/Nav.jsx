import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
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
          <div className="flex-1 text-white">
            <Link to="/home" className=" text-xl font-bold">
              A M Almas Shahriyar Azad
            </Link>
          </div>

          {/* Horizontal Menu for larger screens */}
          <div className="flex-none hidden lg:block text-white">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li tabIndex={0}>
                <details>
                  <summary>Research</summary>
                  <ul className="p-2 bg-base-100 shadow-lg text-black">
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
      </div>

      {/* Drawer Sidebar for Mobile */}
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 h-full bg-base-100 text-lg text-green-600">
          <li>
            <Link to="/home">Home</Link>
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
