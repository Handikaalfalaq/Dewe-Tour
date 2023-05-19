import React, {useState , useEffect} from 'react'
import FolderImage from '../img/FolderImg'
import './pricePerson.css'
import { useNavigate} from 'react-router-dom';


function PricePerson() {
  const navigate = useNavigate()
  const [calculation, setCalculation] = useState(1);
  const [total, setTotal] = useState(12398000);

  const handlePlusClick = () => {
    setCalculation(calculation + 1);
  };

  const handleMinusClick = () => {
    if (calculation > 1) {
      setCalculation(calculation - 1);
    }
  };

  useEffect(() => {
    setTotal(12398000 * calculation);
  }, [calculation]);

    return (
        <div className='containerPricePerson'>
            <div className='tablePricePerson'>
                <div style={{display:'flex'}}>
                    <div style={{color:'#FFAF00', marginRight:'5px'}}>IDR.12,398,000</div>
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
                <button className='buttonBooking' onClick={(e) => {
                  navigate('/Payment')
                }}>BOOK NOW</button>
            </div>
        </div>
    )
}

export default PricePerson