import restaurantsList from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
const Body = () => {


    const [newresList, setNewresList] = useState(restaurantsList);

    return (
        <div id="body-container">
            <button id="filter" onClick ={()=>{
                console.log("newresList:", newresList);
                const filteredResList = newresList.filter((res) => res.info.avgRating > 4.5);
                console.log("filteredResList:", filteredResList);
                setNewresList(filteredResList);
            }}>
                Filter restaurants</button>
                
            <div id="res-container">
            {
                newresList.map((restaurant) => <RestaurantCard key={restaurant.info.id}resData={restaurant}/>)
            }
            </div>
        </div>
    );
}

export default Body;