import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import DataCartTour from './DataCartTour'
import './cardTour.css'

function CardTour() {
  return (
    <Container style={{marginTop:'130px'}}>
       <p style={{textAlign:"center", color:"black", marginBottom:"30px", fontSize:"45px"}}>Group Tour</p>
       <CardGroup style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "auto", gridGap: "40px"}}>
       {DataCartTour.map((item, index) => {
        return (
          <Card key={index} style={{borderRadius:"10px", padding:"10px 35px"}}>
          <div style={{display:'flex', alightItem: 'center', justifyContent:'center' ,position:'relative', padding:'0px'}}>
            <img src={item.Image} alt="destination" />
            <div className='date'>{item.Date}</div>
          </div>
          <div className='destination' style={{fontWeight:'500', fontSize:"20px"}}>{item.Time} {item.Destination}</div>
          <div style={{display:'flex', justifyContent:'space-between'}}>
            <div className='price' style={{color:"#FFAF00", fontWeight:"bold"}}>{item.Price}</div>
            <div style={{color:"#878787"}}>{item.Country}</div>
          </div>
        </Card>
        )
       })}
       </CardGroup>
    </Container>
  )
}

export default CardTour;