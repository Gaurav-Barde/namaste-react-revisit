import { useState } from "react";
import { ResCard } from "./ResCard";
import { resData } from "../utils/mockData";

const RestaurantCardContainer = () => {
  const [resList, setResList] = useState(resData);

  const filterButtonHandler = () => {
    const filteredData = resData.filter((res) => res.info.avgRating > 4);
    setResList(filteredData);
  };

  return (
    <div>
      <button className="filter-button" onClick={filterButtonHandler}>
        Top Rated Restaurants
      </button>
      <div className="res-container">
        {resList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCardContainer;
