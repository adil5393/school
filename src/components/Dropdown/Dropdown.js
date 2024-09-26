import './Dropdown.css';
import React, { useEffect, useRef } from 'react';

export default function Dropdown({menu,handleClick}){
    const dropdownRef = useRef(null);

    function itemClicked(){
        const defaultMenu = menu.map((item,index)=>({
            ...item,state:false
        }))
        handleClick(null);
    }
    function handleClickOutside(e){
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
            itemClicked();
        }
    }
    useEffect(()=>{
        document.addEventListener('mousedown',handleClickOutside);
        return ()=>{
            document.removeEventListener('mousedown',handleClickOutside);
        }
    })

    const dropdownItems = menu.map((item,index)=>{
        return <div className="dropdownitem" onClick={itemClicked}>
                    {item}
                </div>
    })
    return(
        <div className="dropdown" ref={dropdownRef}>
            <div className="dropdown-menu">
                {dropdownItems}
            </div>
        </div>
    )
}