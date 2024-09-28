import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import HomeSection from "../sections/Homesection";
function Header(){
  const {newValue} = useContext(MyContext)
    return(
        <div className="row pb-2" style={{justifyContent:"center"}}>
          <div className="col-sm-12">
            <div className="logo-area">
              <img src={`${process.env.PUBLIC_URL}/images/logo3.png`} alt="" className="logo" onClick={()=>newValue(<HomeSection/>)}/>
            </div>
          </div>
        </div>
    )
}

export default Header;