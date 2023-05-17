import Minus from "../img/Minus.png"
import Plus from "../img/Plus.png"

function PricePerson() {
    return (
        <div style={{padding:'0px 210px', borderRadius:'0px', width:'1440px', margin:'auto auto 44px', fontWeight:'bold',fontSize:'24px'}}>
            <div style={{display:'flex', justifyContent:'space-between', borderBottom: '1px solid #A8A8A8', padding:'16px 0px 18px 0px'}}>
                <div style={{display:'flex'}}>
                    <div style={{color:'#FFAF00', marginRight:'5px'}}>IDR.12,398,000</div>
                    <div>/ Person</div>
                </div>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <img src={Minus} alt="minus" />
                    <div style={{margin:'0px 20px', fontSize:'18px', fontWeight:'bold'}}>1</div>
                    <img src={Plus} alt="Plus" />
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', borderBottom: '1px solid #A8A8A8',padding:'26px 0px 18px 0px'}}>
                <div>Total :</div>
                <div>IDR.12,398,000</div>
            </div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
                <button style={{marginTop:'43px',backgroundColor:'#FFAF00', width:'213px', height:'50px', color:'white', border:'0px', borderRadius:'10px', fontSize:'18px', fontWeight:'bold'}}>BOOK NOW</button>
            </div>
        </div>
    )
}

export default PricePerson