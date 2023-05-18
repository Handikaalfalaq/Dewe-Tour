import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FolderImage from '../img/FolderImg';

function FormLogin() {
  return (
    <Form style={{width:'500px', backgroundColor:'white' , height:'516px', overflow:'hidden' ,fontWeight:'bold', padding:'0px 33px', position:'relative', borderRadius:'10px'}}>
        <img src={FolderImage.Palm} alt="palm" style={{position:'absolute', left:'0px'}}/>
        <img src={FolderImage.Hibiscus} alt="hibiscus" style={{position:'absolute', right:'0px'}}/>
        <p style={{margin:'51px 0px 75px 0px', textAlign:'center', fontSize:'36px'}}>Login</p>
        <Form.Group controlId="formBasicEmail" style={{marginBottom:'35px'}}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Enter Email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" style={{marginBottom:'35px'}}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
        <Button variant="primary" type="submit" style={{backgroundColor:'#FFAF00', border:'0px', width:'100%', marginBottom:'10px'}}>Register</Button>

        <div style={{textAlign:'center'}}>Don't have an account ? klik
            <button style={{border:'0px', backgroundColor:'transparent'}}>Here</button>
        </div>
    </Form>
  );
}

export default FormLogin;