import FolderImage from "../img/FolderImg"
import DataHistoryTrip from "./DataHistoryTrip"

function HistoryTrip () {
    return (
        <div style={{display:'flex'}}>
        <div style={{width:'1440px', backgroundColor:'#F1F1F1', paddingTop:'108px'}}>
            <div style={{fontSize:'36px', fontWeight:'bold' ,width:'1035px', margin:'auto'}}>History Trip</div>

            <div style={{display:'flex', width:'1440px', padding:'42px 202px 291px', zIndex:'1'}}>
                <div class="grid-container" style={{display: 'grid', gridTemplateColumns: 'auto auto', width:'1035px', height:'419px', padding:'8px 63px 17px 35px', border:'1px solid #B7B7B7', borderRadius:'10px', position:'relative', backgroundColor:'white'}}>

                    <div style={{display: 'grid', gridTemplateColumns: 'auto auto'}}>
                        <div style={{gridColumn: 'span 2'}}><img src={FolderImage.Icon} alt="icon" style={{ height: '68px'}} /></div>
                        <div>
                            <p style={{fontSize: '24px', fontWeight:'bold', margin:'0px'}}>6D/4N Fun Tassie Vacation</p>
                            <p style={{fontSize: '14px', margin:'4px 0px 31px'}}>Australia</p>
                            <p style={{width:'112px', height:'24px',fontSize: '12px', color:'#EC7A7A', backgroundColor:'rgb(236, 122, 122, 0.3', display:'flex', justifyContent:'center', alignItems:'center'}}>Waiting Payment</p>
                        </div>
                        <div style={{display: 'grid', gridTemplateColumns: 'auto auto', gridRow: 'span 2'}}>
                        {DataHistoryTrip.map((item, index) => {
                            return (
                                <div key={index}>
                                    <p style={{fontWeight:'bold', marginBottom:'3px', fontSize:'18px'}}>{item.Title}</p>
                                    <p>{item.Information}</p>
                                </div>
                            )})}
                        </div>
                    </div>

                    <div rowspan="2" style={{display:'flex', flexDirection:'column', alignItems:'flex-end'}}>
                        <p style={{fontWeight:'bold', fontSize:'36px', marginBottom:'4px'}}>Booking</p>
                        <p style={{margin:'0px'}}>Saturday, 22 Jul 2020</p>
                        <img style={{margin:'20px 0px 13px'}} src={FolderImage.QrCode} alt="" />
                        <p style={{fontSize:'13px', color:'#818181', margin:'0px'}}>Upload payment proof</p>
                    </div>

                    <div className="PaymentTabel" style={{ display: 'grid', gridTemplateColumns: '10% 18% 18% 18% 18% 18%', gridColumn: 'span 2', fontSize:'18px', fontWeight:'bold'}}>
                        <div>No</div>
                        <div>Full Name</div>
                        <div>Gender</div>
                        <div>Phone</div>
                        <div></div>
                        <div></div>
                    </div>
                    
                    <div className="PaymentTabel2" style={{display: 'grid', gridTemplateColumns: '10% 18% 18% 18% 18% 18%', gridColumn: 'span 2', color:'#B1B1B1'}}>
                        <div>1</div>
                        <div>Handika Ganteng</div>
                        <div>Male</div>
                        <div>0812345678</div>
                        <div style={{color:'black', fontWeight:'bold'}}>Qty</div>
                        <div style={{color:'black', fontWeight:'bold'}}>: 1</div>
                    </div>

                    <div className="PaymentTabel3" style={{ display: 'grid', gridTemplateColumns: '10% 18% 18% 18% 18% 18%', gridColumn: 'span 2', fontWeight:'bold'}}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>Total</div>
                        <div style={{color:'red', border:'0px'}}>: IDR.12,398,000</div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default HistoryTrip