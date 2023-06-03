import RestaurantCard from "./RestaurantCard";
import resList from "../utiles/mockData";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () =>{
    const [listOfRestaurants,setListOfRestaurants]=useState([]);
    const [filteredRestaurant,setfilteredRestaurant]=useState([]);
    const [searchText ,setsearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(
           "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);
         // Optional channing
        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    };
    if(listOfRestaurants.length === 0){
        return <Shimmer />;
    }
    

    return(
        <div className="body">
            <div className="filter">
                <div className="search" >
                    <input type="text" className="search-box" value={searchText}
                    onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}
                    />
                    <button
                     onClick={()=>{
                         const filteredRestaurant=listOfRestaurants.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()));
                         setfilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=>{
                    const FilteredList = listOfRestaurants.filter(
                        (res) => res.data.avgRating >4
                    );
                setListOfRestaurants(FilteredList);
                }}
            >
                Top Rated Restaurant</button>
            </div>
            <div className="res-container">
            {
              filteredRestaurant.map((restaurant) =>(
                <RestaurantCard  key={restaurant.data.id}resData={restaurant } />
              )) }
            </div>
        </div>
    );
}
export  default Body;