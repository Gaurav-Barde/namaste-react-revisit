import { useState } from "react";

const Search = ({ searchFilteredResList }) => {
  const [searchText, setSearchText] = useState("");

  const onChangeHandler = (e) => {
    setSearchText(e.target.value);
  };

  const searchButtonHandler = () => {
    searchFilteredResList?.(searchText);
  };

  return (
    <div className="search-container">
      <input
        className="border-2 border-blue-800 px-2 py-1 rounded-md"
        type="text"
        placeholder="Search Restaurants"
        value={searchText}
        onChange={onChangeHandler}
      />
      <button
        className="ml-3 mr-4 bg-green-300 px-4 py-2 rounded-lg text-sm font-semibold text-slate-900 cursor-pointer"
        onClick={searchButtonHandler}
      >
        Search
      </button>
    </div>
  );
};

export default Search;
