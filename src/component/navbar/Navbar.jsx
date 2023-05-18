import React, { useState } from 'react';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/nav';
import Navbar from 'react-bootstrap/navbar';
import Wallpaper from '../img/wallpaper.png';
import Icon from '../img/icon.png';
import './navbar.css';
import Modal from 'react-bootstrap/modal';
import FormLogin from '../formLogin/FormLogin'
import FormRegister from '../formRegister/FormRegister';

function Navbars() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleCloseRegisterModal = () => {
    setShowRegisterModal(false);
  };


  return (
    <>
      <img className="imagenavbar" src={Wallpaper} alt="logo" />
      <Navbar collapseOnSelect expand="lg" style={{ padding: '0px' }}>
        <Container style={{ position: 'relative' }}>
          <Navbar.Brand href="#home" style={{ padding: '0px' }}>
            <img src={Icon} alt="icon" style={{ height: '68px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ position: 'absolute', right: '0px' }}>
              <Nav.Link className="login" onClick={handleOpenLoginModal}>
                Login
              </Nav.Link>
              <Nav.Link className="register" onClick={handleOpenRegisterModal}>
                Register
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <FormLogin />
      </Modal>

      <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
        <FormRegister />
      </Modal>
    </>
  );
}

export default Navbars;


// import FolderImage from '../img/FolderImg';
// import FormLogin from '../formLogin/FormLogin'