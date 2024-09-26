export default function Footer(){
    return(
        <div className="footer pt-1">
            <div className="card">
                <div className="row jc-center pt-1">
                    <div className="col-xs-12 jc-center">
                        <div className="logo-area">
                            <img src={`${process.env.PUBLIC_URL}/images/footer.png`} alt="" className="logo"/>
                        </div>
                    </div>
                    <div className="col-xs-12 jc-center">
                        <p>
                        New Angels senior secondary school <br /> Katra Road, Pratapgarh, Uttar Pradesh <br /> India
                        </p>
                    </div>
                    <div className="col-xs-12 jc-center copyright">
                        <p>
                        <u>Copyright © 2024 New Angels Senior Secondary School - All Rights Reserved.</u>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}