import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white p-4 flex flex-col md:flex-row md:justify-between items-center">
      <aside className="text-center md:text-left font-semibold mb-2 md:mb-0">
        <p>A M Almas Shahriyar Azad</p>
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </aside>
      <nav className="flex flex-wrap justify-center md:justify-end gap-4 font-semibold">
        {/* Email */}
        <a href="mailto:aaaarnab1234@gmail.com" title="Email" rel="noopener noreferrer" className="hover:underline">
          Email
        </a>
        {/* Google Scholar */}
        <a href="https://scholar.google.com/citations?user=YSeH6mUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Google Scholar
        </a>
        {/* ResearchGate */}
        <a href="https://www.researchgate.net/profile/A-M-Azad" target="_blank" rel="noopener noreferrer" className="hover:underline">
          ResearchGate
        </a>
        {/* LinkedIn */}
        <a href="https://bd.linkedin.com/in/a-m-almas-shahriyar-azad-csca%E2%84%A2-40559a1b1" target="_blank" rel="noopener noreferrer" className="hover:underline">
          LinkedIn
        </a>
        {/* Facebook */}
        <a href="https://www.facebook.com/aristocratic.arnab" target="_blank" rel="noopener noreferrer" className="hover:underline">
          Facebook
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
