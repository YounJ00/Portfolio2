import "./style.css";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <a href="#" className="logo">
          Port<span>folio.</span>
        </a>
        <div className="links">
          <ul>
            <li>
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link">
                Skills
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link">
                Activity
              </a>
            </li>
          </ul>
          <i className="uil uil-moon toggle-btn"></i>
        </div>
        <div className="hamburger">
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
