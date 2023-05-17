import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/navbar';
import Wallpaper from '../img/wallpaper.png'
import Icon from '../img/icon.png'
import './navbar.css'

function Navbars() {
  return (
    <>
    <img className="imagenavbar" src={Wallpaper} alt='logo'/>
    <Navbar collapseOnSelect expand="lg" style={{padding:'0px'}}>
      <Container>
      <Navbar.Brand href="#home" style={{padding:'0px'}}><img src={Icon} alt="icon" style={{height:'68px'}} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link className="login" href="#deets">Login</Nav.Link>
            <Nav.Link className="register" href="#deets">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navbars;