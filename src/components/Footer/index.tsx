import "./style.css";
import { FaGithub } from "react-icons/fa";
import { BiLogoBlogger } from "react-icons/bi";
import { MdStickyNote2 } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <a href="#" className="logo">
          Port<span>olio.</span>
        </a>
        <p className="text">
          &copy; Copyright © 2024. Ham Younjin. All rights reserved.
        </p>
        <ul className="social-media">
          <li>
            <a href="#" className="social-link">
              <FaGithub color="#fff" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <BiLogoBlogger color="#fff" />
            </a>
          </li>
          <li>
            <a href="#" className="social-link">
              <MdStickyNote2 color="#fff" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
