import StarRatingIcon from "../assets/StarRatingIcon";
import { IMAGE_CDN_URL } from "../utils/constants";

const MenuItemList = ({ menuItemCards }) => {
  return menuItemCards.map((menuItemCard) => {
    const {
      name,
      price,
      finalPrice,
      defaultPrice,
      ratings,
      id,
      description,
      imageId,
    } = menuItemCard?.card?.info;
    return (
      <div key={id} className="border-b border-gray-200 mt-4 py-8">
        <div className="flex justify-between items-start">
          <div className="w-10/12">
            <h2 className="text-gray-700 text-lg font-bold">{name}</h2>
            <p className="text-md text-gray-500 w-9/10">{description}</p>
            <h3 className="text-gray-600 text-md font-semibold">
              ₹{(price ? price : finalPrice ? finalPrice : defaultPrice) / 100}
            </h3>
            <div className="flex items-center gap-1">
              <StarRatingIcon />
              <h3 className="text-gray-600 text-md font-bold">
                {ratings?.aggregatedRating?.rating ?? "3.9"}(
                {ratings?.aggregatedRating?.ratingCountV2 ?? "40"})
              </h3>
            </div>
          </div>
          <div className="w-2/12 relative">
            <img src={IMAGE_CDN_URL + imageId} className="rounded-xl" />
            <button className="bg-white text-green-600 font-bold text-lg text-center absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-6 shadow-lg rounded-lg cursor-pointer">
              ADD
            </button>
          </div>
        </div>
      </div>
    );
  });
};

export default MenuItemList;
