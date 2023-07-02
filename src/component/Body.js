import RestaurantCard from "./RestaurantCard";
import useOnlineStatus from "../utiles/useOnlineStatus";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText ,setsearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
           );

        const json = await data.json();

         
         // Optional channing
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };

    //Online status
    const onlineStatus=useOnlineStatus();
      if(onlineStatus===false)
        return(
            <h1>
                you're offline
            </h1>
        );

    if(listOfRestaurants.length === 0){
        return <Shimmer />;
    }
    

    return(
        <div className="body">
            <div className="filter flex items-center">
                <div className="search m-4 p-4" >
                    <input type="text" className="border border-solid border-black" value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"
                     onClick={()=>{
                         const filteredRestaurant=listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                         setfilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
               <div classname=" m-4 p-4 flex items-center ">
                    <button className="px-4 py-2 bg-gray-100 rounded-lg"
                onClick={()=>{
                    const FilteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating >4
                    );
                setListOfRestaurants(FilteredList);
                }}
            >
                Top Rated Restaurant</button>
               </div>
                
            </div>
            <div className="flex flex-wrap">
            {
              filteredRestaurant.map((restaurant) =>(
               <Link key={restaurant.data.id }
               to={"/restaurants/"+restaurant.data.id }><RestaurantCard resData={restaurant } /></Link>
              )) }
            </div>
        </div>
    );
}
export  default Body;