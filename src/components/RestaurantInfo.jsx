import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { RES_INFO_API_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import StarRatingIcon from "../assets/StarRatingIcon";

const RestaurantInfo = () => {
  const [resInfo, setResInfo] = useState([]);

  const { resId } = useParams();

  useEffect(() => {
    fetchResInfo();
  }, []);

  const fetchResInfo = async () => {
    try {
      const data = await fetch(RES_INFO_API_URL(resId));
      const json = await data.json();

      setResInfo(json?.data?.cards);
    } catch (e) {
      alert(e.message);
    }
  };

  if (resInfo?.length === 0) {
    return <Shimmer />;
  }

  const { name, avgRating, totalRatingsString, costForTwoMessage } =
    resInfo?.[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[10]?.card?.card;

  // console.log(
  //   "cards: ",
  //   resInfo?.[4].groupedCard?.cardGroupMap.REGULAR?.cards[10].card.card
  //     .itemCards
  // );

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
        {itemCards.map((item) => (
          <li key={item?.card?.info?.name} className="menu-item">
            {item?.card?.info?.name} - Rs. {item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantInfo;
