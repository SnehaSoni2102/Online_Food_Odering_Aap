import { CDN_URL } from "../utiles/contants";

const RestaurantCard = (props) =>{
    const{ resData } =props;
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
export default RestaurantCard;