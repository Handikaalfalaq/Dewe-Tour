import DataAdmin from "../DataAdmin"

const DataList = ["No", "Usert", "Trip", "Bukti Transfer", "Status Payment", "Action"]

function TransactionList (){
    return (
        <div style={{display:'flex', flexDirection:'column',width:'1440px', backgroundColor:'transparent', zIndex:'1', padding:'105px 87px 0px'}}>
            <div style={{fontSize:'36px'}}>Incoming Transaction</div>
            
            <div style={{display:"grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoRows: "auto"}}>
            {DataList.map((item, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'center', borderBottom:'1px solid black', height:'73px', padding:'0px 3px', fontWeight:'bold'}}>{item}</div>
                ))}
                </div>

                {DataAdmin.map((item,index) => {
                    return (
                        <div key={index} style={{display:"grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoRows: "auto"}}>
                            <div style={{display: 'flex', alignItems: 'center', borderBottom:'1px solid black', height:'auto', padding:'5px 5px'}}>{item.No}</div>

                            <div style={{display: 'flex', alignItems: 'center', borderBottom:'1px solid black', height:'auto', padding:'5px 5px'}}>{item.Users}</div>

                            <div style={{display: 'flex', alignItems: 'center', borderBottom:'1px solid black', height:'auto', padding:'5px 5px'}}>{item.Trip}</div>

                            <div style={{display: 'flex', alignItems: 'center', borderBottom:'1px solid black', height:'auto', padding:'5px 5px'}}>{item.BuktiTransfer}</div>

                            <div style={{display: 'flex', alignItems: 'center', borderBottom:'1px solid black', height:'auto', padding:'5px 5px'}}>{item.StatusPayment}</div>

                            <div style={{display: 'flex', alignItems: 'center', borderBottom:'1px solid black', height:'auto', padding:'5px 5px'}}>
                                <img src={item.Action} alt={item.Action} />
                                </div>
                        </div>
                    
                    )
                })}
        </div>
    )
}

export default TransactionList

// , backgroundColor:'#F9F9F9'