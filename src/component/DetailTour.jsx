import { Card } from "react-bootstrap"
import DataTour from "./assets/DataDetailTour"
import './assets/Index.css'
import { useParams } from "react-router-dom";
import React, {useState , useEffect, useContext} from 'react'
import FolderImage from './img/FolderImg'
import { useNavigate} from 'react-router-dom';
import { DataContext } from "../page/dataContext";

const dataHidden = DataTour.length - 3;

function FotoTour (){
    const {total, setTotal, setAmount, setDateBooking, InputLogin, setPaySukses} = useContext(DataContext)
    const number = useParams("id")
    const navigate = useNavigate()
    const [calculation, setCalculation] = useState(1);
    const handlePlusClick = () => {
        setCalculation(calculation + 1);
    };

    const handleMinusClick = () => {
        if (calculation > 1) {
        setCalculation(calculation - 1);
        }
    };

    useEffect(() => {
        setAmount(calculation);
        setTotal(DataTour[number.id].Price * calculation);
      }, [calculation, number.id, setTotal, setAmount]);
      
      
    const handleDate = () => {
        const date = new Date();
        const formattedDate = date.toLocaleString('default', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
          });
    setDateBooking(formattedDate);
    };

    const handleDouble = () =>{
        handleDate();
        if (InputLogin === true) {
        navigate('/Payment/' + number.id);
        setPaySukses(false)
    } else {
        alert('Harus Login Terlebih Dahulu')
    }}

    return(
        <>
            <Card className="containerFotoTour">
                <div className="titleFotoTour">{DataTour[number.id].Time} {DataTour[number.id].Destination}</div>
                <p className="destinationFotoTour">{DataTour[number.id].Country}</p>

                <div className="mainFotoTour" style={{backgroundImage: `url(${DataTour[number.id].Image[0]})`}}></div>
                <div className="imageFotoTour"> 

                {DataTour[number.id].Image.slice(1, 4).map((image, index) => {
                    if (index === 2) {
                        return (
                        <div key={index} className="secondaryFotoTour" style={{ backgroundImage: `url(${image})`, filter:'blur(1.5px)'}}></div>
                        );
                    } else {
                        return (
                        <div key={index} className="secondaryFotoTour" style={{ backgroundImage: `url(${image})` }}></div>
                        );
                    }
                    })} 
                    
                    <p className="dataHidden" style={{cursor:'pointer'}} onClick>+{dataHidden}</p>
                </div>
            </Card>

            <Card style={{padding:'0px 210px', borderRadius:'0px', maxWidth:'2040px', border:'0px', margin:'auto',backgroundColor:'transparent'}}>
            <p style={{margin:'47px 0px 10px', height:'24px', fontWeight:'bold'}}>Information Trip</p>
            <div style={{display:'flex', justifyContent:'space-between'}}>

            {DataTour[number.id].InformationTrip.map((item,index) => {
                return (
                <div key={index}>
                    <p style={{fontSize:'12px' ,height:'18px', marginBottom:'3px', color:'#A8A8A8'}}>{item[0]}</p>
                    <div style={{margin:'auto', fontSize:'17px' ,height:'33px', display:'flex', justifyContent:'center', alignItems:'center', fontWeight:'bold'}}>
                        <p><img src={item[1]} alt="icon" /></p>
                        <p style={{marginLeft:'14px'}}>{item[2]}</p>
                    </div>
                </div>
            )})}

            </div>
            <div className="description">
                <p style={{fontSize:'18px', margin:'20px 0px 7px', fontWeight:'bold'}}>Description</p>
                <p style={{color:'#A8A8A8'}}>{DataTour[number.id].Description}</p>
            </div>
            </Card>

            <div className='containerPricePerson'>
                <div className='tablePricePerson'>
                    <div style={{display:'flex'}}>
                        <div style={{color:'#FFAF00', marginRight:'5px'}}>IDR. {DataTour[number.id].Price.toLocaleString()}</div>
                        <div>/ Person</div>
                    </div>
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <button style={{border:'0px', backgroundColor:'transparent'}} onClick={handleMinusClick}><img src={FolderImage.Minus} alt="minus" /></button>

                        <div style={{margin:'0px 20px', fontSize:'18px', fontWeight:'bold'}}>{calculation}</div>
                        
                        <button style={{border:'0px', backgroundColor:'transparent'}} onClick={handlePlusClick}><img src={FolderImage.Plus} alt="Plus" /></button>
                    </div>
                </div>
                <div className='price'>
                    <div>Total :</div>
                    <div>IDR.{total.toLocaleString()}</div>
                </div>
                <div style={{display:'flex', justifyContent: 'flex-end'}}>
                    <button className='buttonBooking' onClick={handleDouble}>BOOK NOW</button>
                </div>
            </div>
        </>
    )
}

export default FotoTour