import { useEffect, useState } from "react";
import { ResCard } from "./ResCard";
import Search from "./Search";
import { RES_LIST_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantCardContainer = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API_URL);
    const json = await data.json();
    setResList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const filterButtonHandler = () => {
    const filteredData = resList.filter((res) => res.info.avgRating > 4.5);
    setResList(filteredData);
  };

  const searchFilteredResList = (searchText) => {
    const filteredResList = resList.filter((res) => {
      return res.info.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredResList(filteredResList);
  };

  if (resList.length === 0) {
    return <Shimmer />;
  }

  return (
    <div>
      <div className="res-container-header">
        <Search searchFilteredResList={searchFilteredResList} />
        <button className="button" onClick={filterButtonHandler}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResList.map((restaurant) => (
          <ResCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCardContainer;
