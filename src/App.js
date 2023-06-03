import React from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./component/Header.js"
import Body from "./component/Body.js"

const Header =() =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>cart</li>
                </ul>

            </div>
        </div>
    )
};


const Applayout =()=>{
    return (<div className="app">
        <Header />
        <Body />
    </div>);
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);



