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
import { useNavigate } from 'react-router-dom';


function Navbars() {
  const navigate = useNavigate();
  const {InputLogin, setInputLogin, InputLoginAdmin, setInputLoginAdmin, navbarProfile, setNavbarProfile} = useContext(DataContext)
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  let appearancePay = false;


  const value = 1
  if ( value !== 1) {
   appearancePay = true
  } else {
    appearancePay = false
  }

  function getData(inputEmail, inputPassword) {
    if (inputEmail === 'customer@gmail.com') {
      if (inputPassword === '1') {
        setNavbarProfile(true)
        setInputLogin(true);
        setShowLoginModal(false);
        navigate('/');
        alert('Login akun customer berhasil');
        inputEmail = '';
        inputPassword = '';
      } else {
        setShowLoginModal(false);
        alert('Password salah');
      }
    } else if (inputEmail === 'admin@gmail.com') {
      if (inputPassword === '1') {
        setNavbarProfile(true);
        setInputLoginAdmin(true);
        setShowLoginModal(false);
        navigate('/TransactionList');
        alert('Login akun admin berhasil');
        inputEmail = '';
        inputPassword = '';
      } else {
        setShowLoginModal(false);
        alert('Password salah');
      }
    } else {
      setShowLoginModal(false);
      alert('Email salah');
    }
  }
  

  function logout () {
    setInputLogin(false);
    setInputLoginAdmin(false);
    setNavbarProfile(false);
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
        {InputLoginAdmin === true ? (
      <div onClick={() => navigate('/TransactionList')} style={{ cursor: 'pointer' }}>
        <img src={FolderImage.Icon} alt="icon" style={{ height: '68px', zIndex: '3' }} />
      </div>
    ) : (
      <div onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        <img src={FolderImage.Icon} alt="icon" style={{ height: '68px', zIndex: '3' }} />
      </div>
    ) }

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav style={{ position: 'absolute', right: '0px' , padding:'0px'}}>

            {navbarProfile ? (
              (InputLogin === true) ? (
                <NavDropdown className='fotoprofil' style={{ backgroundImage: `url(${FolderImage.FotoProfil})`}}>
                  <NavDropdown.Item style={{ backgroundColor: 'white', borderRadius: '5px', padding: '20px 0px 20px'}}>
                    <div onClick={() => navigate('/profile')} style={{ textDecoration: 'none', color: 'black', paddingLeft: '30px', display:'flex', marginBottom: '15px'}}>
                    <div><img src={FolderImage.IconProfile} alt="icon profile" /> </div>
                      <div style={{marginLeft:'20px'}}>Profile</div>
                    </div>
                    
                    {appearancePay ? (
                      <div style={{ display:'flex', padding: '10px 0px 0px 30px', marginBottom: '30px', backgroundColor: 'white' }}>
                        <div onClick={() => navigate('/Payment')} style={{ textDecoration: 'none', color: 'black' }} >
                          <div><img src={FolderImage.Bill} alt="icon pay"/></div>
                          <div style={{marginLeft:'20px'}}>Pay</div>
                        </div>
                      </div>
                    ) : null}

                    <div style={{ padding: '20px 0px 0px 30px', borderTop: '3px solid #A8A8A8', backgroundColor: 'white', display:'flex' }}  onClick={(e) => { e.preventDefault(); logout();}}>
                      <div><img src={FolderImage.Logout} alt="icon logout" /></div>
                      <div style={{marginLeft:'20px'}}>Logout</div>
                    </div>

                    <img src={FolderImage.Triangle} alt="Triangle" style={{ position: 'absolute', top: '-20px', right: '0px' }} />
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (InputLoginAdmin === true) ? (
                <NavDropdown className='fotoprofil' style={{ backgroundImage: `url(${FolderImage.FotoProfil})`}}>
                  <NavDropdown.Item style={{ backgroundColor: 'white', borderRadius: '5px', padding: '20px 0px 20px'}}>
                    <div onClick={() => navigate('/IncomeTrip')} style={{display:'flex', textDecoration: 'none', color: 'black', paddingLeft: '30px', marginBottom: '15px'}}>
                      <div><img src={FolderImage.Trip} alt="icon trip" /></div>
                      <div style={{marginLeft:'20px'}}>Trip</div>
                    </div>
                    <div style={{display:'flex', padding: '20px 0px 0px 30px', borderTop: '3px solid #A8A8A8', backgroundColor: 'white' }} onClick={(e) => {
                      e.preventDefault();
                      logout();
                    }}>
                      <div><img src={FolderImage.Logout} alt="icon logout" /></div>
                      <div style={{marginLeft:'20px'}}>Logout</div>
                    </div>
                    <img src={FolderImage.Triangle} alt="Triangle" style={{ position: 'absolute', top: '-20px', right: '0px' }} />
                  </NavDropdown.Item>
                </NavDropdown>
              ) : null
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