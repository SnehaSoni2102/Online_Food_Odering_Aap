import { CDN_URL } from "../utiles/contants";


const RestaurantCard = (props) =>{
    const{ resData } =props;
   // const { loggedInUser } = useContext(UserContext);
    const{
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime
    }= resData;
return (
    <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200" >
      <img
       className="rounded-lg"
       alt="res-logo"
       src={CDN_URL+
        cloudinaryImageId}
       />
       <h3 className="font-bold py-4 text-lg">{name}</h3>
       <h4>{cuisines.join(", ")}</h4>
       <h4>{avgRating}</h4>
       <h4>{costForTwo/100}</h4>
       <h4>{deliveryTime} minutes</h4>
      

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