import React, { useState } from 'react';
import Formcomp from './Formcomp';

export const ApplyOnline = () => { return <div>Aply Online</div> };
export const FeeStructure = () => { 
    const [formData, setFormData] = useState({
        name: { value: '', text: 'Name',type:"text" },
        class: { value: '', text: 'Class',type:"text" },
        phone: { value: '', text: 'Phone',type:"text" },
        email: { value: '', text: 'Email',type:"text" },
        conveyance: { value: '', text: 'Conveyance? (yes/no)',type:"text" },
        address: { value: '', text: 'Address/Pincode',type:"text"}
    });
    const cardTitle = "Apply to get Fee Structure"
    const cardPara = "Fee Structure will be sent to your email."
    const cardButton = "Submit"
    function handleSubmit(e){
        e.preventDefault();
        const dataToSend = Object.fromEntries(
            Object.keys(formData).map((key) => [
                key, 
                formData[key].value // Just send the value
            ])
        );
        
        fetch('http://localhost:8383',{
            method:'POST',
            
            body:JSON.stringify(dataToSend)
        }).then(response=>{
            if(!response.ok){
                throw new Error('Not posted')
            }
            return response.json();
        }).then(data=>{
            console.log('Success',data);
            const resetFormData = Object.fromEntries(
                Object.keys(formData).map((key) => [
                    key, 
                    { ...formData[key], value: '' } // Reset value to an empty string
                ])
            );
    
            setFormData(resetFormData)
            
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
    return(
        <Formcomp formData={formData} setFormData={setFormData} cardTitle={cardTitle} cardPara={cardPara} cardButton={cardButton} buttonFn={handleSubmit} />
    )
};


export const Procedure = () => {  return <div>Procedure</div>};
