import { useContext } from "react"
import { MyContext } from "../context/MyContext"
export default function Main(){
    const {mainSection} = useContext(MyContext);
    return(
        <div className="pt-1">
            {mainSection}
        </div>
    )
}