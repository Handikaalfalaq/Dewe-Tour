import { Container, Button, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import './search.css';

function Search() {
  return (
    <Container>
        <Card style={{borderRadius:"10px", padding:"10px 10px", backgroundColor:'transparent', border:'0px'}}>
            <p style={{color:'white', fontSize:'50px', fontWeight:'bold', marginTop:'50px', marginBottom:'0px', height:'78px'}}>Explore</p>
            <p style={{color:'white', fontSize:'40px', fontWeight:'lighter', marginTop:'-20px', marginBottom:'10px',height:'78px'}}>your amazing city together</p>
            <p style={{color:'white', marginTop:'80px', marginBottom:'10px', fontSize:'15px', height:'22px'}}>Find great places to holiday</p>
            <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" aria-label="Search" style={{borderRadius:'5px 0px 0px 5px'}}/>
            <Button style={{backgroundColor:'#FFAF00', fontWeight:'bold', border:'1px solid #FFAF00', borderRadius:'0px 5px 5px 0px'}}>Search</Button>
          </Form>
        </Card>
    </Container>
  )
}

export default Search;