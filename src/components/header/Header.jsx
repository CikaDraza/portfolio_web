import React from "react";
import useMediaQuery from "../media_query_hook/useMediaQuery";

export default function Header() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const match = useMediaQuery('(max-width: 700px)');

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

  function handleOpenMenu() {
    setIsOpen(prev => !prev);
  }

  return (
    <>
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

        {
          match &&
          <div className="menu-buttons">
            {
              !isOpen ?
              <button onClick={handleOpenMenu}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 6H20M4 12H20M4 18H20" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              :
              <button onClick={handleOpenMenu}>
                <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" fill="#0F0F0F"/>
                </svg>
              </button>
            }
          </div>
        }

          <div className="owner">
            <a href="#hero">
              <span className="bold-name">Stefan</span>
              <span>Djordjevic</span>
            </a>
          </div>

          <div className="contact-btn">
            <a href="#contact">
              <button className="action--shine">
                  Contact me
              </button>
            </a>
          </div>

        </div>
      </div>
    </header>
    {
      isOpen &&
      <div className="mobile-menu">
        <nav className="nav-bar">
          <ul>
            <li onClick={handleOpenMenu}>
              <a href="#about">ABOUT</a>
            </li>
            <li onClick={handleOpenMenu}>
              <a href="#work">WORK</a>
            </li>
            <li onClick={handleOpenMenu}>
              <a href="#skills">SKILLS</a>
            </li>
            <li onClick={handleOpenMenu}>
              <a href="#testimonials">TESTIMONIALS</a>
            </li>
          </ul>
        </nav>
      </div>
    }
    </>
  );
}
