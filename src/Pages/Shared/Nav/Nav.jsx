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
            <li>
              <Link to="/" className="outline-none">
                Home
              </Link>
            </li>
            <li>
              <Link to="/education" className="outline-none">
                Education
              </Link>
            </li>
            <li>
              <Link to="/research-profile-and-publications" className="outline-none">
                Research Profile & Publications
              </Link>
            </li>
            <li>
              <Link to="/current-research-projects" className="outline-none">
                Current Research Projects
              </Link>
            </li>
            <li>
              <Link to="/current-research-initiatives" className="outline-none">
                Current Research Initiatives
              </Link>
            </li>
            <li>
              <Link to="/achievements" className="outline-none">
                Achievements
              </Link>
            </li>
            <li>
              <Link to="/academic-projects" className="outline-none">
                Academic Projects
              </Link>
            </li>
            <li>
              <Link to="/peer-review-experience" className="outline-none">
                Peer Review Experience
              </Link>
            </li>
            <li>
              <Link to="/training-and-certificates" className="outline-none">
                Training & Certification
              </Link>
            </li>
            <li>
              <a onClick={() => setOthersDropdownOpen(!othersDropdownOpen)} className="outline-none">
                Others
              </a>
              {othersDropdownOpen && (
                <ul className="p-2">
                  <li>
                    <Link to="/family" className="outline-none">
                      Family
                    </Link>
                  </li>
                  <li>
                    <Link to="/hobbies" className="outline-none">
                      Hobbies
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <Link to="/" className="text-xl text-white font-semibold uppercase outline-none">
          A M Almas Shahriyar Azad
        </Link>
      </div>

      {/* PC View */}
      <div className="navbar-center hidden lg:flex text-white font-medium">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="outline-none">Home</Link>
          </li>
          <li>
            <Link to="/education" className="outline-none">Education</Link>
          </li>
          <li ref={researchRef} className="relative">
            <div role="button" onClick={() => setResearchDropdownOpen(!researchDropdownOpen)} className="cursor-pointer flex items-center gap-1 outline-none">
              Research
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${researchDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {researchDropdownOpen && (
              <ul className="p-2 w-60 text-green-600 bg-white rounded-md absolute top-full mt-1 z-10 shadow-lg">
                <li>
                  <Link to="/research-profile-and-publications" className="outline-none">Research Profile & Publications</Link>
                </li>
                <li>
                  <Link to="/current-research-projects" className="outline-none">Current Research Projects</Link>
                </li>
                <li>
                  <Link to="/current-research-initiatives" className="outline-none">Current Research Initiatives</Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/achievements" className="outline-none">Achievements</Link>
          </li>
          <li>
            <Link to="/academic-projects" className="outline-none">Academic Projects</Link>
          </li>
          <li>
            <Link to="/peer-review-experience" className="outline-none">Peer Review Experience</Link>
          </li>
          <li>
            <Link to="/training-and-certificates" className="outline-none">Training & Certification</Link>
          </li>
          <li ref={othersRef} className="relative">
            <div role="button" onClick={() => setOthersDropdownOpen(!othersDropdownOpen)} className="cursor-pointer flex items-center gap-1 outline-none">
              Others
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${othersDropdownOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            {othersDropdownOpen && (
              <ul className="p-2 text-green-600 bg-white absolute top-full mt-1 z-10 shadow-lg rounded-md">
                <li>
                  <Link to="/family" className="outline-none">Family</Link>
                </li>
                <li>
                  <Link to="/hobbies" className="outline-none">Hobby</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
