import { useDispatch, useSelector } from "react-redux";
import { IMAGE_CDN_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/redux/slices/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const removeItemHandler = (index) => {
    dispatch(removeItem(index));
  };

  const clearCartHandler = () => {
    dispatch(clearCart());
  };

  return items?.length === 0 ? (
    <h1 className="text-xl font-bold text-gray-900 text-center mt-8">
      Please Add Items in the Cart!
    </h1>
  ) : (
    <div className="w-3/10 mx-auto pt-10 text-center">
      {items?.map((item, index) => (
        <div
          data-id={index}
          key={item.payload.card.info.id + index}
          className="flex items-center justify-between mb-5 gap-3 bg-gray-100 py-6 text-left"
        >
          <div className="flex items-center gap-4">
            <img
              src={IMAGE_CDN_URL + item.payload.card.info.imageId}
              className="w-16"
            />
            <h3 className="font-semibold text-md">
              {item.payload.card.info.name}
            </h3>
          </div>
          <button
            onClick={() => removeItemHandler(index)}
            className="font-bold text-sm bg-orange-400 text-slate-800 px-2 py-1 rounded-lg mx-4 cursor-pointer"
          >
            Remove Item
          </button>
        </div>
      ))}
      <button
        onClick={clearCartHandler}
        className="bg-red-400 px-4 py-2 rounded-lg font-bold text-gray-900 cursor-pointer"
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
