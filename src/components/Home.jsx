import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Home = () => {
  const [originalData, setOriginalData] = useState([]);

  useEffect(() => {
    fetchRestaurants();
  }, []);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_SWIGGY_MAIN_API);
      const json = await response.json();

      const restaurants =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setOriginalData(restaurants);
      console.log(restaurants);
    } catch (error) {
      console.error("Error while fetching data: ", error);
    }
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-wrap gap-5 p-4 sm:px-6 lg:px-20">
        {originalData.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
