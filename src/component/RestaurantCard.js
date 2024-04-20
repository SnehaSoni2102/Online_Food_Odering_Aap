import { CDN_URL, STAR_LOGO} from "../utiles/contants";
import { useContext } from "react";
import UserContext from "../utiles/UserContext";

const RestaurantCard = (props) =>{
    const{ resData } =props;
     const { loggedInUser } = useContext(UserContext);
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      areaName,
      sla
    }= resData;
return (
    <div className="m-4 p-1 w-[300px] bg-white" >
      <img
       className="rounded-2xl h-[200px] w-[300px]"
       alt="res-logo"
       src={CDN_URL+cloudinaryImageId}
       />
       <div className="m-2">
       <h3 className="font-medium text-lg">{name}</h3>
       <div className="flex flex-wrap gap-1 "> 
       <img className="w-[20px] h-[20px] pt-0.5 rounded-full" src={STAR_LOGO}/>
       <h4>{avgRating}</h4>
       <h1 className="font-extrabold">.</h1>
       <h4>{sla?.slaString}</h4>
       </div>
       <h4 className="line-clamp-1 text-gray-500 font-light">{cuisines.join(", ")}</h4>
       <h4 className="line-clamp-1 text-gray-500 font-light">{areaName}</h4> 
       </div>
      

    </div>
);
};

  // Higher order component
   //takes input as RestaurantCard => output as restaurantCardPromoted|| just a javaScript function
   export const withPromtedLabel =(RestaurantCard)=>{
       return(props) => {
        return(
          <div>
            <label className="absolute bg-black text-white m-2 p-2 rounded-lg ">
              Promoted
            </label>
            <RestaurantCard {...props}/>
          </div>
        );
       };
   };


export default RestaurantCard;