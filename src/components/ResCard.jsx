import { RES_LOGO_CDN_URL } from "../utils/constants";

export const ResCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;

  return (
    <div className="res-card">
      <img
        alt="res logo"
        className="res-logo"
        src={
          RES_LOGO_CDN_URL +
          cloudinaryImageId
        }
      />
      <div className="res-content">
        <h3>{name}</h3>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{`❇️ ${avgRating} stars`}</h4>
        <h4>{`${sla?.deliveryTime} minutes`}</h4>
      </div>
    </div>
  );
};

export default ResCard;