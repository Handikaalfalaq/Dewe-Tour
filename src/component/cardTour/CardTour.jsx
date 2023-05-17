import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import DataCartTour from './DataCartTour'
import './cardTour.css'

function CardTour() {
  return (
    <Container style={{marginTop:'72px', marginBottom:'121px'}}>
       <p style={{textAlign:"center", color:"black", marginBottom:"88px", fontSize:"45px", fontWeight:'500'}}>Group Tour</p>
       <CardGroup style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "auto", gridGap: "40px"}}>
       {DataCartTour.map((item, index) => {
        return (
        <Card key={index} style={{borderRadius:"10px", padding:"10px", width:'350px', height:'350px'}}>
          <div style={{display:'flex', alightItem: 'center', justifyContent:'center',position:'relative', padding:'0px'}}>
            <img src={item.Image} alt="destination" />
            <div className='date'>{item.Date}</div>
          </div>

          <div className='destination'>{item.Time} {item.Destination}</div>

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