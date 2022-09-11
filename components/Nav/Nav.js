import "./Nav.scss";

import { Container, Nav, Navbar } from "react-bootstrap";
import { useRef, useState } from "react";

import { HashLink } from "react-router-hash-link";

export const Navb = () => {
  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <Navbar fixed="top" expand="lg">
        <Container className={isActive ? "bg-menu" : ""}>
          <HashLink className="nav-brand" smooth={true} to="/#main-section">
            {/* <span className="brand-letter">J</span>{' '}
            <span className="brand-letter-1">&</span>
            <span className="brand-letter">L</span> */}
          </HashLink>
          <Navbar.Toggle
            ref={navButton}
            onClick={handleClick}
            aria-controls="basic-navbar-nav"
            className="navbar-toggler d-flex d-lg-none flex-column justify-content-around"
          >
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
          </Navbar.Toggle>
          <Navbar.Collapse ref={linksContainerRef} id="basic-navbar-nav">
            <Nav className="me-auto buttons">
              <div className="container-buttons">
                <HashLink
                  onClick={handleClick}
                  className="nav-link"
                  smooth={true}
                  to="/#Bienvenidos!"
                >
                  <Navbar.Toggle className="nav-link">
                    Información
                  </Navbar.Toggle>
                </HashLink>
              </div>
              <div className="container-buttons">
                <HashLink
                  onClick={handleClick}
                  className="nav-link"
                  smooth={true}
                  to="/#ubicacion"
                >
                  <Navbar.Toggle className="nav-link">
                    ¿Cómo llegar?
                  </Navbar.Toggle>
                </HashLink>
              </div>
              <div className="container-buttons">
                <HashLink
                  onClick={handleClick}
                  className="nav-link"
                  smooth={true}
                  to="/#asistencia"
                >
                  <Navbar.Toggle className="nav-link">Asistencia</Navbar.Toggle>
                </HashLink>
              </div>
              <div className="container-buttons">
                <HashLink
                  onClick={handleClick}
                  className="nav-link"
                  smooth={true}
                  to="/#regalo"
                >
                  <Navbar.Toggle className="nav-link">Regalo</Navbar.Toggle>
                </HashLink>
              </div>
              <div className="container-buttons">
                <HashLink
                  onClick={handleClick}
                  className="nav-link"
                  smooth={true}
                  to="/#dress-code"
                >
                  <Navbar.Toggle className="nav-link">Dress Code</Navbar.Toggle>
                </HashLink>
              </div>
              <div className="container-buttons">
                <HashLink
                  onClick={handleClick}
                  className="nav-link"
                  smooth={true}
                  to="/#playlist"
                >
                  <Navbar.Toggle className="nav-link">Playlist</Navbar.Toggle>
                </HashLink>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
