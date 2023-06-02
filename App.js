import React from "react";
import ReactDOM from "react-dom/client"; 

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
// const styleCard={
//     backgroundColor: "#f0f0f0",
// };
const RestaurantCard = () =>{
    return (
          <div className="res-card" style={{ backgroundColor: "#f0f0f0",}}>
            <img
             className="res-logo"
             alt="res-logo"
             src="https://media.gettyimages.com/id/1212329362/photo/table-top-view-of-indian-food.jpg?s=612x612&w=gi&k=20&c=8ZvQ1cg8__pgyLxl6TPpLfAfbBhzR-OYoj4jwSCbQ84="
            />
             <h3>Meghana foods</h3>
             <h4>Pizza, North Indian, Asian</h4>
             <h5>4.4</h5>
             <h6>38 minutes</h6>
          </div>
    );
};
const Body = () =>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
               
                
            </div>
        </div>
    );
}
const Applayout =()=>{
    return (<div className="app">
        <Header />
        <Body />
    </div>);
};
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);



