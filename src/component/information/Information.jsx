import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import dataInformation from './dataInformation'
import './information.css'

function Information() {
  return (
    <Container className='Container'>
        {dataInformation.map((item, index) => {
          return (
            <Card key={index} className='cardInformation'>
              <img src={item.Image} alt="logo" />
              <Card.Title className='title'>{item.Title}</Card.Title>
              <Card.Text className='info'>{item.Info}</Card.Text>
            </Card>
          )
        })}
    </Container>
  );
}

export default Information;