import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client"; 
import Header from "./component/Header.js"
import Body from "./component/Body.js"
import About from "./component/About.js";
import{ createBrowserRouter,RouterProvider, Outlet } from "react-router-dom";
import Contact from "./component/Contact.js";
import { Error } from "./component/Error.js";
import RestaurantMenu from "./component/RestaurantMenu.js";


  
const Grocery=lazy(()=>import("./component/Grocery"));

const Applayout =()=>{
    return (<div className="app">
        <Header />
        <Outlet />
    </div>);
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


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



