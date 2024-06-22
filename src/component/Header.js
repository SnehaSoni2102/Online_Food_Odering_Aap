import { useState,useContext } from "react";
import menuicon from "../Assests/menuicon.svg"
import LOGO_URL from "../utiles/contants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utiles/useOnlineStatus.js";
import UserContext from "../utiles/UserContext.js";

const Header =() =>{
   // let btnName ="Login";
   const[ btnR, setbtnR ] = useState("Login");

   const onLineStatus=useOnlineStatus(); 

    const { loggedInUser } =useContext(UserContext);

    const [toggle, setToggle] = useState(true);

    return (
        <div className="grid grid-cols-3 bg-[#ffffff] p-1 shadow-lg">
            <div className="col-span-2 ">
            <img className="w-32" src={LOGO_URL}/>
            </div>
            <div className="col-span-1 items-end hidden lg:block">
                <ul className="flex py-4 my-4 ">
                    <li className="m-2">
                        Online status:{ onLineStatus?"✅":"🔴"}
                    </li>
                    <li className="m-2">
                    <Link to ="/">Home</Link>
                    </li>
                    <li className="m-2">
                        <Link to ="/about">About us</Link>
                        </li>
                    {/* <li className="px-3">
                        <Link to= "/contact">Contact us</Link>
                        </li> */}
                    {/* <li className="px-3">cart</li> */}
                    <button className="m-2" onClick={() =>{
                         btnR=== "Login"
                         ?setbtnR("Logout")
                         :setbtnR("Login");
                    }}
                    >
                        {btnR}</button>
                        <li className="m-2 font-bold">{loggedInUser}</li>
                </ul>

            </div>
            <div className="flex flex-wrap justify-end text-end mx-12 font-semibold md:hidden">
          <button
            onClick={() => setToggle(!toggle)}
            className="btn btn-primary mb-5"
          >
            <img className="h-[24px] w-[24px]" src={menuicon} alt="menu_icon" />
          </button>
          {toggle && (
           <ul className="list-group">
           <li className="list-group-item ">
               Online status:{ onLineStatus?"✅":"🔴"}
           </li>
           <li className="list-group-item">
           <Link to ="/">Home</Link>
           </li>
           <li className="list-group-item">
               <Link to ="/about">About us</Link>
               </li>
           {/* <li className="list-group-item">
               <Link to= "/contact">Contact us</Link>
               </li> */}
               
           <li className="list-group-item">cart</li>
           <button className="" onClick={() =>{
                btnR=== "Login"
                ?setbtnR("Logout")
                :setbtnR("Login");
           }}
           >
               {btnR}</button>
               <li className="px-4 font-bold line-clamp-1">{loggedInUser}</li>
       </ul>
          )}
        </div>
        </div>
    )
};
export default Header;