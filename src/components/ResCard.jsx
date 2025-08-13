import { IMAGE_CDN_URL } from "../utils/constants";

export const ResCard = (props) => {
  const { resData } = props ?? {};
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="w-60 bg-gray-100 rounded-lg hover:bg-gray-400">
      <img
        alt="res logo"
        className="rounded-md h-60 w-60"
        src={IMAGE_CDN_URL + cloudinaryImageId}
      />
      <div className="p-2">
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{`❇️ ${avgRating} stars`}</h4>
        <h4>{`${sla?.deliveryTime} minutes`}</h4>
      </div>
    </div>
  );
};

export default ResCard;
