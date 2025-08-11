import MenuItemList from "./MenuItemList";

const MenuCategory = ({ data, show, setShow }) => {
  const { title, itemCards, categoryId } = data?.card?.card || {};

  return (
    <div className="border-t-10 border-gray-300  mb-4 px-2 py-4">
      <div
        onClick={() => setShow()}
        className="flex justify-between items-center cursor-pointer"
      >
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
        <h2>🔽</h2>
      </div>
      {show && <MenuItemList menuItemCards={itemCards} />}
    </div>
  );
};

export default MenuCategory;
