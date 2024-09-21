import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [researchDropdownOpen, setResearchDropdownOpen] = useState(false);
  const [othersDropdownOpen, setOthersDropdownOpen] = useState(false);

  const researchRef = useRef(null);
  const othersRef = useRef(null);

  // Close dropdowns when clicking outside of them
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (researchRef.current && !researchRef.current.contains(event.target)) {
        setResearchDropdownOpen(false);
      }
      if (othersRef.current && !othersRef.current.contains(event.target)) {
        setOthersDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navbar bg-green-600 relative">
      <div className="navbar">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-white outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-green-600 font-semibold outline-none">
            <li><a className="outline-none">Home</a></li>
            <li><a className="outline-none">Education</a></li>
            <li><a className="outline-none">Research Profile & Publications</a></li>
            <li><a className="outline-none">Current Research Projects</a></li>
            <li><a className="outline-none">Current Research Initiatives</a></li>
            <li><a className="outline-none">Academic Projects</a></li>
            <li><a className="outline-none">Peer Review Experience</a></li>
            <li><a className="outline-none">Training & Certification</a></li>
            <li>
              <a onClick={() => setOthersDropdownOpen(!othersDropdownOpen)} className="outline-none">Others</a>
              {othersDropdownOpen && (
                <ul className="p-2">
                  <li><a className="outline-none">Family</a></li>
                  <li><a className="outline-none">Hobbies</a></li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl text-white font-semibold uppercase outline-none">A M Almas Shahriyar Azad</Link>
      </div>

      {/* PC View */}
      <div className="navbar-center hidden lg:flex text-white font-medium">
        <ul className="menu menu-horizontal px-1">
          <li><a className="outline-none">Home</a></li>
          <li><a className="outline-none">Education</a></li>
          <li ref={researchRef} className="relative">
            <div
              role="button"
              onClick={() => setResearchDropdownOpen(!researchDropdownOpen)}
              className="cursor-pointer flex items-center gap-1 outline-none"
            >
              Research
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${researchDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {researchDropdownOpen && (
              <ul className="p-2 w-60 text-green-600 bg-white rounded-md absolute top-full mt-1 z-10 shadow-lg">
                <li><a className="outline-none">Research Profile & Publications</a></li>
                <li><a className="outline-none">Current Research Projects</a></li>
                <li><a className="outline-none">Current Research Initiatives</a></li>
              </ul>
            )}
          </li>
          <li><a className="outline-none">Academic Projects</a></li>
          <li><a className="outline-none">Peer Review Experience</a></li>
          <li><a className="outline-none">Training & Certification</a></li>
          <li ref={othersRef} className="relative">
            <div
              role="button"
              onClick={() => setOthersDropdownOpen(!othersDropdownOpen)}
              className="cursor-pointer flex items-center gap-1 outline-none"
            >
              Others
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform ${othersDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {othersDropdownOpen && (
              <ul className="p-2 text-green-600 bg-white absolute top-full mt-1 z-10 shadow-lg rounded-md">
                <li><div className="outline-none">Family</div></li>
                <li><div className="outline-none">Hobby</div></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
