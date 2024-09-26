import images from "../importimages"
import React,{useState, useEffect} from 'react'


export default function Photogallery(){
    const imageKeys = Object.keys(images);
    const [currentIndex,setCurrentIndex] = useState(0);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentIndex((prevIndex)=>
                prevIndex === imageKeys.length -1 ? 0 : prevIndex +1
            );
        },3000);
        return()=>clearInterval(interval);
    },[imageKeys.length]);
    

    return(
        <div className="imagearea slide">
            <img src={images[imageKeys[currentIndex]]} alt="" className="photo slide"/>
        </div>
    )    
}