import { useContext } from "react"
import { MyContext } from "../context/MyContext"

import HomeSection from "./Homesection";
import { BrowserRouter } from "react-router-dom";


export default function Main(){
    const {mainSection} = useContext(MyContext);
    return(        
            <div className="pt-1">
                 {mainSection}
            </div>
    )
}