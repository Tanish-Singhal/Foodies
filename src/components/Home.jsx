import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";

const Home = () => {
  const [originalData, setOriginalData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    } catch (error) {
      console.error("Error while fetching data: ", error);
    } finally {
      setIsLoading(false);
    }
  };

  const shimmerCount = 20;

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center flex-wrap gap-5 p-4 sm:px-6 lg:px-20">
          {[...Array(shimmerCount)].map((_, index) => (
            <ShimmerCard key={index} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center flex-wrap gap-5 p-4 sm:px-6 lg:px-20">
          {originalData.map((restaurant) => (
            <RestaurantCard resData={restaurant} key={restaurant.info.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
