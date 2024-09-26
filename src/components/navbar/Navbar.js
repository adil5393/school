import Dropdown from "../Dropdown/Dropdown";
import {useState} from 'react';
import Feestructure from "../feestructure/Feestructure";

function Navbar (){
    const [mainSection, setMainsection] = useState(null);
    
    const [isOpen, setIsOpen] = useState(false);
    const [menu,setMenu] = useState([
        {text:"Information",
        options: ["Infrastructure","House System","Uniform","Test-Schedule","Public-Disclosure","Mailing-List","Book-List-2024-25"],
        state : false,
        comps:[<Feestructure/>]
        },
        {text:"Gallery",
        options: ["Recent Activities","Videos","Media and News"],
        state:false,
        comps:[<Feestructure/>]
        },
        {text:"Admissions",
        options: ["Fee-Structure","Procedure","Apply-Online"],
        state:false,
        comps:[<Feestructure/>]
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
        <div className="card">
            <div className="row" style={{flexDirection:'column'}}>
                <div className="col">
                    <div className="row jc-space-between">
                        <div className="col">
                            <Home />
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
                        <Menu menu={menu} data={data} activeIndex={activeIndex} handleClick={handleClick}/>
                </div>
            </div>
        </div>
    )
}


function Home(){
    return(
        <button className="nav-btn">
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
    const menuItems = menu.map((items,index)=>(
        <div className="col-sm-4 col-xs-4 jc-center" style={{paddingLeft:"10px",paddingRight:"10px",boxSizing:"border-box"}}>
            <button className="menu-btn" onClick={(e)=>handleClick(index)}>
                {items.text}
            </button>
            {(activeIndex===index) &&(
                <Dropdown menu={items.options} reset={data[1].fn} handleClick={handleClick}/>
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
