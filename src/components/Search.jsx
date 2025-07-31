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
        className="search"
        type="text"
        placeholder="Search Restaurants"
        value={searchText}
        onChange={onChangeHandler}
      />
      <button className="button" onClick={searchButtonHandler}>
        Search
      </button>
    </div>
  );
};

export default Search;
