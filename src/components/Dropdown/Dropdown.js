import './Dropdown.css';
import React, { useEffect, useRef, createContext, useContext } from 'react';
import { MyContext } from '../context/MyContext';
import { Link } from 'react-router-dom';

export default function Dropdown({menu,handleClick,components}){
    
    const {mainSection, newValue} = useContext(MyContext)
    const dropdownRef = useRef(null);
    
    function itemClicked(item){
        newValue(components[item]) 
        
        const defaultMenu = menu.map((items,index)=>({
            ...items,state:false
        }))
        handleClick(null);
    }

    function handleClickOutside(e){
        console.log("clicked outside")
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
            handleClick(null);
        }
    }
    /*useEffect(()=>{
        document.addEventListener('mousedown',handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown',handleClickOutside);
        }
    },[]);*/

    const dropdownItems = menu.map((item,index)=>{
        return <Link to={item} style={{textDecoration:"none",color:"black"}} onClick={(e)=>
            {e.stopPropagation();
            itemClicked(item)}}><div key={index} className="dropdownitem" >
                    {item}
                    </div>
                </Link>
    })
    return(
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-menu">
                {dropdownItems}
            </div>
        </div>
    )
}
