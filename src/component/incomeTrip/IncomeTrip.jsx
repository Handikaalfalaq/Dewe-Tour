import Card from 'react-bootstrap/Card';
import './incomeTrip.css';
import CardGroup from 'react-bootstrap/CardGroup';
import DataDetailTour from '../DataDetailTour'
import Container from 'react-bootstrap/container';
import { useNavigate } from 'react-router-dom';

function IncomeTrip () {
    window.scrollTo(0,0)
    const navigate = useNavigate();
    return (
        <Container style={{ position:'relative', maxWidth:'1440px', height:'1200px', backgroundColor:'white', padding:'100px 100px'}}>
            <div>
                <div style={{display:'flex', justifyContent:'space-between', margin:'0px auto 20px'}}>
                    <p style={{fontSize:'36px', fontWeight:'bold'}}>Income Trip</p>
                    <button onClick={() => navigate("/AddTripForm" )} style={{color:'white', backgroundColor:'#FFAF00', width:'150px', height:'40px', borderRadius:'5px', border:'0px'}}>Add Trip</button>
                </div>
                <CardGroup style={{display:"grid", gridTemplateColumns: "repeat(3, 1fr)", gridAutoRows: "auto", gridGap: "40px", paddingLeft:'35px'}}>
                    {DataDetailTour.map((item, index) => {
                    return (
                    <Card key={index} style={{borderRadius:"10px", padding:"10px", width:'350px', height:'350px'}}>
                        <div style={{display:'flex', alightItem: 'center', justifyContent:'center',position:'relative', padding:'0px'}}>
                        <div style={{backgroundImage:`url(${item.Image[0]})`, backgroundSize:'cover', width:'328px', height:'241px', borderRadius:'10px'}}></div>
                        <div className='date'>{item.Date}</div>
                        </div>

                        <div className='destination'>{item.Time} {item.Destination}</div>

                        <div style={{display:'flex', justifyContent:'space-between', marginTop:'10px'}}>
                        <div style={{color:"#FFAF00", fontWeight:"bold"}}>{item.Price.toLocaleString()}</div>
                        <div style={{color:"#878787"}}>{item.Country}</div>
                        </div>
                    </Card>
                    )
                    })}
                </CardGroup>
          </div>
      </Container>
    )
}

export default IncomeTrip