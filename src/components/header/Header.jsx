import React from "react";
import "./Header.scss";

export default function Header() {
  const [isVisible, setIsVisible] = React.useState(false);

  function toggleVisibility() {
    const visbleBtn = window.scrollY;
    visbleBtn > 100 ? setIsVisible(() => true) : setIsVisible(() => false);
  }

  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <header>
      <div className="container">
        <div className={isVisible ? "header-wrapper scroll-down" : "header-wrapper"}>

          <nav className="nav-bar">
            <ul>
              <li>
                <a href="#about">ABOUT</a>
              </li>
              <li>
                <a href="#work">WORK</a>
              </li>
              <li>
                <a href="#skills">SKILLS</a>
              </li>
              <li>
                <a href="#testimonials">TESTIMONIALS</a>
              </li>
            </ul>
          </nav>

          <div className="owner">
            <div>
              <span className="bold-name">Stefan</span>
              <span>Djordjevic</span>
            </div>
          </div>

          <div className="contact-btn">
            <button id="#contact" className="action--shine">Contact Me</button>
          </div>

        </div>
      </div>
    </header>
  );
}
