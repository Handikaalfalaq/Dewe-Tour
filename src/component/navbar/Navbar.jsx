import React, { useState } from 'react';
import Container from 'react-bootstrap/container';
import Nav from 'react-bootstrap/nav';
import Navbar from 'react-bootstrap/navbar';
import Wallpaper from '../img/wallpaper.png';
import FolderImage from '../img/FolderImg';
import './navbar.css';
import Modal from 'react-bootstrap/modal';
import FormLogin from '../formLogin/FormLogin'
import FormRegister from '../formRegister/FormRegister';

function Navbars() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [InputLogin, setInputLogin] = useState(false);

  function getData (inputEmail,inputPassword) {
    if (inputEmail === 'customer@gmail.com' && inputPassword === '123') {
      setInputLogin(true);
      setShowLoginModal(false);
    } else {
      console.log('aing maung macan')
    }
  };

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
    setShowRegisterModal(false);
  };

  const handleOpenRegisterModal = () => {
    setShowRegisterModal(true);
    setShowLoginModal(false);
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
            <img src={FolderImage.Icon} alt="icon" style={{ height: '68px' }} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ position: 'absolute', right: '0px' }}>

              {InputLogin ? (
                  <Nav.Link style={{ backgroundImage: `url(${FolderImage.FotoProfil})`, backgroundSize: 'cover', height: '50px', width: '50px', borderRadius: '100%', border: '2px solid #FFAF00' }} className="register"></Nav.Link>
              ) : (
                <>
                  <Nav.Link style={{ color: 'white' }} className="login" onClick={handleOpenLoginModal}>
                      Login
                  </Nav.Link>
                  <Nav.Link style={{ color: 'white' }} className="register" onClick={handleOpenRegisterModal}>
                      Register
                  </Nav.Link>
                </>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  
      <Modal show={showLoginModal} onHide={handleCloseLoginModal}>
        <FormLogin getDatas={getData} openRegister={handleOpenRegisterModal} />
      </Modal>
  
      <Modal show={showRegisterModal} onHide={handleCloseRegisterModal}>
        <FormRegister />
      </Modal>
    </>
  );
  
}

export default Navbars;