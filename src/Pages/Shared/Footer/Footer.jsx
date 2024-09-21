import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-green-600 text-white items-center p-4">
      <aside className="grid-flow-col items-center font-semibold text-">
        <p>A M Almas Shahriyar Azad-</p>
        <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end font-semibold">
        {/* Email */}
        <a href="mailto:aaaarnab1234@gmail.com" title="Email" rel="noopener noreferrer" className=" hover:underline">
          Email
        </a>
        {/* Google Scholar */}
        <a href="https://scholar.google.com/citations?user=YSeH6mUAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className=" hover:underline">
          Google Scholar
        </a>
        {/* ResearchGate */}
        <a href="https://www.researchgate.net/profile/A-M-Azad" target="_blank" rel="noopener noreferrer" className=" hover:underline">
          ResearchGate
        </a>
        {/* LinkedIn */}
        <a href="https://bd.linkedin.com/in/a-m-almas-shahriyar-azad-csca%E2%84%A2-40559a1b1 " target="_blank" rel="noopener noreferrer" className=" hover:underline">
          LinkedIn
        </a>
        {/* Facebook */}
        <a href="https://www.facebook.com/aristocratic.arnab" target="_blank" rel="noopener noreferrer" className=" hover:underline">
          Facebook
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
