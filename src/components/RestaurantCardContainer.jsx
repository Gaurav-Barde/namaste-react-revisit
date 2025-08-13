import { useEffect, useState, useContext } from "react";
import { ResCard } from "./ResCard";
import Search from "./Search";
import { RES_LIST_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import UserContext from "../utils/contexts/UserContext";

const RestaurantCardContainer = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const { userName, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
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
    } catch (e) {
      alert(e.message);
    }
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
    <div className="">
      <div className="flex mb-8">
        <Search searchFilteredResList={searchFilteredResList} />
        <button
          className="mx-4 bg-orange-300 px-4 py-2 rounded-lg text-sm font-semibold text-slate-900 cursor-pointer"
          onClick={filterButtonHandler}
        >
          Top Rated Restaurants
        </button>
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border p-2 rounded-lg"
        />
      </div>
      <div className="flex flex-wrap gap-5">
        {filteredResList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            <ResCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RestaurantCardContainer;
