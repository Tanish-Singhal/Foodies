import React from "react";
import { useState } from "react";

const Search = ({ resData, setResData }) => {
  const [searchedValue, setSearchedValue] = useState("");

  const handleSearch = () => {
    const filteredRestaurants = resData.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchedValue.toLowerCase())
    );
    setResData(filteredRestaurants);
  };

  return (
    <div className="pt-5">
      <div className="flex mx-auto max-w-[560px] gap-3 w-full px-3 mb-6">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search for Domino's Pizza"
          className="p-2 px-4 rounded-md border outline-none focus-within:border-orange-400 border-gray-200 grow transition duration-300 ease-in-out"
          onChange={(e) => {
            setSearchedValue(e.target.value);
          }}
        />

        <button
          className="bg-orange-400 hover:bg-orange-500 text-white p-2 px-6 rounded-md transition duration-300 ease-in-out"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
