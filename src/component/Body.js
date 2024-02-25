import RestaurantCard,{withPromtedLabel} from "./RestaurantCard";
import useOnlineStatus from "../utiles/useOnlineStatus";
import { useState , useEffect,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utiles/UserContext";


const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText ,setsearchText] = useState("");

    const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
           );

        const json = await data.json();

         
         // Optional channing
        setListOfRestaurants( json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log("be",listOfRestaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    console.log("b",listOfRestaurants);

    //Online status
    const onlineStatus=useOnlineStatus();
      if(onlineStatus===false)
        return(
            <h1>
                you're offline
            </h1>
        );

       const {loggedInUser,setUserName} = useContext(UserContext);

    if(listOfRestaurants.length=== 0){
         return  <Shimmer />;
    }

    return(
        <div className="body">
            <div className="filter flex ">
                <div className="search m-4 p-4" >
                    <input 
                    type="text" 
                    className="border border-solid border-black" 
                    value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                    />
                    <button 
                    className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                     onClick={()=>{
                        //filter the restaurant cards and update the UI
                        //search text
                         const filteredRestaurant=listOfRestaurants.filter((res)=> 
                          res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                         setfilteredRestaurant(filteredRestaurant);
                    }}>
                        Search
                        </button>
                </div>
               <div classname="search m-4 p-4 flex items-center ">
                    <button 
                    className="px-4 py-2 bg-gray-100 rounded-lg"
                  onClick={()=>{
                    const FilteredList = listOfRestaurants.filter(
                        (res) =>  res.info.avgRating > 4
                    );
                setfilteredRestaurant(FilteredList);
                }}
            >
                Top Rated Restaurant</button>
               </div>
                
            

               <div classname="search m-4 p-4 flex items-center ">
                  <label>UserName : </label>
                  <input
                      className="border border-black p-2" 
                      value ={loggedInUser}
                      onChange={(e)=> setUserName(e.target.value)}
                  />
               </div>
            </div>

            <div className="flex flex-wrap">
            {
              filteredRestaurant.map((restaurant) =>(
               <Link
                key={restaurant?.info.id }
               to={"/restaurants/"+restaurant?.info.id }
               >
                 {restaurant?.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant?.info} 
              />
            ) : (
                <RestaurantCard resData={restaurant?.info} />   )}
                </Link>
              ))}
            </div>
        </div>
    );
}
export  default Body;