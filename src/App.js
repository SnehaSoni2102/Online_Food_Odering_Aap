import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./component/Header.js"
import Body from "./component/Body.js"
import About from "./component/About.js";
import{ createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Contact from "./component/Contact.js";
import { Error } from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import UserContext from "./utiles/UserContext.js";


  
const Grocery=lazy(()=>import("./component/Grocery"));

const Applayout =()=>{

     const [userName, setUserName] = useState();

     //authentication
     useEffect(()=>{
        //Make an API call and send username and password
        const data ={
            name:"sneha soni"
        }
        setUserName(data.name);
     },[])

    return (
        <UserContext.Provider value={{loggedInUser:userName,setUserName}}>
    <div className="app">
  
    <Header />
     <Outlet />
    </div>
    </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
     {
        path:"/",
        element: <Applayout />,
        children:[
            {
                path:"/",
                element:<Body />,
            },
            {
                path:"/about",
                element: <About />,
             },
             {
                path:"/contact",
                element: <Contact />,
             },
             {
                path:"/grocery",
                element: (
                    <Suspense fallback={<h1>Loading.....</h1>}>
                      <Grocery />
                    </Suspense>
                ),
             },
             {
                path:"/restaurants/:resId",
                element: <RestaurantMenu />,
             },
        ],
        errorElement:<Error />,
     },
     
     
]);

console.log("AAp");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



