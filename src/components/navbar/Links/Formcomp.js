export default function Formcomp(props){
    const {formData,setFormData,cardTitle,cardPara,cardButton,buttonFn,isDisabled,posted} = props;
    
    function handleChange(e){
        
        const {name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData,[name]:{...prevData[name],value}
        }))
    }
    const formItems = Object.keys(formData).map(key=>{
        return(
            <div className="form card jc-center pr-2 pl-2" style={{flexDirection:"row"}}>
                <label htmlFor={formData[key].text}>{formData[key].text}</label>
                <input type={formData[key].type} className='inputText' name={key} value={formData[key].value} onChange={(e)=>handleChange(e)}/>
            </div>
        )
    })
    return(
        <form action="">
            <div className="card">
                <div className="row mt-2">
                    <div className="col-xs-12 jc-center mt-2 mb-2" style={{flexDirection:"column"}}>
                        <div className="card-title">
                            {cardTitle}
                        </div>
                        <p>{cardPara}</p>
                        {formItems}
                    <div className="card jc-flex-end" style={{width:"100%"}}>
                        <button className={`submit-btn ${posted?'posted':''}`} disabled={isDisabled} onClick={(e)=>buttonFn(e)}>
                            {cardButton}
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </form>
    )
}