import Dropdown from "../Dropdown/Dropdown";
import {useState,createContext, useContext} from 'react';
import {BookList2024_25,HouseSystem,Infrastructure,MailingList,PublicDisclosure,TestSchedule,Uniform} from './Links/Information';
import {ApplyOnline,FeeStructure,Procedure} from './Links/Admissions';
import {MediaAndNews,RecentActivities,Videos} from './Links/Gallery'
import { Link } from "react-router-dom";
import { MyContext, MyProvider } from "../context/MyContext";
import HomeSection from "../sections/Homesection";

function Navbar (){
    const {setMainSection, newValue} = useContext(MyContext);
    const [isOpen, setIsOpen] = useState(false);
    const [menu,setMenu] = useState([
        {text:"Information",
            options: ["Infrastructure", "HouseSystem", "Uniform", "TestSchedule", "PublicDisclosure", "MailingList", "BookList2024_25"],
        state : false,
        },
        {text:"Gallery",
            options: ["RecentActivities", "Videos", "MediaAndNews"],
        state:false,
        
        },
        {text:"Admissions",
            options: ["FeeStructure", "Procedure", "ApplyOnline"],
        state:false,
        
        }
    ]);
    const[activeIndex,setActiveIndex]=useState(null);
    const [dropdownItems,setdropdownItems] = useState([]);
    const data =[
        {item:isOpen,fn:setIsOpen},
        {item:dropdownItems,fn:setdropdownItems}
    ]
    function toggleHamburger() {
        setIsOpen(!isOpen);
        console.log(isOpen)
    }

    function handleClick(index){
        
        if(activeIndex===index){
            setActiveIndex(null)
        }
        if(activeIndex !== index){
            setActiveIndex(index)
        }
        /*const newMenu = menu.map((item,i)=>({
            ...item,state: activeIndex===i? !item.state:false
        }))
        setMenu(newMenu)
        console.log(newMenu)*/
    }
    return(
        <div className="card mainNav">
            <div className="row" style={{flexDirection:'column'}}>
                <div className="col">
                    <div className="row jc-space-between">
                        <div className="col">
                            <Link to ="/"><Home newValue={newValue}/></Link>
                        </div>
                        <div className="col">
                            <div className="hamburger">
                                <img src={`${process.env.PUBLIC_URL}/images/menu.png`} alt="" className="menu-icon" onClick={toggleHamburger}/>
                            </div>
                            <div className="menu-container1">
                                <Menu menu={menu} data={data} activeIndex={activeIndex} handleClick={handleClick}/>
                            </div>
                        </div>
                        <div className="col">
                            <Contact />
                        </div>
                    </div>
                </div>
                <div className={`col-xs-12 menu-container2 ${isOpen?'open':''}`}>                    
                        <Menu menu={menu} data={data} activeIndex={activeIndex} handleClick={handleClick} />
                </div>
            </div>
        </div>
    )
}


function Home({newValue}){
    return(
        <button className="nav-btn" onClick={()=>newValue(<HomeSection/>)}>
            Home
        </button>
    )
}
function Contact(){
    return(
        <button className="nav-btn">
            Contact
        </button>
    )
}

function Menu({menu,data,activeIndex,handleClick}){   
    
    const components = {
        Infrastructure:<Infrastructure/>,
        HouseSystem: <HouseSystem />,
        Uniform: <Uniform />,
        TestSchedule: <TestSchedule />,
        PublicDisclosure: <PublicDisclosure />,
        MailingList: <MailingList />,
        BookList2024_25: <BookList2024_25 />,
        RecentActivities: <RecentActivities />,
        Videos: <Videos />,
        MediaAndNews: <MediaAndNews />,
        FeeStructure: <FeeStructure />,
        Procedure: <Procedure />,
        ApplyOnline: <ApplyOnline />,
      }
    const menuItems = menu.map((items,index)=>(
        <div className="col-sm-4 col-xs-4 jc-center" style={{paddingLeft:"10px",paddingRight:"10px",boxSizing:"border-box"}}>
            <button className="menu-btn" onClick={(e)=>handleClick(index)}>
                {items.text}
            </button>
            {(activeIndex===index) &&(
                <Dropdown menu={items.options} reset={data[1].fn} handleClick={handleClick} components={components}/>
            )}
        </div>
    ))
    return(
            <div className="row jc-space-between pt-1 pb-1">
             {menuItems}
            </div>
    )
    
}

export default Navbar;