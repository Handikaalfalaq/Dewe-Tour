import { Card } from "react-bootstrap"
import DataTour from "../DataDetailTour"
import './fotoTour.css'
import { useParams } from "react-router-dom";
const dataHidden = DataTour.length - 4;

function FotoTour (){
    const param = useParams('id')
    return(
        <Card className="containerFotoTour">
            <div className="titleFotoTour">6D/4D Fun Tassie Vacation + Sydney</div>
            <p className="destinationFotoTour">Australia</p>

            <div className="mainFotoTour" style={{backgroundImage: `url(${DataTour[param.id].Image[0]})`}}></div>
            <div className="imageFotoTour"> 
            {DataTour[param.id].Image.slice(1, 4).map((image, index) => (
                <div key={index} className="secondaryFotoTour" style={{backgroundImage: `url(${image})`}}></div>
                ))}
                <p className="dataHidden">+{dataHidden}</p>
            </div>
        </Card>
    )
}

export default FotoTour