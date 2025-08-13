import { useState } from "react";
import Shimmer from "./Shimmer";
import StarRatingIcon from "../assets/StarRatingIcon";
import useRestaurantInfo from "../utils/custom-hooks/useRestaurantInfo";
import MenuCategory from "./MenuCategory";

const RestaurantInfo = () => {
  const [showMenuItemListIndex, setShowMenuItemListIndex] = useState(null);

  const resInfo = useRestaurantInfo();

  if (resInfo?.length === 0) {
    return <Shimmer />;
  }

  const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines } =
    resInfo?.[2]?.card?.card?.info || {};

  const filteredCategoriesData =
    resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (category) =>
        category.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const setShowHandler = (index) => {
    setShowMenuItemListIndex(null);
    if (showMenuItemListIndex !== index) {
      setShowMenuItemListIndex(index);
    }
  };

  return (
    <div className="py-20 w-5/12 mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>
      <div className="border border-gray-300 rounded-xl p-4 shadow-lg mb-8">
        <div className="mb-2 flex items-center">
          <StarRatingIcon />
          <h3 className="ml-2 font-semibold">
            {avgRating} ({totalRatingsString}) • {costForTwoMessage}
          </h3>
        </div>
        <h3 className="text-sm font-bold text-orange-500 underline mb-4">
          {cuisines.join(", ")}
        </h3>
        <h3 className="text-sm font-bold text-gray-700 mb-4">30-35 mins</h3>
      </div>
      {filteredCategoriesData?.map((category, index) => (
        <MenuCategory
          key={category.card.card.categoryId}
          data={category}
          show={showMenuItemListIndex === index}
          setShow={() => setShowHandler(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantInfo;
