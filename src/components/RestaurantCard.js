import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const {resData} = props;
  const {cloudinaryImageId, name, cuisines, avgRating, sla, id} = resData.info;
    console.log("resData:", resData);
    return (
        <div id="res-card" style={{backgroundColor: '#f0f0f0'}}>
            <img id="restaurant-img" src={CDN_URL + cloudinaryImageId} alt="restaurant"/>   
            <h3>{name}</h3>
            <h3>{cuisines?.join(",")}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{sla?.deliveryTime} minutes</h3>
        </div>
    );
};

export default RestaurantCard;