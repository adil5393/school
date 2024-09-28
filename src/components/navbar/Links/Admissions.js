import React, { useState } from 'react';

export const ApplyOnline = () => { console.log("Version 1") };
export const FeeStructure = () => { 
    const [formData, setFormData] = useState({
        name: { value: '', text: 'Name' },
        class: { value: '', text: 'Class' },
        phone: { value: '', text: 'Phone' },
        email: { value: '', text: 'Email' },
        conveyance: { value: '', text: 'Conveyance? (yes/no)' },
        address: { value: '', text: 'Address/Pincode' }
    });
    function handleChange(e){
        const {name, value} = e.target;
        setFormData((prevData)=>({
            ...prevData,[name]:{...prevData[name],value}
        }))
    }
    const formItem = Object.keys(formData).map((key)=>{
        return(
            <div className="form card jc-center pr-2 pl-2" style={{flexDirection:"row"}}>
                <label htmlFor={formData[key].text}>{formData[key].text}</label>
                <input type="text" className='inputText' name={key} value={formData[key].value} onChange={(e)=>handleChange(e)}/>
            </div>
        )
    })
    function handleSubmit(e){
        e.preventDefault();
        console.log(formData)
        const resetFormData = Object.fromEntries(
            Object.keys(formData).map((key) => [
                key, 
                { ...formData[key], value: '' } // Reset value to an empty string
            ])
        );

        setFormData(resetFormData)
    }
    return(
        <form action="">
            <div className="card">
                <div className="row mt-2">
                    <div className="col-xs-12 jc-center mt-2 mb-2" style={{flexDirection:"column"}}>
                        <div className="card-title">
                            Apply to get the fee structure
                        </div>
                        <p>Fee Structure will be sent to your Email</p>
                        {formItem}
                    <div className="card jc-flex-end" style={{width:"100%"}}>
                        <button className="submit-btn" onClick={(e)=>handleSubmit(e)}>
                            Submit
                        </button>
                    </div>
                    
                    </div>
                    
                </div>
                
            </div>
        </form>
    )
};
export const Procedure = () => { /* component code */ };
