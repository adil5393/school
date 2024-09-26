
function Header(){
    return(
        <div className="row pb-2" style={{justifyContent:"center"}}>
          <div className="col-sm-12">
            <div className="logo-area">
            <img src={`${process.env.PUBLIC_URL}/images/logo3.png`} alt="" className="logo"/>
            </div>
          </div>
        </div>
    )
}

export default Header;