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
    <div className="flex flex-col items-center py-20">
      <h1 className="text-2xl bg-orange-300 inline-block px-4 py-2 mb-2 rounded-md">
        {name}
      </h1>
      <div className="flex justify-center mb-2">
        <StarRatingIcon />
        <h3>
          {avgRating} ({totalRatingsString}) • {costForTwoMessage}
        </h3>
      </div>
      <ul>
        {itemCards?.map((item) => (
          <li
            key={item?.card?.info?.name}
            className="mb-3 border border-dotted border-orange-400 p-2 font-semibold text-gray-900"
          >
            {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
