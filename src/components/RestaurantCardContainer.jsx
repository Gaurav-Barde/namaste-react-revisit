import { useEffect, useState } from "react";
import { ResCard } from "./ResCard";
import { RES_LIST_API_URL } from "../utils/constants";

const RestaurantCardContainer = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const filterButtonHandler = () => {
    const filteredData = resData.filter((res) => res.info.avgRating > 4);
    setResList(filteredData);
  };

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API_URL);
    const json = await data.json();
    setResList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
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
