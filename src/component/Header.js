import { useState } from "react";
import LOGO_URL from "../utiles/contants.js";
import { Link } from "react-router-dom";

const Header =() =>{
   // let btnName ="Login";
   const[ btnR, setbtnR ] = useState("Login");

    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                    <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/about">About us</Link>
                        </li>
                    <li>
                        <Link to= "/contact">Contact us</Link>
                        </li>
                    <li>cart</li>
                    <button className="login" onClick={() =>{
                         btnR=== "Login"
                         ?setbtnR("Logout")
                         :setbtnR("Login");
                    }}
                    >
                        {btnR}</button>
                </ul>

            </div>
        </div>
    )
};
export default Header;