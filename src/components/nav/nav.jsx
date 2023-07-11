import { useEffect, useRef, useState } from "react";
import "./nav.css";
import useMediaQuery from "../../Hooks/useMediaQuery";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

const Nav = () => {
  const [isNavOpen, setNavOpen] = useState(false);
  const headerRef = useRef(null);

  const isNonMobile = useMediaQuery("(min-width : 800px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        headerRef.current.classList.add("scrolled");
      } else {
        headerRef.current.classList.remove("scrolled");
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isNonMobile ? (
        <header ref={headerRef} className="header">
          <div>
            <img src="/src/assets/logo.png" alt="company logo" />
            <div className="nav-headings">
              <h3 className="nav-heading nav-heading-1">losangeles</h3>
              <h3 className="nav-heading nav-heading-2">mountains</h3>
            </div>
          </div>
          <nav className="nav">
            <a href="#history">
              <i>01. HISTORY</i>
            </a>
            <a href="#climb">
              <i>02. CLIMB</i>
            </a>
          </nav>
        </header>
      ) : (
        <>
          {!isNavOpen ? (
            <MenuIcon
              className="menu-icon-open"
              onClick={() => setNavOpen(!isNavOpen)}
              fontSize="large"
            />
          ) : (
            <CloseIcon
              className="menu-icon-open"
              onClick={() => setNavOpen(!isNavOpen)}
              fontSize="large"
            />
          )}

          {isNavOpen && (
            <header className="mobile-header">
              <nav className="mobile-nav">
                <a onClick={() => setNavOpen(!isNavOpen)} href="#history">
                  <i>01. HISTORY</i>
                </a>
                <a onClick={() => setNavOpen(!isNavOpen)} href="#climb">
                  <i>02. CLIMB</i>
                </a>
              </nav>
            </header>
          )}
        </>
      )}
    </>
  );
};

export default Nav;
