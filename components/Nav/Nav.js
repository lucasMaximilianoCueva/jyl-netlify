import './Nav.scss';

import { Container, Nav, Navbar } from 'react-bootstrap';
import {useRef, useState} from 'react';

import { HashLink } from 'react-router-hash-link';

export const Navb = () => {

  const navButton = useRef(null);
  const linksContainerRef = useRef(null);

  const [isActive, setIsActive] = useState(false);

  function collapseNav() {
    navButton.current.classList.add("collapsed");
    linksContainerRef.current.classList.remove("show");
    setIsActive(current => !current)
    console.log(isActive + " collapNav")
    setIsActive(false);
  }

  const handleClick = () => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
    console.log(isActive + "handClick")
  };


  return (
    <>
      <Navbar fixed="top" expand="lg">
        <Container className={isActive ? 'bg-menu' : ''}>
          <HashLink className="nav-brand" smooth={true} to="/#main-section">
            {/* <span className="brand-letter">J</span>{' '}
            <span className="brand-letter-1">&</span>
            <span className="brand-letter">L</span> */}
          </HashLink>
          <Navbar.Toggle ref={navButton} onClick={handleClick} aria-controls="basic-navbar-nav"  className='navbar-toggler d-flex d-lg-none flex-column justify-content-around'>
            <span className='toggler-icon top-bar'></span>
            <span className='toggler-icon middle-bar'></span>
            <span className='toggler-icon bottom-bar'></span>
          </Navbar.Toggle>
          <Navbar.Collapse ref={linksContainerRef} id="basic-navbar-nav">
            <Nav className="me-auto">

            <HashLink onClick={collapseNav} className="nav-link" smooth={true} to="/#Bienvenidos!">
                Información
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#ubicacion">
              ¿Cómo llegar?
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#asistencia">
                Asistencia
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#regalo">
                Regalo
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#dress-code">
                Dress Code
              </HashLink>
              <HashLink className="nav-link" smooth={true} to="/#playlist">
                Playlist
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
