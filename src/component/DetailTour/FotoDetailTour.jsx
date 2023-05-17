import { Card } from "react-bootstrap"
import Australia from "../img/australia.png"

function FotoTour (){
    return(
        <Card style={{padding:'0px 170px', borderRadius:'0px', border:'0px', margin:'auto', width:'1440px'}}>
            <div style={{fontSize: '40px', height: '66px', fontWeight:'bold', width:'1018px', margin: '66px auto 0px'}}>6D/4D Fun Tassie Vacation + Sydney</div>
            <p style={{color:"#878787", width:'1018px', margin:'-15px auto 27px'}}>Australia</p>

            <div style={{backgroundImage: `url(${Australia})`, backgroundSize: 'cover', backgroundPosition: 'center', width:'1018px', height:'361px',margin:'auto'}}></div>

            <div style={{display:'flex', justifyContent:'space-between',width:'1018px',margin:'12px auto'}}>
                <div style={{backgroundImage: `url(${Australia})`, backgroundSize: 'cover', backgroundPosition: 'center', width:'329.73px', height:'167.64px'}}></div>
                <div style={{backgroundImage: `url(${Australia})`, backgroundSize: 'cover', backgroundPosition: 'center', width:'329.73px', height:'167.64px'}}></div>
                <div style={{backgroundImage: `url(${Australia})`, backgroundSize: 'cover', backgroundPosition: 'center', width:'329.73px', height:'167.64px'}}></div>
            </div>
        </Card>
    )
}

export default FotoTour