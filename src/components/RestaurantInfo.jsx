import Shimmer from "./Shimmer";
import StarRatingIcon from "../assets/StarRatingIcon";
import useRestaurantInfo from "../utils/custom-hooks/useRestaurantInfo";

const RestaurantInfo = () => {
  const resInfo = useRestaurantInfo();

  if (resInfo?.length === 0) {
    return <Shimmer />;
  }

  const { name, avgRating, totalRatingsString, costForTwoMessage } =
    resInfo?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[10]?.card?.card;

  return (
    <div className="res-info-container">
      <h1>{name}</h1>
      <div className="rating-container">
        <StarRatingIcon />
        <h3>
          {avgRating} ({totalRatingsString}) • {costForTwoMessage}
        </h3>
      </div>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.name} className="menu-item">
            {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
