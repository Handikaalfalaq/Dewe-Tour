import PersonalInfo from "../component/personalInfo/PersonalInfo"
import Copyright from "../component/copyright/Copyright"
import FolderImage from "../component/img/FolderImg"
import HistoryTrip from "../component/historyTrip/HistoryTrip"

function Profile () {
    return (
        <div style={{height:'1604px', width:'1440px', margin:'auto', position:'relative'}}>
          <img src={FolderImage.HibiscusLanding} alt="destination" style={{position:'absolute', right:'0px', top:'23%', zIndex:'1'}}/>
          <img src={FolderImage.PalmLanding} alt="destination" style={{position:'absolute', left:'0px', top:'41%', zIndex:'1'}}/>
            <PersonalInfo/>
            <HistoryTrip/>
            <Copyright/>
        </div>
    )
}

export default Profile