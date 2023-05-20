import { Card } from "react-bootstrap"
import DataInformationTrip from './DataInformationTrip'

function InformationTrip (){
    return(
        <Card style={{padding:'0px 210px', borderRadius:'0px', width:'1440px', border:'0px', margin:'auto',backgroundColor:'transparent'}}>
            <p style={{margin:'47px 0px 20px', height:'24px', fontWeight:'bold'}}>Information Trip</p>
            <div style={{display:'flex', justifyContent:'space-between'}}>
            {DataInformationTrip.map((item,index) => {
                return (
                <div key={index}>
                    <p style={{margin:'auto', fontSize:'12px' ,height:'18px', marginBottom:'3px', color:'#A8A8A8'}}>{item.Title}</p>
                    <div style={{margin:'auto', fontSize:'17px' ,height:'33px', display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold'}}>
                        <p><img src={item.Image} alt="icon" /></p>
                        <p style={{marginLeft:'14px'}}>{item.Info}</p>
                    </div>
                </div>
            )})}
            </div>
            <div className="description">
                <p style={{fontSize:'18px', margin:'48px 0px 7px', fontWeight:'bold'}}>Description</p>
                <p style={{color:'#A8A8A8'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laboriosam deleniti officia amet error eligendi corporis reiciendis explicabo! Voluptas, officia. Perferendis veritatis expedita quia mollitia ex ducimus alias cum quas.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla laboriosam deleniti officia amet error eligendi corporis reiciendis explicabo! Voluptas, officia. Perferendis veritatis expedita quia mollitia ex ducimus alias cum quas.</p>
            </div>
        </Card>
)}
export default InformationTrip 