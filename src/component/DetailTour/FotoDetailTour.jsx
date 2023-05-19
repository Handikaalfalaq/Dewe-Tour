import { Card } from "react-bootstrap"
import DataTour from "./DataTour"
import './fotoTour.css'
const dataHidden = DataTour.length - 4;

function FotoTour (){
    return(
        <Card className="containerFotoTour">
            <div className="titleFotoTour">6D/4D Fun Tassie Vacation + Sydney</div>
            <p className="destinationFotoTour">Australia</p>

            <div className="mainFotoTour" style={{backgroundImage: `url(${DataTour[0].Image})`}}></div>
            
            <div className="imageFotoTour">
            {DataTour.slice(1, 4).map((item, index) => {
                if (index === 2) {
                    return (
                    <div key={index} className="secondaryFotoTour" style={{backgroundImage: `url(${item.Image})`, filter:'blur(1.5px)'}}></div>
                    );
                } else {
                    return (
                    <div key={index} className="secondaryFotoTour" style={{backgroundImage: `url(${item.Image})`}}></div>
                    );
                }
                })}
                
                <p className="dataHidden">+{dataHidden}</p>
            </div>
        </Card>
    )
}

export default FotoTour