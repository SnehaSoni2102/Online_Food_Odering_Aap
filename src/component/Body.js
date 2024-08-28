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
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.45970&lng=77.02820&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
           );

        const json = await data.json();

        console.log("json",json)

        
         // Optional channing
        setListOfRestaurants( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    console.log("listof r ",listOfRestaurants);
    

    //Online status
    const onlineStatus=useOnlineStatus();
      if(onlineStatus===false)
        return(
            <h1>
                you're offline
            </h1>
        );

       const {loggedInUser,setUserName} = useContext(UserContext);

    if(listOfRestaurants.length === 0){
         return  <Shimmer />;
    }

    return(
        <div className="flex flex-wrap justify-center">
            
            
            <div className="flex md:flex-row flex-wrap justify-center items-center gap-4">
            <div className="md:text-[16px] text-[12px]">
                <label>UserName: </label>
                  <input
                      className="border border-black rounded-md p-1 md:h-[40px] h-[20px] md:w-[200px] w-[100px]" 
                      value ={loggedInUser}
                      onChange={(e)=> setUserName(e.target.value)}
                  />
                </div>
                <div>
                <input 
                    type="text" 
                    className="border border-solid border-black rounded-md p-1 md:h-[40px] h-[20px] md:w-[200px] w-[100px] " 
                    value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                    />
                    <button 
                    className="md:px-4 px-2 md:py-2 bg-green-100 md:m-4 m-2 rounded-lg md:h-[40px] h-[20px] md:w-[100px] w-[60px] md:text-[16px] text-[12px]"
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
                
                <button 
                    className="md:px-4 px-2 md:py-2  bg-gray-100 rounded-lg md:h-[40px] h-[20px] md:w-[200px] w-[150px] md:text-[16px] text-[10px] "
                  onClick={()=>{
                    const FilteredList = listOfRestaurant.filter(
                        (res) =>  res.info.avgRating > 4
                    );
                setfilteredRestaurant(FilteredList);
                }}
            >
                Top Rated Restaurants</button>
            </div>
            
                
               {/* <div classname="">

               <input 
                    type="text" 
                    className="border border-solid border-black rounded-md p-1 " 
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

                    <button 
                    className="px-4 py-2 mt-12 bg-gray-100 rounded-lg mr-8"
                  onClick={()=>{
                    const FilteredList = listOfRestaurant.filter(
                        (res) =>  res.info.avgRating > 4
                    );
                setfilteredRestaurant(FilteredList);
                }}
            >
                Top Rated Restaurants</button>
                
                <label>UserName : </label>
                  <input
                      className="border border-black rounded-md p-1" 
                      value ={loggedInUser}
                      onChange={(e)=> setUserName(e.target.value)}
                  />
                
               </div> */}

              
            

            <div className="flex flex-wrap justify-center">
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