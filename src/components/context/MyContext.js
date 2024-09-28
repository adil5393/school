import { createContext, useState, useEffect  } from "react";
import HomeSection from "../sections/Homesection";

export const MyContext = createContext();
export const MyProvider = ({children})=>{
    const [mainSection, setMainSection] = useState(<HomeSection/>);
    const newValue = (newValue)=>{
        setMainSection(newValue);
        
    }
    useEffect(() => {
        console.log(mainSection);
    }, [mainSection]);
    
    return(
        <MyContext.Provider value={{mainSection, newValue}}>
            {children}
        </MyContext.Provider>
    )
}

