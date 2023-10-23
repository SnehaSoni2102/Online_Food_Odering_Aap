import { useState,useContext } from "react";
import LOGO_URL from "../utiles/contants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utiles/useOnlineStatus.js";
import UserContext from "../utiles/UserContext.js";

const Header =() =>{
   // let btnName ="Login";
   const[ btnR, setbtnR ] = useState("Login");

   const onLineStatus=useOnlineStatus(); 

    const { loggedInUser } =useContext(UserContext);

    return (
        <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-lime-100 lg:bg-green-100">
            <div className="logo-container">
                <img className="w-48" src={LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">
                        Online status:{ onLineStatus?"✅":"🔴"}
                    </li>
                    <li className="px-3">
                    <Link to ="/">Home</Link>
                    </li>
                    <li className="px-3">
                        <Link to ="/about">About us</Link>
                        </li>
                    <li className="px-3">
                        <Link to= "/contact">Contact us</Link>
                        </li>
                        <li className="px-3">
                        <Link to= "/grocery">Grocery</Link>
                        </li>
                    <li className="px-3">cart</li>
                    <button className="login" onClick={() =>{
                         btnR=== "Login"
                         ?setbtnR("Logout")
                         :setbtnR("Login");
                    }}
                    >
                        {btnR}</button>
                        <li className="px-4 font-bold">{loggedInUser}</li>
                </ul>

            </div>
        </div>
    )
};
export default Header;