import Payment from '../component/payment/Payment'
import Copyright from '../component/copyright/Copyright';

function PaymentPage () {
    return (
        <div style={{backgroundColor:"white", height:'777px', width:'1440px', margin:'auto', position:'relative'}}>
            <Payment/>
            <Copyright/>
        </div>
    )
}

export default PaymentPage