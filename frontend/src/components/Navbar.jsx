import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Cyril Toreña
      </div>

      <ul className="nav-links">
        <li>
          <a href="/">HOME</a>
        </li>

        <li>
          <a href="/about">ABOUT</a>
        </li>

        <li>
          <a href="/skills">SKILLS</a>
        </li>

        <li>
          <a href="/projects">PROJECTS</a>
        </li>

        <li>
          <a href="/education">EDUCATION</a>
        </li>

        <li>
          <a href="/certificates">CERTIFICATES</a>
        </li>

        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </ul>

    </nav>
  );
}

export default Navbar;