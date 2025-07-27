import {ResCard} from "./ResCard";
import { resData } from "../utils/mockData";

const RestaurantCardContainer = () => {
  return (
    <div className="res-container">
      {resData.map((restaurant) => (
        <ResCard key={restaurant.info.id} resData={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantCardContainer;