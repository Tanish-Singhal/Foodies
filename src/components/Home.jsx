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

  const shimmerTopResCount = 5;
  const shimmerAllResCount = 20;

  const topRatedRestaurants = originalData.filter(
    (restaurant) => restaurant.info.avgRating >= 4.5
  );

  return (
    <div className="bg-[#fcfcfc] pt-4">
      {isLoading ? (
        <div className="p-4 px-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Top Rated Restaurants</h2>

            <div className="flex justify-center items-center flex-wrap gap-6 p-4 sm:px-6 lg:px-20">
              {[...Array(shimmerTopResCount)].map((_, index) => (
                <ShimmerCard key={index} />
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">
              Restaurants with online food delivery
            </h2>

            <div className="flex justify-center items-center flex-wrap gap-6 p-4 sm:px-6 lg:px-20">
              {[...Array(shimmerAllResCount)].map((_, index) => (
                <ShimmerCard key={index} />
              ))}
            </div>
          </div>
        </div>

      ) : (
        <div className="p-4 px-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">Top Rated Restaurants</h2>

            <div className="flex justify-center items-center flex-wrap gap-6 p-4 sm:px-6 lg:px-20">
              {topRatedRestaurants.length > 0 ? (
                topRatedRestaurants.map((restaurant) => (
                  <RestaurantCard
                    resData={restaurant}
                    key={restaurant.info.id}
                  />
                ))
              ) : (
                <p className="text-gray-600 font-semibold text-xl">
                  No top-rated restaurants available.
                </p>
              )}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-2">
              Restaurants with online food delivery
            </h2>

            <div className="flex justify-center items-center flex-wrap gap-6 p-4 sm:px-6 lg:px-20">
              {originalData.map((restaurant) => (
                <RestaurantCard resData={restaurant} key={restaurant.info.id} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
