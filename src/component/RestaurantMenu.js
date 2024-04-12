import useRestaurantMenu from '../utiles/useRestaurantMenu';
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from './RestaurantCategory';
import { useState } from 'react';


 
 const RestaurantMenu=()=>{

    

    const { resId}=useParams();

    const dummy="Dummy Data";
    
       const resInfo=useRestaurantMenu(resId);
       console.log(resInfo, "hhhhhhh1")
       console.log(resInfo?.cards[2]?.card?.card?.info.cuisines, "hhhhhhh2")

       const [ShowIndex,setShowIndex]=useState(null);

    
    if(resInfo === null)return <Shimmer />;
    //  const{name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
     

    //  const{ itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
     

     const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">
                {cuisines.join(", ")}-{costForTwoMessage}
            </p>
            {/* categories accordions */}
            {categories.map((category,index) =>(
                // controlled component 
                <RestaurantCategory 
                key = { category?.card?.card.title } 
                data={category?.card?.card}
                showItems={index === ShowIndex? true : false}
                setShowIndex={() => setShowIndex(index)}
                dummy={dummy}
                />
            ))};
        </div>
    );
};
export default RestaurantMenu;