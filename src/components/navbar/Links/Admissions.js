import React, { useEffect, useState } from 'react';
import Formcomp from './Formcomp';
import error from './error.png'
import doneimg from './doneimg.png'
import loading from './loadingimg.png'
import { isDisabled } from '@testing-library/user-event/dist/utils';
function ButtonAnimation({posted,posting}){
    return(
        <div className='submit-animation'>
            {posted && <img src={doneimg} alt='notfound' className="post-done"/>}
            {(!posted && posting)  &&<img src={loading} alt='notfound' className={`submit-icon ${isDisabled? 'rotating':''}`}/>}
            {(!posted && !posting) && <img src={error} alt="not fount" className='submit-icon error'/>}
        </div>
    )
}
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
    const [cardButton,setCardButton] = useState("Submit")
    const [isDisabled,setIsDisabled] = useState(false)
    const [posted,setPosted] =useState(false);
    const [posting,setPosting] = useState(false);
    
    useEffect(() => {
        if (isDisabled) {
            setCardButton(<ButtonAnimation posted={posted} posting={posting}/>);
        } 
    }, [isDisabled,posted,posting]);

    function handleSubmit(e){
        setPosting(true);
        setIsDisabled(true)
        e.preventDefault();
        const dataToSend = Object.fromEntries(
            Object.keys(formData).map((key) => [
                key, 
                formData[key].value // Just send the value
            ])
        );
        const controller = new AbortController();
        const timeoutId =setTimeout(()=>{
            controller.abort()
        },5000);
        
        fetch('http://192.168.1.4:8383/feeStructure',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(dataToSend),
            signal:controller.signal
        }).then(response=>{  
            clearTimeout(timeoutId);          
            if(!response.ok){                
                throw new Error('Not posted')
            }
            else{
                if(response.status===200){
                    setPosted(true);
                }
            }
            return response.json();
        }).then(data=>{
            
            const resetFormData = Object.fromEntries(
                Object.keys(formData).map((key) => [
                    key, 
                    { ...formData[key], value: '' } // Reset value to an empty string
                ])
            );    
            setFormData(resetFormData)
            setPosting(false)      
        })
        .catch(err=>{
            clearTimeout(timeoutId)
            setPosting(false);
            console.log(err)
        })
        
    }
    return(
        <Formcomp formData={formData} setFormData={setFormData} cardTitle={cardTitle} cardPara={cardPara} cardButton={cardButton} buttonFn={handleSubmit} isDisabled={isDisabled} posted={posted}/>
    )
};


export const Procedure = () => {  return <div>Procedure</div>};
