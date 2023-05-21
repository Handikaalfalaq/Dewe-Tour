import React, { useState, useContext} from 'react';
import Container from 'react-bootstrap/container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/nav';
import Navbar from 'react-bootstrap/navbar';
import FolderImage from '../img/FolderImg';
import './navbar.css';
import Modal from 'react-bootstrap/modal';
import FormLogin from '../formLogin/FormLogin'
import FormRegister from '../formRegister/FormRegister';
import { DataContext } from "../../page/dataContext";
import { Link } from 'react-router-dom';


function Navbars() {
  const {InputLogin, setInputLogin } = useContext(DataContext)
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  let appearancePay = false;

  console.log();
  if ( 0 != null) {
   appearancePay = true
  } else {
    appearancePay = false
  }

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
        <Container style={{width:'1440px', position:'relative', padding: '0px' }}>
        <Link to="/">
            <img src={FolderImage.Icon} alt="icon" style={{ height: '68px', zIndex:'3'}} />
          </Link>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ position: 'absolute', right: '0px' , padding:'0px'}}>

              {InputLogin ? (
                  <NavDropdown className='fotoprofil' style={{ backgroundImage: `url(${FolderImage.FotoProfil})`}}>
                      <NavDropdown.Item style={{ backgroundColor: 'white', borderRadius: '5px', padding: '20px 0px 20px'}}>
                        <Link to="/Profile" style={{ textDecoration: 'none', color: 'black', paddingLeft: '30px', display:'flex', marginBottom: '15px'}}>
                          <img src={FolderImage.IconProfile} alt="icon profile" /> Profile
                        </Link>

                        {appearancePay ? (
                          <div style={{ padding: '10px 0px 0px 30px', marginBottom: '30px', backgroundColor: 'white' }}>
                          <Link to= {`/Payment/`} style={{ textDecoration: 'none', color: 'black' }} >
                            <img src={FolderImage.Bill} alt="icon profile" /> Pay
                          </Link>
                        </div>
                        ): (
                          <div></div>
                        )}

                        <div style={{ padding: '20px 0px 0px 30px', borderTop: '3px solid #A8A8A8', backgroundColor: 'white' }} onClick={(e) => {
                          e.preventDefault()
                          logout()
                        }}>
                          <img src={FolderImage.Logout} alt="icon profile" /> Logout
                        </div>
                        <img src={FolderImage.Triangle} alt="Triangle" style={{ position: 'absolute', top: '-20px', right: '0px' }} />
                      </NavDropdown.Item>
                  </NavDropdown>
              ) : (
                <>
                  <Nav.Link className="login" onClick={handleOpenLoginModal}>
                      Login
                  </Nav.Link>
                  <Nav.Link className="register" onClick={handleOpenRegisterModal}>
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