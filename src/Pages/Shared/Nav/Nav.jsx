import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar bg-green-600">
      <div className="navbar">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-green-600 font-semibold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Education</a>
            </li>
            <li>
              <a>Research Profile & Publications</a>
            </li>
            <li>
              <a>Current Research Projects</a>
            </li>
            <li>
              <a>Current Research Initiatives</a>
            </li>
            <li>
              <a>Academic Projects</a>
            </li>
            <li>
              <a>Peer Review Experience</a>
            </li>
            <li>
              <a>Training & Certification </a>
            </li>
            <li>
              <a>Others</a>
              <ul className="p-2">
                <li>
                  <a>Family</a>
                </li>
                <li>
                  <a>Hobbies</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl text-white font-semibold">A M Almas Shahriyar Azad</Link>
      </div>
      {/* pc */}
      <div className="navbar-center hidden lg:flex text-white font-semibold">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Education</a>
          </li>
          <li>
            <details>
              <summary>Research</summary>
              <ul className="p-2 text-green-600">
                <li>
                  <a>Research Profile & Publications</a>
                </li>
                <li>
                  <a>Current Research Projects</a>
                </li>
                <li>
                  <a>Current Research Initiatives</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>Academic Projects</a>
          </li>
          <li>
            <a>Peer Review Experience</a>
          </li>
          <li>
            <a>Training & Certification </a>
          </li>
          <li>
            <details>
              <summary>Others</summary>
              <ul className="p-2">
                <li>
                  <a>Family</a>
                </li>
                <li>
                  <a>Hobby</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
