import React, { useState} from 'react';
import Container from 'react-bootstrap/container';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
    if (inputEmail === 'customer@gmail.com') {
      if (inputPassword === '123') {
        setInputLogin(true);
        setShowLoginModal(false);
        alert('login akun customer berhasil')
        inputEmail = ''
        inputPassword = ''
      } else {
        setShowLoginModal(false);
        alert('password salah')  
      }
    } else {
      setShowLoginModal(false);
      alert('email salah')
    }
  };

  function logout () {
    setInputLogin(false);
  }

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
      <Navbar collapseOnSelect expand="lg" style={{ padding: '0px' }}>
        <Container style={{ position: 'relative' }}>
        <img className="imagenavbar" src={Wallpaper} alt="logo" style={{zIndex:'-1'}}/>
          <Navbar.Brand href="#home" style={{ padding: '0px' }}>
            <img src={FolderImage.Icon} alt="icon" style={{ height: '68px'}} />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ position: 'absolute', right: '0px' }}>

              {InputLogin ? (
                  <NavDropdown className='fotoprofil' style={{ backgroundImage: `url(${FolderImage.FotoProfil})`, backgroundColor:'blue'}}>
                      <NavDropdown.Item style={{backgroundColor:'white', borderRadius:'5px', padding:'20px 0px 20px'}}>
                        <div style={{paddingLeft:'30px', backgroundColor:'white'}} >

                          <img src={FolderImage.IconProfile} alt="icon profile" /> Profile</div>

                        <div style={{padding:'10px 0px 0px 30px', margin:'15px 0px 30px 0px', backgroundColor:'white'}}><img src={FolderImage.Bill} alt="icon profile" />Pay</div>
                        
                        <div style={{padding:'20px 0px 0px 30px', borderTop:'3px solid #A8A8A8', backgroundColor:'white'}} onClick={(e) => {
                          e.preventDefault()
                          logout()
                        }}><img src={FolderImage.Logout} alt="icon profile" />Logout</div>
                        
                        <img src={FolderImage.Triangle} alt="Triangle" style={{position:'absolute', top:'-20px', right:'0px'}}/>
                      </NavDropdown.Item>
                      
                  </NavDropdown>
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
        <FormRegister openLogin={handleOpenLoginModal}/>
      </Modal>
    </>
  );
  
}

export default Navbars;