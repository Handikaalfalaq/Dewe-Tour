import FolderImage from "../img/FolderImg"

function DropDown () {
    return(
        <div>
            <div style={{width:'220px', height:'187px', borderRadius:'10px', padding:'24px 0px 13.5px 0px', border:'1px solid black', position:'relative'}}>
                <div style={{paddingLeft:'39px'}}><img src={FolderImage.IconProfile} alt="icon profile" /> Profile</div>
                <div style={{paddingLeft:'39px', margin:'15px 0px 30px 0px'}}><img src={FolderImage.Bill} alt="icon profile" />Pay</div>
                <div style={{padding:'18px 0px 0px 39px', borderTop:'3px solid #A8A8A8'}}><img src={FolderImage.Logout} alt="icon profile" />Logout</div>
                <img src={FolderImage.Triangle} alt="Triangle" style={{position:'absolute', top:'-20px', right:'0px'}}/>
            </div>
        </div>
    )
}

export default DropDown